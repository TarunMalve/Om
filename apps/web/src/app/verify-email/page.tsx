'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card } from '@om/ui';
import { MailCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VerifyEmailPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Mock token verification delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-md mx-auto py-12 px-4 flex flex-col gap-6 justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-2"
      >
        <span className="text-2xl font-bold tracking-widest text-secondary-base">ॐ</span>
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-black dark:text-neutral-white">
          Secure Email Verification
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.2 }}
      >
        <Card className="p-6 border border-neutral-gray-300 dark:border-neutral-gray-700 glass-panel text-center">
          {isLoading ? (
            <div className="py-8 space-y-4">
              <span className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-secondary-base border-t-transparent" />
              <p className="text-xs text-neutral-gray-500 font-semibold">
                Verifying secure link authorization parameters...
              </p>
            </div>
          ) : (
            <div className="py-6 space-y-4 animate-fade-in">
              <div className="h-12 w-12 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mx-auto">
                <MailCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-neutral-black dark:text-neutral-white">
                  Email Address Verified
                </h3>
                <p className="text-xs text-neutral-gray-500 leading-relaxed max-w-xs mx-auto">
                  Your identity verification is successful. You may now continue to personalize your learning paths.
                </p>
              </div>
              <Button
                variant="secondary"
                onClick={() => router.push('/onboarding/welcome')}
                className="w-full font-bold mt-4"
              >
                <span>Enter Onboarding</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
