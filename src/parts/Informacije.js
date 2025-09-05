import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Team from 'assets/images/hero/team.png';

export default function Informacije() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">
            O nama
          </h1>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            BS Biro je moderna knjigovodstvena agencija iz Zenice posvećena pružanju pouzdane i profesionalne podrške svim svojim klijentima.
            Naš tim objedinjuje znanje iz knjigovodstva i softverskog inženjeringa kako bismo vam omogućili precizno, efikasno i digitalizirano poslovanje.
            <br /><br />
            Naš cilj je olakšati vaše svakodnevne obaveze, automatizirati procese i osigurati transparentnost i sigurnost vaših financija.
            Svakom klijentu pristupamo individualno, nudeći rješenja prilagođena potrebama vašeg poslovanja.
            <br /><br />
            Naš rad prilagođavamo svakom klijentu, nudeći fleksibilna i individualna rješenja za vaše poslovanje. Cilj nam je pružiti jasne savjete i kvalitetne mjesečne usluge na jednostavan i razumljiv način, uvijek uz pošten i transparentan odnos prema cijenama.
            Svoju stručnost gradimo kroz stalno usavršavanje i praćenje najnovijih trendova u knjigovodstvu i tehnologiji.
            <br /><br />
            Svjesni smo osjetljivosti podataka s kojima radimo, zato posebno pazimo na sigurnost i povjerljivost svih vaših dokumenata. Povjerenje i lojalnost klijenata smatramo najvećom vrijednošću našeg poslovanja.
            <br /><br />
            Zahvaljujući pozitivnoj atmosferi i predanosti unutar tima, s lakoćom odgovaramo na vaše zahtjeve i nastojimo svakodnevno unaprijediti našu uslugu.
          </p>
        </Fade>
      </div>
      <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
        <Fade direction="top-right" triggerOnce delay={300}>
          <img src={Team} alt="O nama" />
        </Fade>
      </div>
    </section>
  );
}
