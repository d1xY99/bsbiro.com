import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function CloudLogin() {
  const { t } = useTranslation();
  const [loginError, setLoginError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginError(false);
    setIsSubmitting(true);

    const fakeRequest = fetch('/api/cloud-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'login-attempt' }),
    }).catch(() => null);

    const minimumLoadingTime = new Promise((resolve) => {
      window.setTimeout(resolve, 900);
    });

    await Promise.all([fakeRequest, minimumLoadingTime]);

    setIsSubmitting(false);
    setLoginError(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent-cyan/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent-blue/10 blur-3xl animate-pulse-glow" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md glass-card p-10"
      >
        <Link to="/" className="inline-flex items-center text-slate-400 hover:text-accent-cyan transition mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <span>{t('cloudLogin.back')}</span>
        </Link>

        <h1 className="font-display text-3xl font-bold text-white mb-2">{t('cloudLogin.title')}</h1>
        <p className="text-slate-500 font-light mb-8">BS Biro Cloud</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t('cloudLogin.username')}
            className="input-dark"
            onChange={() => setLoginError(false)}
            disabled={isSubmitting}
          />
          <input
            type="password"
            placeholder={t('cloudLogin.password')}
            className="input-dark"
            onChange={() => setLoginError(false)}
            disabled={isSubmitting}
          />
          {loginError && (
            <div
              role="alert"
              className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-light text-red-100"
            >
              {t('cloudLogin.error')}
            </div>
          )}
          <button
            type="submit"
            className="btn-primary w-full text-lg disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('cloudLogin.loading') : t('cloudLogin.login')}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
