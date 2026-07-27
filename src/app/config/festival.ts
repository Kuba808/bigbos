// =============================================================
// === CENTRÁLNÍ NASTAVENÍ FESTIVALU ===
// =============================================================
// Jedno místo pro postupné "spouštění" webu po ohlášení dalšího
// ročníku. Přepínej hodnoty níže – sekce se samy zobrazí/skryjí
// nebo přepnou do režimu "Brzy".
//
// TYPICKÝ POSTUP NAPLŇOVÁNÍ NOVÉHO ROČNÍKU:
//   1) Odhaluj interprety: v Lineup.tsx přesuň objekt z pole
//      `archiv` do pole `artists` (viz komentář v Lineup.tsx).
//   2) Až spustíš předprodej -> `ticketsOnSale: true`
//      (a v Tickets.tsx aktualizuj ceny + odkazy na předprodej).
//   3) Až budou známé časy -> `showSchedule: true`
//      (a v Lineup.tsx vyplň pole `schedule`).
// =============================================================

export const festivalConfig = {
  // --- Ročník a termín ---
  edition: 22, // pořadové číslo ročníku (2026 byl 21.)
  year: 2027,
  date: "24. 7. 2027",
  dateLong: "Sobota 24. července 2027",

  // --- Přepínače postupného spouštění ---
  // Předprodej: false = karty ztlumené + "Brzy v prodeji",
  //             true  = funkční tlačítka (nezapomeň doplnit ceny/odkazy).
  ticketsOnSale: false,

  // Časový harmonogram: false = skrytý, true = zobrazený
  // (data vyplň v poli `schedule` v Lineup.tsx).
  showSchedule: false,

  // Kolik "Připravujeme" karet doplnit do line-upu vedle
  // potvrzených interpretů (0 = žádné placeholdery).
  lineupPlaceholders: 5,
};
