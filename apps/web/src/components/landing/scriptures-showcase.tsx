'use client';

import * as React from 'react';
import { Card, Button } from '@om/ui';
import { BookOpen, RefreshCw, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ScripturesShowcase() {
  const shloka = {
    verse: 'Gita 2.47',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
    transliteration: 'karmaṇy-evādhikāras te mā phaleṣu kadācana\nmā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi',
    words: [
      { sanskrit: 'कर्मणि', english: 'in action', grammar: 'Locative' },
      { sanskrit: 'एव', english: 'indeed', grammar: 'Particle' },
      { sanskrit: 'अधिकारः', english: 'right', grammar: 'Nominative' },
      { sanskrit: 'ते', english: 'your', grammar: 'Genitive' },
      { sanskrit: 'मा', english: 'never', grammar: 'Negative particle' },
      { sanskrit: 'फलेषु', english: 'in fruits', grammar: 'Locative' },
      { sanskrit: 'कदाचन', english: 'at any time', grammar: 'Adverb' },
    ],
    commentaries: [
      {
        school: 'Advaita (Shankara)',
        text: 'Action is mandatory to purify the mind, but the action itself does not bind when performed without desire for results. Self-realization alone transcends all karma.'
      },
      {
        school: 'Vishishtadvaita (Ramanuja)',
        text: 'Perform duties as worship of the Supreme Lord. The fruits belong to Him, and relinquishing agency to Him leads to direct communion.'
      },
      {
        school: 'Dvaita (Madhva)',
        text: 'Individual souls are dependent tools of Vishnu. Performing actions with devotion, knowing Vishnu is the sole independent agent, ensures liberation.'
      }
    ]
  };

  const [activeCommIdx, setActiveCommIdx] = React.useState(0);
  const [wordDetailsOpen, setWordDetailsOpen] = React.useState(false);

  return (
    <section className="py-20 flex flex-col items-center">
      <div className="max-w-5xl mx-auto px-4 space-y-12 w-full">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-base">
            Scripture Reader Workspace
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-black dark:text-neutral-white">
            Deep-Dive Scripture Analysis
          </h2>
          <p className="max-w-xl mx-auto text-sm text-neutral-gray-500">
            Study Sanskrit verses with word-by-word grammar annotations, dynamic transliterations, and multi-school commentaries.
          </p>
        </div>

        {/* Scripture Reader Board layout */}
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          
          {/* Main Shloka Pane */}
          <Card className="lg:col-span-2 p-6 glass-panel border border-neutral-gray-300 dark:border-neutral-gray-700 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-neutral-gray-300 dark:border-neutral-gray-700 pb-3">
              <span className="text-xs font-bold text-secondary-base uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" />
                Verse: {shloka.verse}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setWordDetailsOpen(!wordDetailsOpen)}
                className="text-xs font-bold"
              >
                {wordDetailsOpen ? 'Hide Annotations' : 'Show Annotations'}
              </Button>
            </div>

            {/* Core Devanagari text */}
            <div className="my-6 text-center space-y-4">
              <p className="text-xl sm:text-2xl font-bold tracking-wide leading-relaxed text-secondary-dark text-center whitespace-pre-line">
                {shloka.sanskrit}
              </p>
              <p className="text-xs italic text-neutral-gray-500 font-mono tracking-wide max-w-xl mx-auto">
                {shloka.transliteration}
              </p>
            </div>

            {/* Word-by-word interactive annotation panels */}
            <AnimatePresence>
              {wordDetailsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-neutral-gray-300 dark:border-neutral-gray-700 pt-4 overflow-hidden"
                >
                  <span className="text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider block mb-2">
                    Word-by-Word Analysis
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {shloka.words.map((w, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded bg-neutral-gray-100 dark:bg-neutral-gray-700 border text-left flex flex-col"
                      >
                        <span className="text-xs font-bold text-neutral-black dark:text-neutral-white">{w.sanskrit}</span>
                        <span className="text-[10px] text-neutral-gray-500">{w.english}</span>
                        {w.grammar && (
                          <span className="text-[8px] bg-secondary-base/15 text-secondary-dark px-1 py-0.2 rounded mt-1 self-start font-mono">
                            {w.grammar}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>

          {/* Commentary Side-Panel */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider">
              Philosophical Commentaries
            </span>
            <div className="flex gap-2 overflow-x-auto pb-1 border-b border-neutral-gray-300 dark:border-neutral-gray-700">
              {shloka.commentaries.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCommIdx(i)}
                  className={`text-xs font-bold pb-2 px-1 border-b-2 transition-all whitespace-nowrap ${
                    activeCommIdx === i
                      ? 'border-secondary-base text-secondary-dark'
                      : 'border-transparent text-neutral-gray-500 hover:text-neutral-black'
                  }`}
                >
                  {c.school.split(' ')[0]}
                </button>
              ))}
            </div>

            <Card className="p-6 border border-neutral-gray-300 dark:border-neutral-gray-700 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold bg-primary-base/10 text-primary-base px-2 py-0.5 rounded uppercase">
                  {shloka.commentaries[activeCommIdx].school}
                </span>
                <p className="text-xs text-neutral-gray-500 leading-relaxed">
                  {shloka.commentaries[activeCommIdx].text}
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-gray-300 dark:border-neutral-gray-700 flex items-center gap-2 text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider">
                <Layers className="h-4 w-4 text-primary-base" />
                <span>Compare commentaries</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
