import React from 'react';
import { Hero } from '../components/Hero';
import { Lineup } from '../components/Lineup';
import { Info } from '../components/Info';
import { Tickets } from '../components/Tickets';
import { About } from '../components/About';
import { Sponsors } from '../components/Sponsors';

import gallery1 from '../../assets/gallery/bigbos-2024-1.jpg';
import gallery2 from '../../assets/gallery/bigbos-2024-2.jpg';
import gallery3 from '../../assets/gallery/bigbos-2024-3.jpg';
import gallery4 from '../../assets/gallery/bigbos-2024-4.jpg';
import gallery5 from '../../assets/gallery/bigbos-2024-5.jpg';
import gallery6 from '../../assets/gallery/bigbos-2024-6.jpg';
import gallery7 from '../../assets/gallery/bigbos-2024-7.jpg';
import gallery8 from '../../assets/gallery/bigbos-2024-8.jpg';
import gallery9 from '../../assets/gallery/bigbos-2024-9.jpg';
import gallery10 from '../../assets/gallery/bigbos-2024-10.jpg';
import gallery11 from '../../assets/gallery/bigbos-2024-11.jpg';
import gallery12 from '../../assets/gallery/bigbos-2024-12.jpg';
import gallery13 from '../../assets/gallery/bigbos-2024-13.jpg';

// === EDITOVATELNÝ OBSAH GALERIE ===
const galleryContent = {
  title: 'Jaký byl Bigboš 2025?',
  videoSubtitle: 'Video ohlédnutí',
  photos: [
    { src: gallery1, alt: 'Bigboš festival 2024 - atmosféra', wide: false },
    { src: gallery2, alt: 'Bigboš festival 2024 - koncert', wide: true },
    { src: gallery3, alt: 'Bigboš festival 2024 - publikum', wide: false },
    { src: gallery4, alt: 'Bigboš festival 2024 - kapela', wide: false },
    { src: gallery5, alt: 'Bigboš festival 2024 - scéna', wide: false },
    { src: gallery6, alt: 'Bigboš festival 2024 - večer', wide: false },
    { src: gallery7, alt: 'Bigboš festival 2024 - fanoušci', wide: false },
    { src: gallery8, alt: 'Bigboš festival 2024', wide: false },
    { src: gallery9, alt: 'Bigboš festival 2024', wide: false },
    { src: gallery10, alt: 'Bigboš festival 2024', wide: true },
    { src: gallery11, alt: 'Bigboš festival 2024', wide: false },
    { src: gallery12, alt: 'Bigboš festival 2024', wide: false },
    { src: gallery13, alt: 'Bigboš festival 2024', wide: false },
  ],
  videos: [
    { id: '_B0iravzzVY', title: 'Bigboš ohlédnutí 1' },
    { id: '5SnoVMchPWk', title: 'Bigboš ohlédnutí 2' },
  ],
};

const YouTubeEmbed = ({ videoId, title }: { videoId: string; title: string }) => (
  <div className="rounded-2xl overflow-hidden shadow-lg bg-black aspect-video w-full">
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Lineup />
      <Tickets />
      <Info />

      <section id="gallery" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-12">{galleryContent.title}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {galleryContent.photos.map((photo, i) => (
              <div
                key={i}
                className={`aspect-square rounded-2xl overflow-hidden bg-slate-200 ${photo.wide ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-slate-700 mb-8">{galleryContent.videoSubtitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryContent.videos.map((v, i) => (
                <YouTubeEmbed key={i} videoId={v.id} title={v.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <About />
      <Sponsors />
    </>
  );
}
