import React from 'react';
import { Fade } from 'react-awesome-reveal';
import heroPortfolio from 'assets/images/hero/cloud.png';

export default function CloudInfo() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">
            Pristup dokumentima u cloud-u
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            Naši klijenti imaju mogućnost sigurnog pristupa svojim poslovnim dokumentima i izvještajima putem online platforme. 
            Prijavite se u svoj <b>cloud račun</b> i preuzmite potrebne datoteke u bilo kojem trenutku i s bilo koje lokacije.
            <br /><br />
            Za pristup svom cloud profilu koristite korisničko ime i lozinku koje ste dobili od našeg tima. Ako imate poteškoća s pristupom, kontaktirajte nas za podršku.
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={700}>
          <div className="mt-6">
            <a
              href="/cloud-login" // ili prava ruta na tvoj login sistem
              className="inline-block bg-theme-light-blue text-white text-xl px-8 py-4 rounded-lg shadow-lg hover:bg-theme-blue transition"
            >
              Prijava u cloud
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
