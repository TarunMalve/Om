'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../../store/use-auth-store.js';
import { Button, Card } from '@om/ui';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OnboardingLearningGoal() {
  const router = useRouter();
  const { tempOnboarding, updateTempOnboarding } = useAuthStore();
  const [goals, setGoals] = React.useState<string[]>(tempOnboarding.goals || []);

  const options = [
    { id: 'explore', label: 'Explore Sanatan Dharma' },
    { id: 'scriptures', label: 'Understand Scriptures' },
    { id: 'sanskrit', label: 'Learn Sanskrit Grammar' },
    { id: 'philosophy', label: 'Study Orthodox Philosophy' },
    { id: 'civilization', label: 'Research Indian Civilization' },
    { id: 'temples', label: 'Discover Temples & Heritage' },
    { id: 'habit', label: 'Build a Daily Learning Habit' },
    { id: 'stories', label: 'Explore through Stories' }
  ];

  const handleToggle = (id: string) => {
    setGoals((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    updateTempOnboarding({ goals });
    router.push('/onboarding/preferences');
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
          Define Your Learning Goals
        </h1>
        <p className="text-xs text-neutral-gray-500 max-w-xs mx-auto">
          Select what you want to achieve. We will customize starting paths based on these objectives.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((opt) => {
          const isSelected = goals.includes(opt.id);
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
                <span className="text-xs font-bold text-neutral-black dark:text-neutral-white">{opt.label}</span>
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
        disabled={goals.length === 0}
        className="w-full font-bold pt-4"
      >
        <span>Continue</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
}
