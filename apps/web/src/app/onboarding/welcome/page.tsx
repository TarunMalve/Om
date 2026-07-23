'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card } from '@om/ui';
import { Compass, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OnboardingWelcome() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6 text-center"
    >
      <div className="h-16 w-16 rounded-full bg-secondary-base/10 text-secondary-base flex items-center justify-center mx-auto border border-secondary-base/20">
        <Compass className="h-8 w-8 animate-spin duration-30000" />
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-black dark:text-neutral-white">
          Welcome to Om
        </h1>
        <p className="text-sm text-neutral-gray-500 leading-relaxed max-w-sm mx-auto">
          A living Knowledge Universe for exploring Sanatan Dharma and Indian Civilization.
        </p>
      </div>

      <Card className="p-6 border border-neutral-gray-300 dark:border-neutral-gray-700 bg-neutral-white/50 text-left space-y-4">
        <div className="flex gap-3">
          <Sparkles className="h-5 w-5 text-secondary-base shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-xs font-bold text-neutral-black dark:text-neutral-white">
              Guided Epistemology
            </h3>
            <p className="text-[11px] text-neutral-gray-500 leading-relaxed">
              Om adapts dynamically. As your knowledge grows, your UI will disclose deeper annotation tabs and commentary linkages.
            </p>
          </div>
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button
          variant="secondary"
          onClick={() => router.push('/onboarding/language')}
          className="flex-1 font-bold"
        >
          Begin Setup
        </Button>
        <Button
          variant="ghost"
          onClick={() => router.push('/onboarding/complete')}
          className="flex-1 border border-neutral-gray-300 dark:border-neutral-gray-700 text-neutral-gray-500 hover:bg-neutral-gray-100"
        >
          Skip for now
        </Button>
      </div>
    </motion.div>
  );
}
