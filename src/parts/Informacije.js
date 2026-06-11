import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Team from 'assets/images/hero/team.png';

export default function Informacije() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-6 lg:px-12 pt-32 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="w-full lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-badge">{t('menu.about')}</span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mt-5 mb-8">
              <span className="text-gradient">{t('about.title')}</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-light text-lg text-slate-400 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('about.desc') }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-2/5 lg:sticky lg:top-32"
        >
          <div className="glass-card p-4 animate-float-slow">
            <img src={Team} alt={t('about.title')} className="rounded-2xl w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
