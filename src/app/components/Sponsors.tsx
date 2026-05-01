import React from 'react';
import { motion } from 'motion/react';
import logoKhk from '../../imports/1_khk.jpg?url';
import logoBroumov from '../../imports/2_broumov.jpg?url';
import logoB2028 from '../../imports/3_b2028.jpg?url';
import logoMk from '../../imports/4_mk.jpg?url';
import logoInprotec from '../../imports/5_inprotec.jpg?url';
import logoHobra from '../../imports/6_hobra.jpg?url';
import logoNutricius from '../../imports/7_nutricius.jpg?url';
import logoZtrade from '../../imports/8_ztrade.jpg?url';
import logoAnalog from '../../imports/9_analogStore.jpg?url';
import logoGlobal from '../../imports/10_global.jpg?url';
import logoWalzel from '../../imports/11_walzel.jpg?url';
import logoSvoboda from '../../imports/12_silnice_svoboda.jpg?url';
import logoLazor from '../../imports/12_lazor.jpg?url';
import logoBsb from '../../imports/13_bsb.jpg?url';

// === EDITOVATELNÝ SEZNAM SPONZORŮ ===
const sponsors = [
  { name: 'Královéhradecký kraj', role: 'Realizováno za finanční podpory Královéhradeckého kraje', logo: logoKhk, url: 'https://www.kr-kralovehradecky.cz/' },
  { name: 'Město Broumov', role: 'Generální partner', logo: logoBroumov, url: 'https://www.broumov.net/' },
  { name: 'Broumov 2028+', role: 'Generální partner', logo: logoB2028, url: 'https://www.broumov2028.cz/' },
  { name: 'Ministerstvo kultury', role: 'Generální partner', logo: logoMk, url: 'https://www.mkcr.cz/' },
  { name: 'Inprotec', role: 'Generální partner', logo: logoInprotec, url: 'http://www.inprotec-sro.cz/' },
  { name: 'Hobra Školník', role: 'Generální partner', logo: logoHobra, url: 'https://www.hobra.cz/' },
  { name: 'Nutricius', role: 'Hlavní partner', logo: logoNutricius, url: 'https://nutricius.cz/' },
  { name: 'Z-Trade', role: 'Hlavní partner', logo: logoZtrade, url: 'https://www.z-trade.cz/' },
  { name: 'Analogstore.cz', role: 'Hlavní partner', logo: logoAnalog, url: 'https://analogstore.cz/' },
  { name: 'GlobalLux.cz', role: 'Hlavní partner', logo: logoGlobal, url: 'https://www.globallux.cz/' },
  { name: 'Centrum Walzel', role: 'Hlavní partner', logo: logoWalzel, url: 'https://www.walzel.cz/' },
  { name: 'Silnice Svoboda', role: 'Hlavní partner', logo: logoSvoboda, url: 'https://www.svoboda-cz.cz/' },
  { name: 'Zdeněk Lazor', role: 'Hlavní partner', logo: logoLazor, url: '#' },
  { name: 'BSB spol. s r.o.', role: 'Hlavní partner', logo: logoBsb, url: 'https://bsb-lisovna.cz/' },
];

export const Sponsors = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 via-orange-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Sponzoři</h2>
          <p className="text-xl text-slate-600 font-medium">Děkujeme moc za podporu festivalu!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 hover:border-orange-200 h-40"
              aria-label={sponsor.name}
            >
              <div className="flex-1 flex items-center justify-center w-full mb-3 opacity-90 group-hover:opacity-100 transition-opacity">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  loading="lazy"
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
              <div className="text-center w-full border-t border-slate-100 pt-2">
                <p className="text-slate-500 text-[9px] uppercase tracking-wider font-medium truncate w-full">
                  {sponsor.role}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
