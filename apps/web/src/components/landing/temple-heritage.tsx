'use client';

import * as React from 'react';
import { Card } from '@om/ui';
import { Landmark, MapPin, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function TempleHeritage() {
  const temples = [
    {
      name: 'Brihadeeswarar Temple',
      location: 'Thanjavur, Tamil Nadu',
      era: '1010 CE (Chola Dynasty)',
      architecture: 'Dravidian Architecture',
      desc: 'Famous for its massive granite vimana tower, mapping sacred geometry and astrological alignments.'
    },
    {
      name: 'Konark Sun Temple',
      location: 'Konark, Odisha',
      era: '1250 CE (Eastern Ganga)',
      architecture: 'Kalinga Architecture',
      desc: 'Structured as a massive chariot representing the solar cycle, functioning as an astronomical calendar.'
    },
    {
      name: 'Kandariya Mahadeva',
      location: 'Khajuraho, Madhya Pradesh',
      era: '1030 CE (Chandela Dynasty)',
      architecture: 'Nagara Architecture',
      desc: 'Symbolizes the cosmic mountain Meru, incorporating structural fractal grids in sandstone.'
    }
  ];

  const [activeIdx, setActiveIdx] = React.useState(0);

  return (
    <section className="py-20 bg-neutral-gray-100/50 dark:bg-neutral-gray-100/10 border-y border-neutral-gray-300 dark:border-neutral-gray-700">
      <div className="max-w-5xl mx-auto px-4 space-y-12 w-full">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary-base">
            Pilgrimage & Sacred Sites
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-black dark:text-neutral-white">
            Temple Architecture & Mapping
          </h2>
          <p className="max-w-xl mx-auto text-sm text-neutral-gray-500">
            Explore major sacred heritage sites, charting their geographic location, historical dynastic sponsors, and structural design blueprints.
          </p>
        </div>

        {/* Temple Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {temples.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: idx * 0.1 }}
              onClick={() => setActiveIdx(idx)}
              className="cursor-pointer"
            >
              <Card
                className={`p-6 h-full border flex flex-col justify-between transition-all duration-300 ${
                  activeIdx === idx
                    ? 'border-secondary-base bg-secondary-base/5 shadow-md scale-[1.02]'
                    : 'border-neutral-gray-300 dark:border-neutral-gray-700 hover:border-neutral-gray-500'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Landmark className={`h-5 w-5 ${activeIdx === idx ? 'text-secondary-base' : 'text-neutral-gray-500'}`} />
                    <span className="text-[9px] font-mono font-bold bg-neutral-gray-100 dark:bg-neutral-gray-700 px-2 py-0.5 rounded text-neutral-gray-500">
                      {t.architecture.split(' ')[0]}
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="font-bold text-neutral-black dark:text-neutral-white">
                      {t.name}
                    </h3>
                    <p className="text-[10px] text-neutral-gray-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-red-500" />
                      {t.location}
                    </p>
                    <p className="text-xs text-neutral-gray-500 leading-relaxed pt-2">
                      {t.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-gray-300 dark:border-neutral-gray-700 mt-6 flex justify-between items-center text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider">
                  <span>{t.era}</span>
                  {activeIdx === idx && (
                    <span className="text-secondary-base flex items-center gap-0.5">
                      Explore Map <ArrowRight className="h-3 w-3" />
                    </span>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
