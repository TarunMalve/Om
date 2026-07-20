'use client';

import * as React from 'react';
import { Landmark, Github, Twitter, Compass } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-white dark:bg-neutral-gray-100 border-t border-neutral-gray-300 dark:border-neutral-gray-700 py-12">
      <div className="max-w-5xl mx-auto px-4 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        
        {/* Brand block */}
        <div className="space-y-4">
          <span className="text-xl font-bold tracking-wider text-secondary-base flex items-center gap-2">
            ॐ OM
          </span>
          <p className="text-xs text-neutral-gray-500 leading-relaxed">
            Preserving and illuminating the literary, philosophical, and architectural legacy of Indian civilization.
          </p>
          <div className="flex items-center gap-3 text-neutral-gray-500">
            <a href="https://github.com/TarunMalve/Om" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-base transition-colors" aria-label="GitHub Repository">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-secondary-base transition-colors" aria-label="Twitter Community Page">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 1: Scriptures */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-neutral-black dark:text-neutral-white uppercase tracking-wider">
            Scriptures
          </h4>
          <ul className="flex flex-col gap-2 text-xs text-neutral-gray-500">
            <li><a href="#" className="hover:text-secondary-base transition-colors">Vedas Samhitas</a></li>
            <li><a href="#" className="hover:text-secondary-base transition-colors">Principal Upanishads</a></li>
            <li><a href="#" className="hover:text-secondary-base transition-colors">Bhagavad Gita</a></li>
            <li><a href="#" className="hover:text-secondary-base transition-colors">Itihasas (Epics)</a></li>
          </ul>
        </div>

        {/* Column 2: Governance */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-neutral-black dark:text-neutral-white uppercase tracking-wider">
            Governance
          </h4>
          <ul className="flex flex-col gap-2 text-xs text-neutral-gray-500">
            <li><a href="#" className="hover:text-secondary-base transition-colors">Scholarly Advisory Board</a></li>
            <li><a href="#" className="hover:text-secondary-base transition-colors">Verification Process</a></li>
            <li><a href="#" className="hover:text-secondary-base transition-colors">Open Data Index</a></li>
            <li><a href="#" className="hover:text-secondary-base transition-colors">Ethical AI Policies</a></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-neutral-black dark:text-neutral-white uppercase tracking-wider">
            Repository
          </h4>
          <ul className="flex flex-col gap-2 text-xs text-neutral-gray-500">
            <li><a href="#" className="hover:text-secondary-base transition-colors">Contributing Guide</a></li>
            <li><a href="#" className="hover:text-secondary-base transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-secondary-base transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-secondary-base transition-colors">Sitemap</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-5xl mx-auto px-4 border-t border-neutral-gray-300 dark:border-neutral-gray-700 mt-8 pt-6 flex flex-wrap items-center justify-between text-[10px] text-neutral-gray-500">
        <p>© 2026 Om Project Contributors. Released under MIT and open knowledge licenses.</p>
        <p className="flex items-center gap-1">
          <Landmark className="h-3.5 w-3.5" />
          Vasudhaiva Kutumbakam
        </p>
      </div>
    </footer>
  );
}
