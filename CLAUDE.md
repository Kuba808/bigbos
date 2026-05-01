# Claude Code - Pokyny pro práci na projektu Bigboš Křinice

Tento dokument obsahuje pokyny pro AI asistenta Claude Code při práci na webových stránkách festivalu Bigboš Křinice.

## 🎯 O projektu

Oficiální webové stránky hudebního festivalu Bigboš Křinice s oranžovo-bílým vizuálem. Festival se koná **25. července 2026** v Křinicích u Broumova.

**Stack:** React 18 + TypeScript + Tailwind CSS v4 + React Router + Motion (Framer Motion)

## 📐 Architektonické principy

### 1. Struktura komponent
- Všechny komponenty mají **editovatelný obsah v konstantách** na začátku souboru
- Označeno komentářem `// === EDITOVATELNÝ OBSAH [NÁZEV] ===`
- Data oddělena od view logiky pro snadnou správu

### 2. Styling
- **Tailwind CSS v4** - NEPOUŽÍVÁ `tailwind.config.js`
- Vše je v CSS proměnných v `/src/styles/theme.css`
- Font importy POUZE v `/src/styles/fonts.css`
- NEPOUŽÍVAT Tailwind classes pro `font-size`, `font-weight`, `line-height` (pokud uživatel nepožaduje změnu)

### 3. Routing
- React Router Data API (createBrowserRouter)
- Konfigurace v `/src/app/routes.ts`
- Sticky navigace s hladkým scrollováním (offset 80px)
- Navigace funguje i z podstránek zpět na kotvy hlavní stránky

### 4. Obrázky
- Optimalizované v `/src/assets/` (používané v produkci)
- Originály v `/src/imports/` (backup, NEMAZAT)
- Interpreti: 800×800px, quality 85%, progressive JPEG
- Galerie: max 1200px, quality 85%, progressive JPEG

## 🎨 Design systém

### Barvy
```css
/* Primární */
--color-primary: #EA580C (orange-600)
--color-primary-hover: #F97316 (orange-500)

/* Akcent */
--color-accent: #22C55E (green-500)

/* Text */
--color-text-primary: #0F172A (slate-900)
--color-text-secondary: #475569 (slate-600)

/* Pozadí */
--color-bg: #FFFFFF
--color-bg-alt: #F8FAFC (slate-50)
```

### Typografie
- **Nadpisy:** `font-display` (Clash Display)
- **Tělo textu:** `font-sans` (Inter)
- Importy v `/src/styles/fonts.css`

### WCAG kontrast
- Text na bílém pozadí: minimálně `text-slate-800`
- Text na černém pozadí: minimálně `text-slate-200`
- CTA tlačítka: `bg-orange-600` + `text-white` (splňuje AA)

## 🔧 Časté úkoly

### Přidání nového interpreta
1. Optimalizuj fotku (800×800px, quality 85%)
2. Ulož do `/src/assets/artists/nazev.jpg`
3. Import v `/src/app/components/Lineup.tsx`
4. Přidej do pole `artists` nebo `kidsProgram`

```tsx
{
  name: "Název kapely",
  genre: "Žánr",
  image: nazevImg,
  description: "Popis...",
  headliner: false, // true pro headlinera
  youtubeId: "VIDEO_ID",
}
```

### Změna cen vstupenek
Edituj `/src/app/components/Tickets.tsx` v poli `tickets`:
```tsx
{
  title: 'Předprodej',
  subtitle: 'Dospělý',
  price: '490 Kč',
  // ...
}
```

### Přidání/odebrání sponzora
Edituj `/src/app/components/Sponsors.tsx` v poli `sponsors`:
```tsx
{
  name: 'Název sponzora',
  role: 'Generální partner',
  logo: logoVar,
  url: 'https://...',
}
```

### Přidání fotky do galerie
1. Optimalizuj (max 1200px, quality 85%)
2. Ulož do `/src/assets/gallery/`
3. Import v `/src/app/pages/Home.tsx`
4. Přidej do `galleryContent.photos`

### Vytvoření nové podstránky
1. Vytvoř komponent v `/src/app/pages/NazevStranky.tsx`
2. Přidej route v `/src/app/routes.ts`:
```tsx
{ path: 'url-stranky', Component: NazevStranky }
```
3. (Volitelně) přidej odkaz do Footer nebo Navigation

## ⚠️ Důležitá pravidla

### ❌ NIKDY
- Nemazat složku `/src/imports/` (backup originálů)
- Nepřidávat font importy mimo `/src/styles/fonts.css`
- Nevytvářet `tailwind.config.js` (používáme Tailwind v4)
- Nepoužívat `font-size`, `font-weight` Tailwind classes (pokud neuživatel nepožaduje)
- Neměnit HTML strukturu bez důvodu (kvůli SEO)

