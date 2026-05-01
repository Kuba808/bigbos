# Přehled komponent projektu Bigboš Křinice

## 🏗️ Struktura aplikace

### Routing (`/src/app/`)
- **App.tsx** - Entry point aplikace, obsahuje RouterProvider
- **routes.ts** - Konfigurace React Router (BrowserRouter)

## 📄 Stránky (`/src/app/pages/`)

### Root.tsx
- Layout wrapper pro všechny stránky
- Obsahuje Navigation a Footer
- Outlet pro vnořené routes

### Home.tsx
- Hlavní stránka festivalu
- Obsahuje všechny sekce (Hero, Lineup, Tickets, Gallery, atd.)
- Importuje galerii (13 fotek)

### PrivacyPolicy.tsx
- Stránka ochrany osobních údajů
- GDPR compliance
- Souhlas s audiovizuálními záznamy
- Route: `/ochrana-osobnich-udaju`

### TermsAndConditions.tsx
- Všeobecné podmínky festivalu
- Bezpečnostní pravidla
- Zakázané předměty
- Route: `/vseobecne-podminky`

## 🎨 Hlavní komponenty (`/src/app/components/`)

### Navigation.tsx
**Účel:** Hlavní navigační lišta webu

**Funkce:**
- Sticky header s efektem při scrollu
- Smooth scroll na kotvy (offset 80px)
- Hamburger menu pro mobil (Motion animace)
- Funguje i z podstránek (useNavigate + scroll)

**Editovatelný obsah:**
```tsx
const navLinks = [
  { name: 'Line-up', href: '#lineup' },
  { name: 'Info', href: '#info' },
  { name: 'Galerie', href: '#gallery' },
  { name: 'O Bigboši', href: '#about' },
];
```

**Použité knihovny:** Motion, Lucide (ikony), React Router

---

### Hero.tsx
**Účel:** Úvodní sekce s datem festivalu

**Funkce:**
- Gradient pozadí (orange → pink)
- Animované elementy (Motion)
- CTA tlačítka (Vstupenky, Line-up)
- Datum a místo konání

**Editovatelný obsah:**
```tsx
const heroContent = {
  date: '25.7.2026',
  location: 'Křinice, Broumov',
  title: 'Bigboš Křinice',
  // ...
};
```

---

### Lineup.tsx
**Účel:** Seznam interpretů festivalu

**Funkce:**
- Jednotná `ArtistCard` komponenta
- YouTube video overlay (desktop)
- Play ikona pro mobil
- Headlineři zvýrazněni
- Dětský program v samostatné sekci

**Editovatelný obsah:**
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

const kidsProgram: Artist[] = [
  // Pískomil se vrací, Dětský program
];
```

**Komponenty:**
- `VideoOverlay` - desktop hover overlay s play tlačítkem
- `ArtistCard` - jednotná karta pro všechny interprety

---

### Tickets.tsx
**Účel:** Sekce vstupenek

**Funkce:**
- 5 typů vstupenek (předprodej/na místě pro dospělé/děti, zdarma)
- Responzivní grid (1 → 2 → 5 sloupců)
- CTA tlačítka připravená pro e-shop
- Feature list s checkmarky

**Editovatelný obsah:**
```tsx
const ticketsContent = {
  title: 'Vstupenky',
  subtitle: '...',
};

const tickets = [
  {
    title: 'Předprodej',
    subtitle: 'Dospělý',
    price: '490 Kč',
    features: ['Vstup na celý festival', '...'],
    cta: { label: 'Koupit', url: '#' },
  },
  // ...
];
```

---

### Info.tsx
**Účel:** Praktické informace o festivalu

**Funkce:**
- Grid karet s ikonami
- Místo konání, parkování, kemping, jídlo/pití
- Responzivní layout

**Editovatelný obsah:**
```tsx
const infoCards = [
  {
    icon: MapPin,
    title: 'Místo',
    description: '...',
  },
  // ...
];
```

---

### About.tsx
**Účel:** Historie festivalu

**Funkce:**
- Grid karet s informacemi o festivalu
- Gradient pozadí
- Animace při scrollu (Motion)

**Editovatelný obsah:**
```tsx
const aboutCards = [
  {
    title: '40 let',
    description: 'Historie festivalu...',
  },
  // ...
];
```

---

### Sponsors.tsx
**Účel:** Sekce sponzorů

**Funkce:**
- 14 partnerů ve 3 sloupcích
- Hover efekt na kartách
- Odkazy na weby sponzorů
- Optimalizovaná loga

**Editovatelný obsah:**
```tsx
const sponsors = [
  {
    name: 'Královéhradecký kraj',
    role: 'Realizováno za finanční podpory...',
    logo: logoKhk,
    url: 'https://...',
  },
  // celkem 14 sponzorů
];
```

**Import log:**
```tsx
import logoKhk from '../../imports/1_khk.jpg?url';
// ... další loga
```

---

### Footer.tsx
**Účel:** Patička webu

**Funkce:**
- 4 sloupce (brand, kontakt, odkazy)
- Sociální sítě (FB, IG, YT)
- Rychlé odkazy (včetně podstránek)
- Copyright

**Editovatelný obsah:**
```tsx
const footerContent = {
  brand: "Bigboš Křinice",
  description: "...",
  socials: [
    { label: "FB", url: "..." },
    // ...
  ],
  contact: [
    "bigboskrinice@gmail.com",
    "+420 602 573 082",
    "Křinice 6",
    "550 01 Broumov",
  ],
  quickLinks: [
    { label: "Line-up", url: "#lineup", internal: false },
    { label: "Ochrana dat", url: "/ochrana-osobnich-udaju", internal: true },
    // ...
  ],
};
```

**Routing:** Používá `Link` z React Router pro interní odkazy.

---

## 🧩 Pomocné komponenty (`/src/app/components/figma/`)

### ImageWithFallback.tsx
**Účel:** Wrapper pro obrázky s fallback obrázkem

**Použití:** Pro dynamické obrázky, které mohou selhat
```tsx
<ImageWithFallback
  src={imageSrc}
  alt="Popis"
  className="..."
