import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Scene3D from './Scene3D';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function Stat({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center sm:items-start"
    >
      <span className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold">{value}</span>
      <span className="text-sm text-slate-400 mt-1">{label}</span>
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 lg:pt-0">
      {/* Pozadina: grid + 3D scena */}
      <div className="absolute inset-0 grid-pattern" />
      <Scene3D className="absolute inset-0 opacity-30 sm:opacity-60 lg:opacity-100 pointer-events-none lg:pointer-events-auto" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pointer-events-none">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl pointer-events-auto"
        >
          <motion.div variants={item}>
            <span className="section-badge">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] text-white mt-6 mb-6"
          >
            {t('hero.titleLine1')}
            <br />
            <span className="text-gradient">{t('hero.titleLine2')}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mb-10"
            dangerouslySetInnerHTML={{ __html: t('hero.desc') }}
          />

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <Link to="/kontakt" className="btn-primary text-lg">
              {t('hero.cta')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a href="#usluge" className="btn-ghost text-lg">
              {t('hero.cta2')}
            </a>
          </motion.div>

          <div className="grid grid-cols-3 gap-6 max-w-lg">
            <Stat value="24/7" label={t('hero.stats.cloud')} delay={0.9} />
            <Stat value="24h" label={t('hero.stats.response')} delay={1.05} />
            <Stat value="100%" label={t('hero.stats.transparent')} delay={1.2} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indikator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs tracking-[0.3em] uppercase">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-accent-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
