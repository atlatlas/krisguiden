# krisguiden

KRISGUIDEN är en statisk webbplats (svenska) med guider, artiklar och produktrekommendationer för beredskap och prepping i Sverige.

## Vad finns på webbplatsen
- **Hem** (`index.html`): introduktion, rekommendationer och länkar till guider.
- **Guider** (`guider.html`): hembedskap, överlevnad i naturen, rent vatten med praktiska steg och checklistor.
- **Artiklar** (`artiklar.html`): längre artiklar om psykologi i kris, att prata med barn, mm.
- **Produkter** (`produkter.html`): rekommenderade produkter och recensioner.
- **Nyheter** (`nyheter.html`): relevanta nyheter och rapporter om matförsörjning och beredskap.
- **Om oss** (`om.html`) samt juridiska sidor: `integritetspolicy.html`, `användarvillkor.html`.
- **Verktyg & info**: `info/matgenerator.html` för matbehovskalkyler.

## Teknik och tillgångar 🔧
- Frontend: HTML + TailwindCSS (via CDN)
- UI/effekter: AOS, Vanta.js (globe), Feather icons
- Små skript: `nav.js` (navbar), `cookie-consent.js`, `dashboard/track.js` (analytics/track)
- Bilder och banners: `img/`, `banners/`
- Ingen server-side kod — sidan är helt statisk.

## Kör lokalt
1. Klona och gå till projektroten
```bash
git clone https://github.com/atlatlas/krisguiden.git
cd krisguiden
```
2. Starta en enkel lokal server
```bash
python3 -m http.server 8000
# eller
npx http-server -p 8000
```
3. Öppna: http://localhost:8000

## Dela temporärt (demolänk)
- Använd ngrok eller localtunnel för att exponera lokalt:
  - `ngrok http 8000`
  - `npx localtunnel --port 8000`

> Obs: kontrollera att du inte exponerar några känsliga lokala filer.

## Publicera (GitHub Pages) ✅
- Det finns en Actions-workflow i `.github/workflows/deploy-pages.yml` som publicerar hela repo-roten till en `gh-pages`-branch.
- För att aktivera publicering lokalt:
```bash
git add .github/workflows/deploy-pages.yml .nojekyll README.md
git commit -m "chore: add GitHub Pages deploy workflow and docs"
git push origin main
```
- Kontrollera Actions → "Deploy to GitHub Pages" för körningsloggar.
- Om Pages inte pekar rätt, välj `gh-pages` som källa under Settings → Pages eller kör:
```bash
gh api --method PUT /repos/atlatlas/krisguiden/pages -f 'source.branch=gh-pages' -f 'source.path=/'
gh api /repos/atlatlas/krisguiden/pages
```
- Site-url: `https://atlatlas.github.io/krisguiden` (kan ta någon minut efter publicering).

## Felsökning
- 404 / tom sida: kontrollera att `gh-pages`-branchen innehåller `index.html` och att Actions-jobbet lyckades.
- Workflow-fel: kolla detaljerade loggar i Actions och posta feltext här om du vill att jag hjälper till.

## Kontakt
- E-post: `info@krisguiden.nu` (hämtat från footer)

## Bidra
Pull requests och issues är välkomna. Följ samma kodstil och testa lokalt innan PR.

---

*Skapad för att ge en snabb överblick över innehåll, teknisk stack och hur man publicerar webbplatsen.*
