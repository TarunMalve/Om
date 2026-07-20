'use client';

import * as React from 'react';
import { Card } from '@om/ui';
import { MessageSquare, HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function TestimonialsFAQ() {
  const testimonials = [
    {
      quote: 'Om provides the most academically rigorous digital layout for Sanskrit scriptures. Having commentaries side-by-side saves hours of cross-referencing.',
      author: 'Dr. Ramesh Sastri',
      role: 'Professor of Indology'
    },
    {
      quote: 'The Socratic guidance of AI Acharya doesn’t just output answers; it asks guiding questions that prompt me to think. An exceptional educational platform.',
      author: 'Aarav Mehta',
      role: 'Sanskrit Student'
    }
  ];

  const faqs = [
    {
      q: 'Are the translation sources academically verified?',
      a: 'Yes. Every translation is sourced from public domain, scholar-reviewed manuscripts (e.g. Gita Press, Bhandarkar Oriental Research Institute). Source provenance is visible on all citation layers.'
    },
    {
      q: 'How does AI Acharya avoid hallucinations or incorrect answers?',
      a: 'AI Acharya operates strictly within a Graph-Retrieval Augmented Generation (GraphRAG) architecture. It only draws responses from our validated knowledge graph and primary scripture databases, appending citations to prevent speculation.'
    },
    {
      q: 'Can I choose which philosophical commentary school to follow?',
      a: 'Absolutely. The Scripture Reader workspace supports toggling and comparing commentaries from multiple orthodox schools including Advaita, Dvaita, and Vishishtadvaita.'
    }
  ];

  const [openFaqIdx, setOpenFaqIdx] = React.useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-neutral-gray-100/50 dark:bg-neutral-gray-100/10 border-y border-neutral-gray-300 dark:border-neutral-gray-700">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        
        {/* Testimonials Segment */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary-base">
              User Experiences
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-black dark:text-neutral-white">
              Scholar & Learner Testimonials
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, idx) => (
              <Card key={idx} className="p-6 border border-neutral-gray-300 dark:border-neutral-gray-700 flex flex-col justify-between">
                <p className="text-xs text-neutral-gray-500 italic leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="pt-4 border-t border-neutral-gray-300 dark:border-neutral-gray-700 mt-6 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-secondary-base/10 text-secondary-base flex items-center justify-center font-bold text-xs">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-black dark:text-neutral-white">{t.author}</h4>
                    <span className="text-[10px] text-neutral-gray-500">{t.role}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Accordion FAQ Segment */}
        <div className="space-y-8 pt-8 border-t border-neutral-gray-300 dark:border-neutral-gray-700">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-base">
              Common Questions
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-black dark:text-neutral-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="border border-neutral-gray-300 dark:border-neutral-gray-700 rounded-lg overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 bg-neutral-white dark:bg-neutral-gray-100 text-left text-xs font-bold text-neutral-black dark:text-neutral-white hover:bg-neutral-gray-100 dark:hover:bg-neutral-gray-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-neutral-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="bg-neutral-white dark:bg-neutral-gray-100 border-t border-neutral-gray-300 dark:border-neutral-gray-700 p-4"
                      >
                        <p className="text-xs text-neutral-gray-500 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
