'use client';

import * as React from 'react';
import { Eye, EyeOff, ShieldAlert } from 'lucide-react';
import { cn } from '@om/shared';

// Reusable Text Input Component
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || React.useId();
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-xs font-bold text-neutral-gray-700 dark:text-neutral-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-3 py-2 text-sm rounded-lg border bg-transparent text-neutral-black dark:text-neutral-white placeholder-neutral-gray-500 focus:outline-none transition-colors",
            error 
              ? "border-red-500 focus:ring-1 focus:ring-red-500" 
              : "border-neutral-gray-300 dark:border-neutral-gray-700 focus:border-primary-base focus:ring-1 focus:ring-primary-base",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold" role="alert">
            <ShieldAlert className="h-3.5 w-3.5" />
            {error}
          </p>
        )}
      </div>
    );
  }
);
TextInput.displayName = 'TextInput';

// Reusable Password Input Component (Show/Hide Toggle)
interface PasswordInputProps extends Omit<TextInputProps, 'type'> {}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const inputId = id || React.useId();

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-xs font-bold text-neutral-gray-700 dark:text-neutral-gray-700">
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={showPassword ? 'text' : 'password'}
            className={cn(
              "w-full pl-3 pr-10 py-2 text-sm rounded-lg border bg-transparent text-neutral-black dark:text-neutral-white placeholder-neutral-gray-500 focus:outline-none transition-colors",
              error 
                ? "border-red-500 focus:ring-1 focus:ring-red-500" 
                : "border-neutral-gray-300 dark:border-neutral-gray-700 focus:border-primary-base focus:ring-1 focus:ring-primary-base",
              className
            )}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-gray-500 hover:text-neutral-black dark:hover:text-neutral-white"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {error && (
          <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold" role="alert">
            <ShieldAlert className="h-3.5 w-3.5" />
            {error}
          </p>
        )}
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';

// Reusable OTP Input Component (6 individual digits input)
interface OTPInputProps {
  value: string;
  onChange: (otp: string) => void;
  error?: string;
}

export function OTPInput({ value, onChange, error }: OTPInputProps) {
  const inputsRef = React.useRef<Array<HTMLInputElement | null>>([]);
  const cells = Array.from({ length: 6 });

  const getOtpArray = () => {
    const arr = value.split('');
    while (arr.length < 6) arr.push('');
    return arr;
  };

  const handleInputChange = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const currentOtp = getOtpArray();
    
    // Accept only numeric characters
    if (val && !/^\d$/.test(val)) return;

    currentOtp[idx] = val;
    const combined = currentOtp.join('').slice(0, 6);
    onChange(combined);

    // Auto-focus next field
    if (val && idx < 5) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      const currentOtp = getOtpArray();
      
      if (!currentOtp[idx] && idx > 0) {
        // Clear previous cell and shift focus back
        currentOtp[idx - 1] = '';
        onChange(currentOtp.join(''));
        inputsRef.current[idx - 1]?.focus();
      } else {
        currentOtp[idx] = '';
        onChange(currentOtp.join(''));
      }
    }

    // Arrow keys navigation
    if (e.key === 'ArrowLeft' && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && idx < 5) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    if (!/^\d+$/.test(pastedData)) return;

    const formatted = pastedData.slice(0, 6);
    onChange(formatted);

    // Focus last character cell or next available empty
    const focusTarget = Math.min(formatted.length, 5);
    inputsRef.current[focusTarget]?.focus();
  };

  return (
    <div className="flex flex-col gap-3 items-center w-full">
      <div className="flex gap-2 justify-center" role="group" aria-label="One-Time Password code">
        {cells.map((_, idx) => {
          const otpArr = getOtpArray();
          return (
            <input
              key={idx}
              ref={(el) => { inputsRef.current[idx] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={otpArr[idx]}
              onChange={(e) => handleInputChange(idx, e)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              onPaste={handlePaste}
              className={cn(
                "w-10 h-12 text-center text-lg font-bold rounded-lg border bg-transparent text-neutral-black dark:text-neutral-white focus:outline-none transition-colors",
                error 
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-neutral-gray-300 dark:border-neutral-gray-700 focus:border-primary-base focus:ring-1 focus:ring-primary-base"
              )}
              aria-label={`Digit ${idx + 1}`}
            />
          );
        })}
      </div>
      {error && (
        <p className="text-[10px] text-red-500 flex items-center gap-1 font-semibold" role="alert">
          <ShieldAlert className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
