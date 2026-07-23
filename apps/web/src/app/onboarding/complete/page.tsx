'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../../store/use-auth-store.js';
import { Button, Card } from '@om/ui';
import { Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OnboardingComplete() {
  const router = useRouter();
  const { tempOnboarding, completeOnboarding } = useAuthStore();

  const getRecommendedPath = () => {
    const isGita = tempOnboarding.interests?.includes('gita');
    const isSanskrit = tempOnboarding.interests?.includes('sanskrit');
    const isNovice = tempOnboarding.experienceLevel === 'novice';
    const isScholar = tempOnboarding.experienceLevel === 'scholar';

    if (isSanskrit && isScholar) {
      return {
        title: 'Paninian Sanskrit Morphosyntax',
        desc: 'Advanced linguistics analysis exploring Ashtadhyayi sutra mappings.'
      };
    }
    if (isGita && isNovice) {
      return {
        title: 'Bhagavad Gita: Core Ethos',
        desc: 'Introductory pathway navigating Arjuna\'s crisis and Sri Krishna\'s dialogue on duty.'
      };
    }
    return {
      title: 'Foundations of Indian Philosophy',
      desc: 'Broad survey exploring Vedas, Upanishads, and orthodox Darshanas.'
    };
  };

  const recommendation = getRecommendedPath();

  const handleFinish = () => {
    completeOnboarding();
    // Redirect to home dashboard
    router.push('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6 text-center"
    >
      <div className="h-16 w-16 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mx-auto border border-green-500/20">
        <CheckCircle2 className="h-8 w-8" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-black dark:text-neutral-white">
          Onboarding Complete
        </h1>
        <p className="text-sm text-neutral-gray-500 max-w-xs mx-auto">
          Your profile has been successfully personalized.
        </p>
      </div>

      {/* Summary card & Recommendation block */}
      <Card className="p-6 border border-neutral-gray-300 dark:border-neutral-gray-700 bg-neutral-white/50 text-left space-y-4">
        <span className="text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider block">
          Suggested Starting Pathway
        </span>
        <div className="flex gap-4 items-start border-b border-neutral-gray-300 dark:border-neutral-gray-700 pb-4">
          <div className="h-10 w-10 rounded-lg bg-secondary-base/10 text-secondary-base flex items-center justify-center shrink-0">
            <Compass className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-neutral-black dark:text-neutral-white">
              {recommendation.title}
            </h3>
            <p className="text-xs text-neutral-gray-500 leading-normal mt-0.5">
              {recommendation.desc}
            </p>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <span className="text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider block">
            Profile Configuration Summary
          </span>
          <div className="grid grid-cols-2 gap-2 text-neutral-gray-700">
            <div>
              <span className="text-[10px] text-neutral-gray-500 block">Experience Level</span>
              <span className="font-semibold capitalize">{tempOnboarding.experienceLevel || 'novice'}</span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-gray-500 block">Commitment</span>
              <span className="font-semibold">{tempOnboarding.dailyRhythm?.duration || '10m'} Daily</span>
            </div>
          </div>
        </div>
      </Card>

      <Button
        variant="secondary"
        onClick={handleFinish}
        className="w-full font-bold pt-4"
      >
        <span>Enter Dashboard</span>
        <Sparkles className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
}
