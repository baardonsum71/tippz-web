import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tippz — Tips med QR-kode",
};

const APP_STORE_URL = "https://apps.apple.com/app/tippz";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden />
        <div className="hero-orb" aria-hidden>
          <span>T</span>
        </div>
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
            Vilkår
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Slik fungerer det</h2>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div>
              <strong>Logg inn med Apple</strong>
              <span>Opprett profil på sekunder.</span>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div>
              <strong>Del din QR-kode</strong>
              <span>På bordet, speilet eller i butikken.</span>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div>
              <strong>Motta tips</strong>
              <span>Direkte i appen via Apple Pay / In-App Purchase.</span>
            </div>
          </div>
        </div>
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
