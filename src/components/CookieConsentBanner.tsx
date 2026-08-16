'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck, Check, X, Settings2, Lock } from 'lucide-react';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  
  // Custom preference states
  const [preferences, setPreferences] = useState({
    essential: true, // Always true & disabled
    analytics: true,
    performance: true,
    marketing: false
  });

  useEffect(() => {
    try {
      // Check both localStorage AND document.cookie so it NEVER prompts again once set
      const savedLocalStorage = localStorage.getItem('nexus_cookie_consent');
      const hasCookie = document.cookie.includes('nexus_cookie_consent=true');

      if (!savedLocalStorage && !hasCookie) {
        const timer = setTimeout(() => setShowBanner(true), 1500);
        return () => clearTimeout(timer);
      } else {
        setShowBanner(false);
      }
    } catch (e) {
      // fallback
    }
  }, []);

  const saveConsentDecision = (consentObj: typeof preferences) => {
    try {
      // 1. Save in localStorage
      localStorage.setItem('nexus_cookie_consent', JSON.stringify(consentObj));
      // 2. Set browser cookie valid for 1 year (365 days)
      document.cookie = "nexus_cookie_consent=true; path=/; max-age=31536000; SameSite=Lax";
    } catch (e) {}
    setShowBanner(false);
    setShowSettingsModal(false);
  };

  const handleAcceptAll = () => {
    const fullConsent = { essential: true, analytics: true, performance: true, marketing: true };
    saveConsentDecision(fullConsent);
  };

  const handleRejectAll = () => {
    const minConsent = { essential: true, analytics: false, performance: false, marketing: false };
    saveConsentDecision(minConsent);
  };

  const handleSavePreferences = () => {
    saveConsentDecision(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* 1. FLOATING COOKIES & CACHE CONSENT NOTIFICATION BANNER */}
      <AnimatePresence>
        {showBanner && !showSettingsModal && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 p-5 rounded-3xl bg-[#090b22]/95 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_50px_rgba(56,189,248,0.25)] space-y-4"
          >
            {/* Header */}
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white shadow-lg shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-extrabold text-white font-['Outfit']">
                    Cookie & Cache Preferences
                  </h4>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 text-[9px] font-mono font-bold uppercase">
                    PRIVACY FIRST
                  </span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  We use cookies and browser cache storage to optimize site performance, analyze traffic, and deliver personalized learning experiences.{' '}
                  <Link href="/cookie-policy" className="text-cyan-400 underline font-semibold hover:text-cyan-300">
                    Cookie Policy
                  </Link>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-end gap-2 pt-1 border-t border-white/10">
              <button
                onClick={() => setShowSettingsModal(true)}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-[11px] font-mono font-bold text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Settings2 className="w-3.5 h-3.5 text-purple-400" /> Customize
              </button>

              <button
                onClick={handleRejectAll}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-[11px] font-mono font-bold text-zinc-300 hover:text-white transition-colors"
              >
                Reject Non-Essential
              </button>

              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-95 text-[11px] font-bold text-white shadow-md flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5 text-cyan-200" /> Accept All
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. SPECIFIED COOKIE CUSTOMIZATION PREFERENCES MODAL */}
      <AnimatePresence>
        {showSettingsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-lg bg-[#0c0f2a] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(56,189,248,0.25)] space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto [scrollbar-width:none]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white font-['Outfit']">
                      Custom Cookie & Cache Settings
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono">
                      Choose which cookie categories you allow.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowSettingsModal(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Toggles */}
              <div className="space-y-4">
                {/* Essential Cookies (Always On) */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">Essential & System Cache</span>
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="text-[11px] text-zinc-400">Required for security, login sessions, and core platform stability.</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                    ALWAYS ACTIVE
                  </span>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-white">Performance & Analytics Cookies</span>
                    <p className="text-[11px] text-zinc-400">Helps us measure course engagement and optimize page speed.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </div>

                {/* Functional Cache Cookies */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-white">Functional Local Storage Cache</span>
                    <p className="text-[11px] text-zinc-400">Remembers your UI preferences, dark mode, and active module states.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.performance}
                    onChange={(e) => setPreferences({ ...preferences, performance: e.target.checked })}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-white">Targeted Advisory & Marketing</span>
                    <p className="text-[11px] text-zinc-400">Allows relevant tech career event notifications and course updates.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowSettingsModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold text-zinc-300"
                >
                  Cancel
                </button>
                
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-bold text-white shadow-md"
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
