'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUIStore } from '../store/use-ui-store.js';

export function RootProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  const activeFestival = useUIStore((state) => state.activeFestival);

  // Sync active festival data attribute on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (activeFestival) {
        root.setAttribute('data-festival', activeFestival);
      } else {
        root.removeAttribute('data-festival');
      }
    }
  }, [activeFestival]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
