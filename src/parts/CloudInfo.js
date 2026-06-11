import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import heroPortfolio from 'assets/images/hero/cloud.png';

export default function CloudInfo() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-6 lg:px-12 pt-32 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-badge">{t('menu.cloud')}</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-5 mb-8 leading-tight">
              <span className="text-gradient">{t('cloudInfo.title')}</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-light text-lg text-slate-400 leading-relaxed mb-10"
            dangerouslySetInnerHTML={{ __html: t('cloudInfo.desc') }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/cloud-login" className="btn-primary text-lg">
              {t('cloudInfo.login')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l3 3m0 0l-3 3m3-3H2.25" />
              </svg>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <div className="glass-card p-4 animate-float-slow">
            <img src={heroPortfolio} alt="Cloud pristup" className="rounded-2xl w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
