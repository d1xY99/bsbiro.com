import React from 'react';
import Fade from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

export default function Advantage({ data }) {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <Fade bottom triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            {t('advantage.title')}
          </h1>
          <p className="font-light text-lg text-gray-400 text-center mb-12 sm:mb-5 xl:mb-0">
            {t('advantage.subtitle')}
          </p>
        </Fade>

        <div className="flex flex-col sm:flex-row">
          <div className="flex-col">
            {data[0].map((item, index) => (
              <Fade bottom triggerOnce delay={500 * index} key={index}>
                <div>
                  <div className="bg-white flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-light-blue transform transition duration-500 hover:scale-105">
                    <img src={item.imageUrl} alt="" className="w-1/3" />
                    <div className="flex-col pl-5">
                      <h2 className="text-theme-blue text-2xl">
                        {t(`advantage.items.0.${index}.title`)}
                      </h2>
                      <p className="font-light text-gray-400">
                        {t(`advantage.items.0.${index}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
          <div className="flex-col -mt-4 sm:mt-14">
            {data[1].map((item, index) => (
              <Fade bottom triggerOnce delay={500 * index} key={index}>
                <div>
                  <div className="bg-white flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-light-blue transform transition duration-500 hover:scale-105">
                    <img src={item.imageUrl} alt="" className="w-1/3" />
                    <div className="flex-col pl-5">
                      <h2 className="text-theme-blue text-2xl">
                        {t(`advantage.items.1.${index}.title`)}
                      </h2>
                      <p className="font-light text-gray-400">
                        {t(`advantage.items.1.${index}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
