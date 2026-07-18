'use client';

import * as React from 'react';
import { Button } from '@om/ui';
import { HelpCircle, Search, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto py-16 flex flex-col items-center text-center gap-6 animate-fade-in">
      <div className="h-16 w-16 rounded-full bg-secondary-base/10 text-secondary-base flex items-center justify-center">
        <HelpCircle className="h-8 w-8" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-black dark:text-neutral-white">
          404 - Path Not Found
        </h1>
        <p className="text-sm text-neutral-gray-500">
          The knowledge page you are exploring could not be located. It may have been moved, renamed, or is currently under validation.
        </p>
      </div>

      <div className="w-full flex flex-col gap-2 border border-neutral-gray-300 dark:border-neutral-gray-700 rounded-lg p-4 bg-neutral-white dark:bg-neutral-gray-100">
        <span className="text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider text-left mb-1">
          Zero-Result Recovery Suggestions
        </span>
        <div className="flex flex-col gap-1 text-left text-sm text-neutral-gray-500">
          <p>• Press <kbd className="px-1 bg-neutral-gray-100 dark:bg-neutral-gray-700 rounded border">Cmd+K</kbd> to search scriptures</p>
          <p>• Verify you have typed the path correctly (e.g., `/texts` or `/map` )</p>
          <p>• Consult our general roadmap to see pending feature rollout dates</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="primary" onClick={() => window.location.href = '/'}>
          <Home className="mr-2 h-4 w-4" />
          Go Home
        </Button>
      </div>
    </div>
  );
}
