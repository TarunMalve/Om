import { create } from 'zustand';
import { LearningLevel } from '@om/types';

export interface UserSession {
  name: string;
  email: string;
  language?: string;
  interests?: string[];
  experienceLevel?: LearningLevel;
  goals?: string[];
  learningStyles?: string[];
  dailyRhythm?: {
    duration: string;
    timeOfDay: string;
    reminders: boolean;
  };
}

interface AuthState {
  user: UserSession | null;
  isAuthenticated: boolean;
  onboardingStep: number;
  tempOnboarding: Partial<UserSession>;
  login: (email: string, name?: string) => void;
  signup: (email: string, name: string) => void;
  logout: () => void;
  setOnboardingStep: (step: number) => void;
  updateTempOnboarding: (data: Partial<UserSession>) => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  // Try to load initial session state from localStorage if browser environment
  let initialUser: UserSession | null = null;
  let initialAuth = false;
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('om_auth_session');
    if (saved) {
      try {
        initialUser = JSON.parse(saved);
        initialAuth = true;
      } catch (_) {
        // ignore
      }
    }
  }

  return {
    user: initialUser,
    isAuthenticated: initialAuth,
    onboardingStep: 1,
    tempOnboarding: {},

    login: (email, name = 'Learner') => {
      const session: UserSession = { name, email };
      if (typeof window !== 'undefined') {
        localStorage.setItem('om_auth_session', JSON.stringify(session));
      }
      set({ user: session, isAuthenticated: true });
    },

    signup: (email, name) => {
      const session: UserSession = { name, email };
      if (typeof window !== 'undefined') {
        localStorage.setItem('om_auth_session', JSON.stringify(session));
      }
      set({ user: session, isAuthenticated: true, onboardingStep: 1, tempOnboarding: {} });
    },

    logout: () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('om_auth_session');
      }
      set({ user: null, isAuthenticated: false, onboardingStep: 1, tempOnboarding: {} });
    },

    setOnboardingStep: (step) => set({ onboardingStep: step }),

    updateTempOnboarding: (data) =>
      set((state) => ({
        tempOnboarding: { ...state.tempOnboarding, ...data },
      })),

    completeOnboarding: () =>
      set((state) => {
        if (!state.user) return state;
        const updatedUser = { ...state.user, ...state.tempOnboarding };
        if (typeof window !== 'undefined') {
          localStorage.setItem('om_auth_session', JSON.stringify(updatedUser));
        }
        return { user: updatedUser, tempOnboarding: {} };
      }),

    resetOnboarding: () => set({ onboardingStep: 1, tempOnboarding: {} }),
  };
});
