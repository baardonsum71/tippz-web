import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getStarterPackEnv } from "./env";

function client() {
  const env = getStarterPackEnv();
  return new S3Client({
    region: "auto",
    endpoint: `https://${env.r2AccountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: env.r2AccessKeyId,
      secretAccessKey: env.r2SecretAccessKey,
    },
  });
}

export async function uploadPublicPng(
  key: string,
  body: Buffer
): Promise<string> {
  const env = getStarterPackEnv();
  await client().send(
    new PutObjectCommand({
      Bucket: env.r2Bucket,
      Key: key,
      Body: body,
      ContentType: "image/png",
      CacheControl: "public, max-age=31536000, immutable",
    })
  );
  return `${env.r2PublicBaseUrl}/${key}`;
}

export async function putJson(key: string, value: unknown): Promise<void> {
  const env = getStarterPackEnv();
  await client().send(
    new PutObjectCommand({
      Bucket: env.r2Bucket,
      Key: key,
      Body: Buffer.from(JSON.stringify(value, null, 2), "utf8"),
      ContentType: "application/json",
    })
  );
}

export async function getJson<T>(key: string): Promise<T | null> {
  const env = getStarterPackEnv();
  try {
    const result = await client().send(
      new GetObjectCommand({
        Bucket: env.r2Bucket,
        Key: key,
      })
    );
    const text = await result.Body?.transformToString("utf8");
    if (!text) return null;
    return JSON.parse(text) as T;
  } catch (error: unknown) {
    if (isMissingObjectError(error)) return null;
    throw error;
  }
}

function isMissingObjectError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  const err = error as {
    name?: string;
    Code?: string;
    $metadata?: { httpStatusCode?: number };
  };
  if (err.name === "NoSuchKey" || err.name === "NotFound") return true;
  if (err.Code === "NoSuchKey" || err.Code === "NotFound") return true;
  return err.$metadata?.httpStatusCode === 404;
}
