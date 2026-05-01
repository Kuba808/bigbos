import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
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
          Všeobecné podmínky festivalu Bigboš Křinice
        </h1>

        <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Základní ustanovení</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Zaplacené vstupné se nevrací.</li>
              <li>Na festivalu a koncertech je zákaz konzumace alkoholu a jiných omamných látek pro osoby mladší 18 let.</li>
              <li>Děti do 3 let (včetně) mají na festival vstup zdarma. Do 15 let věku je pro účast na festivalu nebo koncertě nutný doprovod dospělé osoby.</li>
              <li>Za ztracené vstupenky není poskytována náhrada.</li>
              <li>Padělání vstupenek je trestné.</li>
              <li>Výherní vstupenky ze soutěží a vstupenky s nulovou cenou jsou dále neprodejné.</li>
              <li>Dodatečnými úpravami se vstupenka stává neplatnou.</li>
              <li>Pořadatel neodpovídá za pravost či platnost vstupenek zakoupených mimo oficiální předprodej.</li>
              <li>Pořadatel neodpovídá za potíže způsobené neoprávněným použitím nebo zkopírováním vstupenky.</li>
              <li>Umožní-li majitel vstupenky její zkopírování, bude vstup povolen pouze tomu, kdo přijde s identickou vstupenkou jako první.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Pravidla chování</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Držitelé vstupenky jsou povinni řídit se pravidly stanovenými pořadatelem akce.</li>
              <li>Změny programu a účinkujících jsou vyhrazeny.</li>
              <li>Po výměně vstupenky za identifikační pásku jste povinni mít pásku na ruce po celou dobu její platnosti.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Souhlas s pořizováním záznamů</h2>
            <p className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-r-lg">
              <strong className="text-orange-700">Návštěvníci zakoupením vstupenky a vstupem do areálu/prostoru koncertu nebo námi jinak pořádaných akcí souhlasí s pořizováním fotografií a videozáznamů své osoby.</strong> Tyto fotografie a videozáznamy mohou být pořadatelem použity pro jakékoliv reklamní, propagační a jiné účely, a to bezplatně.
            </p>
            <p>Zakoupením vstupenky dáváte souhlas s marketingovým oslovením.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Domácí zvířata</h2>
            <p className="bg-slate-50 border-l-4 border-slate-400 p-4 rounded-r-lg">
              Pro psy a další domácí zvířata je hlučné festivalové prostředí stresující. S ohledem na jejich zdraví i na bezpečnost návštěvníků nebudou zvířata do areálu i kempu vpuštěna. Raději je nechte v pohodlí domova.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Bezpečnostní pravidla</h2>
            <p>
              Každý rok je pro nás prioritou zajistit bezpečný průběh festivalu. Abychom toho mohli docílit, je důležité, aby každý dodržoval bezpečností pravidla, a to jak ve svém zájmu, tak v zájmu ostatních návštěvníků.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Při každém vstupu do festivalového areálu budou návštěvníci podrobeni bezpečnostní kontrole, zda do areálu nevnášíte nepovolené předměty.</li>
              <li>Do areálu je povolen vstup pouze s platnou identifikační páskou. Identifikační pásku po dobu celého festivalu nesundávejte.</li>
              <li>V celém areálu festivalu i v kempech je přísný zákaz rozdělávání ohně, grilovacích zařízení, plynových vařičů a dalších podobných.</li>
              <li>Bezpečnostní služba má právo vykázat z areálu neautorizované prodejce, osoby narušující poklidný průběh festivalu a návštěvníky bez platné identifikační pásky.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Zakázané předměty</h2>
            <p className="font-semibold text-red-600">
              Do areálu festivalu Bigboš Křinice je ZAKÁZÁNO vnášet tyto předměty:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>drogy, toxické a omamné látky</li>
              <li>záznamová zařízení, a to datová, obrazová i zvuková (s výjimkou mobilu)</li>
              <li>výbušné látky – trhaviny, třaskaviny</li>
              <li>láhve (plast, tvrdý plast, hliník a další pevné materiály), sklo</li>
              <li>zbraně – střelné, sečné, nože, nůžky</li>
              <li>potraviny, nápoje – mimo doložených zdravotními důvody</li>
              <li>profesionální fotoaparáty/videokamery se stativem, snímatelným objektivem, profesionální zařízení s teleobjektivem</li>
              <li>jízdní kola, koloběžky, longboard/skateboard</li>
              <li>alkohol</li>
              <li>teleskopické tyče, včetně selfie tyčí</li>
              <li>předměty s laserovým paprskem</li>
              <li>zvířata</li>
              <li>drony</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Propagační materiály</h2>
            <p>
              V areálu je ZAKÁZÁNO vylepovat nebo rozdávat jakékoliv propagační materiály, které nebyly předem povoleny organizátorem a nejsou oficiálními partnery akce. Kromě toho není dovoleno vylepovat materiály s vulgárními a dalšími nápisy, které odporují dobrým mravům.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Tyto podmínky jsou platné od 1. května 2026. Pořadatel si vyhrazuje právo tyto podmínky kdykoli změnit nebo doplnit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