/>
```

---

## 🎨 UI komponenty (`/src/app/components/ui/`)

Shadcn UI komponenty - předpřipravené, přepoužitelné UI elementy:

**Používané v projektu:**
- **button.tsx** - tlačítka (Navigation, Tickets, atd.)
- **card.tsx** - karty (About, Info, Sponsors)
- **sheet.tsx** - mobilní menu drawer

**Ostatní dostupné:**
- accordion, alert, badge, calendar, checkbox, dialog, dropdown, form, input, popover, select, table, tabs, tooltip, atd.

**Utility:**
- **use-mobile.ts** - hook pro detekci mobilních zařízení
- **utils.ts** - utility funkce (cn pro className merge)

---

## 📁 Struktura souborů

```
src/app/
├── components/
│   ├── Navigation.tsx      # Header + navigace
│   ├── Hero.tsx            # Úvodní sekce
│   ├── Lineup.tsx          # Interpreti
│   ├── Tickets.tsx         # Vstupenky
│   ├── Info.tsx            # Praktické info
│   ├── About.tsx           # Historie
│   ├── Sponsors.tsx        # Sponzoři
│   ├── Footer.tsx          # Patička
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/                 # Shadcn UI komponenty
│       ├── button.tsx
│       ├── card.tsx
│       ├── sheet.tsx
│       └── ... (50+ komponent)
├── pages/
│   ├── Root.tsx            # Layout wrapper
│   ├── Home.tsx            # Hlavní stránka
│   ├── PrivacyPolicy.tsx   # Ochrana dat
│   └── TermsAndConditions.tsx  # Podmínky
├── routes.ts               # React Router config
└── App.tsx                 # Entry point
```

---

## 🔄 Data flow

1. **App.tsx** → RouterProvider
2. **routes.ts** → Root layout + vnořené routes
3. **Root.tsx** → Navigation + Outlet + Footer
4. **Home.tsx** → Všechny sekce v pořadí
5. **Components** → Editovatelný obsah z konstant

---

## 📝 Konvence pojmenování

### Komponenty
- PascalCase (`Navigation.tsx`, `ArtistCard`)
- Export jako named export nebo default export

### Proměnné
- camelCase pro data (`heroContent`, `navLinks`)
- SNAKE_CASE pro konstanty (`YOUTUBE_ID`)

### CSS
- Tailwind utility classes
- BEM pro custom CSS (pokud nutné)

---

## 🎯 Best practices

### Přidání nové sekce
1. Vytvoř komponent v `/src/app/components/NazevSekce.tsx`
2. Přidej editovatelný obsah na začátek
3. Označ komentářem `// === EDITOVATELNÝ OBSAH ===`
4. Import a použij v `Home.tsx`
5. Přidej kotvu do `Navigation.tsx` (pokud potřeba)

### Editace existujících komponent
1. Najdi `// === EDITOVATELNÝ OBSAH ===`
2. Uprav data v konstantách
3. Neměň strukturu komponenty (pokud není nutné)
4. Otestuj responzivitu

### Optimalizace obrázků
1. Originál do `/src/imports/`
2. Optimalizuj pomocí sharp
3. Ulož do `/src/assets/artists/` nebo `/src/assets/gallery/`
4. Import jako modul (ne `?url` pro assets)

---

## 🐛 Debugging

### Komponenta se neaktualizuje
- Zkontroluj, že data jsou ve `state` nebo `props`
- Ověř dependency array u `useEffect`

### Styling nefunguje
- Zkontroluj, že Tailwind class existuje
- Ověř, že není konflikt s custom CSS
- Zkontroluj responsive breakpointy

### Routing nefunguje
- Zkontroluj `/src/app/routes.ts`
- Ověř použití `Link` vs `<a>` tag
- Zkontroluj `useNavigate` pro programatickou navigaci

---

Všechny komponenty mají **editovatelný obsah** a jsou **plně responzivní**. Detaily viz `README.md` a `CLAUDE.md`.
