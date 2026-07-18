import * as React from 'react';
import { cn } from '@om/shared';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 0 | 1 | 2;
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, elevation = 1, interactive = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-lg border border-neutral-gray-300 dark:border-neutral-gray-700 bg-neutral-white dark:bg-neutral-gray-700 text-neutral-black dark:text-neutral-white transition-all duration-200';
    
    const elevations = {
      0: 'shadow-none border-transparent',
      1: 'shadow-sm',
      2: 'shadow-md'
    };

    const interactiveStyles = interactive
      ? 'hover:scale-[1.02] hover:shadow-md cursor-pointer focus-within:ring-2 focus-within:ring-primary-base focus-within:ring-offset-2'
      : '';

    return (
      <div
        ref={ref}
        className={cn(baseStyles, elevations[elevation], interactiveStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
