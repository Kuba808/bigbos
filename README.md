# Festival Bigboš Křinice - Webové stránky

Oficiální webové stránky hudebního festivalu Bigboš Křinice.

## 🎸 O projektu

Moderní responzivní webová prezentace festivalu s oranžovo-bílým vizuálem využívající fonty Clash Display a Inter.

**Termín festivalu:** 25. července 2026  
**Místo:** Křinice, Broumov

## 🚀 Technologie

- **React 18** - UI framework
- **TypeScript** - typová bezpečnost
- **React Router** - routing mezi stránkami
- **Tailwind CSS v4** - styling
- **Motion** (Framer Motion) - animace
- **Vite** - build tool
- **pnpm** - package manager

## 📁 Struktura projektu

```
/workspaces/default/code/
├── src/
│   ├── app/
│   │   ├── components/          # React komponenty
│   │   │   ├── Navigation.tsx   # Hlavní navigace s kotvami
│   │   │   ├── Hero.tsx         # Úvodní sekce
│   │   │   ├── Lineup.tsx       # Seznam interpretů
│   │   │   ├── Tickets.tsx      # Vstupenky (5 karet)
│   │   │   ├── Info.tsx         # Praktické informace
│   │   │   ├── About.tsx        # Historie festivalu
│   │   │   ├── Sponsors.tsx     # Sponzoři (14 partnerů)
│   │   │   ├── Footer.tsx       # Patička s odkazy
│   │   │   └── ui/              # Shadcn UI komponenty
│   │   ├── pages/               # Stránky
│   │   │   ├── Root.tsx         # Layout wrapper
│   │   │   ├── Home.tsx         # Hlavní stránka
│   │   │   ├── PrivacyPolicy.tsx      # Ochrana osobních údajů
│   │   │   └── TermsAndConditions.tsx # Všeobecné podmínky
│   │   ├── routes.ts            # Definice routingu
│   │   └── App.tsx              # Hlavní entry point
│   ├── assets/
│   │   ├── gallery/             # Optimalizované fotky z festivalu (13 ks)
│   │   └── artists/             # Fotky interpretů
│   ├── imports/                 # Původní neoptimalizované soubory
│   └── styles/
│       ├── fonts.css            # Font importy (Clash Display, Inter)
│       ├── globals.css          # Globální styly
│       └── theme.css            # CSS proměnné a tokeny
└── public/                      # Statické soubory

```

## 🎨 Design systém

