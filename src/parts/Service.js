import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

export default function Service({ data }) {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-20 pb-28">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            {t('services.title')}
          </h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            {t('services.desc')}
          </p>
        </Fade>

        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data.map((item, index) => (
            <Fade direction={item.animation} delay={500 * index} key={index} triggerOnce>
              <div>
                <div className="bg-white group rounded-2xl shadow-2xl border border-light-theme-light-blue transform transition duration-500 hover:scale-105">
                  <img src={item.imageUrl} alt="Usluga" className="w-full rounded-t-2xl" />
                  <h2 className="text-theme-blue text-center text-xl py-7 rounded-b-2xl">
                    {item.title}
                  </h2>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
