import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AVATAR_GRADIENTS = [
  'from-cyan-400/80 to-blue-600/80',
  'from-amber-400/80 to-orange-600/80',
  'from-violet-400/80 to-purple-600/80',
];

function InitialsAvatar({ name, index }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
  return (
    <div
      className={`w-12 h-12 rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length]} flex items-center justify-center font-display font-bold text-white text-lg border border-white/20`}
    >
      {initials}
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
        {data.map((item, index) => {
          const name = t(`testimonialsItems.${item.key}.name`);
          return (
            <motion.figure
              key={item.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
              className="glass-card p-8 flex flex-col"
            >
              <svg className="w-8 h-8 text-accent-cyan/40 mb-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.2 11.2c-.5-.3-1-.4-1.6-.4.3-1.6 1.5-3.3 3.1-4.3L7.4 4.6C4.9 6.2 3 9 3 12.1 3 15 4.8 17 7.2 17c1.9 0 3.4-1.4 3.4-3.2 0-1.3-.7-2.2-3.4-2.6zm9.8 0c-.5-.3-1-.4-1.6-.4.3-1.6 1.5-3.3 3.1-4.3l-1.3-1.9C14.7 6.2 12.8 9 12.8 12.1c0 2.9 1.8 4.9 4.2 4.9 1.9 0 3.4-1.4 3.4-3.2 0-1.3-.7-2.2-3.4-2.6z" />
              </svg>
              <blockquote className="text-slate-300 font-light leading-relaxed flex-1 mb-7">
                {t(`testimonialsItems.${item.key}.testimoni`)}
              </blockquote>
              <figcaption className="flex items-center gap-4 pt-5 border-t border-white/10">
                <InitialsAvatar name={name} index={index} />
                <div>
                  <p className="text-white font-semibold">{name}</p>
                  <p className="text-slate-500 text-sm">{t(`testimonialsItems.${item.key}.role`)}</p>
                </div>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
}
