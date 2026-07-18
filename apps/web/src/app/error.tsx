'use client';

import * as React from 'react';
import { Button } from '@om/ui';
import { ShieldAlert } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    // Log error to diagnostic service (represented as console.error stub)
    console.error('Unhandled Application Error Boundary triggered:', error);
  }, [error]);

  return (
    <div className="max-w-md mx-auto py-12 flex flex-col items-center text-center gap-6 animate-fade-in">
      <div className="h-16 w-16 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center">
        <ShieldAlert className="h-8 w-8" />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-black dark:text-neutral-white">
          Something went wrong
        </h1>
        <p className="text-sm text-neutral-gray-500">
          We encountered an unexpected error. This has been flagged for diagnostic review.
        </p>
        {error.digest && (
          <p className="text-xs font-mono text-neutral-gray-500 bg-neutral-gray-100 dark:bg-neutral-gray-700 p-2 rounded">
            Digest Code: {error.digest}
          </p>
        )}
      </div>

      <div className="flex gap-4">
        <Button variant="primary" onClick={reset}>
          Try Again
        </Button>
        <Button variant="ghost" onClick={() => window.location.href = '/'}>
          Return Home
        </Button>
      </div>
    </div>
  );
}
