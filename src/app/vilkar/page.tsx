import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vilkår for bruk",
  description: "Vilkår for bruk av Tippz-appen og tippz.app",
};

export default function VilkarPage() {
  return (
    <article className="legal-page">
      <h1>Vilkår for bruk – Tippz</h1>
      <p className="updated">Sist oppdatert: juli 2026</p>

      <h2>1. Om tjenesten</h2>
      <p>
        Tippz er en tips-tjeneste for tjenesteytere (f.eks. frisører) og kunder
        som vil gi tips. Tjenesten tilbys via iOS-appen Tippz og nettstedet
        tippz.app av Baard Onsum.
      </p>

      <h2>2. Konto og innlogging</h2>
      <p>
        Brukere logger inn med Sign in with Apple. Du er ansvarlig for aktivitet
        på egen konto. Du kan slette kontoen din i appen under Profil → Delete
        Account.
      </p>

      <h2>3. Abonnement (Tippz Pro)</h2>
      <p>
        Tippz tilbyr auto-fornyende abonnement (Tippz Monthly / Tippz Yearly):
      </p>
      <ul>
        <li>
          Abonnementet fornyes automatisk med mindre det avsluttes minst 24
          timer før perioden utløper.
        </li>
        <li>
          Betaling belastes Apple-ID-kontoen ved bekreftelse av kjøp.
        </li>
        <li>
          Administrer eller avslutt abonnement under Innstillinger → Apple-ID →
          Abonnementer.
        </li>
      </ul>

      <h2>4. Tips og betalinger</h2>
      <p>
        Tips og abonnement håndteres via Apple In-App Purchase. Tippz er ikke
        bank, arbeidsgiver eller lønnsleverandør.
      </p>

      <h2>5. QR-kode og deling</h2>
      <p>
        Hver bruker får en unik QR-kode som kan deles for å motta tips. Du er
        ansvarlig for hvordan du viser og deler koden.
      </p>

      <h2>6. Akseptabel bruk</h2>
      <p>
        Du skal ikke misbruke tjenesten, forsøke uautorisert tilgang, eller
        bruke Tippz til ulovlige formål.
      </p>

      <h2>7. Immaterielle rettigheter</h2>
      <p>
        Tippz-navn, logo og appinnhold tilhører Tippz / Baard Onsum. Du får
        begrenset rett til å bruke tjenesten i henhold til disse vilkårene.
      </p>

      <h2>8. Ansvarsbegrensning</h2>
      <p>
        Tippz leveres «som den er». Vi er ikke ansvarlige for indirekte tap,
        driftsstans, eller tap knyttet til tredjeparter (inkl. Apple).
      </p>

      <h2>9. Personvern</h2>
      <p>
        Behandling av personopplysninger er beskrevet i vår{" "}
        <a href="/personvern">personvernerklæring</a>.
      </p>

      <h2>10. Endringer</h2>
      <p>
        Vi kan oppdatere vilkårene. Fortsatt bruk etter endring betyr at du
        aksepterer de nye vilkårene. Vesentlige endringer forsøkes kommunisert
        via app eller nettsted.
      </p>

      <h2>11. Tips and Tax Reporting</h2>
      <p>
        Tippz facilitates tip payments between customers and service providers.
        Tippz is not an employer, payroll provider, or tax advisor.
      </p>
      <p>
        Recipients are solely responsible for reporting tips as taxable income
        under applicable Norwegian tax laws. If you are employed, your employer
        may have separate reporting obligations depending on how tips are
        handled in your workplace.
      </p>
      <p>
        Tippz does not report tip income to the Norwegian Tax Administration
        (Skatteetaten) or to employers, and does not withhold tax on tip
        payments. For tax or accounting questions, consult a qualified
        professional.
      </p>
      <p>
        (Norsk:) Mottaker er selv ansvarlig for å rapportere tips som
        skattepliktig inntekt etter gjeldende norsk skatterett. Tippz
        rapporterer ikke til Skatteetaten eller arbeidsgivere, og trekker ikke
        skatt.
      </p>

      <h2>12. Kontakt</h2>
      <p>
        Spørsmål:{" "}
        <a href="mailto:support@tippz.app">support@tippz.app</a>
      </p>
    </article>
  );
}
