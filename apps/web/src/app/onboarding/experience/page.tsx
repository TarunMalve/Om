'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../../store/use-auth-store.js';
import { Button, Card } from '@om/ui';
import { ArrowRight, Compass } from 'lucide-react';
import { LearningLevel } from '@om/types';
import { motion } from 'framer-motion';

export default function OnboardingExperience() {
  const router = useRouter();
  const { tempOnboarding, updateTempOnboarding } = useAuthStore();
  const [level, setLevel] = React.useState<LearningLevel>(
    tempOnboarding.experienceLevel || 'novice'
  );

  const options = [
    {
      id: 'novice' as LearningLevel,
      title: 'I am completely new',
      desc: 'Introduce me to basic themes and simple verse translations.'
    },
    {
      id: 'intermediate' as LearningLevel,
      title: 'I know the basics',
      desc: 'Explore chapter structures, common translations, and summaries.'
    },
    {
      id: 'advanced' as LearningLevel,
      title: 'I want to explore deeply',
      desc: 'Compare multiple translation commentators and learn grammar structures.'
    },
    {
      id: 'scholar' as LearningLevel,
      title: 'I am researching academically',
      desc: 'Exhaustive ontological research, manuscript tracking, and citation formats.'
    }
  ];

  const handleContinue = () => {
    updateTempOnboarding({ experienceLevel: level });
    router.push('/onboarding/learning-goal');
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
          Assess Your Knowledge
        </h1>
        <p className="text-xs text-neutral-gray-500 max-w-xs mx-auto">
          Choose a baseline. Remember, Om adapts dynamically—you can modify this profile settings at any time.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <div
            key={opt.id}
            onClick={() => setLevel(opt.id)}
            className="cursor-pointer"
          >
            <Card
              className={`p-4 border flex items-start gap-4 transition-all duration-200 ${
                level === opt.id
                  ? 'border-secondary-base bg-secondary-base/5'
                  : 'border-neutral-gray-300 dark:border-neutral-gray-700 hover:border-neutral-gray-500'
              }`}
            >
              <Compass className={`h-5 w-5 mt-0.5 ${level === opt.id ? 'text-secondary-base' : 'text-neutral-gray-500'}`} />
              <div>
                <h3 className="text-xs font-bold text-neutral-black dark:text-neutral-white">{opt.title}</h3>
                <p className="text-[10px] text-neutral-gray-500 leading-normal">{opt.desc}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <Button
        variant="secondary"
        onClick={handleContinue}
        className="w-full font-bold pt-4"
      >
        <span>Continue</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
}
