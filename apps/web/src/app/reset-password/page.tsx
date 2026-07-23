'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card } from '@om/ui';
import { PasswordInput } from '../../components/common/form-inputs.js';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!password) {
      newErrors.password = 'New password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    // Mock API reset
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
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
          Establish New Password
        </h1>
        <p className="text-xs text-neutral-gray-500 font-medium">
          Create a strong password to re-secure your sadhana dashboard.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.2 }}
      >
        <Card className="p-6 border border-neutral-gray-300 dark:border-neutral-gray-700 glass-panel">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <PasswordInput
                label="New Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors((prev) => ({ ...prev, password: '' }));
                }}
                error={errors.password}
                placeholder="Minimum 8 characters"
                disabled={isLoading}
                required
              />

              <PasswordInput
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: '' }));
                }}
                error={errors.confirmPassword}
                placeholder="Re-enter password"
                disabled={isLoading}
                required
              />

              <Button variant="secondary" type="submit" isLoading={isLoading} className="w-full font-bold">
                Update Credentials
              </Button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4 animate-fade-in">
              <div className="h-12 w-12 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mx-auto">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-neutral-black dark:text-neutral-white">
                  Password Updated Successfully
                </h3>
                <p className="text-xs text-neutral-gray-500 leading-relaxed max-w-xs mx-auto">
                  Your credentials have been successfully updated. You may now return to the portal to sign in.
                </p>
              </div>
              <Button
                variant="secondary"
                onClick={() => router.push('/login')}
                className="w-full font-bold mt-4"
              >
                <span>Proceed to Sign In</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
