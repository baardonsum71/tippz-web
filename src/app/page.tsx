import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tippz — Tips med QR-kode",
};

const APP_STORE_URL =
  "https://apps.apple.com/app/tippz";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="hero-brand">Tippz</p>
        <h1>Tips med QR-kode</h1>
        <p>
          For frisører, baristas og andre som fortjener mer. Del koden din —
          kunder tipser på sekunder.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href={APP_STORE_URL}>
            Last ned i App Store
          </a>
          <a className="btn btn-ghost" href="/vilkar">
            Vilkår for bruk
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Slik fungerer det</h2>
        <p>
          Opprett profil med Sign in with Apple, få din unike QR-kode, og del
          den med kunder. Tips går via Apple In-App Purchase. Abonnement
          (Tippz Pro) er valgfritt.
        </p>
      </section>

      <section className="section">
        <h2>Tips og skatt</h2>
        <p>
          Mottaker er selv ansvarlig for å rapportere tips som skattepliktig
          inntekt. Tippz rapporterer ikke til Skatteetaten. Les mer under{" "}
          <a href="/vilkar">vilkår</a> (punkt 11).
        </p>
      </section>
    </>
  );
}
