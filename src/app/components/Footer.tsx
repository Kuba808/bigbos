import React from "react";
import { Link } from "react-router";

// === EDITOVATELNÝ OBSAH PATIČKY ===
const footerContent = {
  brand: "Bigboš Křinice",
  description:
    "Festival s dlouholetou tradicí, který spojuje skvělou hudbu, přátelskou atmosféru a krásu broumovské přírody.",
  socials: [
    {
      label: "FB",
      url: "https://www.facebook.com/bigboskrinice",
    },
    {
      label: "IG",
      url: "https://www.instagram.com/bigbos_krinice/",
    },
    {
      label: "YT",
      url: "https://www.youtube.com/@bigboskrinice4155",
    },
  ],
  contact: [
    "bigboskrinice@gmail.com",
    "+420 602 573 082",
    "Křinice 6",
    "550 01 Broumov",
  ],
  quickLinks: [
    { label: "Line-up", url: "#lineup", internal: false },
    { label: "Info", url: "#info", internal: false },
    { label: "Galerie", url: "#gallery", internal: false },
    { label: "Ochrana dat", url: "/ochrana-osobnich-udaju", internal: true },
    { label: "Všeobecné podmínky", url: "/vseobecne-podminky", internal: true },
  ],
  copyright:
    "© 2026 Bigboš Křinice. Vytvořeno pomocí tvoji mámy.",
};

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl font-bold mb-4 text-orange-500">
              {footerContent.brand}
            </h2>
            <p className="text-slate-300 max-w-md mb-6">
              {footerContent.description}
            </p>
            <div className="flex gap-4">
              {footerContent.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-4">
              Kontakt
            </h3>
            <ul className="space-y-2 text-slate-300">
              {footerContent.contact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-4">
              Rychlé odkazy
            </h3>
            <ul className="space-y-2 text-slate-300">
              {footerContent.quickLinks.map((link) => (
                <li key={link.label}>
                  {link.internal ? (
                    <Link
                      to={link.url}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.url}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-slate-400 text-sm">
          {footerContent.copyright}
        </div>
      </div>
    </footer>
  );
};