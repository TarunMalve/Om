import * as React from 'react';

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-pulse" aria-hidden="true">
      {/* Title skeleton */}
      <div className="space-y-4">
        <div className="h-10 bg-neutral-gray-300 dark:bg-neutral-gray-700 rounded-lg w-1/3" />
        <div className="h-6 bg-neutral-gray-300 dark:bg-neutral-gray-700 rounded-lg w-2/3" />
      </div>

      {/* Grid skeleton */}
      <div className="grid gap-6 sm:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-6 rounded-lg border border-neutral-gray-300 dark:border-neutral-gray-700 bg-neutral-white dark:bg-neutral-gray-100 flex flex-col gap-4"
          >
            <div className="h-10 w-10 rounded-lg bg-neutral-gray-300 dark:bg-neutral-gray-700" />
            <div className="space-y-2">
              <div className="h-5 bg-neutral-gray-300 dark:bg-neutral-gray-700 rounded w-1/2" />
              <div className="h-4 bg-neutral-gray-300 dark:bg-neutral-gray-700 rounded w-5/6" />
              <div className="h-4 bg-neutral-gray-300 dark:bg-neutral-gray-700 rounded w-4/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
