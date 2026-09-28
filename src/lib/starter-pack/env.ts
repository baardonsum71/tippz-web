function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function getStarterPackEnv() {
  return {
    r2AccountId: required("R2_ACCOUNT_ID"),
    r2AccessKeyId: required("R2_ACCESS_KEY_ID"),
    r2SecretAccessKey: required("R2_SECRET_ACCESS_KEY"),
    r2Bucket: required("R2_BUCKET_NAME"),
    r2PublicBaseUrl: required("R2_PUBLIC_BASE_URL").replace(/\/$/, ""),
    gelatoApiKey: required("GELATO_API_KEY"),
    revenueCatSecretKey: required("REVENUECAT_SECRET_API_KEY"),
    revenueCatEntitlementId:
      process.env.REVENUECAT_ENTITLEMENT_ID?.trim() || "Tippz Pro",
    stickerProductUid:
      process.env.GELATO_STICKER_PRODUCT_UID?.trim() ||
      "stickers_square_contour-cut_polypropylene_3x3_inch",
    cardProductUid:
      process.env.GELATO_CARD_PRODUCT_UID?.trim() ||
      "cards_pf_bb_pt_350-gsm-coated-silk_cl_4-0_ct_matt-protection_prt_1-1_hor",
    stickerQuantity: Number(process.env.GELATO_STICKER_QUANTITY || "5"),
    cardQuantity: Number(process.env.GELATO_CARD_QUANTITY || "20"),
    tipBaseUrl: (
      process.env.TIPPZ_TIP_BASE_URL?.trim() || "https://tippz.app/tip"
    ).replace(/\/$/, ""),
    apiSecret: process.env.STARTER_PACK_API_SECRET?.trim() || "",
  };
}
