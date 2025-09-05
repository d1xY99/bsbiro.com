import React from 'react';
import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
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
              Pouzdanost, preciznost i moderna podrška za vaše poslovanje
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Kontakt
            </h1>
            <p className="text-lg text-gray-400 font-light">
              bsbiro@hotmail.com
            </p>
            <p className="text-lg text-gray-400 font-light">
              (+387) 061-736-613
            </p>
            <p className="text-lg text-gray-400 font-light">
              Adolfa Goldbergera 9
            </p>
            <p className="text-lg text-gray-400 font-light">
              Zenica, Bosna i Hercegovina
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Lokacija
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
            Copyright {new Date().getFullYear()} - Sva prava zadržana - Amir Bašić
          </p>
        </div>
      </div>
      {/* Strelica za povratak na vrh */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-theme-light-blue text-white rounded-full shadow-lg p-3 hover:bg-theme-blue transition"
        aria-label="Idi na vrh stranice"
      >
        {/* SVG strelica prema gore */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
