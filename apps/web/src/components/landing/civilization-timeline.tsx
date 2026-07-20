'use client';

import * as React from 'react';
import { Card } from '@om/ui';
import { Compass, Book, ArrowRight, Activity, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function CivilizationTimeline() {
  const events = [
    {
      era: 'c. 1500 BCE - 1000 BCE',
      title: 'Vedic Samhita Period',
      desc: 'Formulation of early Rigveda hymns, sonic metrics, and rituals establishing structural cosmic order.',
      icon: Compass,
      detail: 'Rigveda, Samaveda mapping'
    },
    {
      era: 'c. 800 BCE - 500 BCE',
      title: 'Upanishadic Dialogues',
      desc: 'The emergence of spiritual inquiries focusing on Atman, Brahman, and philosophical inquiry methods.',
      icon: Book,
      detail: 'Mundaka, Katha Upanishads'
    },
    {
      era: 'c. 500 BCE - 200 BCE',
      title: 'Epics & Sutras Era',
      desc: 'Drafting of the Ramayana, Mahabharata, and early systemization of the six orthodox Darshanas.',
      icon: Calendar,
      detail: 'Valmiki, Vyasa compositions'
    },
    {
      era: 'c. 400 CE - 1000 CE',
      title: 'Classical Golden Age',
      desc: 'Expansion of temple architecture styles (Dravidian/Nagara) alongside advanced Aryabhata mathematics.',
      icon: Activity,
      detail: 'Nalanda development'
    }
  ];

  return (
    <section className="py-20 bg-neutral-gray-100/50 dark:bg-neutral-gray-100/10 border-y border-neutral-gray-300 dark:border-neutral-gray-700">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary-base">
            Chronological Progression
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-black dark:text-neutral-white">
            Civilization Journey Maps
          </h2>
          <p className="max-w-xl mx-auto text-sm text-neutral-gray-500">
            A vertical timeline mapping the evolution of scriptures, dynasties, philosophical schools, and architectural structures.
          </p>
        </div>

        {/* Timeline Line Grid */}
        <div className="relative border-l border-neutral-gray-300 dark:border-neutral-gray-700 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-12">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Circle Bullet */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1 h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-secondary-base bg-neutral-white dark:bg-neutral-gray-100 flex items-center justify-center text-secondary-base">
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>

                <div className="space-y-2">
                  {/* Era Header */}
                  <span className="text-[10px] font-bold text-secondary-base bg-secondary-base/10 px-2 py-0.5 rounded uppercase tracking-wider">
                    {event.era}
                  </span>
                  
                  {/* Event Details Card */}
                  <Card className="p-6 border border-neutral-gray-300 dark:border-neutral-gray-700 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-neutral-black dark:text-neutral-white">
                      {event.title}
                    </h3>
                    <p className="text-xs text-neutral-gray-500 leading-relaxed mt-1">
                      {event.desc}
                    </p>
                    <div className="mt-4 pt-3 border-t border-neutral-gray-300 dark:border-neutral-gray-700 flex items-center justify-between text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider">
                      <span>Ref: {event.detail}</span>
                      <span className="text-primary-base flex items-center gap-1">
                        Explore Journey <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
