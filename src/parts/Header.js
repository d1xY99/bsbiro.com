import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

import Button from '../elements/Button';
import BrandIcon from './BrandIcon';

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  // --- LANGUAGE DROPDOWN ---
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langMenuRef = useRef();
  const { t, i18n: i18nextInstance } = useTranslation();

  const languages = [
    { code: 'bs', label: 'BiH', emoji: '🇧🇦' },
    { code: 'en', label: 'ENG', emoji: '🇬🇧' },
    { code: 'it', label: 'IT', emoji: '🇮🇹' },
    { code: 'de', label: 'DE', emoji: '🇩🇪' }
  ];
  const currentLang =
    languages.find(l => l.code === i18nextInstance.language) || languages[0];

  // close lang menu when clicked outside
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

  return (
    <header className="header relative">
      <div className="flex justify-between px-4 lg:px-0">
        <BrandIcon />


        {/* MOBILE burger */}
        <button className="block text-theme-blue lg:hidden focus:outline-none" onClick={() => setIsCollapse(!isCollapse)}>
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path className={`${isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            <path className={`${!isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0">
        <li>
          <Button
            className={`${path === '/' ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/"
          >
            {t('menu.home')}
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/informacije' ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/informacije"
          >
            {t('menu.about')}
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/cloud' ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/cloud"
          >
            {t('menu.cloud')}
          </Button>
        </li>
        <li>
          <Button
            className="font-medium text-lg mx-auto ml-3 px-6 py-2 bg-theme-light-blue text-white rounded-full border-2 border-theme-light-blue hover:bg-dark-theme-light-blue border-purple-800 transition duration-200"
            type="link"
            href="/kontakt"
          >
            {t('menu.contact')}
          </Button>
        </li>
     <li className="ml-1" ref={langMenuRef}>
  <button
    onClick={() => setShowLangMenu(prev => !prev)}
    className="flex items-center gap-0.5 px-1 py-0.5 border rounded hover:bg-gray-50 focus:outline-none transition text-xs bg-white"
    style={{ minWidth: 45 }}
    title="Promijeni jezik"
  >
    <span className="text-base">{currentLang.emoji}</span>
    <span className="font-medium hidden md:inline text-[11px]">{currentLang.label}</span>
    <svg className="w-2.5 h-2.5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  {showLangMenu && (
    <ul className="absolute z-10 mt-1 w-24 bg-white border rounded shadow right-0 text-xs">
      {languages.map(lang => (
        <li key={lang.code}>
          <button
            className={`w-full flex items-center px-2 py-1 hover:bg-gray-100 text-left ${i18nextInstance.language === lang.code ? 'font-bold' : ''}`}
            onClick={() => {
              i18n.changeLanguage(lang.code);
              setShowLangMenu(false);
            }}
          >
            <span className="text-base mr-1">{lang.emoji}</span>
            {lang.label}
          </button>
        </li>
      ))}
    </ul>
  )}
</li>


        
      </ul>

      {/* MOBILE NAV */}
      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="transition duration-300 ease-in data-[closed]:opacity-0">
          <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/' ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/"
              >
                {t('menu.home')}
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/informacije' ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/informacije"
              >
                {t('menu.about')}
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/cloud' ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/cloud"
              >
                {t('menu.cloud')}
              </Button>
            </li>
            <li className="mx-auto my-9 bg-white">
              <Button
                className="font-bold mx-auto px-5 py-2 bg-theme-light-blue text-white rounded-full border-2 border-theme-light-blue hover:bg-dark-theme-light-blue border-purple-800 transition duration-200"
                type="link"
                href="/kontakt"
              >
                {t('menu.contact')}
              </Button>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
}
