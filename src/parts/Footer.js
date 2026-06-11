import React from 'react';
import { useTranslation } from 'react-i18next';
import BrandIcon from './BrandIcon';

export default function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-navy-900/60 backdrop-blur-xl pt-14 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <BrandIcon />
            <p className="text-slate-400 font-light mt-5 max-w-xs leading-relaxed">
              {t('footer.slogan')}
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-white mb-5">
              {t('footer.contactTitle')}
            </h3>
            <ul className="space-y-3 text-slate-400 font-light">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent-cyan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M4.5 19.5h15a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 6v12a1.5 1.5 0 001.5 1.5z" />
                </svg>
                <a href={`mailto:${t('footer.email')}`} className="hover:text-accent-cyan transition">{t('footer.email')}</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent-cyan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5C3 4.7 3.7 4 4.5 4h2.6c.7 0 1.3.5 1.5 1.2l.9 3.3c.2.6 0 1.3-.5 1.7l-1.4 1.1a14 14 0 005.1 5.1l1.1-1.4c.4-.5 1.1-.7 1.7-.5l3.3.9c.7.2 1.2.8 1.2 1.5v2.6c0 .8-.7 1.5-1.5 1.5C9.6 21 3 14.4 3 5.5z" />
                </svg>
                {t('footer.phone')}
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.1 7-11a7 7 0 10-14 0c0 5.9 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>
                  {t('footer.address1')}
                  <br />
                  {t('footer.address2')}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-white mb-5">
              {t('footer.locationTitle')}
            </h3>
            <div className="rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                title="Google mapa BS Biro"
                src="https://www.google.com/maps?q=Adolfa+Goldbergera+9,+Zenica&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-slate-500 font-light text-sm">
            © {new Date().getFullYear()} — {t('footer.copyright')}
          </p>
        </div>
      </div>

      {/* Povratak na vrh */}
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 glass rounded-full p-3 text-accent-cyan hover:shadow-glow-sm hover:-translate-y-1 transition-all duration-300"
        aria-label={t('footer.scrollTop')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
