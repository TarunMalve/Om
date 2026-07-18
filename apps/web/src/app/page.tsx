'use client';

import * as React from 'react';
import { Card } from '@om/ui';
import { Sparkles, BookOpen, Compass, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-black dark:text-neutral-white sm:text-5xl">
          Welcome to <span className="text-secondary-base">Om Platform</span>
        </h1>
        <p className="text-lg text-neutral-gray-500">
          The enterprise-grade architecture foundation has been successfully initialized. Core workspaces, shared design tokens, and accessibility hooks are compiled and active.
        </p>
      </div>

      {/* Overview of Initialized Layers */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Card className="p-6 flex flex-col gap-4">
          <div className="h-10 w-10 rounded-lg bg-primary-base/10 text-primary-base flex items-center justify-center">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-neutral-black dark:text-neutral-white">
              Ontology & Types System
            </h2>
            <p className="text-sm text-neutral-gray-500 mt-1">
              `@om/types` package is populated with standard schema properties for Scriptures, HLX learning paths, and Knowledge Graphs.
            </p>
          </div>
        </Card>

        <Card className="p-6 flex flex-col gap-4">
          <div className="h-10 w-10 rounded-lg bg-secondary-base/10 text-secondary-base flex items-center justify-center">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-neutral-black dark:text-neutral-white">
              Tailwind CSS v4 & Tokens
            </h2>
            <p className="text-sm text-neutral-gray-500 mt-1">
              Design tokens, theme overrides, and active Hindu calendar festival systems (e.g. Mahashivratri) are configured directly in `globals.css`.
            </p>
          </div>
        </Card>

        <Card className="p-6 flex flex-col gap-4">
          <div className="h-10 w-10 rounded-lg bg-accent-base/10 text-accent-base flex items-center justify-center">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-neutral-black dark:text-neutral-white">
              Command Palette Foundation
            </h2>
            <p className="text-sm text-neutral-gray-500 mt-1">
              Keyboard navigation palette is bound to `Cmd+K` for global system actions and navigation commands.
            </p>
          </div>
        </Card>

        <Card className="p-6 flex flex-col gap-4">
          <div className="h-10 w-10 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-neutral-black dark:text-neutral-white">
              Accessibility (WCAG AA+)
            </h2>
            <p className="text-sm text-neutral-gray-500 mt-1">
              ARIA roles, focus outlines, semantic layout structures, and keyboard navigation skip-links are integrated into the root layout.
            </p>
          </div>
        </Card>
      </div>

      <div className="p-4 rounded-lg bg-neutral-gray-100 dark:bg-neutral-gray-700/50 border border-neutral-gray-300 dark:border-neutral-gray-700 text-center">
        <span className="text-xs font-mono text-neutral-gray-500">
          Environment Ready | pnpm workspace builds successful
        </span>
      </div>
    </div>
  );
}
