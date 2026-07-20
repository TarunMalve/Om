'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button, Card } from '@om/ui';
import { Compass, Sparkles, BookOpen, ChevronRight, HelpCircle } from 'lucide-react';
import { useUIStore } from '../../store/use-ui-store.js';

export function HeroSection() {
  const setLearningLevel = useUIStore((state) => state.setLearningLevel);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden flex flex-col items-center">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-8 z-10">
        
        {/* Subtle Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary-base/20 bg-secondary-base/5 text-secondary-dark text-xs font-semibold tracking-wide uppercase"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>AI-Native Civilizational Explorer</span>
        </motion.div>

        {/* Sacred Core Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-neutral-black dark:text-neutral-white"
        >
          Illuminating the Wisdom of <br className="hidden sm:inline" />
          <span className="text-secondary-base bg-gradient-to-r from-secondary-base to-amber-500 bg-clip-text text-transparent">
            Sanatan Dharma
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-gray-500 font-medium leading-relaxed"
        >
          Explore interactive scripture translations, discover structural civilizational networks, and study alongside AI Acharya—your personalized Socratic mentor.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setLearningLevel('intermediate')}
            className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Begin Learning Journey</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="border border-neutral-gray-300 dark:border-neutral-gray-700 hover:bg-neutral-gray-100 dark:hover:bg-neutral-gray-700"
          >
            <span>Read Scriptures</span>
            <BookOpen className="ml-2 h-4 w-4 text-primary-base" />
          </Button>
        </motion.div>
      </div>

      {/* Symmetrical Interface Previews (Mock Visualizers) */}
      <div className="w-full max-w-5xl mx-auto px-4 mt-16 sm:mt-24 grid gap-8 md:grid-cols-2 z-10">
        
        {/* Mock AI Acharya Box */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <Card className="glass-panel overflow-hidden border border-neutral-gray-300 dark:border-neutral-gray-700 h-[320px] flex flex-col justify-between p-6">
            <div className="flex items-center justify-between border-b border-neutral-gray-300 dark:border-neutral-gray-700 pb-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-secondary-base/10 text-secondary-base flex items-center justify-center font-bold">
                  ॐ
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-black dark:text-neutral-white">AI Acharya</h3>
                  <span className="text-[10px] text-green-600 font-semibold uppercase">Socratic Mentor</span>
                </div>
              </div>
              <HelpCircle className="h-4 w-4 text-neutral-gray-500" />
            </div>

            <div className="flex-1 py-4 flex flex-col gap-3 justify-center">
              <div className="p-3 rounded-lg bg-neutral-gray-100 dark:bg-neutral-gray-700 text-xs text-neutral-gray-700 max-w-[85%] self-start border">
                “What is the meaning of Dharma in the context of the Gita's second chapter?”
              </div>
              <div className="p-3 rounded-lg bg-secondary-base/10 text-xs text-secondary-dark max-w-[85%] self-end border border-secondary-base/20 font-medium">
                “Dharma here represents righteous duty—selfless alignment with cosmic order. See Chapter 2, Verse 31...”
              </div>
            </div>

            <div className="text-[10px] text-neutral-gray-500 border-t border-neutral-gray-300 dark:border-neutral-gray-700 pt-3 flex justify-between">
              <span>Interactive dialogue simulation</span>
              <span className="text-secondary-base font-bold">Try asking →</span>
            </div>
          </Card>
        </motion.div>

        {/* Mock Knowledge Graph Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <Card className="glass-panel overflow-hidden border border-neutral-gray-300 dark:border-neutral-gray-700 h-[320px] flex flex-col justify-between p-6">
            <div className="flex items-center justify-between border-b border-neutral-gray-300 dark:border-neutral-gray-700 pb-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary-base/10 text-primary-base flex items-center justify-center">
                  <Compass className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-black dark:text-neutral-white">Ontology Graph</h3>
                  <span className="text-[10px] text-neutral-gray-500 uppercase font-semibold">Semantic Nodes</span>
                </div>
              </div>
              <span className="text-[10px] bg-neutral-gray-100 dark:bg-neutral-gray-700 px-2 py-0.5 rounded text-neutral-gray-500">
                142K Entities
              </span>
            </div>

            {/* Circular network mesh mockup */}
            <div className="flex-1 flex items-center justify-center relative">
              <div className="w-24 h-24 rounded-full border border-dashed border-secondary-base/40 flex items-center justify-center animate-spin duration-30000">
                <div className="h-3 w-3 rounded-full bg-secondary-base absolute top-0" />
                <div className="h-3 w-3 rounded-full bg-primary-base absolute bottom-0" />
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary-base/20 border border-secondary-base flex items-center justify-center font-bold text-xs absolute">
                Dharma
              </div>
            </div>

            <div className="text-[10px] text-neutral-gray-500 border-t border-neutral-gray-300 dark:border-neutral-gray-700 pt-3 flex justify-between">
              <span>Dynamic link resolution mapping</span>
              <span className="text-primary-base font-bold">Explore node →</span>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
