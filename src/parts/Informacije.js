import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import Team from 'assets/images/hero/team.png';

export default function Informacije() {
  const { t } = useTranslation();

  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">
            {t("about.title")}
          </h1>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce>
          <p
            className="font-light text-xl text-gray-400 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("about.desc") }}
          />
        </Fade>
      </div>
      <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
        <Fade direction="top-right" triggerOnce delay={300}>
          <img src={Team} alt={t("about.title")} />
        </Fade>
      </div>
    </section>
  );
}
