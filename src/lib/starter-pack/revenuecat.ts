import { getStarterPackEnv } from "./env";

type SubscriberResponse = {
  subscriber?: {
    entitlements?: Record<
      string,
      {
        expires_date?: string | null;
        product_identifier?: string;
      }
    >;
  };
};

export async function hasActiveProEntitlement(
  appUserId: string
): Promise<boolean> {
  const env = getStarterPackEnv();
  const url = `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(
    appUserId
  )}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${env.revenueCatSecretKey}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (response.status === 404) return false;
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`RevenueCat lookup failed (${response.status}): ${body}`);
  }

  const data = (await response.json()) as SubscriberResponse;
  const entitlement =
    data.subscriber?.entitlements?.[env.revenueCatEntitlementId];
  if (!entitlement) return false;

  if (!entitlement.expires_date) return true;
  return new Date(entitlement.expires_date).getTime() > Date.now();
}
