import React from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import Button from "../elements/Button";
import BuildWebsite from "../assets/images/hero/BuildWebsite.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
        <h1
          className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5"
          dangerouslySetInnerHTML={{ __html: t("hero.title") }}
        />

        <p
          className="font-light text-xl text-gray-400 leading-relaxed mb-16"
          dangerouslySetInnerHTML={{ __html: t("hero.desc") }}
        />

        <Fade direction="up" delay={500} triggerOnce>
          <div className="flex justify-start"> 
            <Button
              href="/kontakt"
              type="link"
              className="flex items-center px-8 py-5 text-white text-xl bg-theme-light-blue rounded-lg shadow-2xl hover:bg-dark-theme-light-blue transition duration-200"
            >
              {t("hero.cta")}
              <svg
                className="ml-2 w-7 h-7 text-white animate-bounce-x"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  );
}
