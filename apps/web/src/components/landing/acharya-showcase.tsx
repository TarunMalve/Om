'use client';

import * as React from 'react';
import { Card, Button } from '@om/ui';
import { Sparkles, MessageCircle, ArrowRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function AcharyaShowcase() {
  const conversations = [
    {
      q: 'How does the Gita describe the concept of Nishkama Karma?',
      a: 'Nishkama Karma is selfless action performed without desire for its fruits. As Sri Krishna states in Chapter 2, Verse 47: "Karmaṇyevādhikāraste mā phaleṣu kadācana"—Your right is to action alone, never to its fruits.',
      citation: 'Bhagavad Gita 2.47',
      school: 'Advaita Commentary by Shankara'
    },
    {
      q: 'What is the relationship between the macrocosm and the microcosm in the Upanishads?',
      a: 'The Upanishads resolve this through the equation: "Aham Brahmasmi" (I am Brahman). The inner self (Atman) is identical to the ultimate cosmic reality (Brahman). This is expounded in the Chandogya Upanishad.',
      citation: 'Chandogya Upanishad 6.8.7',
      school: 'Vishishtadvaita Commentary by Ramanuja'
    }
  ];

  const [activeIdx, setActiveIdx] = React.useState(0);

  return (
    <section className="py-20 flex flex-col items-center">
      <div className="max-w-5xl mx-auto px-4 space-y-12 w-full">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-base">
            Socratic Mentoring
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-black dark:text-neutral-white">
            Study Alongside AI Acharya
          </h2>
          <p className="max-w-xl mx-auto text-sm text-neutral-gray-500">
            Ask philosophical questions and study scripture annotations through academically verified primary sources.
          </p>
        </div>

        {/* Dialog Panel Showcase */}
        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          
          {/* Question Suggestions */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider mb-1">
              Select Dialogue Topic
            </span>
            {conversations.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`text-left p-4 rounded-lg border text-xs font-semibold flex items-center justify-between transition-all duration-300 ${
                  activeIdx === i
                    ? 'border-secondary-base bg-secondary-base/5 text-secondary-dark'
                    : 'border-neutral-gray-300 dark:border-neutral-gray-700 hover:bg-neutral-gray-100 dark:hover:bg-neutral-gray-700 text-neutral-gray-500'
                }`}
              >
                <span className="truncate max-w-[85%]">{c.q}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>

          {/* Dialogue Monitor Screen */}
          <Card className="md:col-span-2 p-6 glass-panel border border-neutral-gray-300 dark:border-neutral-gray-700 flex flex-col justify-between h-[350px]">
            <div className="flex items-center gap-2 border-b border-neutral-gray-300 dark:border-neutral-gray-700 pb-3">
              <Sparkles className="h-5 w-5 text-secondary-base" />
              <span className="text-xs font-bold text-neutral-black dark:text-neutral-white">
                Dialogue Session
              </span>
            </div>

            <div className="flex-1 py-6 overflow-y-auto flex flex-col gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-4"
                >
                  {/* User query bubble */}
                  <div className="flex items-start gap-2.5 max-w-[85%] self-start">
                    <div className="h-6 w-6 rounded-full bg-neutral-gray-300 dark:bg-neutral-gray-700 flex items-center justify-center text-[10px] font-bold text-neutral-gray-500">
                      U
                    </div>
                    <div className="p-3 bg-neutral-gray-100 dark:bg-neutral-gray-700 rounded-lg text-xs border">
                      {conversations[activeIdx].q}
                    </div>
                  </div>

                  {/* AI Response bubble */}
                  <div className="flex items-start gap-2.5 max-w-[85%] self-end flex-row-reverse">
                    <div className="h-6 w-6 rounded-full bg-secondary-base/10 text-secondary-base flex items-center justify-center text-[10px] font-bold border border-secondary-base/20">
                      ॐ
                    </div>
                    <div className="p-3 bg-secondary-base/5 text-secondary-dark rounded-lg text-xs border border-secondary-base/20 font-medium space-y-2">
                      <p>{conversations[activeIdx].a}</p>
                      <div className="pt-2 border-t border-secondary-base/10 flex flex-wrap items-center gap-2 text-[10px] font-bold text-primary-base">
                        <Quote className="h-3 w-3" />
                        <span>Source: {conversations[activeIdx].citation}</span>
                        <span className="text-neutral-gray-500">•</span>
                        <span>{conversations[activeIdx].school}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="text-[10px] text-neutral-gray-500 border-t border-neutral-gray-300 dark:border-neutral-gray-700 pt-3">
              Dialogue utilizes verified translations. AI responses enforce scholarly citation guidelines.
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
