import { create } from 'zustand';
import { LearningLevel } from '@om/types';

interface UIState {
  sidebarOpen: boolean;
  activeFestival: string | null;
  learningLevel: LearningLevel;
  accessibilityHighContrast: boolean;
  activeJourneyId: string | null;
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
  setActiveFestival: (festival: string | null) => void;
  setLearningLevel: (level: LearningLevel) => void;
  toggleAccessibilityHighContrast: () => void;
  setActiveJourneyId: (journeyId: string | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  activeFestival: null,
  learningLevel: 'novice',
  accessibilityHighContrast: false,
  activeJourneyId: null,

  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (isOpen) => set({ sidebarOpen: isOpen }),
  setActiveFestival: (festival) => {
    // Inject the festival token into HTML body attribute for dynamic Tailwind v4 selection
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (festival) {
        root.setAttribute('data-festival', festival);
      } else {
        root.removeAttribute('data-festival');
      }
    }
    set({ activeFestival: festival });
  },
  setLearningLevel: (level) => set({ learningLevel: level }),
  toggleAccessibilityHighContrast: () => set((state) => {
    const nextState = !state.accessibilityHighContrast;
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (nextState) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }
    }
    return { accessibilityHighContrast: nextState };
  }),
  setActiveJourneyId: (journeyId) => set({ activeJourneyId: journeyId }),
}));
