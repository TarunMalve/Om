'use client';

import * as React from 'react';
import { Card } from '@om/ui';
import { Shield, Target, Compass, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function MissionVision() {
  return (
    <section className="py-20 bg-neutral-gray-100/50 dark:bg-neutral-gray-100/10 border-y border-neutral-gray-300 dark:border-neutral-gray-700">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary-base">
            Ethos & Foundations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-black dark:text-neutral-white">
            Rooted in Dharma, Built for the Future
          </h2>
          <p className="max-w-xl mx-auto text-sm text-neutral-gray-500">
            Translating timeless wisdom into interactive learning journeys through open scholarship and ethical AI parameters.
          </p>
        </div>

        {/* Mission / Vision Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <Card className="p-8 flex flex-col gap-6 h-full border border-neutral-gray-300 dark:border-neutral-gray-700">
              <div className="h-12 w-12 rounded-lg bg-secondary-base/10 text-secondary-base flex items-center justify-center">
                <Target className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-black dark:text-neutral-white">
                  Our Mission
                </h3>
                <p className="text-sm text-neutral-gray-500 leading-relaxed">
                  To provide a scholarly, respectful, and digitally native access point for Sanatan Dharma's vast library of scriptures and philosophies. By combining word-by-word translations, multi-school commentaries, and AI guides, we serve students, researchers, and devotees globally.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-neutral-gray-300 dark:border-neutral-gray-700 flex items-center gap-2 text-xs font-bold text-secondary-base">
                <Heart className="h-4 w-4" />
                <span>Seva (Selfless Service)</span>
              </div>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Card className="p-8 flex flex-col gap-6 h-full border border-neutral-gray-300 dark:border-neutral-gray-700">
              <div className="h-12 w-12 rounded-lg bg-primary-base/10 text-primary-base flex items-center justify-center">
                <Compass className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-black dark:text-neutral-white">
                  Our Vision
                </h3>
                <p className="text-sm text-neutral-gray-500 leading-relaxed">
                  To form a globally interconnected semantic graph mapping every concept, person, place, and timeline event in Indian civilization history. We envision a world where spiritual depth and contemporary science cross-pollinate through structured, accessible civilizational ontology.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-neutral-gray-300 dark:border-neutral-gray-700 flex items-center gap-2 text-xs font-bold text-primary-base">
                <Shield className="h-4 w-4" />
                <span>Satya (Academic Integrity)</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
