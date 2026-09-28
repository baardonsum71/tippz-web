import { getStarterPackEnv } from "./env";

export type ShippingAddressInput = {
  fullName: string;
  addressLine1: string;
  zipCode: string;
  city: string;
  country: string;
  email?: string;
  phone?: string;
};

export type GelatoOrderResult = {
  id?: string;
  orderReferenceId: string;
  raw: unknown;
};

export async function createStarterPackOrder(params: {
  userId: string;
  qrCodeUrl: string;
  address: ShippingAddressInput;
}): Promise<GelatoOrderResult> {
  const env = getStarterPackEnv();
  const orderReferenceId = `tippz_${sanitize(params.userId)}_${Date.now()}`;
  const { firstName, lastName } = splitName(params.address.fullName);

  const body = {
    orderType: "order",
    orderReferenceId,
    customerReferenceId: sanitize(params.userId),
    currency: "NOK",
    shipmentMethodUid: "normal",
    shippingAddress: {
      firstName,
      lastName,
      addressLine1: params.address.addressLine1,
      city: params.address.city,
      postCode: params.address.zipCode,
      country: params.address.country || "NO",
      email:
        params.address.email?.trim() ||
        `orders+${sanitize(params.userId)}@tippz.app`,
      phone: params.address.phone?.trim() || undefined,
    },
    items: [
      {
        itemReferenceId: `stickers_${sanitize(params.userId)}`,
        productUid: env.stickerProductUid,
        quantity: env.stickerQuantity,
        files: [{ type: "default", url: params.qrCodeUrl }],
      },
      {
        itemReferenceId: `cards_${sanitize(params.userId)}`,
        productUid: env.cardProductUid,
        quantity: env.cardQuantity,
        files: [{ type: "default", url: params.qrCodeUrl }],
      },
    ],
  };

  const response = await fetch("https://order.gelatoapis.com/v4/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": env.gelatoApiKey,
    },
    body: JSON.stringify(body),
  });

  const raw = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(
      `Gelato order failed (${response.status}): ${JSON.stringify(raw)}`
    );
  }

  const id =
    raw && typeof raw === "object" && "id" in raw
      ? String((raw as { id: string }).id)
      : undefined;

  return { id, orderReferenceId, raw };
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "Tippz", lastName: "Kunde" };
  if (parts.length === 1) return { firstName: parts[0], lastName: "Kunde" };
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

function sanitize(value: string): string {
  return value.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 80);
}
