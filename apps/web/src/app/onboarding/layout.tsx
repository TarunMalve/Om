'use client';

import * as React from 'react';
import { useAuthStore } from '../../store/use-auth-store.js';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@om/ui';
import { X, ArrowLeft } from 'lucide-react';

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const logoutStore = useAuthStore((state) => state.logout);

  const steps = [
    { path: '/onboarding/welcome', label: 'Welcome' },
    { path: '/onboarding/language', label: 'Language' },
    { path: '/onboarding/interests', label: 'Interests' },
    { path: '/onboarding/experience', label: 'Experience' },
    { path: '/onboarding/learning-goal', label: 'Goals' },
    { path: '/onboarding/preferences', label: 'Preferences' },
    { path: '/onboarding/complete', label: 'Complete' }
  ];

  const currentStepIdx = steps.findIndex((step) => pathname.startsWith(step.path));
  const currentStep = currentStepIdx !== -1 ? currentStepIdx + 1 : 1;
  const totalSteps = steps.length;
  const progressPercent = Math.min(((currentStep - 1) / (totalSteps - 1)) * 100, 100);

  const handleExit = () => {
    logoutStore();
    router.push('/login');
  };

  const handleBack = () => {
    if (currentStepIdx > 0) {
      router.push(steps[currentStepIdx - 1].path);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-white dark:bg-neutral-gray-100 flex flex-col justify-between">
      {/* Onboarding Header */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-gray-300 dark:border-neutral-gray-700 bg-neutral-white/90 dark:bg-neutral-gray-100/90 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {currentStepIdx > 0 && currentStepIdx < totalSteps - 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                aria-label="Return to previous onboarding step"
                className="p-1"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <span className="text-sm font-bold tracking-widest text-secondary-base">ॐ ONBOARDING</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-neutral-gray-500">
            <span>Step {currentStep} of {totalSteps}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleExit}
              aria-label="Exit onboarding"
              className="p-1 text-red-500 hover:bg-red-500/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="w-full h-1 bg-neutral-gray-300 dark:bg-neutral-gray-700">
          <div
            className="h-full bg-secondary-base transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* Main Workspace Frame */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg">
          {children}
        </div>
      </main>
    </div>
  );
}
