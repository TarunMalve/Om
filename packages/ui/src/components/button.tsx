import * as React from 'react';
import { cn } from '@om/shared';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading = false, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      primary: 'bg-primary-base text-neutral-white hover:bg-primary-dark focus-visible:ring-primary-base',
      secondary: 'bg-secondary-base text-neutral-white hover:bg-secondary-dark focus-visible:ring-secondary-base',
      accent: 'bg-accent-base text-neutral-white hover:bg-accent-dark focus-visible:ring-accent-base',
      ghost: 'bg-transparent text-neutral-black dark:text-neutral-white hover:bg-neutral-gray-100 dark:hover:bg-neutral-gray-700 focus-visible:ring-neutral-gray-300'
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base'
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
