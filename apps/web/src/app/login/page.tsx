'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../store/use-auth-store.js';
import { TextInput, PasswordInput } from '../../components/common/form-inputs.js';
import { Button, Card } from '@om/ui';
import { Chrome, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const router = useRouter();
  const loginStore = useAuthStore((state) => state.login);
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!email) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    // Mock API validation call
    setTimeout(() => {
      setIsLoading(false);
      loginStore(email, 'Sanskrit Explorer');
      // Redirect to onboarding as standard first step setup or dashboard
      router.push('/onboarding/welcome');
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4 flex flex-col gap-8 justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-2"
      >
        <span className="text-2xl font-bold tracking-widest text-secondary-base">ॐ</span>
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-black dark:text-neutral-white">
          Enter the Knowledge Universe
        </h1>
        <p className="text-xs text-neutral-gray-500 font-medium">
          Resume your civilizational learning journey with AI Acharya.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.2 }}
      >
        <Card className="p-6 border border-neutral-gray-300 dark:border-neutral-gray-700 glass-panel">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <TextInput
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
              }}
              error={errors.email}
              placeholder="e.g. learner@om.platform"
              disabled={isLoading}
              required
            />

            <PasswordInput
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors((prev) => ({ ...prev, password: '' }));
              }}
              error={errors.password}
              placeholder="••••••••"
              disabled={isLoading}
              required
            />

            {/* Remember & Forgot options */}
            <div className="flex items-center justify-between text-xs font-semibold">
              <label className="flex items-center gap-1.5 cursor-pointer text-neutral-gray-500">
                <input type="checkbox" className="rounded border-neutral-gray-300 accent-secondary-base" />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="text-secondary-dark hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Actions */}
            <Button variant="secondary" type="submit" isLoading={isLoading} className="w-full font-bold">
              <span>Sign In</span>
              {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          {/* Social login partition */}
          <div className="relative my-6 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-gray-300 dark:border-neutral-gray-700" />
            </div>
            <span className="relative px-3 bg-neutral-white dark:bg-neutral-gray-700 text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider">
              Or credentials
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <Button
              variant="ghost"
              onClick={() => {}}
              className="border border-neutral-gray-300 dark:border-neutral-gray-700 text-xs w-full flex items-center gap-2 hover:bg-neutral-gray-100"
            >
              <Chrome className="h-4 w-4" />
              <span>Continue with Google</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => {}}
              className="border border-neutral-gray-300 dark:border-neutral-gray-700 text-xs w-full flex items-center gap-2 hover:bg-neutral-gray-100"
            >
              <Shield className="h-4 w-4" />
              <span>Continue with Apple</span>
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Account switch trigger */}
      <p className="text-center text-xs text-neutral-gray-500">
        New to the platform?{' '}
        <a href="/signup" className="font-bold text-secondary-dark hover:underline">
          Create an Account
        </a>
      </p>
    </div>
  );
}
