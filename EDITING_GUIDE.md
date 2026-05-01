# Průvodce editací - Co měnit a co ne

Rychlý přehled souborů pro editaci obsahu webu Bigboš Křinice.

## ✅ BEZPEČNĚ EDITOVAT (Obsah)

### 📝 Texty a data

| Soubor | Co můžeš měnit | Najdi sekci |
|--------|----------------|-------------|
| `src/app/components/Hero.tsx` | Datum, místo, úvodní text | `// === EDITOVATELNÝ OBSAH HERO ===` |
| `src/app/components/Lineup.tsx` | Interpreti, žánry, popisy, YouTube ID | `const artists: Artist[]` |
| `src/app/components/Tickets.tsx` | Ceny, typy vstupenek, features | `const tickets = [...]` |
| `src/app/components/Info.tsx` | Praktické informace, ikony | `const infoCards = [...]` |
| `src/app/components/About.tsx` | Historie, karty o festivalu | `const aboutCards = [...]` |
| `src/app/components/Sponsors.tsx` | Seznam sponzorů, loga, odkazy | `const sponsors = [...]` |
| `src/app/components/Footer.tsx` | Kontakty, sociální sítě, odkazy | `const footerContent = {...}` |
| `src/app/components/Navigation.tsx` | Navigační odkazy | `const navLinks = [...]` |
| `src/app/pages/Home.tsx` | Galerie (fotky, videa) | `const galleryContent = {...}` |
| `src/app/pages/PrivacyPolicy.tsx` | Text ochrany dat | Celý komponent |
| `src/app/pages/TermsAndConditions.tsx` | Text podmínek | Celý komponent |

### 🎨 Styly

| Soubor | Co můžeš měnit | Poznámka |
|--------|----------------|----------|
| `src/styles/theme.css` | CSS proměnné (barvy, spacing) | Opatrně - ovlivní celý web |
| `src/styles/fonts.css` | Font importy | Pouze přidat nové fonty |
| `src/styles/globals.css` | Globální styly | Základní reset + scroll |

### 🖼️ Obrázky

| Složka | Co můžeš měnit | Postup |
|--------|----------------|--------|
| `src/assets/artists/` | Fotky interpretů | 1. Optimalizuj (800×800, q85)<br>2. Ulož sem<br>3. Import v Lineup.tsx |
| `src/assets/gallery/` | Fotky galerie | 1. Optimalizuj (max 1200px, q85)<br>2. Ulož sem<br>3. Import v Home.tsx |
| `src/imports/` | Původní neoptimalizované | Pouze přidávat, NEMAZAT! |

---

## ⚠️ EDITOVAT OPATRNĚ (Funkce)

### Pouze s porozuměním kódu

| Soubor | Co to dělá | Kdy měnit |
|--------|------------|-----------|
| `src/app/routes.ts` | Routing stránek | Přidání nové stránky |
| `src/app/pages/Root.tsx` | Layout wrapper | Změna struktury layoutu |
| `src/app/App.tsx` | Entry point | Téměř nikdy |

### Komponenty - logika

Můžeš měnit obsah v `// === EDITOVATELNÝ OBSAH ===` sekcích, ale **NE logiku renderování**.

**Příklad CO MŮŽEŠ:**
```tsx
// ✅ ANO - měnit data
const artists = [
  { name: "Rest", genre: "Hip Hop" }, // ✅
];
```

**Příklad CO NEMĚNIT:**
```tsx
// ❌ NE - měnit logiku
return (
  <div>
    {artists.map((artist) => (  // ❌ Neměnit toto
      <ArtistCard {...artist} />
    ))}
  </div>
);
```

---

## 🚫 NIKDY NEMĚNIT (Systémové soubory)

| Soubor/Složka | Proč neměnit |
|---------------|--------------|
| `node_modules/` | Spravováno pnpm |
| `package.json` | Pouze přes pnpm add |
| `package-lock.json` | Auto-generováno |
| `tsconfig.json` | TypeScript config |
| `vite.config.ts` | Build config |
| `postcss.config.mjs` | CSS processing |
| `.gitignore` | Git config |
| `src/app/components/ui/` | Shadcn komponenty (pokud nepřidáváš nový) |

---

## 📋 Checklist pro různé úpravy

### ✏️ Změna textu

1. [ ] Najdi správný komponent
2. [ ] Vyhledej `// === EDITOVATELNÝ OBSAH ===`
3. [ ] Uprav text v objektu/poli
4. [ ] Ulož soubor
5. [ ] Zkontroluj v prohlížeči

