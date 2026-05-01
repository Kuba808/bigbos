import React from 'react';
import { motion } from 'motion/react';
import { Music2, Tent, Beer, Bike, Trees, Heart } from 'lucide-react';

const features = [
  {
    title: 'Stylově nevázaní',
    description: 'Na Bigboši namátkou v minulosti vystoupili: Vypsaná fiXa, Buty, Mňága, Michal Pavlíček, Sunshine, Airfare, Pavel Dobeš, Fast food Orchestra, 4 akordy ... Stylové rozmanitosti se u nás meze nekladou.',
    icon: Music2,
    color: 'bg-rose-100 text-rose-600'
  },
  {
    title: 'Kultura na statku',
    description: 'Společně budujeme tradici hudební akce na unikátním místě, která zajímá širokou veřejnost a přispívá ke kulturní rozmanitosti Broumovska.',
    icon: Heart,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    title: 'Křinice naše milé',
    description: 'Obec se nachází v malebném úpatí Broumovských stěn. Statek je pár metrů od pastviny pro ovce a hned vedle rybníčka a polí. Ideální místo k odpočinku vybízí na chvíli "vypnout" a pobavit se u dobré hudby, jídla i pití.',
    icon: Trees,
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Lidé stanujte',
    description: 'Louka vedle statku je připravena pro vás k volnému stanování. Nemusíte se pak štrachat po silnici do města a v klidu složíte hlavu na místě.',
    icon: Tent,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Pěšky, na kole, busem',
    description: 'Doporučujeme dorazit na festival z blízkého okolí pěšky, na kole nebo busem. Parkoviště je hned u silnice na posekané louce před statkem (parkovné 50 Kč).',
    icon: Bike,
    color: 'bg-yellow-100 text-yellow-700'
  },
  {
    title: 'Dobré jídlo i pití',
    description: 'Na statku najdete jídla dostatek: klobásy, buřty, něco vege i okurku do ruky pro znalce. K pití dvě značky píva a slušný výběr panáčků a drinků.',
    icon: Beer,
    color: 'bg-amber-100 text-amber-600'
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            O bigboši
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Festival s jedinečnou atmosférou v srdci Broumovska.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className={`p-4 rounded-2xl mb-6 ${feature.color}`}>
                <feature.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
