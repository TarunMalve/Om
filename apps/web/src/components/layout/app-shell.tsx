'use client';

import * as React from 'react';
import { useUIStore } from '../../store/use-ui-store.js';
import { useTheme } from 'next-themes';
import { Button } from '@om/ui';
import { Menu, Sun, Moon, Sparkles, BookOpen, Compass, Search, User, Settings } from 'lucide-react';
import { CommandPalette } from '../common/command-palette.js';

export function AppShell({ children }: { children: React.ReactNode }) {
  const { sidebarOpen, toggleSidebar, activeFestival, setActiveFestival } = useUIStore();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Listen to keyboard shortcut for Command Palette (Ctrl+K or Cmd+K)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const simulateFestivalToggle = () => {
    if (!activeFestival) {
      setActiveFestival('mahashivratri');
    } else if (activeFestival === 'mahashivratri') {
      setActiveFestival('diwali');
    } else {
      setActiveFestival(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-white dark:bg-neutral-gray-100 text-neutral-black dark:text-neutral-gray-700 transition-colors duration-300">
      {/* Accessbility: Skip to main content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Header Landmark */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-gray-300 dark:border-neutral-gray-700 bg-neutral-white/80 dark:bg-neutral-gray-100/80 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
              className="p-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <span className="text-xl font-bold tracking-wider text-secondary-base flex items-center gap-2">
              ॐ OM
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Search Launcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCommandPaletteOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 border border-neutral-gray-300 dark:border-neutral-gray-700 rounded-lg text-neutral-gray-500"
              aria-label="Open Command Palette"
            >
              <Search className="h-4 w-4" />
              <span className="text-xs">Search... (⌘K)</span>
            </Button>

            {/* Simulated Festival Controller */}
            <Button
              variant="ghost"
              size="sm"
              onClick={simulateFestivalToggle}
              aria-label="Simulate Festival Calendar"
              className="text-secondary-base"
            >
              <Sparkles className="h-5 w-5" />
            </Button>

            {/* Dark / Light Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Layout Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Navigation Sidebar Landmark */}
        <aside
          role="navigation"
          aria-label="Main Navigation"
          className={`w-64 border-r border-neutral-gray-300 dark:border-neutral-gray-700 bg-neutral-white dark:bg-neutral-gray-100 transition-all duration-300 ${
            sidebarOpen ? 'block' : 'hidden'
          }`}
        >
          <nav className="flex flex-col gap-1 p-4">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-neutral-gray-100 dark:bg-neutral-gray-700 text-secondary-base font-medium"
            >
              <BookOpen className="h-5 w-5" />
              <span>Scripture Reader</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-gray-500 hover:bg-neutral-gray-100 dark:hover:bg-neutral-gray-700 hover:text-neutral-black dark:hover:text-neutral-white"
            >
              <Compass className="h-5 w-5" />
              <span>Knowledge Graph</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-gray-500 hover:bg-neutral-gray-100 dark:hover:bg-neutral-gray-700 hover:text-neutral-black dark:hover:text-neutral-white"
            >
              <User className="h-5 w-5" />
              <span>My Sadhana</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-gray-500 hover:bg-neutral-gray-100 dark:hover:bg-neutral-gray-700 hover:text-neutral-black dark:hover:text-neutral-white"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </nav>
        </aside>

        {/* Content Viewport */}
        <main
          id="main-content"
          role="main"
          className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 md:py-8 outline-none"
          tabIndex={-1}
        >
          {/* Active festival banners */}
          {activeFestival && (
            <div className="mb-6 p-4 rounded-lg bg-secondary-base/10 border border-secondary-base/20 text-secondary-dark flex items-center justify-between">
              <div>
                <span className="font-bold text-sm uppercase tracking-wide">
                  Active Festival Alignment
                </span>
                <p className="text-xs font-medium">
                  {activeFestival === 'mahashivratri'
                    ? 'Mahashivratri theme loaded. Primary deity content prioritized.'
                    : 'Diwali theme loaded. Visual system shifts to Gold / Marigold hues.'}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveFestival(null)}
                className="text-xs"
              >
                Reset Theme
              </Button>
            </div>
          )}

          {children}
        </main>
      </div>

      {/* Command Palette Overlay */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}