**Příklad:**
```tsx
// src/app/components/Hero.tsx
const heroContent = {
  title: 'Bigboš Křinice',  // ← změň zde
  subtitle: 'Festival...',  // ← nebo zde
};
```

---

### 🖼️ Výměna fotky

1. [ ] Originál ulož do `src/imports/nazev.jpg`
2. [ ] Optimalizuj pomocí sharp:
   ```js
   import sharp from 'sharp';
   await sharp('src/imports/nazev.jpg')
     .resize(800, 800, { fit: 'cover' })
     .jpeg({ quality: 85 })
     .toFile('src/assets/artists/nazev.jpg');
   ```
3. [ ] Import v komponentě:
   ```tsx
   import nazevImg from '../../assets/artists/nazev.jpg';
   ```
4. [ ] Použij v datech:
   ```tsx
   { name: "...", image: nazevImg }
   ```

---

### 💰 Změna ceny vstupenky

1. [ ] Otevři `src/app/components/Tickets.tsx`
2. [ ] Najdi pole `const tickets = [...]`
3. [ ] Uprav `price: '490 Kč'` na novou cenu
4. [ ] Ulož

**Příklad:**
```tsx
const tickets = [
  {
    title: 'Předprodej',
    subtitle: 'Dospělý',
    price: '550 Kč',  // ← změň zde
    // ...
  },
];
```

---

### 🎤 Přidání nového interpreta

1. [ ] Připrav fotku (800×800px, optimalizovaná)
2. [ ] Ulož do `src/assets/artists/nazev.jpg`
3. [ ] Otevři `src/app/components/Lineup.tsx`
4. [ ] Import fotky:
   ```tsx
   import nazevImg from '../../assets/artists/nazev.jpg';
   ```
5. [ ] Přidej do pole `artists`:
   ```tsx
   {
     name: "Název kapely",
     genre: "Žánr",
     image: nazevImg,
     description: "Popis kapely...",
     headliner: false,  // true pokud headliner
     youtubeId: "VIDEO_ID",
   },
   ```

---

### 🏢 Přidání/odebrání sponzora

1. [ ] Logo ulož do `src/imports/nazev_sponzora.jpg`
2. [ ] Otevři `src/app/components/Sponsors.tsx`
3. [ ] Import loga:
   ```tsx
   import logoNazev from '../../imports/nazev_sponzora.jpg?url';
   ```
4. [ ] Přidej/odeber v poli `sponsors`:
   ```tsx
   {
     name: 'Název sponzora',
     role: 'Generální partner',
     logo: logoNazev,
     url: 'https://www.sponzor.cz',
   },
   ```

---

### 📸 Přidání fotky do galerie

1. [ ] Optimalizuj fotku (max 1200px, quality 85%)
2. [ ] Ulož do `src/assets/gallery/bigbos-2024-XX.jpg`
3. [ ] Otevři `src/app/pages/Home.tsx`
4. [ ] Import fotky:
   ```tsx
   import galleryXX from '../../assets/gallery/bigbos-2024-XX.jpg';
   ```
5. [ ] Přidaj do pole v `galleryContent.photos`:
   ```tsx
   { src: galleryXX, alt: 'Popis fotky', wide: false },
   ```

**Note:** `wide: true` pro širokou kartu (2×2)

---

### 📄 Vytvoření nové podstránky

**Pokročilé - doporučeno konzultovat!**

1. [ ] Vytvoř `src/app/pages/NovaStranka.tsx`
2. [ ] Použij template z `PrivacyPolicy.tsx`
3. [ ] Přidej route v `src/app/routes.ts`:
   ```tsx
   { path: 'nova-stranka', Component: NovaStranka }
   ```
4. [ ] Přidej odkaz do Footer nebo Navigation

---

## 🆘 Kdy požádat o pomoc

- **Změna layoutu/struktury** - změna gridu, počtu sloupců, pořadí sekcí
- **Přidání nové funkce** - formuláře, interakce, animace
- **Problémy s buildem** - chyby TypeScript, Vite
- **Routing problémy** - nefungující odkazy, navigace
- **Styling problémy** - nefungující Tailwind classes

---

## 📞 Quick links

- **Plná dokumentace:** `README.md`
- **Pro AI asistenta:** `CLAUDE.md`
- **Přehled komponent:** `COMPONENTS.md`
- **Tento průvodce:** `EDITING_GUIDE.md`

---

## 💡 Tipy

- Vždy měň pouze data, ne logiku
- Testuj v prohlížeči po každé změně
- Používej `Ctrl+F` pro vyhledání textu v souborech
- Commit často, s popisnými zprávami
- Pokud nejsi si jistý, zeptej se!

**Happy editing! 🎉**
