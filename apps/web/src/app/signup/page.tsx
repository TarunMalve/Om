'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../store/use-auth-store.js';
import { TextInput, PasswordInput } from '../../components/common/form-inputs.js';
import { Button, Card } from '@om/ui';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SignupPage() {
  const router = useRouter();
  const signupStore = useAuthStore((state) => state.signup);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [terms, setTerms] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = React.useState(false);

  // Password strength calculation
  const getPasswordStrength = () => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const getStrengthLabel = (strength: number) => {
    if (strength === 0) return '';
    if (strength === 1) return 'Weak';
    if (strength === 2) return 'Fair';
    if (strength === 3) return 'Good';
    return 'Strong';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!email) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!terms) {
      newErrors.terms = 'You must accept the terms of service';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(true);
      signupStore(email, name);
      // Route user to OTP verification first
      router.push('/verify-otp');
    }, 1500);
  };

  const passwordStrength = getPasswordStrength();

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
          Begin Your Sadhana
        </h1>
        <p className="text-xs text-neutral-gray-500 font-medium">
          Create an account to track your progress and custom learning paths.
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
              label="Full Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
              }}
              error={errors.name}
              placeholder="e.g. Tarun Malve"
              disabled={isLoading}
              required
            />

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

            <div className="space-y-2">
              <PasswordInput
                label="Password"
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

              {/* Password Strength Meter */}
              {password && (
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="text-neutral-gray-500">Strength:</span>
                    <span
                      className={cn(
                        passwordStrength <= 1 && "text-red-500",
                        passwordStrength === 2 && "text-amber-500",
                        passwordStrength === 3 && "text-blue-500",
                        passwordStrength === 4 && "text-green-600"
                      )}
                    >
                      {getStrengthLabel(passwordStrength)}
                    </span>
                  </div>
                  <div className="h-1 w-full bg-neutral-gray-300 dark:bg-neutral-gray-700 rounded-full overflow-hidden flex gap-0.5">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-full flex-1 transition-colors duration-300",
                          i < passwordStrength
                            ? passwordStrength <= 1
                              ? "bg-red-500"
                              : passwordStrength === 2
                              ? "bg-amber-500"
                              : passwordStrength === 3
                              ? "bg-blue-500"
                              : "bg-green-600"
                            : "bg-transparent"
                        )}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

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

            {/* Terms checkbox */}
            <div className="space-y-1">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-neutral-gray-500">
                <input
                  type="checkbox"
                  checked={terms}
                  onChange={(e) => {
                    setTerms(e.target.checked);
                    if (errors.terms) setErrors((prev) => ({ ...prev, terms: '' }));
                  }}
                  className="rounded border-neutral-gray-300 accent-secondary-base mt-0.5"
                />
                <span className="leading-tight">
                  I accept the <a href="#" className="font-bold text-secondary-dark hover:underline">Terms of Service</a> and have read the{' '}
                  <a href="#" className="font-bold text-secondary-dark hover:underline">Privacy Policy</a>.
                </span>
              </label>
              {errors.terms && (
                <p className="text-[10px] text-red-500 font-semibold" role="alert">
                  {errors.terms}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button variant="secondary" type="submit" isLoading={isLoading} className="w-full font-bold">
              <span>Create Account</span>
              {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>
        </Card>
      </motion.div>

      <p className="text-center text-xs text-neutral-gray-500">
        Already registered?{' '}
        <a href="/login" className="font-bold text-secondary-dark hover:underline">
          Sign In
        </a>
      </p>
    </div>
  );
}
