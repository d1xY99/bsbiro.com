import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CloudLogin() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-xs mb-4 flex">
        <Link to="/" className="flex items-center text-theme-blue hover:text-theme-light-blue transition">
          <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
            className="w-7 h-7 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <span className="text-lg">{t('cloudLogin.back')}</span>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8">{t('cloudLogin.title')}</h1>
      <form className="w-full max-w-xs">
        <input
          type="text"
          placeholder={t('cloudLogin.username')}
          className="mb-4 px-4 py-2 border rounded w-full"
        />
        <input
          type="password"
          placeholder={t('cloudLogin.password')}
          className="mb-4 px-4 py-2 border rounded w-full"
        />
        <button
          type="submit"
          className="bg-theme-light-blue text-white font-bold px-6 py-2 rounded w-full"
        >
          {t('cloudLogin.login')}
        </button>
      </form>
    </div>
  );
}
