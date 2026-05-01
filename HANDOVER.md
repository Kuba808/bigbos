# 📦 Předání projektu - Bigboš Křinice

**Datum:** 1. května 2026  
**Stav:** Připraveno k předání vývojáři

---

## ✅ Co bylo provedeno

### 1. Čištění projektu
- ✓ Smazány duplicitní soubory z `public/gallery/`
- ✓ Ponechány originály v `src/imports/` jako backup
- ✓ Optimalizované assety v `src/assets/`

### 2. Dokumentace
Vytvořeno **5 dokumentačních souborů**:

| Soubor | Účel | Pro koho |
|--------|------|----------|
| `README.md` | Úplná technická dokumentace | Všichni vývojáři |
| `CLAUDE.md` | Pokyny pro AI asistenta Claude Code | AI vývojář |
| `COMPONENTS.md` | Přehled všech komponent a jejich účelu | Frontend vývojář |
| `EDITING_GUIDE.md` | Průvodce editací obsahu | Editor obsahu / junior vývojář |
| `HANDOVER.md` | Tento dokument - souhrn předání | Team lead |

---

## 📁 Struktura projektu

```
bigbos-krinice/
├── 📄 README.md              # ← ZAČNI ZDE
├── 📄 CLAUDE.md              # Pro AI asistenta
├── 📄 COMPONENTS.md          # Přehled komponent
├── 📄 EDITING_GUIDE.md       # Jak editovat obsah
├── 📄 HANDOVER.md            # Tento soubor
│
├── src/
│   ├── app/
│   │   ├── components/       # 9 hlavních komponent
│   │   ├── pages/            # 4 stránky (Home + 3 podstránky)
│   │   ├── routes.ts         # React Router konfigurace
│   │   └── App.tsx           # Entry point
│   │
│   ├── assets/
│   │   ├── gallery/          # 13 optimalizovaných fotek
│   │   └── artists/          # Fotky interpretů
│   │
│   ├── imports/              # ⚠️ NEMAZAT - originály
│   │
│   └── styles/
│       ├── fonts.css         # Font importy
│       ├── globals.css       # Globální styly
│       └── theme.css         # CSS proměnné
│
├── public/                   # Statické soubory
├── node_modules/             # Závislosti (pnpm)
└── package.json              # Config projektu
```

---

## 🎯 Klíčové informace

### Technologie
- **React 18** + TypeScript
- **Tailwind CSS v4** (bez config souboru!)
- **React Router** (Data API)
- **Motion** (Framer Motion)
- **pnpm** package manager

### Design
- **Barvy:** Orange (#EA580C) + White
- **Fonty:** Clash Display (nadpisy), Inter (text)
- **Responzivní:** Mobile-first přístup

### Obsah
- **Festival:** 25. července 2026, Křinice
- **Interpreti:** Rest, Fast Food Orchestra, Imodium, Kluci, Pískomil
- **Vstupenky:** 5 typů (předprodej/na místě pro dospělé/děti, zdarma)
- **Sponzoři:** 14 partnerů
- **Galerie:** 13 fotek + 2 YouTube videa

---

## 🚀 Quick Start

```bash
# Instalace závislostí
pnpm install

# Spuštění dev serveru
pnpm dev

# Build pro produkci
pnpm build
```

**Dev server:** http://localhost:5173

---

## 📖 Jak začít

### Pro vývojáře
1. Přečti `README.md` - úplná dokumentace
2. Prohlédni `COMPONENTS.md` - přehled komponent
3. Otevři `src/app/pages/Home.tsx` - začni zde
4. Edituj komponenty v `src/app/components/`

### Pro AI asistenta (Claude Code)
1. Přečti `CLAUDE.md` - pokyny pro AI
2. Dodržuj editovatelný obsah pattern
3. Neměň core architekturu bez konzultace
4. Vždy optimalizuj obrázky před přidáním

### Pro editora obsahu
1. Přečti `EDITING_GUIDE.md` - průvodce editací
2. Hledej sekce `// === EDITOVATELNÝ OBSAH ===`
3. Měň pouze data, ne logiku
4. Testuj v prohlížeči

---

## ⚠️ Důležitá upozornění

### NIKDY
- ❌ Nemazat `src/imports/` (originály)
- ❌ Nevytvářet `tailwind.config.js` (Tailwind v4!)
- ❌ Nepřidávat font importy mimo `fonts.css`
- ❌ Neměnit core architekturu bez konzultace

### VŽDY
- ✅ Optimalizovat obrázky před přidáním
- ✅ Testovat WCAG kontrast
- ✅ Zachovat editovatelný obsah pattern
- ✅ Commitovat s popisnými zprávami

---

## 📊 Statistiky projektu

### Komponenty
- **Stránky:** 4 (Home, Root, Privacy, Terms)
- **Hlavní komponenty:** 9 (Navigation, Hero, Lineup, Tickets, Info, About, Sponsors, Footer, ImageWithFallback)
- **UI komponenty:** 50+ (Shadcn UI)

### Assety
- **Fotky interpretů:** 5 optimalizovaných
- **Galerie:** 13 optimalizovaných fotek
- **Loga sponzorů:** 14 ks
- **Úspora velikosti:** 62% (3.7 MB → 1.4 MB)

### Kód
- **TypeScript soubory:** ~60
- **CSS soubory:** 3
- **Routes:** 3 (/, /ochrana-osobnich-udaju, /vseobecne-podminky)

---

## 🔧 Běžné úkoly

### Změna textu
→ `EDITING_GUIDE.md` → sekce "Změna textu"

### Přidání interpreta
→ `EDITING_GUIDE.md` → sekce "Přidání nového interpreta"

### Změna ceny vstupenky
→ `EDITING_GUIDE.md` → sekce "Změna ceny vstupenky"

### Přidání/odebrání sponzora
→ `EDITING_GUIDE.md` → sekce "Přidání/odebrání sponzora"

### Přidání fotky do galerie
→ `EDITING_GUIDE.md` → sekce "Přidání fotky do galerie"

---

## 📋 TODO pro budoucnost

### Připraveno k implementaci
- [ ] Propojit vstupenky s předprodejním systémem
- [ ] Přidat Google Analytics
- [ ] Newsletter formulář
- [ ] Cookies consent banner
- [ ] SEO optimalizace (meta tagy, Open Graph)
- [ ] 404 stránka

### Možná rozšíření
- [ ] Blog/aktuality
- [ ] Galerie po ročnících
- [ ] Mapa areálu
- [ ] Live stream integrace
- [ ] Časový program festivalu

---

## 📞 Kontakt

**Festival Bigboš Křinice**
- Email: bigboskrinice@gmail.com
- Tel: +420 602 573 082
- Adresa: Křinice 6, 550 01 Broumov
- Web: (tento projekt)

**Sociální sítě:**
- Facebook: https://www.facebook.com/bigboskrinice
- Instagram: https://www.instagram.com/bigbos_krinice/
- YouTube: https://www.youtube.com/@bigboskrinice4155

---

## ✨ Závěr

Projekt je **připraven k předání** s:
- ✓ Čistým kódem
- ✓ Kompletní dokumentací
- ✓ Optimalizovanými assety
- ✓ Funkčním routingem
- ✓ Responzivním designem
- ✓ WCAG compliance

**Všechny komponenty mají editovatelný obsah a jsou plně dokumentované.**

---

**Začni čtením `README.md` a šťastné kódování! 🎉**
