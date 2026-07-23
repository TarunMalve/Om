'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../../store/use-auth-store.js';
import { Button, Card } from '@om/ui';
import { Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OnboardingLanguage() {
  const router = useRouter();
  const { tempOnboarding, updateTempOnboarding } = useAuthStore();
  const [selectedLang, setSelectedLang] = React.useState(tempOnboarding.language || 'en');

  const languages = [
    { code: 'en', label: 'English', desc: 'Default layout commentaries and interfaces' },
    { code: 'hi', label: 'हिंदी (Hindi)', desc: 'अनुवाद एवं देवनागरी संस्कृत टीकाएँ' },
    { code: 'sa', label: 'संस्कृतम् (Sanskrit)', desc: 'शुद्ध देवनागरी एवं शब्दकोश विश्लेषण' }
  ];

  const handleContinue = () => {
    updateTempOnboarding({ language: selectedLang });
    router.push('/onboarding/interests');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-extrabold tracking-tight text-neutral-black dark:text-neutral-white">
          Choose Interface Language
        </h1>
        <p className="text-xs text-neutral-gray-500 max-w-xs mx-auto">
          Select your primary learning language. This setting controls default scripture translation layers.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {languages.map((lang) => (
          <div
            key={lang.code}
            onClick={() => setSelectedLang(lang.code)}
            className="cursor-pointer"
          >
            <Card
              className={`p-4 border flex items-start gap-4 transition-all duration-200 ${
                selectedLang === lang.code
                  ? 'border-secondary-base bg-secondary-base/5'
                  : 'border-neutral-gray-300 dark:border-neutral-gray-700 hover:border-neutral-gray-500'
              }`}
            >
              <Globe className={`h-5 w-5 mt-0.5 ${selectedLang === lang.code ? 'text-secondary-base' : 'text-neutral-gray-500'}`} />
              <div>
                <h3 className="text-xs font-bold text-neutral-black dark:text-neutral-white">{lang.label}</h3>
                <p className="text-[10px] text-neutral-gray-500 leading-normal">{lang.desc}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <Button
        variant="secondary"
        onClick={handleContinue}
        className="w-full font-bold pt-4"
      >
        <span>Continue</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
}
