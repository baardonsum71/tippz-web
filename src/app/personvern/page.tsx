import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvern",
  description: "Personvernerklæring for Tippz",
};

export default function PersonvernPage() {
  return (
    <article className="legal-page">
      <h1>Personvernerklæring – Tippz</h1>
      <p className="updated">Sist oppdatert: september 2026</p>

      <h2>1. Behandlingsansvarlig</h2>
      <p>
        Behandlingsansvarlig for Tippz er Baard Onsum. Kontakt:{" "}
        <a href="mailto:support@tippz.app">support@tippz.app</a>
      </p>

      <h2>2. Hvilke opplysninger vi behandler</h2>
      <ul>
        <li>
          Bruker-ID og eventuelt navn eller e-post fra Sign in with Apple på
          iOS, eller fra Google-innlogging på Android
        </li>
        <li>Profilinformasjon du oppgir (navn, yrke, QR-kode)</li>
        <li>
          Tipshistorikk lagret lokalt på enheten for din egen oversikt
        </li>
        <li>
          Kjøpsdata knyttet til abonnement via Apple In-App Purchase eller Google
          Play
        </li>
      </ul>

      <h2>3. Formål</h2>
      <p>
        Opplysningene brukes for å levere tjenesten: innlogging, profil,
        QR-kode, tips-historikk og abonnement.
      </p>

      <h2>4. Lagring</h2>
      <p>
        Profil- og tipshistorikk kan lagres lokalt på enheten. Vi bruker ikke
        unødvendig innsamling. Du kan slette konto og data i appen under Profil
        → Delete Account på iOS, eller Profil → Slett konto på Android.
      </p>

      <h2>5. Deling med tredjeparter</h2>
      <p>
        Betalinger går via Apple eller Google Play. Vi selger ikke personopplysninger. Vi kan
        dele data når loven krever det.
      </p>

      <h2>6. Tax and financial data</h2>
      <p>
        Tippz records tip transaction history within the app for your
        reference. We do not submit tip data to the Norwegian Tax
        Administration, employers, or payroll systems. You are responsible for
        reporting tip income as required by law.
      </p>
      <p>
        (Norsk:) Tippz lagrer tipshistorikk i appen til din egen referanse. Vi
        sender ikke tipdata til Skatteetaten, arbeidsgivere eller
        lønnssystemer. Du er ansvarlig for å rapportere tippinntekt etter
        loven.
      </p>

      <h2>7. Dine rettigheter</h2>
      <p>
        Du kan be om innsyn, retting eller sletting. Bruk
        kontosletting i appen, eller kontakt{" "}
        <a href="mailto:support@tippz.app">support@tippz.app</a>.
      </p>

      <h2>8. Endringer</h2>
      <p>
        Vi kan oppdatere denne erklæringen. Ny versjon publiseres på denne
        siden.
      </p>
    </article>
  );
}
