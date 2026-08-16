'use client';

import React, { useState, Children, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  initialStep?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
}

export default function Stepper({
  children,
  initialStep = 1,
  autoPlay = true,
  autoPlayInterval = 3500,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  className = '',
  ...rest
}: StepperProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(1);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;

  // Auto-scroll / Auto-play timer
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentStep(prev => {
        const next = prev >= totalSteps ? 1 : prev + 1;
        onStepChange(next);
        return next;
      });
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, totalSteps, onStepChange]);

  const handleDotClick = (stepIndex: number) => {
    const nextStep = stepIndex + 1;
    setDirection(nextStep > currentStep ? 1 : -1);
    setCurrentStep(nextStep);
    onStepChange(nextStep);
  };

  return (
    <div
      className={`flex min-h-full flex-1 flex-col items-center justify-center p-0 w-full space-y-6 ${className}`}
      {...rest}
    >
      {/* Main Card Container */}
      <div className="w-full rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl">
        <div className="w-full min-h-fit relative p-6 sm:p-10">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-auto"
            >
              {stepsArray[currentStep - 1]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Dots Below the Image Scroll */}
      <div className="flex items-center justify-center gap-2.5 pt-2">
        {stepsArray.map((_, idx) => {
          const isActive = currentStep === idx + 1;
          return (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to step ${idx + 1}`}
              className="group focus:outline-none py-2 px-1"
            >
              <motion.div
                layout
                animate={{
                  width: isActive ? 32 : 10,
                  backgroundColor: isActive ? '#38bdf8' : 'rgba(255, 255, 255, 0.2)'
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={`h-2.5 rounded-full ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.6)]'
                    : 'group-hover:bg-white/40'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

const stepVariants = {
  enter: (dir: number) => ({
    x: dir >= 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (dir: number) => ({
    x: dir >= 0 ? -50 : 50,
    opacity: 0
  })
};

export function Step({ children }: { children: React.ReactNode }) {
  return <div className="w-full h-auto">{children}</div>;
}
