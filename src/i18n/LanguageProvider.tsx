'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import ar from './ar.json';
import en from './en.json';

type Language = 'ar' | 'en';
type Translations = typeof ar;

interface LanguageContextType {
  lang: Language;
  t: Translations;
  toggleLanguage: () => void;
  dir: 'rtl' | 'ltr';
}

const translations = { ar, en };

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ar',
  t: ar,
  toggleLanguage: () => {},
  dir: 'rtl',
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    const saved = localStorage.getItem('ishbilia-lang') as Language | null;
    if (saved && (saved === 'ar' || saved === 'en')) {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('ishbilia-lang', lang);
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  }, []);

  const value: LanguageContextType = {
    lang,
    t: translations[lang] as Translations,
    toggleLanguage,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
