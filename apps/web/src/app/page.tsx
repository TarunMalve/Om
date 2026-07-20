'use client';

import * as React from 'react';
import { SacredBackground } from '../components/landing/sacred-bg.js';
import { HeroSection } from '../components/landing/hero.js';
import { MissionVision } from '../components/landing/mission-vision.js';
import { KnowledgeUniverse } from '../components/landing/knowledge-universe.js';
import { GraphPreview } from '../components/landing/graph-preview.js';
import { AcharyaShowcase } from '../components/landing/acharya-showcase.js';
import { CivilizationTimeline } from '../components/landing/civilization-timeline.js';
import { ScripturesShowcase } from '../components/landing/scriptures-showcase.js';
import { TempleHeritage } from '../components/landing/temple-heritage.js';
import { DailyWisdom } from '../components/landing/daily-wisdom.js';
import { TestimonialsFAQ } from '../components/landing/testimonials-faq.js';
import { Footer } from '../components/landing/footer.js';

export default function LandingPage() {
  // Embed Structured Data Schema for SEO mapping on render
  React.useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      'name': 'Om Platform',
      'description': 'AI-native portal mapping the scriptures, historical timelines, and cognitive concepts of Indian Civilization.',
      'url': 'https://om.platform',
      'logo': 'https://om.platform/logo.png',
      'knowsAbout': [
        'Sanatan Dharma',
        'Sanskrit Scriptures',
        'Vedas',
        'Upanishads',
        'Indian Philosophy',
        'Temple Architecture'
      ]
    };

    const scriptId = 'jsonld-structured-data';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    
    scriptElement.text = JSON.stringify(schema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Meditative floating graphics & gradients overlay */}
      <SacredBackground />

      {/* Sections structure */}
      <div className="space-y-4">
        <HeroSection />
        <MissionVision />
        <KnowledgeUniverse />
        <GraphPreview />
        <AcharyaShowcase />
        <CivilizationTimeline />
        <ScripturesShowcase />
        <TempleHeritage />
        <DailyWisdom />
        <TestimonialsFAQ />
        <Footer />
      </div>
    </div>
  );
}
