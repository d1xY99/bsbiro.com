import React, { useState } from 'react';

import { Fade } from 'react-awesome-reveal';
import * as emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const [loading, setLoading] = useState(false); 

  const submitEmail = () => {
    const {
      name, company, email, phone, projectIdea,
    } = data;

    const templateParams = {
      from_name: name,
      company: company,
      email: email,
      phone: phone,
      message: projectIdea,
    };

    if (
      name !== ''
      && company !== ''
      && email !== ''
      && phone !== ''
      && projectIdea !== ''
    ) {
      setLoading(true); 

      emailjs.send(
        'service_gyvr2z9',
        'template_hfc2oar',
        templateParams,
        'qdyoRi_TS-odzVwH_',
      )
        .then(() => {
          toast.success('Poruka je uspješno poslana! Javit ćemo vam se uskoro. Hvala!');
          resetForm();
        }, (error) => {
          toast.error('Došlo je do greške prilikom slanja. Pokušajte ponovno.');
        })
        .finally(() => {
          setLoading(false); 
        });
    } else {
      toast.error('Molimo ispunite sva polja.');
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">

      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">Pošaljite upit</h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
          Molimo ispunite obrazac ispod kako biste nam poslali upit ili opis vašeg zahtjeva. Odgovorit ćemo vam u roku 24 sata.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Vaše ime"
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Naziv firme"
              className=""
              onChange={actions.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Vaša e-mail adresa"
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Kontakt broj"
              className=""
              onChange={actions.onChange}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Opišite svoj upit ili ideju"
              className=""
              onChange={actions.onChange}
            />
          </div>
          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-light-blue text-white rounded-full border-2 border-theme-light-blue hover:bg-dark-theme-light-blue border-purple-800 transition duration-200 focus:outline-none flex items-center gap-2"
            type="button"
            onClick={submitEmail}
            disabled={loading} 
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12" cy="12" r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            ) : null}
            Pošalji
          </Button>
        </div>
      </Fade>

      <ToastContainer />

    </section>
  );
};
