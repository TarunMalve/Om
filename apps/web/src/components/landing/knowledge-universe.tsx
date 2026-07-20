'use client';

import * as React from 'react';
import { Card } from '@om/ui';
import { BookOpen, Compass, Layers, Globe, Star, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function KnowledgeUniverse() {
  const categories = [
    {
      title: 'Vedas',
      desc: 'The foundational liturgical texts mapping Vedic sanskrit verses and sonic patterns.',
      count: '4 Primary Samhitas',
      icon: Layers,
      color: 'bg-amber-500/10 text-amber-600',
    },
    {
      title: 'Upanishads',
      desc: 'Philosophical texts exploring Brahman, Atman, and self-realization dialogues.',
      count: '108 Upanishads mapped',
      icon: Compass,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      title: 'Bhagavad Gita',
      desc: 'The dialogue of Dharma, Karma, and Bhakti on the battlefield of Kurukshetra.',
      count: '700 Verses & Commentaries',
      icon: BookOpen,
      color: 'bg-orange-500/10 text-orange-600',
    },
    {
      title: 'Itihasa',
      desc: 'The historical epics of Ramayana and Mahabharata tracking cultural genealogy.',
      count: 'Full journeys mapped',
      icon: Globe,
      color: 'bg-emerald-500/10 text-emerald-600',
    },
    {
      title: 'Puranas',
      desc: 'Sacred histories and cosmological descriptions of deities, kings, and cycles.',
      count: '18 Mahapuranas',
      icon: Star,
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      title: 'Darshanas',
      desc: 'The six orthodox philosophical schools detailing Indian cognitive science.',
      count: 'Sankhya, Yoga, Nyaya, etc.',
      icon: FileText,
      color: 'bg-rose-500/10 text-rose-600',
    },
  ];

  return (
    <section className="py-20 flex flex-col items-center">
      <div className="max-w-5xl mx-auto px-4 space-y-12 w-full">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-base">
            Scripture Index
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-black dark:text-neutral-white">
            Explore the Knowledge Universe
          </h2>
          <p className="max-w-xl mx-auto text-sm text-neutral-gray-500">
            Select a category of classical Sanskrit scriptures to view translations, annotations, and commentaries.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: index * 0.1 }}
              >
                <Card
                  interactive
                  className="p-6 h-full flex flex-col gap-4 border border-neutral-gray-300 dark:border-neutral-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${cat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-neutral-black dark:text-neutral-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-neutral-gray-500 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="mt-auto text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider">
                    {cat.count}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
