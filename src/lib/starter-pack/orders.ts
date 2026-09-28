import { getJson, putJson } from "./r2";

export type StarterPackRecord = {
  userId: string;
  qrCodeID: string;
  qrCodeUrl: string;
  gelatoOrderId?: string;
  orderReferenceId: string;
  createdAt: string;
};

function keyFor(userId: string): string {
  return `starter-packs/${userId.replace(/[^a-zA-Z0-9_-]/g, "_")}.json`;
}

export async function getStarterPackRecord(
  userId: string
): Promise<StarterPackRecord | null> {
  return getJson<StarterPackRecord>(keyFor(userId));
}

export async function saveStarterPackRecord(
  record: StarterPackRecord
): Promise<void> {
  await putJson(keyFor(record.userId), record);
}
