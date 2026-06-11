import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ICONS = {
  komunikativni: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5M21 12a8 8 0 11-3.3-6.5L21 4l-1 3.5A7.9 7.9 0 0121 12z" />
    </svg>
  ),
  upravljanje: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.6 3.6l.6-1.6h3.6l.6 1.6 1.7 1 1.7-.6 1.8 3.1-1.2 1.2v2l1.2 1.2-1.8 3.1-1.7-.6-1.7 1-.6 1.6h-3.6l-.6-1.6-1.7-1-1.7.6-1.8-3.1 1.2-1.2v-2L4.4 7.1l1.8-3.1 1.7.6 1.7-1z" />
      <circle cx="12" cy="11.5" r="2.6" />
    </svg>
  ),
  suradnja: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 19a4 4 0 00-8 0M12 13a3.2 3.2 0 100-6.4A3.2 3.2 0 0012 13zM20 18.6a3.4 3.4 0 00-2.8-3.3M16.6 8.4a2.7 2.7 0 010 5.1M4 18.6a3.4 3.4 0 012.8-3.3M7.4 8.4a2.7 2.7 0 000 5.1" />
    </svg>
  ),
  povjerenje: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7.5-4.6-9.3-9.6C1.5 7.9 3.6 4.5 7 4.5c2 0 3.6 1.1 5 2.9 1.4-1.8 3-2.9 5-2.9 3.4 0 5.5 3.4 4.3 6.9C19.5 16.4 12 21 12 21z" />
    </svg>
  ),
};

export default function Advantage({ data }) {
  const { t } = useTranslation();

  const items = data.flat().map((item, idx) => ({
    key: item.key,
    groupIdx: Math.floor(idx / 2),
    itemIdx: idx % 2,
  }));

  return (
    <section className="relative py-8">
      {/* pozadinski glow */}
      <div className="absolute inset-x-0 top-1/3 h-96 bg-accent-blue/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-badge">{t('advantage.badge')}</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-5 mb-4">
            {t('advantage.title')}
          </h2>
          <p className="text-slate-400 font-light text-lg">{t('advantage.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
              className="glass-card p-7 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-gold/20 to-accent-cyan/10 border border-accent-gold/30 text-accent-gold mb-5 group-hover:shadow-glow-gold transition-all duration-500">
                {ICONS[item.key]}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {t(`advantagesItems.${item.key}.title`)}
              </h3>
              <p className="text-slate-400 font-light text-[15px] leading-relaxed">
                {t(`advantagesItems.${item.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
