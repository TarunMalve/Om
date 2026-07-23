'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../../store/use-auth-store.js';
import { Button, Card } from '@om/ui';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OnboardingInterests() {
  const router = useRouter();
  const { tempOnboarding, updateTempOnboarding } = useAuthStore();
  const [selectedInterests, setSelectedInterests] = React.useState<string[]>(
    tempOnboarding.interests || []
  );

  const options = [
    { id: 'gita', label: 'Bhagavad Gita', category: 'Scriptures' },
    { id: 'vedas', label: 'Vedas', category: 'Scriptures' },
    { id: 'upanishads', label: 'Upanishads', category: 'Scriptures' },
    { id: 'temples', label: 'Temples & Heritage', category: 'Culture' },
    { id: 'sanskrit', label: 'Sanskrit Linguistics', category: 'Language' },
    { id: 'darshana', label: 'Classical Darshanas', category: 'Philosophy' },
    { id: 'history', label: 'Civilizational History', category: 'Chronology' },
    { id: 'science', label: 'Indian Sciences', category: 'Science' }
  ];

  const handleToggle = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    updateTempOnboarding({ interests: selectedInterests });
    router.push('/onboarding/experience');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-extrabold tracking-tight text-neutral-black dark:text-neutral-white">
          Explore Your Interests
        </h1>
        <p className="text-xs text-neutral-gray-500 max-w-xs mx-auto">
          Choose topics you wish to study. This shapes your daily reflection feed.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((opt) => {
          const isSelected = selectedInterests.includes(opt.id);
          return (
            <div
              key={opt.id}
              onClick={() => handleToggle(opt.id)}
              className="cursor-pointer"
            >
              <Card
                className={`p-4 border flex items-center justify-between transition-all duration-200 ${
                  isSelected
                    ? 'border-secondary-base bg-secondary-base/5'
                    : 'border-neutral-gray-300 dark:border-neutral-gray-700 hover:border-neutral-gray-500'
                }`}
              >
                <div className="text-left">
                  <span className="text-[8px] font-bold text-neutral-gray-500 uppercase tracking-wider block">
                    {opt.category}
                  </span>
                  <span className="text-xs font-bold text-neutral-black dark:text-neutral-white">{opt.label}</span>
                </div>
                {isSelected && (
                  <div className="h-4 w-4 rounded-full bg-secondary-base text-white flex items-center justify-center">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                )}
              </Card>
            </div>
          );
        })}
      </div>

      <Button
        variant="secondary"
        onClick={handleContinue}
        disabled={selectedInterests.length === 0}
        className="w-full font-bold pt-4"
      >
        <span>Continue</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
}
