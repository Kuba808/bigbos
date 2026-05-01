import React from "react";
import {
  MapPin,
  Clock,
  Info as InfoIcon,
  Train,
  Car,
  Tent,
} from "lucide-react";
import { Button } from "./ui/button";
import putovaniImg from "../../imports/putovani.jpg?url";

export const Info = () => {
  return (
    <section id="info" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-8">
              Užitečné informace
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-orange-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                    Kde nás najdete?
                  </h3>
                  <p className="text-slate-600 mb-2">
                    Festival se koná na statku v Křinicích (č.p.
                    6), malebné vesničce v Broumovském výběžku.
                  </p>
                  <a
                    href="https://mapy.com/s/canavumoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Otevřít v mapách{" "}
                    <InfoIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Train className="text-blue-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                    Jak se k nám dostat?
                  </h3>
                  <p className="text-slate-600">
                    <strong>Vlakem/Autobusem:</strong> Dojeďte
                    do Broumova, odkud jezdí pravidelné spoje do
                    Křinic.
                    <br />
                    <strong>Autem:</strong> Dojeďte do Broumova,
                    odkud jezdí pravidelné spoje do Křinic.
                    <br />
                    <strong>Pěšky:</strong> Parkoviště 50 m od
                    statku na louce (parkovné 50 Kč).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Tent className="text-green-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                    Ubytování
                  </h3>
                  <p className="text-slate-600">
                    Možnost stanování přímo v areálu na
                    vyhrazené louce zdarma. V okolí jsou také
                    penziony (nutná rezervace předem).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h4 className="font-display font-bold text-lg mb-2">
                Putování na Bigboš
              </h4>
              <p className="text-slate-600 mb-4">
                Pochod na Bigboš se Švejkem. Občerstvení po dobu
                pochodu ZDARMA. Kárku s občerstvením potáhne
                Švejk za doprovodu živé hudby. Pohodová trasa
                dlouhá necelé 4 km a dobrá nálada.
              </p>
            </div>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={putovaniImg}
              alt="Putování na Bigboš"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
              <p className="text-lg font-medium">
                Křinice 6, 550 01 Broumov
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};