'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card } from '@om/ui';
import { OTPInput } from '../../components/common/form-inputs.js';
import { ShieldAlert, MailCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VerifyOtpPage() {
  const router = useRouter();

  const [otp, setOtp] = React.useState('');
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [resendTimer, setResendTimer] = React.useState(60);

  // Simple resend countdown timer
  React.useEffect(() => {
    if (resendTimer <= 0) return;
    const interval = setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.length < 6) {
      setError('Please provide the full 6-digit verification code');
      return;
    }

    setError('');
    setIsLoading(true);

    // Mock API token checking
    setTimeout(() => {
      setIsLoading(false);
      // Success - Redirect user to onboarding welcome slide
      router.push('/onboarding/welcome');
    }, 1500);
  };

  const handleResend = () => {
    setResendTimer(60);
    setOtp('');
    setError('');
    // Trigger mock resend
  };

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
          Secure Verification
        </h1>
        <p className="text-xs text-neutral-gray-500 font-medium">
          Verify your email address to validate your student account.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.2 }}
      >
        <Card className="p-6 border border-neutral-gray-300 dark:border-neutral-gray-700 glass-panel">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="text-center space-y-2">
              <MailCheck className="h-8 w-8 text-secondary-base mx-auto" />
              <p className="text-xs text-neutral-gray-500 leading-relaxed max-w-xs mx-auto">
                We have transmitted a 6-digit code to your email. Enter it below to activate access.
              </p>
            </div>

            <OTPInput
              value={otp}
              onChange={(val) => {
                setOtp(val);
                if (error) setError('');
              }}
              error={error}
            />

            <Button variant="secondary" type="submit" isLoading={isLoading} className="w-full font-bold">
              <span>Verify Code</span>
              {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          {/* Resend actions */}
          <div className="mt-6 text-center text-xs">
            {resendTimer > 0 ? (
              <span className="text-neutral-gray-500">
                You can resend the code in <span className="font-semibold text-secondary-dark">{resendTimer}s</span>
              </span>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="font-bold text-secondary-dark hover:underline"
              >
                Resend Verification Code
              </button>
            )}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
