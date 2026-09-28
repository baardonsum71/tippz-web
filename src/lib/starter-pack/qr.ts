import QRCode from "qrcode";
import { getStarterPackEnv } from "./env";
import { uploadPublicPng } from "./r2";

export async function generateAndUploadPrintQr(
  userId: string,
  qrCodeID: string
): Promise<string> {
  const env = getStarterPackEnv();
  const tipUrl = `${env.tipBaseUrl}/${encodeURIComponent(qrCodeID)}`;

  const qrBuffer = await QRCode.toBuffer(tipUrl, {
    type: "png",
    errorCorrectionLevel: "H",
    width: 1200,
    margin: 4,
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
  });

  const key = `qrcodes/${sanitize(userId)}_print.png`;
  return uploadPublicPng(key, qrBuffer);
}

function sanitize(value: string): string {
  return value.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 120);
}
