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

## Viktig

Ikke slett Hercules før alle fire URL-ene over fungerer på Vercel.
iOS-appen trenger ikke ny build så lenge URL-ene er de samme.
