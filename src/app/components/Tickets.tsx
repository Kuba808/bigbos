import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

// === EDITOVATELNÝ OBSAH SEKCE VSTUPENKY ===
const ticketsContent = {
  title: 'Vstupenky',
  subtitle: 'Kupte si lístky v předprodeji za zvýhodněnou cenu a vyhněte se frontám na místě.',
};

const tickets = [
  {
    title: 'Předprodej',
    subtitle: 'Dospělý',
    price: '490 Kč',
    priceColor: 'text-orange-500',
    features: ['Vstup na celý festival', 'Stanování zdarma'],
    cta: { label: 'Koupit', url: 'https://www.smsticket.cz/vstupenky/70434-bigbos-krinice-2026-21-rocnik', disabled: false },
    highlight: true,
  },
  {
    title: 'Předprodej',
    subtitle: 'Děti a mladiství (do 18 let)',
    price: '190 Kč',
    priceColor: 'text-orange-400',
    features: ['Vstup na celý festival', 'Stanování zdarma'],
    cta: { label: 'Koupit', url: 'https://www.smsticket.cz/vstupenky/70434-bigbos-krinice-2026-21-rocnik', disabled: false },
    highlight: true,
  },
  {
    title: 'Na místě',
    subtitle: 'Dospělý',
    price: '590 Kč',
    priceColor: 'text-slate-200',
    features: ['Vstup na celý festival', 'Stanování zdarma', 'Platba hotově i kartou'],
    cta: { label: 'Až na místě', url: '#', disabled: true },
    highlight: false,
  },
  {
    title: 'Na místě',
    subtitle: 'Děti a mladiství (do 18 let)',
    price: '290 Kč',
    priceColor: 'text-slate-300',
    features: ['Vstup na celý festival', 'Stanování zdarma', 'Platba hotově i kartou'],
    cta: { label: 'Až na místě', url: '#', disabled: true },
    highlight: false,
  },
  {
    title: 'Děti do 3 let',
    subtitle: '(včetně)',
    price: 'Zdarma',
    priceColor: 'text-green-400',
    features: ['Vstup v doprovodu rodičů', 'Stanování zdarma'],
    note: 'Není potřeba lístek',
    highlight: false,
  },
];

export const Tickets = () => {
  return (
    <section id="tickets" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">{ticketsContent.title}</h2>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">{ticketsContent.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {tickets.map((ticket) => (
            <div
              key={`${ticket.title}-${ticket.subtitle}`}
              className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 flex flex-col transition-colors ${ticket.highlight ? 'hover:border-orange-500/50' : ''
                }`}
            >
              <div className="mb-4">
                <h3 className="font-display text-xl font-bold">{ticket.title}</h3>
                <p className="text-slate-300 text-sm mt-1">{ticket.subtitle}</p>
                <div className={`font-display text-3xl font-bold mt-3 ${ticket.priceColor}`}>{ticket.price}</div>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-slate-100 text-sm">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> {feature}
                  </li>
                ))}
              </ul>
              {ticket.cta ? (
                ticket.cta.disabled ? (
                  <Button
                    variant="outline"
                    className="w-full border-slate-500 text-slate-100 hover:bg-slate-700 hover:text-white py-5 text-base cursor-not-allowed opacity-50"
                    disabled
                  >
                    {ticket.cta.label}
                  </Button>
                ) : (
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white py-5 text-base">
                    <a href={ticket.cta.url}>{ticket.cta.label}</a>
                  </Button>
                )
              ) : (
                <div className="h-12 flex items-center justify-center text-slate-300 font-medium text-sm">{ticket.note}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
