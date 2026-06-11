import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Discuss() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[2.5rem] border border-accent-cyan/20 px-8 py-16 sm:px-16 sm:py-20 text-center"
      >
        {/* animirana gradient pozadina */}
        <div
          className="absolute inset-0 animate-gradient-x"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(34,211,238,0.18), rgba(59,130,246,0.20), rgba(167,139,250,0.16), rgba(34,211,238,0.18))',
            backgroundSize: '300% 100%',
          }}
        />
        <div className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-accent-cyan/20 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-24 right-1/4 w-72 h-72 rounded-full bg-accent-blue/20 blur-3xl animate-pulse-glow" />

        <div className="relative">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto mb-5">
            {t('discuss.title')}
          </h2>
          <p className="text-slate-300 font-light text-lg max-w-xl mx-auto mb-10">
            {t('discuss.desc')}
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link to="/kontakt" className="btn-primary text-lg px-10 py-5">
              {t('discuss.button')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
