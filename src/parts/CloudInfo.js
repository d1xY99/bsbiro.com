import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import heroPortfolio from 'assets/images/hero/cloud.png';

export default function CloudInfo() {
  const { t } = useTranslation();

  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">
            {t('cloudInfo.title')}
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <p
            className="font-light text-xl text-gray-400 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('cloudInfo.desc') }}
          />
        </Fade>
        <Fade direction="up" triggerOnce delay={700}>
          <div className="mt-6">
            <a
              href="/cloud-login"
              className="inline-block bg-theme-light-blue text-white text-xl px-8 py-4 rounded-lg shadow-lg hover:bg-theme-blue transition"
            >
              {t('cloudInfo.login')}
            </a>
          </div>
        </Fade>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12">
        <Fade direction="up" triggerOnce>
          <img src={heroPortfolio} alt="Cloud Pristup" />
        </Fade>
      </div>
    </section>
  );
}