### ✅ VŽDY
- Zachovat editovatelný obsah v konstantách
- Přidat alt text k obrázkům
- Testovat WCAG kontrast
- Zachovat responzivitu (mobile-first)
- Dokumentovat změny v komentářích
- Optimalizovat obrázky před přidáním

## 🧩 Klíčové komponenty

### Navigation (`/src/app/components/Navigation.tsx`)
- Sticky header s transparencí při scrollu
- Smooth scroll na kotvy s offsetem 80px
- Mobilní hamburger menu
- Funguje i z podstránek (useNavigate → scroll)

**Při editaci:** Zachovej offset logiku a navigaci zpět na hlavní stránku.

### Lineup (`/src/app/components/Lineup.tsx`)
- Jednotná `ArtistCard` komponenta
- YouTube video overlay (desktop) + play ikona (mobile)
- Headlineři mají `headliner: true` a větší kartu

**Při editaci:** Vždy přidej YouTube ID, i kdyby mělo být placeholder.

### Tickets (`/src/app/components/Tickets.tsx`)
- 5 karet (předprodej, na místě, děti)
- CTA tlačítka připravená pro propojení s předprodejním systémem

**Při editaci:** Zachovej strukturu 5 karet (2×2+1), neměň bez konzultace.

### Sponsors (`/src/app/components/Sponsors.tsx`)
- 3 sloupce na desktop
- Loga optimalizovaná na max-h-20
- Všechny odkazy vedou na weby sponzorů

**Při editaci:** Zachovej role (Generální partner, Hlavní partner).

## 🔍 Debugging tipy

### Problémy s routingem
- Zkontroluj `/src/app/routes.ts`
- Ověř, že Navigation používá `useNavigate()` pro navigaci
- Zkontroluj, že odkazy na kotvy mají správný offset (80px)

### Obrázky se nenačítají
- Zkontroluj import cestu (assets vs imports)
- Pro Vite assets: `import img from '../../assets/file.jpg'`
- Pro statické soubory z imports: `import img from '../../imports/file.jpg?url'`

### Smooth scroll nefunguje
- Zkontroluj `/src/styles/globals.css` (scroll-behavior: smooth)
- Ověř offset v Navigation (80px = výška headeru)

### Font se neaplikuje
- Zkontroluj import v `/src/styles/fonts.css`
- Ověř, že používáš správnou Tailwind class (`font-display` nebo `font-sans`)

## 📋 Checklist před commitem

- [ ] Všechny texty jsou v editovatelných konstantách
- [ ] Obrázky jsou optimalizované
- [ ] Alt texty u všech obrázků
- [ ] WCAG kontrast splněn
- [ ] Responzivita otestována (mobile, tablet, desktop)
- [ ] Žádné console.error/warning
- [ ] TypeScript bez chyb
- [ ] Smooth scrollování funguje
- [ ] Odkazy vedou na správné cíle

## 🎯 Roadmapa

### Připraveno k implementaci
- Propojení vstupenek s předprodejním systémem
- Newsletter formulář
- Cookies consent banner
- SEO optimalizace (meta tagy)

### Možná budoucí rozšíření
- Blog/aktuality
- Galerie po ročnících
- Mapa areálu
- Live stream integrace
- Časový program festivalu

## 💬 Komunikace s uživatelem

### Když nejsi si jistý
- Zeptej se PŘED implementací větších změn
- Nabídni 2-3 varianty řešení
- Ukaž kód před/po při významných změnách

### Když něco není možné
- Jasně vysvětli proč (technické omezení, konflikt s jiným feature)
- Navrhni alternativní řešení
- Ukaž, co by bylo potřeba změnit

### Best practices
- Buď konkrétní ("upravím Lineup.tsx řádek 42")
- Ukazuj kontext (před/po ukázky kódu)
- Vždy testuj změny v prohlížeči před dokončením

## 📞 Kontakt na klienta

**Email:** bigboskrinice@gmail.com  
**Telefon:** +420 602 573 082  
**Lokalita:** Křinice 6, 550 01 Broumov

---

## 🚀 Quick start pro Claude Code

```bash
# Instalace
pnpm install

# Dev server
pnpm dev

# Build
pnpm build
```

**Hlavní soubory k editaci:**
- Komponenty: `/src/app/components/*.tsx`
- Stránky: `/src/app/pages/*.tsx`
- Styly: `/src/styles/*.css`
- Routing: `/src/app/routes.ts`

**Vždy čti README.md pro úplnou dokumentaci!**
