import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import i18n from '../i18n';
import BrandIcon from './BrandIcon';

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const { scrollYProgress } = useScroll();

  const [showLangMenu, setShowLangMenu] = useState(false);
  const langMenuRef = useRef();
  const { t, i18n: i18nextInstance } = useTranslation();

  const languages = [
    { code: 'bs', label: 'BiH', emoji: '🇧🇦' },
    { code: 'en', label: 'ENG', emoji: '🇬🇧' },
    { code: 'it', label: 'IT', emoji: '🇮🇹' },
    { code: 'de', label: 'DE', emoji: '🇩🇪' },
  ];
  const currentLang = languages.find((l) => l.code === i18nextInstance.language) || languages[0];

  const navItems = [
    { href: '/', label: t('menu.home') },
    { href: '/informacije', label: t('menu.about') },
    { href: '/cloud', label: t('menu.cloud') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setShowLangMenu(false);
      }
    }
    if (showLangMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLangMenu]);

  useEffect(() => {
    setIsCollapse(false);
  }, [path]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="origin-left h-[3px] bg-gradient-to-r from-accent-cyan via-accent-blue to-purple-500"
      />

      <div
        className={`transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="container mx-auto px-5 lg:px-10 flex items-center justify-between h-20">
          <BrandIcon />

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((nav) => (
              <Link
                key={nav.href}
                to={nav.href}
                className={`relative px-4 py-2 text-[15px] font-medium tracking-wide transition-colors duration-200 ${
                  path === nav.href ? 'text-accent-cyan' : 'text-slate-300 hover:text-white'
                }`}
              >
                {nav.label}
                {path === nav.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                  />
                )}
              </Link>
            ))}

            <Link
              to="/kontakt"
              className="ml-3 px-6 py-2.5 rounded-xl font-semibold text-navy-950 bg-gradient-to-r from-accent-cyan to-accent-blue hover:shadow-glow-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              {t('menu.contact')}
            </Link>

            {/* LANGUAGE */}
            <div className="relative ml-3" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setShowLangMenu((prev) => !prev)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass text-sm text-slate-200 hover:border-accent-cyan/40 transition"
                title="Promijeni jezik"
              >
                <span>{currentLang.emoji}</span>
                <span className="font-medium text-xs">{currentLang.label}</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {showLangMenu && (
                  <motion.ul
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-28 glass rounded-xl overflow-hidden text-sm"
                  >
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          type="button"
                          className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-white/10 transition ${
                            i18nextInstance.language === lang.code ? 'text-accent-cyan font-semibold' : 'text-slate-200'
                          }`}
                          onClick={() => {
                            i18n.changeLanguage(lang.code);
                            setShowLangMenu(false);
                          }}
                        >
                          <span>{lang.emoji}</span>
                          {lang.label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* MOBILE burger */}
          <button
            type="button"
            className="block lg:hidden text-slate-200 focus:outline-none"
            onClick={() => setIsCollapse(!isCollapse)}
            aria-label="Meni"
          >
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path className={`${isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              <path className={`${!isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {isCollapse && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden glass border-t-0 overflow-hidden"
            >
              <ul className="flex flex-col px-6 py-4 gap-1">
                {navItems.map((nav) => (
                  <li key={nav.href}>
                    <Link
                      to={nav.href}
                      className={`block px-4 py-3 rounded-xl font-medium transition ${
                        path === nav.href ? 'text-accent-cyan bg-white/5' : 'text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      {nav.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-2">
                  <Link
                    to="/kontakt"
                    className="block text-center px-6 py-3 rounded-xl font-semibold text-navy-950 bg-gradient-to-r from-accent-cyan to-accent-blue"
                  >
                    {t('menu.contact')}
                  </Link>
                </li>
                <li className="flex gap-2 mt-3 justify-center">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => i18n.changeLanguage(lang.code)}
                      className={`px-3 py-1.5 rounded-lg text-sm glass ${
                        i18nextInstance.language === lang.code ? 'text-accent-cyan border-accent-cyan/50' : 'text-slate-300'
                      }`}
                    >
                      {lang.emoji} {lang.label}
                    </button>
                  ))}
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
