'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
  coloredPart?: string;
  coloredClassName?: string;
  addDotsAfterPart1?: boolean;
  loop?: boolean;
}

export default function TypewriterText({
  text,
  speed = 25,
  delay = 300,
  pauseDuration = 2200,
  className = '',
  cursorClassName = 'border-r-2 border-cyan-400 animate-pulse',
  showCursor = true,
  coloredPart,
  coloredClassName = 'inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-orange-400 to-cyan-300',
  addDotsAfterPart1 = false,
  loop = true
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [dots, setDots] = useState('');
  const [loopCount, setLoopCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (!isInView) {
      setDisplayedText('');
      setIsTyping(false);
      setDots('');
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    let dotsIntervalId: NodeJS.Timeout;
    let loopTimeoutId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      setIsTyping(true);
      setDisplayedText('');
      setDots('');
      let currentIndex = 0;

      intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(intervalId);

          if (addDotsAfterPart1) {
            let dotCount = 0;
            dotsIntervalId = setInterval(() => {
              if (dotCount < 5) {
                setDots((prev) => prev + '.');
                dotCount++;
              } else {
                clearInterval(dotsIntervalId);
                if (loop) {
                  loopTimeoutId = setTimeout(() => {
                    setLoopCount((prev) => prev + 1);
                  }, pauseDuration);
                }
              }
            }, 180);
          } else if (loop) {
            loopTimeoutId = setTimeout(() => {
              setLoopCount((prev) => prev + 1);
            }, pauseDuration);
          }
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
      if (dotsIntervalId) clearInterval(dotsIntervalId);
      if (loopTimeoutId) clearTimeout(loopTimeoutId);
    };
  }, [isInView, text, speed, delay, addDotsAfterPart1, loop, pauseDuration, loopCount]);

  const renderContent = () => {
    if (!coloredPart) {
      return (
        <span>
          {displayedText}
          {dots}
        </span>
      );
    }

    const splitIndex = text.indexOf(coloredPart);
    if (splitIndex === -1) {
      return (
        <span>
          {displayedText}
          {dots}
        </span>
      );
    }

    const part1 = displayedText.slice(0, splitIndex);
    const part2 = displayedText.length > splitIndex ? displayedText.slice(splitIndex) : '';

    return (
      <>
        <span>
          {part1}
          {dots}{' '}
        </span>
        {part2 && <span className={coloredClassName}>{part2}</span>}
      </>
    );
  };

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {renderContent()}
      {showCursor && isTyping && <span className={`ml-0.5 ${cursorClassName}`}>&nbsp;</span>}
    </div>
  );
}
