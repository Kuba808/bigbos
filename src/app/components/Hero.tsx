import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

// === EDITOVATELNÝ OBSAH HERO SEKCE ===
const heroContent = {
  title: 'Bigboš Křinice',
  subtitle: 'Hudební festival na statku s jedinečnou atmosférou uprostřed Křinic a přírody Broumovska.',
  date: '25. 7. 2026',
  location: 'Křinice 6 - statek',
  ctaLabel: 'Koupit Vstupenky',
  scrollLabel: 'Line-up',
  backgroundImage:
    'https://images.unsplash.com/photo-1761926826313-a1787661b7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwc3VtbWVyJTIwb3V0ZG9vciUyMGNyb3dkJTIwY29uY2VydHxlbnwxfHx8fDE3NjQ4NDQ3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
};

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroContent.backgroundImage}
          alt="Festival crowd"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">
            {heroContent.title}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-slate-200 max-w-2xl mx-auto">
            {heroContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <Calendar className="text-orange-400 h-5 w-5" />
            <span className="font-semibold">{heroContent.date}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <MapPin className="text-orange-400 h-5 w-5" />
            <span className="font-semibold">{heroContent.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-10 py-6 rounded-full shadow-lg shadow-orange-600/30 transform hover:scale-105 transition-all duration-300">
            {heroContent.ctaLabel}
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">{heroContent.scrollLabel}</span>
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </div>
  );
};
