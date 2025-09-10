import React from 'react';
import { useTranslation } from 'react-i18next';
import BrandIcon from './BrandIcon';

export default function Footer() {
  const { t } = useTranslation();

  // Funkcija za povratak na vrh
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6 relative">
      <div className="container flex-col mx-auto">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              {t('footer.slogan')}
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              {t('footer.contactTitle')}
            </h1>
            <p className="text-lg text-gray-400 font-light">
              {t('footer.email')}
            </p>
            <p className="text-lg text-gray-400 font-light">
              {t('footer.phone')}
            </p>
            <p className="text-lg text-gray-400 font-light">
              {t('footer.address1')}
            </p>
            <p className="text-lg text-gray-400 font-light">
              {t('footer.address2')}
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              {t('footer.locationTitle')}
            </h1>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title="Google mapa BS Biro"
                src="https://www.google.com/maps?q=Adolfa+Goldbergera+9,+Zenica&output=embed"
                width="100%"
                height="230"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright {new Date().getFullYear()} - {t('footer.copyright')}
          </p>
        </div>
      </div>
      {/* Strelica za povratak na vrh */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-theme-light-blue text-white rounded-full shadow-lg p-3 hover:bg-theme-blue transition"
        aria-label={t('footer.scrollTop')}
      >
        {/* SVG strelica prema gore */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
