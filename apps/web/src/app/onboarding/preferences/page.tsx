'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../../store/use-auth-store.js';
import { Button, Card } from '@om/ui';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OnboardingPreferences() {
  const router = useRouter();
  const { tempOnboarding, updateTempOnboarding } = useAuthStore();

  const [styles, setStyles] = React.useState<string[]>(
    tempOnboarding.learningStyles || []
  );
  
  const [duration, setDuration] = React.useState(
    tempOnboarding.dailyRhythm?.duration || '10m'
  );
  
  const [timeOfDay, setTimeOfDay] = React.useState(
    tempOnboarding.dailyRhythm?.timeOfDay || 'morning'
  );

  const [reminders, setReminders] = React.useState(
    tempOnboarding.dailyRhythm?.reminders ?? true
  );

  const styleOptions = [
    { id: 'reading', label: 'Reading Texts' },
    { id: 'stories', label: 'Epics & Stories' },
    { id: 'ai', label: 'AI Acharya Conversations' },
    { id: 'visual', label: 'Visual Graphs' }
  ];

  const durationOptions = [
    { id: '5m', label: '5 Minutes' },
    { id: '10m', label: '10 Minutes' },
    { id: '20m', label: '20 Minutes' },
    { id: '30m+', label: '30+ Minutes' }
  ];

  const timeOptions = [
    { id: 'morning', label: 'Morning' },
    { id: 'afternoon', label: 'Afternoon' },
    { id: 'evening', label: 'Evening' },
    { id: 'none', label: 'No Preference' }
  ];

  const handleToggleStyle = (id: string) => {
    setStyles((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    updateTempOnboarding({
      learningStyles: styles,
      dailyRhythm: { duration, timeOfDay, reminders }
    });
    router.push('/onboarding/complete');
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
          Configure Learning Preferences
        </h1>
        <p className="text-xs text-neutral-gray-500 max-w-xs mx-auto">
          Tailor your daily learning styles and paced intervals.
        </p>
      </div>

      {/* Learning styles grid */}
      <div className="space-y-3">
        <span className="text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider block">
          Preferred Learning Modes
        </span>
        <div className="grid gap-2 sm:grid-cols-2">
          {styleOptions.map((opt) => {
            const isSelected = styles.includes(opt.id);
            return (
              <div
                key={opt.id}
                onClick={() => handleToggleStyle(opt.id)}
                className="cursor-pointer"
              >
                <Card
                  className={`p-3 border flex items-center justify-between transition-all duration-200 ${
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
      </div>

      {/* Daily Duration picker */}
      <div className="space-y-3">
        <span className="text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider block">
          Daily Commitment
        </span>
        <div className="grid grid-cols-4 gap-2">
          {durationOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setDuration(opt.id)}
              className={`p-2 rounded border text-[10px] font-bold transition-all ${
                duration === opt.id
                  ? 'border-secondary-base bg-secondary-base/5 text-secondary-dark'
                  : 'border-neutral-gray-300 dark:border-neutral-gray-700 text-neutral-gray-500 hover:bg-neutral-gray-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Time of day picker */}
      <div className="space-y-3">
        <span className="text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider block">
          Preferred Learning Window
        </span>
        <div className="grid grid-cols-4 gap-2">
          {timeOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setTimeOfDay(opt.id)}
              className={`p-2 rounded border text-[10px] font-bold transition-all ${
                timeOfDay === opt.id
                  ? 'border-secondary-base bg-secondary-base/5 text-secondary-dark'
                  : 'border-neutral-gray-300 dark:border-neutral-gray-700 text-neutral-gray-500 hover:bg-neutral-gray-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Reminders Toggle (Ethical: no manipulative streak counts) */}
      <div className="pt-2">
        <label className="flex items-center gap-2.5 cursor-pointer text-xs text-neutral-gray-500">
          <input
            type="checkbox"
            checked={reminders}
            onChange={(e) => setReminders(e.target.checked)}
            className="rounded border-neutral-gray-300 accent-secondary-base"
          />
          <span>Send gentle reminders (no aggressive streak penalties)</span>
        </label>
      </div>

      <Button
        variant="secondary"
        onClick={handleContinue}
        disabled={styles.length === 0}
        className="w-full font-bold pt-4"
      >
        <span>Continue</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
}