### Barvy
- **Primární:** Orange (#EA580C, #F97316)
- **Pozadí:** White (#FFFFFF)
- **Text:** Slate (#0F172A, #475569)
- **Accent:** Green (#22C55E) - pro zvýraznění

### Fonty
- **Nadpisy:** Clash Display (bold, display)
- **Text:** Inter (sans-serif)
- Importovány v `/src/styles/fonts.css`

### Komponenty
Všechny komponenty mají **editovatelný obsah** vytažený do konstant na začátku souboru pro snadnou správu textů, obrázků a odkazů.

## 📄 Stránky

### Hlavní stránka (`/`)
- **Hero** - úvodní sekce s datem festivalu
- **Lineup** - interpreti (Rest, Fast Food Orchestra, Imodium, Kluci, Pískomil)
- **Tickets** - 5 typů vstupenek (předprodej/na místě pro dospělé/děti, zdarma do 3 let)
- **Info** - praktické informace (místo, parkování, kemping)
- **Gallery** - 13 fotek + 2 YouTube videa z minulého ročníku
- **About** - historie festivalu v kartách
- **Sponsors** - 14 partnerů ve 3 sloupcích

### Podstránky
- `/ochrana-osobnich-udaju` - GDPR + souhlas s audiovizuálními záznamy
- `/vseobecne-podminky` - podmínky festivalu, zakázané předměty, bezpečnost

## 🎯 Hlavní features

### Navigace
- Sticky header s hladkým scrollováním na kotvy
- Automatická kompenzace výšky hlavičky (80px offset)
- Mobilní hamburger menu s animacemi
- Logo a menu fungují i z podstránek (návrat na hlavní stránku + scroll)

### Lineup
- **ArtistCard** komponenta pro všechny interprety
- YouTube video přehrávač s overlay pro desktop
- Mobilní play ikony pro lepší UX
- Headlineři zvýrazněni větší kartou

### Gallery
- 13 optimalizovaných fotek (z 3.7 MB → 1.4 MB úspora 62%)
- Responsive grid s wide kartami
- Hover efekt s zoom
- 2 YouTube videa

### Vstupenky
- 5 karet: předprodej (490 Kč / 190 Kč), na místě (590 Kč / 290 Kč), děti do 3 let zdarma
- Responsive layout (1 → 2 → 5 sloupců)
- CTA tlačítka připravená pro propojení s předprodejním systémem

### Sponzoři
- 14 partnerů v 3 sloupcích
- Optimalizovaná loga (WebP/JPEG)
- Odkazy na weby sponzorů
- Kategorie: Královéhradecký kraj, Generální partneři, Hlavní partneři

## 🛠️ Instalace a spuštění

```bash
# Instalace závislostí
pnpm install

# Vývojový server
pnpm dev

# Build pro produkci
pnpm build

# Preview produkčního buildu
pnpm preview
```

## 📝 Editace obsahu

Všechny texty, obrázky a odkazy jsou vytažené do konstant na začátku každého komponentu. Hledejte sekce označené komentářem:

```tsx
// === EDITOVATELNÝ OBSAH [NÁZEV SEKCE] ===
```

### Příklady editace:

**Změna interpretů** - `src/app/components/Lineup.tsx`:
```tsx
const artists: Artist[] = [
  {
    name: "Rest",
    genre: "Hip Hop / Rap",
    image: restImg,
    description: "...",
    headliner: true,
    youtubeId: "4vyMm_ATHxA",
  },
  // ...
];
```

**Změna cen vstupenek** - `src/app/components/Tickets.tsx`:
```tsx
const tickets = [
  {
    title: 'Předprodej',
    subtitle: 'Dospělý',
    price: '490 Kč',
    // ...
  },
];
```

**Změna sponzorů** - `src/app/components/Sponsors.tsx`:
```tsx
const sponsors = [
  { 
    name: 'Královéhradecký kraj',
    logo: logoKhk,
    url: 'https://...',
  },
];
```

## 🖼️ Správa obrázků

### Přidání nové fotky interpreta
1. Umístit originál do `/src/imports/`
2. Optimalizovat pomocí sharp (příklad níže)
3. Uložit do `/src/assets/artists/`
4. Importovat v komponentě

```javascript
// optimize-artist.mjs
import sharp from 'sharp';

await sharp('./src/imports/artist.jpg')
  .resize(800, 800, { fit: 'cover' })
  .jpeg({ quality: 85, progressive: true })
  .toFile('./src/assets/artists/artist.jpg');
```

### Přidání fotky do galerie
1. Optimalizovat na max 1200px, quality 85%
2. Uložit do `/src/assets/gallery/`
3. Importovat v `src/app/pages/Home.tsx`
4. Přidat do `galleryContent.photos`

## 🎭 Accessibility (WCAG)

- Všechny obrázky mají alt texty
- Kontrast textu odpovídá WCAG 2.1 AA
- Fokusovatelné interaktivní prvky
- Sémantické HTML tagy
- ARIA labels pro ikonové tlačítka

## 🔧 Routing

Projekt používá React Router Data API:
- `/` - hlavní stránka
- `/ochrana-osobnich-udaju` - ochrana dat
- `/vseobecne-podminky` - všeobecné podmínky

Navigace mezi stránkami zachovává sticky header a správně scrolluje na kotvy i při přechodu z podstránek.

## 📱 Responzivita

Breakpointy (Tailwind):
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Všechny komponenty jsou plně responzivní s mobile-first přístupem.

## 🚨 Důležité poznámky

- **Nemazat** `/src/imports/` - obsahuje původní neoptimalizované soubory jako zálohu
- **Font importy** pouze v `/src/styles/fonts.css` (nikdy v jiných CSS)
- **Tailwind v4** - nepoužívá `tailwind.config.js`, vše je v CSS proměnných
- **Plynulé scrollování** nastaveno v `/src/styles/globals.css`
- **Navigační offset** je 80px (výška fixní hlavičky)

## 🔐 Právní stránky

Obě podstránky (Ochrana dat, Podmínky) obsahují:
- GDPR compliance
- Souhlas s audiovizuálními záznamy
- Zakázané předměty
- Bezpečnostní pravidla
- Věkové limity

## 📞 Kontakt

- **Email:** bigboskrinice@gmail.com
- **Telefon:** +420 602 573 082
- **Adresa:** Křinice 6, 550 01 Broumov

## 📋 TODO pro budoucí vývoj

- [ ] Propojit tlačítka vstupenek s předprodejním systémem
- [ ] Přidat Google Analytics
- [ ] Implementovat newsletter formulář
- [ ] Přidat cookies consent banner
- [ ] SEO optimalizace (meta tagy, Open Graph)
- [ ] Implementovat 404 stránku

## 🎉 Autoři

Vytvořeno pro festival Bigboš Křinice 2026.
