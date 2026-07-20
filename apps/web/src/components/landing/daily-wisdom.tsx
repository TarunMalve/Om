'use client';

import * as React from 'react';
import { Card, Button } from '@om/ui';
import { Sparkles, RefreshCw, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function DailyWisdom() {
  const flashcards = [
    { front: 'सच्चिदानन्द (Saccidānanda)', back: 'Existence (Sat), Consciousness (Cit), and Bliss (Ānanda)—the ultimate nature of reality.' },
    { front: 'पुरुषार्थ (Puruṣārtha)', back: 'The four goals of human life: Dharma (duty), Artha (wealth), Kama (desire), and Moksha (liberation).' },
    { front: 'स्वाध्याय (Svādhyāya)', back: 'Self-study and reflection on sacred scriptures, a core practice of spiritual discipline.' }
  ];

  const [activeCard, setActiveCard] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  const handleNextCard = () => {
    setFlipped(false);
    setTimeout(() => {
      setActiveCard((prev) => (prev + 1) % flashcards.length);
    }, 150);
  };

  return (
    <section className="py-20 flex flex-col items-center">
      <div className="max-w-5xl mx-auto px-4 space-y-12 w-full">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-base">
            Human Learning Experience (HLX)
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-black dark:text-neutral-white">
            Daily Wisdom & Active Recall
          </h2>
          <p className="max-w-xl mx-auto text-sm text-neutral-gray-500">
            Internalize philosophical Sanskrit concepts through structured revision metrics and spaced-repetition flashcards.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid gap-8 md:grid-cols-2 items-center">
          
          {/* Daily Verse suggestion panel */}
          <Card className="p-8 border border-neutral-gray-300 dark:border-neutral-gray-700 bg-secondary-base/5 border-secondary-base/20 space-y-6">
            <div className="flex items-center gap-2 text-secondary-dark font-bold text-xs uppercase tracking-wide">
              <Sparkles className="h-4 w-4" />
              <span>Daily Reflection</span>
            </div>
            
            <div className="space-y-3">
              <p className="text-xl font-bold text-secondary-dark italic leading-relaxed">
                “आत्मानं रथिनं विद्धि शरीरं रथमेव तु ।”
              </p>
              <p className="text-xs text-neutral-gray-500 font-mono italic">
                ātmānaṃ rathinaṃ viddhi śarīraṃ rathameva tu
              </p>
              <p className="text-sm text-neutral-gray-500 leading-relaxed pt-2">
                “Know the Self (Atman) to be the master of the chariot, and the physical body to be the chariot indeed.”
              </p>
            </div>

            <div className="border-t border-secondary-base/10 pt-4 flex justify-between items-center text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider">
              <span>Katha Upanishad 1.3.3</span>
              <span className="text-secondary-base flex items-center gap-0.5">
                Study Scripture <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Card>

          {/* Flashcard Simulator */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider self-start">
              Spaced-Repetition Flashcard
            </span>

            {/* Flipper Card Container */}
            <div
              onClick={() => setFlipped(!flipped)}
              className="w-full h-[200px] cursor-pointer perspective"
            >
              <div
                className={`relative w-full h-full duration-500 transform-style transition-transform ${
                  flipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front Side */}
                <Card className="absolute inset-0 p-6 flex flex-col justify-between items-center text-center backface-hidden border border-neutral-gray-300 dark:border-neutral-gray-700">
                  <span className="text-[9px] font-bold text-neutral-gray-500 uppercase tracking-wider">
                    Sanskrit Term
                  </span>
                  <p className="text-lg font-bold text-neutral-black dark:text-neutral-white">
                    {flashcards[activeCard].front}
                  </p>
                  <span className="text-[9px] text-secondary-base font-bold uppercase tracking-wider">
                    Click to flip
                  </span>
                </Card>

                {/* Back Side */}
                <Card className="absolute inset-0 p-6 flex flex-col justify-between items-center text-center rotate-y-180 backface-hidden border border-secondary-base bg-secondary-base/5">
                  <span className="text-[9px] font-bold text-secondary-dark uppercase tracking-wider">
                    Definition & Concept
                  </span>
                  <p className="text-xs text-neutral-gray-500 leading-relaxed max-w-xs">
                    {flashcards[activeCard].back}
                  </p>
                  <span className="text-[9px] text-neutral-gray-500 font-bold uppercase tracking-wider">
                    Resolved
                  </span>
                </Card>
              </div>
            </div>

            {/* Controller */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleNextCard}
              className="text-xs font-bold border border-neutral-gray-300 dark:border-neutral-gray-700 w-full hover:bg-neutral-gray-100 dark:hover:bg-neutral-gray-700"
            >
              <RefreshCw className="mr-2 h-3.5 w-3.5" />
              Next Flashcard
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
