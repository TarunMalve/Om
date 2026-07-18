'use client';

import * as React from 'react';
import { trapFocus } from '@om/shared';
import { Button } from '@om/ui';
import { Search, Book, HelpCircle, X, ShieldAlert } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    if (isOpen) {
      // Focus the input when command palette opens
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
    if (modalRef.current) {
      trapFocus(modalRef.current, e.nativeEvent);
    }
  };

  if (!isOpen) return null;

  // Simple hardcoded shortcuts mapping to different core modules in Om
  const shortcuts = [
    { title: 'Search Bhagavad Gita', shortcut: 'g', desc: 'Jump to scripture verse index', icon: Book },
    { title: 'Ask AI Acharya', shortcut: 'a', desc: 'Interact with AI Mentor', icon: HelpCircle },
    { title: 'System Diagnostics', shortcut: 'd', desc: 'Open technical logs', icon: ShieldAlert }
  ];

  const filteredShortcuts = shortcuts.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-palette-title"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-neutral-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Box */}
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-xl shadow-2xl border border-neutral-gray-300 dark:border-neutral-gray-700 bg-neutral-white dark:bg-neutral-gray-100 overflow-hidden flex flex-col transition-all duration-200"
      >
        <div className="flex items-center px-4 border-b border-neutral-gray-300 dark:border-neutral-gray-700">
          <Search className="h-5 w-5 text-neutral-gray-500 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search scriptures..."
            className="w-full py-4 text-sm bg-transparent border-none outline-none text-neutral-black dark:text-neutral-white placeholder-neutral-gray-500"
          />
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close Command Palette" className="p-1">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="max-h-[300px] overflow-y-auto p-4 flex flex-col gap-2">
          <span id="command-palette-title" className="text-[10px] font-bold text-neutral-gray-500 uppercase tracking-wider mb-2">
            Suggested Commands
          </span>
          {filteredShortcuts.length > 0 ? (
            filteredShortcuts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-gray-100 dark:hover:bg-neutral-gray-700 cursor-pointer group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-neutral-gray-500 group-hover:text-secondary-base" />
                    <div>
                      <p className="text-sm font-semibold text-neutral-black dark:text-neutral-white">{item.title}</p>
                      <p className="text-xs text-neutral-gray-500">{item.desc}</p>
                    </div>
                  </div>
                  <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono rounded border border-neutral-gray-300 dark:border-neutral-gray-700 bg-neutral-gray-100 dark:bg-neutral-gray-700 text-neutral-gray-500">
                    {item.shortcut}
                  </kbd>
                </div>
              );
            })
          ) : (
            <div className="text-center py-6 text-sm text-neutral-gray-500">
              No matching commands or scriptures found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
