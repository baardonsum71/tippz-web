import { NextRequest, NextResponse } from "next/server";
import { getStarterPackEnv } from "@/lib/starter-pack/env";
import {
  createStarterPackOrder,
  type ShippingAddressInput,
} from "@/lib/starter-pack/gelato";
import {
  getStarterPackRecord,
  saveStarterPackRecord,
} from "@/lib/starter-pack/orders";
import { generateAndUploadPrintQr } from "@/lib/starter-pack/qr";
import { hasActiveProEntitlement } from "@/lib/starter-pack/revenuecat";

export const runtime = "nodejs";

type OrderBody = {
  appUserId?: string;
  qrCodeID?: string;
  shippingAddress?: Partial<ShippingAddressInput>;
};

export async function POST(req: NextRequest) {
  try {
    const env = getStarterPackEnv();
    if (env.apiSecret) {
      const auth = req.headers.get("authorization") || "";
      const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
      if (token !== env.apiSecret) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const body = (await req.json()) as OrderBody;
    const appUserId = body.appUserId?.trim();
    const qrCodeID = body.qrCodeID?.trim().toUpperCase();
    const address = normalizeAddress(body.shippingAddress);

    if (!appUserId || !qrCodeID || !address) {
      return NextResponse.json(
        {
          error:
            "Mangler appUserId, qrCodeID eller komplett shippingAddress (fullName, addressLine1, zipCode, city).",
        },
        { status: 400 }
      );
    }

    const isPro = await hasActiveProEntitlement(appUserId);
    if (!isPro) {
      return NextResponse.json(
        { error: "Aktivt Tippz Pro-abonnement kreves." },
        { status: 403 }
      );
    }

    const existing = await getStarterPackRecord(appUserId);
    if (existing) {
      return NextResponse.json({
        success: true,
        alreadyOrdered: true,
        orderReferenceId: existing.orderReferenceId,
        gelatoOrderId: existing.gelatoOrderId,
        qrCodeUrl: existing.qrCodeUrl,
      });
    }

    const qrCodeUrl = await generateAndUploadPrintQr(appUserId, qrCodeID);
    const gelato = await createStarterPackOrder({
      userId: appUserId,
      qrCodeUrl,
      address,
    });

    await saveStarterPackRecord({
      userId: appUserId,
      qrCodeID,
      qrCodeUrl,
      gelatoOrderId: gelato.id,
      orderReferenceId: gelato.orderReferenceId,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      alreadyOrdered: false,
      orderReferenceId: gelato.orderReferenceId,
      gelatoOrderId: gelato.id,
      qrCodeUrl,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Ukjent feil ved bestilling";
    console.error("order-starter-pack", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function normalizeAddress(
  input?: Partial<ShippingAddressInput>
): ShippingAddressInput | null {
  if (!input) return null;
  const fullName = input.fullName?.trim() || "";
  const addressLine1 = input.addressLine1?.trim() || "";
  const zipCode = input.zipCode?.trim() || "";
  const city = input.city?.trim() || "";
  if (!fullName || !addressLine1 || !zipCode || !city) return null;

  return {
    fullName,
    addressLine1,
    zipCode,
    city,
    country: (input.country?.trim() || "NO").toUpperCase(),
    email: input.email?.trim(),
    phone: input.phone?.trim(),
  };
}
