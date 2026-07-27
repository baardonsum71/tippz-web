import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Tips · ${id}`,
    description: `Scan for å tipse via Tippz (${id})`,
  };
}

const APP_STORE_URL = "https://apps.apple.com/app/tippz";

export default async function TipPage({ params }: Props) {
  const { id } = await params;
  const code = id.toUpperCase();
  const deepLink = `tippz://tip/${encodeURIComponent(id)}`;

  return (
    <div className="tip-card">
      <p className="hero-brand" style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
        Tippz
      </p>
      <h1>Scan for å tipse</h1>
      <p className="tip-code">{code}</p>
      <p>
        Åpne Tippz-appen for å sende tips. Har du ikke appen ennå? Last den
        ned i App Store.
      </p>
      <div className="cta-row">
        <a className="btn btn-primary" href={deepLink}>
          Åpne i Tippz
        </a>
        <a className="btn btn-ghost" href={APP_STORE_URL}>
          Last ned appen
        </a>
      </div>
    </div>
  );
}
