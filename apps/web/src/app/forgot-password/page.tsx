'use client';

import * as React from 'react';
import { Button, Card } from '@om/ui';
import { TextInput } from '../../components/common/form-inputs.js';
import { ArrowLeft, MailCheck, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ForgotPasswordPage() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email address is required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email format');
      return;
    }

    setError('');
    setIsLoading(true);

    // Mock recovery process
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
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
          Reset Credentials
        </h1>
        <p className="text-xs text-neutral-gray-500 font-medium">
          Verify identity to recover account credentials safely.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.2 }}
      >
        <Card className="p-6 border border-neutral-gray-300 dark:border-neutral-gray-700 glass-panel">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <p className="text-xs text-neutral-gray-500 leading-relaxed">
                Provide your registered email address below. We will transmit a secure, one-time link to authorize password modification.
              </p>

              <TextInput
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                error={error}
                placeholder="learner@om.platform"
                disabled={isLoading}
                required
              />

              <Button variant="secondary" type="submit" isLoading={isLoading} className="w-full font-bold">
                Transmit Reset Link
              </Button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4 animate-fade-in">
              <div className="h-12 w-12 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mx-auto">
                <MailCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-neutral-black dark:text-neutral-white">
                  Recovery Email Transmitted
                </h3>
                <p className="text-xs text-neutral-gray-500 leading-relaxed max-w-xs mx-auto">
                  If the email address exists in our database, a verification message has been dispatched with reset instructions.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-center gap-1 text-[10px] font-bold text-green-600 uppercase">
                <ShieldCheck className="h-4 w-4" />
                <span>Zero enumeration protocol active</span>
              </div>
            </div>
          )}
        </Card>
      </motion.div>

      <a href="/login" className="text-center text-xs font-bold text-secondary-dark hover:underline flex items-center justify-center gap-1">
        <ArrowLeft className="h-3.5 w-3.5" />
        Return to login
      </a>
    </div>
  );
}
