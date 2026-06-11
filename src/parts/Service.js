import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ICONS = {
  knjigovodstvo: (
    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
      <path strokeLinecap="round" d="M8 7h8M8 11h3M13 11h3M8 15h3M13 15h3M8 18.5h3M13 18.5h3" />
    </svg>
  ),
  softver: (
    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />
    </svg>
  ),
  savjetovanje: (
    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l5-5 4 4 8-9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 7h5v5" />
    </svg>
  ),
};

function TiltCard({ serviceKey, index }) {
  const { t } = useTranslation();
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="tilt-card glass-card p-8 lg:p-10 h-full relative overflow-hidden group"
      >
        {/* glow u uglu */}
        <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-accent-cyan/10 blur-3xl group-hover:bg-accent-cyan/25 transition-all duration-500" />

        <div className="tilt-inner relative">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 border border-accent-cyan/30 text-accent-cyan mb-6 group-hover:shadow-glow-sm transition-all duration-500">
            {ICONS[serviceKey]}
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-3">
            {t(`servicesItems.${serviceKey}.title`)}
          </h3>
          <p className="text-slate-400 font-light leading-relaxed">
            {t(`servicesItems.${serviceKey}.description`)}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Service({ data }) {
  const { t } = useTranslation();

  return (
    <section id="usluge" className="container mx-auto px-6 lg:px-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="section-badge">{t('services.badge')}</span>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-5 mb-4">
          {t('services.title')}
        </h2>
        <p className="text-slate-400 font-light text-lg">{t('services.desc')}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {data.map((service, index) => (
          <TiltCard key={service.key} serviceKey={service.key} index={index} />
        ))}
      </div>
    </section>
  );
}
