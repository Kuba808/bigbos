import React, { useState } from "react";
import { motion } from "motion/react";
import { PlayCircle, X } from "lucide-react";
import restImg from "../../assets/artists/rest.jpg";
import ffoImg from "../../imports/Promofoto_FastFood.jpg?url";
import imodiumImg from "../../imports/Imodium_promo.jpg?url";
import kluciImg from "../../imports/kluci_promo.jpg?url";
import piskomilImg from "../../imports/Piskomil_promo.jpg?url";
import detskyImg from "../../imports/detsky_program.jpg?url";

type Artist = {
  name: string;
  genre?: string;
  image: string;
  description: string;
  headliner?: boolean;
  badge?: string;
  youtubeId: string;
};

const artists: Artist[] = [
  {
    name: "Rest",
    genre: "Hip Hop / Rap",
    image: restImg,
    description:
      "Český raper a MC, který od roku 2010 působí v labelu Ty Nikdy. Natočil několik desek, z toho jedna byla nominována na cenu Anděl. Letos se zúčastnil české reality show Survivor.",
    headliner: true,
    youtubeId: "4vyMm_ATHxA?si=sWXB3TSViLL2VLBQ",
  },
  {
    name: "Fast Food Orchestra",
    genre: "Ska / Reggae / Pop",
    image: ffoImg,
    description:
      "Fast Food Orchestra se po 16 letech vrací na Bigboš Křinice. Můžete se opět těšit na svěží kombinaci ska, reggae, popu a dalších žánrů. S charakteristickým energickým zvukem, chytlavými melodiemi a pozitivní atmosférou se rychle stali jednou z nejvýraznějších kapel na české hudební scéně.",
    headliner: true,
    youtubeId: "2_YuoaB6_HQ?si=tFOksGDdWtwBRAMX",
  },
  {
    name: "Imodium",
    genre: "Alternative Rock",
    image: imodiumImg,
    description:
      "Domácí kapela Imodium se na Bigboš vrací také po 16 letech. Za tu dobu stihli několikrát obměnit svou sestavu, dát si také malou pauzu, ale hlavně nahrát několik úspěšných alb a odehrát stovky koncertů – například samostatný koncert ve Fórum Karlín či akustický koncert v pražské Spirále. Předskakovali Avril Lavigne, Simple Plan či Muse. Mnohokrát zvítězili v Žebřík Music Awards a deska Horizont byla nominována na cenu Anděl.",
    youtubeId: "5h_mlypwFEw?si=w6EMCgr0zqrCbeBH",
  },
  {
    name: "Kluci",
    genre: "Electro / Punk",
    image: kluciImg,
    description:
      "Kapela KLUCI to je diskotéka na entou a punk všude okolo. Kombinace různých elektronických vychytávek a punk rocku dává dohromady energetický mix na vlně kapel jako Hadouken, Does It Offend You, Yeah? a The Death Set. Taneční párty smrti. Sestava KLUCI vznikla v roce 2010 v Křinicích na statku u Broumova.",
    youtubeId: "QuJQoLkJ52A?si=cOkvpxhroILT6DTb",
  },
];

const kidsProgram: Artist[] = [
  {
    name: "Pískomil se vrací",
    genre: "Pro děti",
    description:
      "Pískomil se vrací na Bigboš po 3 letech. Patří k jedné z mála profesionálních kapel, která se věnuje výhradně moderní dětské tvorbě a tvoří mezigenerační zábavu, při které se baví nejen děti, ale i rodiče. Při živelném koncertu si užijete vtipné a originální texty, našlápnuté písničky, barevné kostýmy a skvělou práci s dětským publikem.",
    image: piskomilImg,
    youtubeId: "pguo6ILKxoA?si=ah7ZHveW0tzXY0ur",
  },
  {
    name: "Dětský program",
    genre: "Doprovodný program",
    description:
      "Výstava traktorů, slámová hora, pletení věnců, malování na obličej, skákací hrad, dobrůtky.",
    image: detskyImg,
    youtubeId: "dQw4w9WgXcQ",
  },
];

const VideoOverlay = ({ onPlay }: { onPlay: () => void }) => (
  <>
    <div className="hidden md:flex absolute inset-0 z-10 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPlay();
        }}
        aria-label="Přehrát video"
        className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full p-4 transition-all transform hover:scale-110"
      >
        <PlayCircle className="w-16 h-16" strokeWidth={1} />
      </button>
    </div>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onPlay();
      }}
      aria-label="Přehrát video"
      className="md:hidden absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md text-white rounded-full p-2 shadow-lg active:scale-95 transition-transform"
    >
      <PlayCircle className="w-9 h-9" strokeWidth={1.5} />
    </button>
  </>
);

const YouTubeEmbed = ({
  videoId,
  onClose,
  className = "",
}: {
  videoId: string;
  onClose: () => void;
  className?: string;
}) => (
  <div
    className={`bg-black animate-in fade-in duration-300 ${className}`}
  >
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
    >
      <X className="w-6 h-6" />
    </button>
  </div>
);

type ArtistCardProps = {
  artist: Artist;
  index: number;
  isPlaying: boolean;
  onPlay: () => void;
  onClose: () => void;
};

const ArtistCard = ({
  artist,
  index,
  isPlaying,
  onPlay,
  onClose,
}: ArtistCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="group relative overflow-hidden rounded-2xl aspect-[16/10] shadow-xl bg-slate-900"
  >
    {isPlaying ? (
      <YouTubeEmbed
        videoId={artist.youtubeId}
        onClose={onClose}
        className="absolute inset-0 z-20"
      />
    ) : (
      <>
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />

        <VideoOverlay onPlay={onPlay} />

        <div className="absolute bottom-0 left-0 p-8 pointer-events-none">
          {(artist.headliner || artist.badge) && (
            <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold tracking-wider rounded-full mb-3">
              {artist.badge ?? "HEADLINER"}
            </span>
          )}
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
            {artist.name}
          </h3>
          {artist.genre && (
            <p className="text-slate-300 mb-4">
              {artist.genre}
            </p>
          )}
          <p className="text-slate-200 text-sm md:text-base max-w-md line-clamp-2">
            {artist.description}
          </p>
        </div>
      </>
    )}
  </motion.div>
);

export const Lineup = () => {
  const [playingArtist, setPlayingArtist] = useState<
    string | null
  >(null);

  const headliners = artists.filter((a) => a.headliner);
  const others = artists.filter((a) => !a.headliner);

  const renderCard = (artist: Artist, index: number) => (
    <ArtistCard
      key={artist.name}
      artist={artist}
      index={index}
      isPlaying={playingArtist === artist.name}
      onPlay={() => setPlayingArtist(artist.name)}
      onClose={() => setPlayingArtist(null)}
    />
  );

  return (
    <section id="lineup" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Line-up 2025
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Připravili jsme pro vás pestrý mix žánrů. Od popu
            přes hip hop až po folk a indie rock.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {headliners.map(renderCard)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {others.map(renderCard)}
        </div>

        <div className="bg-orange-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl font-bold text-slate-900">
              Dětský program
            </h3>
            <p className="text-slate-600 mt-2">
              Zábava pro celou rodinu
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kidsProgram.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
};