# Tippz Web (Vercel)

Nettsted for **tippz.app** — erstatter Hercules.

## Sider

| URL | Innhold |
|-----|---------|
| `/` | Landing |
| `/vilkar` | Vilkår (inkl. skatt / EULA) |
| `/personvern` | Personvern |
| `/tip/[id]` | QR tip-landing (App Store + deep link) |

## Lokal utvikling

```bash
cd web
npm install
npm run dev
```

Åpne http://localhost:3000

## Deploy til Vercel

1. Push `web/` til GitHub (eller hele Tippz-repoet)
2. [vercel.com](https://vercel.com) → **Add New Project** → velg repo
3. **Root Directory:** `web`
4. Framework: Next.js (auto)
5. **Deploy**

### Koble tippz.app

1. Vercel → Project → **Settings → Domains** → legg til `tippz.app` og `www.tippz.app`
2. Oppdater DNS hos domeneregistrator til det Vercel viser (A/CNAME)
3. Vent til SSL er aktivt
4. Test:
   - https://tippz.app
   - https://tippz.app/vilkar
   - https://tippz.app/personvern
   - https://tippz.app/tip/TEST123
5. **Deretter** kan du slette Tippz fra Hercules

## Startpakke-API (Gelato + Cloudflare R2)

`POST /api/order-starter-pack` bestiller den fysiske startpakken etter årsabonnement.

### Flyt

1. Bruker kjøper Tippz Pro (årlig) i appen
2. Appen ber om leveringsadresse
3. Appen kaller `https://tippz.app/api/order-starter-pack`
4. API-et sjekker Pro via RevenueCat, lager trykklar QR i R2, bestiller hos Gelato
5. Samme bruker får ikke to pakker (lagres som `starter-packs/{userId}.json` i R2)

### Vercel miljøvariabler

Kopier verdiene fra `.env.example` inn i Vercel → Project → Settings → Environment Variables.

### Cloudflare R2

1. Opprett bucket (f.eks. `tippz-print`)
2. Lag R2 API-token med Object Read & Write
3. Aktiver offentlig tilgang (r2.dev-subdomene eller custom domain)
4. Sett `R2_PUBLIC_BASE_URL` til den offentlige basen uten trailing slash

### Gelato

1. Opprett API-nøkkel i Gelato-dashboardet
2. Verifiser `productUid` i Product Catalog før produksjon
3. Test gjerne med Gelato sandbox-nøkkel først

### Request-body

```json
{
  "appUserId": "apple_or_google_user_id",
  "qrCodeID": "SARA2024",
  "shippingAddress": {
    "fullName": "Ola Nordmann",
    "addressLine1": "Storgata 1",
    "zipCode": "0123",
    "city": "Oslo",
    "country": "NO"
  }
}
```

## Viktig

Ikke slett Hercules før alle fire URL-ene over fungerer på Vercel.
iOS-appen trenger ikke ny build så lenge URL-ene er de samme.
