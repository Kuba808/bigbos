import React, { useState } from "react";
import { motion } from "motion/react";
import { PlayCircle, X } from "lucide-react";
import restImg from "../../assets/artists/rest.jpg";
import ffoImg from "../../imports/Promofoto_FastFood.jpg?url";
import imodiumImg from "../../imports/Imodium_promo.jpg?url";
import kluciImg from "../../imports/kluci_promo.jpg?url";
import piskomilImg from "../../imports/Piskomil_promo.jpg?url";
import detskyImg from "../../imports/detsky_program.jpg?url";
import geraldImg from "../../imports/gerald_promo.jpg?url";
import joshuaImg from "../../imports/joshua_promo.jpg?url";
import djbrnImg from "../../imports/djbrn_promo.jpg?url";

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
      "Domácí kapela Imodium se na Bigboš vrací také po 16 letech. Za tu dobu stihli několikrát obměnit svou sestavu, dát si také malou pauzu, ale hlavně nahrát několik úspěšných alb a odehrát stovky koncertů – například samostatný koncert ve Fórum Karlín či akustický koncert v pražské Spirále. Předskakovali Avril Lavigne, Simple Plan či Muse. Deska Horizont byla nominována na cenu Anděl.",
    headliner: true,
    youtubeId: "5h_mlypwFEw?si=w6EMCgr0zqrCbeBH",
  },
  {
    name: "Gerald Clark Trio",
    genre: "Blues / Folk Rock",
    image: geraldImg,
    description:
      "Jihoafrický zpěvák a kytarista Gerald James Clark žije a tvoří v České republice. Nositel Grammy vystupuje v triu s českými muzikanty – kytaristou Jakubem Hlobilem a bubeníkem Antonínem Jínou. Jejich hudba je strhující směs blues, rocku a folk-rocku s výjimečně charismatickým frontmanem, jehož hlas sahá až do duše.",
    youtubeId: "AZtrRT_mhgk",
  },
  {
    name: "Joshua Curran",
    genre: "Indie Rock / Singer-Songwriter",
    image: joshuaImg,
    description:
      "Irsko-český zpěvák, skladatel a multi-instrumentalista Joshua Curran uchvacuje nakažlivým rockovým zvukem inspirovaným kapelami The Kooks, Inhaler či Arctic Monkeys. Vyrůstal mezi Prahou a Dublinem a svůj talent potvrdil i na mezinárodní scéně – spolupracoval na arménském příspěvku na Eurovision 2025. Patří k nejzajímavějším hlasům nové generace indie scény.",
    youtubeId: "CMD9MqYoQvU",
  },
  {
    name: "DJ BRN",
    genre: "Rap / Trap / Electronic",
    image: djbrnImg,
    description:
      "Broumovský DJ, který roztančí Křinice od prvního beatu. Jeho sety startují americkým a českým rapem a trapem a postupně přechází přes house a drum'n'bass až do tvrdšího techna. Domácí jméno regionální scény, které dobře zná každý, kdo v Broumově někdy slavil.",
    youtubeId: "usK0BVHKeeY",
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

// === EDITOVATELNÝ OBSAH ČASOVÝ HARMONOGRAM ===
// stage: "stage" (hlavní pódium) nebo "stan" (stan)
// highlight: true = zvýrazněný řádek (headliner / hlavní bod)
type ScheduleItem = {
  time: string;
  title: string;
  stage: "stage" | "stan" | "";
  highlight?: boolean;
};

const schedule: ScheduleItem[] = [
  { time: "12:30", title: "Otevření statku", stage: "" },
  { time: "13:00 – 13:45", title: "Joshua Curran", stage: "stage" },
  { time: "13:45 – 14:30", title: "Kuba Hejdánek / Eva Kroupová", stage: "stan" },
  { time: "14:45 – 15:30", title: "Pískomil se vrací", stage: "stage" },
  { time: "16:00 – 16:45", title: "Gerald Clark Trio", stage: "stage" },
  { time: "16:55 – 17:40", title: "Loutkové divadlo Tři prasátka (LokVar)", stage: "stan" },
  { time: "18:00 – 19:00", title: "REST", stage: "stage", highlight: true },
  { time: "19:10 – 19:40", title: "Rozhovory", stage: "stan" },
  { time: "20:00 – 21:00", title: "Fast Food Orchestra", stage: "stage", highlight: true },
  { time: "21:45 – 22:30", title: "Kluci", stage: "stage" },
  { time: "23:15 – 00:15", title: "Imodium", stage: "stage", highlight: true },
  { time: "00:30 – 01:20", title: "DJ BRN", stage: "stage" },
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

const stageLabels: Record<string, { label: string; className: string }> = {
  stage: { label: "Stage", className: "bg-orange-600 text-white" },
  stan: { label: "Stan", className: "bg-green-500 text-white" },
};

const ScheduleTimeline = () => (
  <div className="max-w-3xl mx-auto">
    <ul className="divide-y divide-slate-200 rounded-2xl bg-white shadow-lg overflow-hidden">
      {schedule.map((item, index) => (
        <motion.li
          key={item.time + item.title}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03 }}
          className={`flex items-center gap-4 px-5 py-4 sm:px-8 ${
            item.highlight ? "bg-orange-50" : ""
          }`}
        >
          <span className="font-display font-bold text-slate-900 tabular-nums text-sm sm:text-base w-28 sm:w-32 shrink-0">
            {item.time}
          </span>
          <span
            className={`flex-1 text-slate-800 ${
              item.highlight ? "font-bold" : ""
            }`}
          >
            {item.title}
          </span>
          {item.stage && (
            <span
              className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${stageLabels[item.stage].className}`}
            >
              {stageLabels[item.stage].label}
            </span>
          )}
        </motion.li>
      ))}
    </ul>
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
}: ArtistCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl aspect-[3/4] sm:aspect-[4/5] md:aspect-square lg:aspect-[4/3] shadow-xl bg-slate-900"
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
          <div
            className={`absolute inset-0 bg-gradient-to-t from-slate-900 ${isExpanded ? 'via-slate-900/90 to-slate-900/50' : 'via-slate-900/20 to-transparent'
              } transition-colors duration-300 opacity-90`}
          />

          <VideoOverlay onPlay={onPlay} />

          <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end pointer-events-none z-20">
            <div className="mt-auto pointer-events-none shrink-0">
              {(artist.headliner || artist.badge) && (
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold tracking-wider rounded-full mb-2 md:mb-3">
                  {artist.badge ?? "HEADLINER"}
                </span>
              )}
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                {artist.name}
              </h3>
              {artist.genre && (
                <p className="text-slate-300 mb-2 md:mb-3">
                  {artist.genre}
                </p>
              )}
            </div>

            <div
              className={`pointer-events-auto transition-all duration-300 ${isExpanded ? 'overflow-y-auto pr-2' : 'overflow-hidden'
                }`}
              style={isExpanded ? { maxHeight: '60%' } : {}}
            >
              <p
                className={`text-slate-200 text-sm md:text-base max-w-md ${isExpanded ? '' : 'line-clamp-2'
                  }`}
              >
                {artist.description}
              </p>
            </div>

            {artist.description.length > 80 && (
              <div className="pt-2 shrink-0 pointer-events-auto">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                  className="text-sm text-orange-400 font-bold hover:text-orange-300 transition-colors uppercase tracking-wider"
                >
                  {isExpanded ? 'Méně' : 'Více'}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
};

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
            Line-up 2026
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

        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
              Časový harmonogram
            </h3>
            <p className="text-slate-600 mt-2">
              Sobota 25. července 2026
            </p>
          </div>
          <ScheduleTimeline />
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-600" /> Stage
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" /> Stan
            </span>
          </div>
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