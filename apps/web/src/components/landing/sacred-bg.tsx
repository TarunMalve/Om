'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

export function SacredBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Meditative backdrop gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-base/5 via-transparent to-primary-base/5" />

      {/* Floating ambient light */}
      <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-secondary-base/10 rounded-full blur-[120px] opacity-70 dark:opacity-40 animate-pulse duration-10000" />

      {/* Sacred Geometry: Mandala / Lotus grid */}
      <motion.div
        className="absolute top-[15%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] opacity-20 dark:opacity-10 text-secondary-base"
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
          {/* Centered concentric circles */}
          <circle cx="100" cy="100" r="10" />
          <circle cx="100" cy="100" r="30" />
          <circle cx="100" cy="100" r="60" />
          <circle cx="100" cy="100" r="90" />

          {/* Symmetrical intersecting lines */}
          <line x1="100" y1="10" x2="100" y2="190" />
          <line x1="10" y1="100" x2="190" y2="100" />
          <line x1="36.36" y1="36.36" x2="163.64" y2="163.64" />
          <line x1="36.36" y1="163.64" x2="163.64" y2="36.36" />

          {/* Intersecting lotus petal arrays */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x = 100 + 60 * Math.cos(angle);
            const y = 100 + 60 * Math.sin(angle);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="30"
                className="stroke-secondary-base/50"
              />
            );
          })}
        </svg>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = 15 + Math.random() * 15;

          return (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-secondary-base/30 rounded-full"
              style={{ top: `${randomY}%`, left: `${randomX}%` }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
