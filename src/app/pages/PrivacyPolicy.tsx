import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zpět na hlavní stránku
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Ochrana osobních údajů
        </h1>

        <div className="prose prose-lg max-w-none text-slate-700 space-y-8">
          <section>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">1. Základní informace</h2>
            <p>
              Správcem osobních údajů je pořadatel festivalu Bigboš. Ochrana vašich osobních údajů je pro nás prioritou
              a zavazujeme se dodržovat všechny požadavky nařízení GDPR (General Data Protection Regulation).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">2. Jaké údaje zpracováváme</h2>
            <p>V rámci provozu webových stránek a pořádání festivalu zpracováváme následující osobní údaje:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kontaktní údaje (jméno, e-mail, telefon) při nákupu vstupenek</li>
              <li>Platební údaje nutné pro zpracování objednávky</li>
              <li>Cookies a technické údaje pro správné fungování webu</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">3. Účel zpracování</h2>
            <p>Vaše osobní údaje zpracováváme za účelem:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prodeje a distribuce vstupenek</li>
              <li>Komunikace související s festivalem</li>
              <li>Zajištění bezpečnosti a organizace akce</li>
              <li>Plnění zákonných povinností</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
              4. Pořizování audiovizuálních záznamů
            </h2>
            <p className="font-semibold text-orange-600 mb-4">
              Účastí na festivalu Bigboš vyjadřujete souhlas s pořizováním fotografií a videozáznamů.
            </p>
            <p>
              V rámci festivalu jsou pořizovány fotografie a videozáznamy pro propagační, dokumentační
              a archivní účely. Tyto materiály mohou být použity na webových stránkách festivalu,
              sociálních sítích, v tištěných materiálech a dalších propagačních kanálech.
            </p>
            <p className="mt-4">
              Pokud si nepřejete být zachyceni na fotografiích nebo videích, kontaktujte prosím
              organizátory festivalu nebo se vyhněte oblastem, kde probíhá natáčení.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">5. Doba uchovávání údajů</h2>
            <p>
              Osobní údaje uchováváme pouze po dobu nezbytně nutnou k naplnění účelu zpracování,
              případně po dobu stanovenou právními předpisy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">6. Vaše práva</h2>
            <p>V souvislosti se zpracováním vašich osobních údajů máte následující práva:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Právo na přístup k osobním údajům</li>
              <li>Právo na opravu nepřesných údajů</li>
              <li>Právo na výmaz údajů (právo být zapomenut)</li>
              <li>Právo na omezení zpracování</li>
              <li>Právo vznést námitku proti zpracování</li>
              <li>Právo na přenositelnost údajů</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">7. Cookies</h2>
            <p>
              Tyto webové stránky používají soubory cookies k zajištění správné funkčnosti webu.
              Používáme pouze nezbytné technické cookies. Žádné údaje nesdílíme s třetími stranami
              pro marketingové účely.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">8. Kontakt</h2>
            <p>
              Máte-li jakékoli dotazy ohledně zpracování osobních údajů nebo chcete uplatnit svá práva,
              kontaktujte nás prosím prostřednictvím kontaktních údajů uvedených v patičce těchto stránek.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">9. Změny podmínek</h2>
            <p>
              Tyto zásady ochrany osobních údajů můžeme čas od času aktualizovat. O případných změnách
              vás budeme informovat zveřejněním aktualizované verze na těchto webových stránkách.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Poslední aktualizace: 1. května 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
