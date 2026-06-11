import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Stars() {
  return (
    <div className="flex gap-1 text-accent-gold mb-4">
      {[...Array(5)].map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 00.95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03a1 1 0 00-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.03a1 1 0 00-1.18 0l-2.8 2.03c-.78.57-1.84-.2-1.54-1.12l1.07-3.29a1 1 0 00-.36-1.12L2.98 8.72c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 00.95-.69l1.07-3.29z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonial({ data }) {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="section-badge">{t('testimonials.badge')}</span>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-5 mb-4">
          {t('testimonials.title')}
        </h2>
        <p className="text-slate-400 font-light text-lg">{t('testimonials.desc')}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {data.map((item, index) => (
          <motion.figure
            key={item.key}
            initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
            className="glass-card p-8 flex flex-col"
          >
            <svg className="w-9 h-9 text-accent-cyan/50 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.2 11.2c-.5-.3-1-.4-1.6-.4.3-1.6 1.5-3.3 3.1-4.3L7.4 4.6C4.9 6.2 3 9 3 12.1 3 15 4.8 17 7.2 17c1.9 0 3.4-1.4 3.4-3.2 0-1.3-.7-2.2-3.4-2.6zm9.8 0c-.5-.3-1-.4-1.6-.4.3-1.6 1.5-3.3 3.1-4.3l-1.3-1.9C14.7 6.2 12.8 9 12.8 12.1c0 2.9 1.8 4.9 4.2 4.9 1.9 0 3.4-1.4 3.4-3.2 0-1.3-.7-2.2-3.4-2.6z" />
            </svg>
            <Stars />
            <blockquote className="text-slate-300 font-light leading-relaxed flex-1 mb-6">
              “{t(`testimonialsItems.${item.key}.testimoni`)}”
            </blockquote>
            <figcaption className="flex items-center gap-4">
              <img
                src={item.imageUrl}
                alt={t(`testimonialsItems.${item.key}.name`)}
                className="w-12 h-12 rounded-full object-cover border-2 border-accent-cyan/40"
              />
              <div>
                <p className="text-white font-semibold">{t(`testimonialsItems.${item.key}.name`)}</p>
                <p className="text-slate-500 text-sm">{t('testimonials.clientLabel')}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
