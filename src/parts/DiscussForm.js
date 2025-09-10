import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import * as emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useTranslation } from 'react-i18next';
import { Form } from 'elements/Form';
import Button from 'elements/Button';

const FIRMA_INFO = {
  mail: 'bsbiro@hotmail.com',
  phone: '(+387) 061-736-613',
  address: 'Adolfa Goldbergera 9',
  city: 'Zenica, Bosna i Hercegovina',
};

function FirmaInfoBox() {
  const { t } = useTranslation();
  return (
    <Fade direction="left" triggerOnce>
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 md:mb-0 md:mr-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-theme-blue mb-6">{t('discussForm.contactTitle') || 'Kontakt podaci'}</h2>
        <div className="mb-4">
          <span className="block text-lg text-gray-700 font-semibold">Senad Bašić, BS Biro Zenica</span>
          <span className="block text-gray-500"></span>
        </div>
        <div className="mb-4">
          <span className="block text-lg text-gray-700 font-semibold">{t('discussForm.address')}</span>
          <span className="block text-gray-500">{FIRMA_INFO.address}, {FIRMA_INFO.city}</span>
        </div>
        <div className="mb-4">
          <span className="block text-lg text-gray-700 font-semibold">{t('discussForm.phone')}</span>
          <span className="block text-gray-500">{FIRMA_INFO.phone}</span>
        </div>
        <div className="mb-4">
          <span className="block text-lg text-gray-700 font-semibold">{t('discussForm.email')}</span>
          <span className="block text-gray-500">{FIRMA_INFO.mail}</span>
        </div>
        <div>
          <span className="block text-lg text-gray-700 font-semibold">{t('discussForm.workHours')}</span>
          <span className="block text-gray-500">{t('discussForm.workHoursValue')}</span>
        </div>
      </div>
    </Fade>
  );
}

export const DiscussForm = (actions) => {
  const { t } = useTranslation();
  const { data, resetForm } = actions;
  const [loading, setLoading] = useState(false);

  const submitEmail = () => {
    const { name, company, email, phone, projectIdea } = data;
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
          toast.success(t('discussForm.success'));
          resetForm();
        }, (error) => {
          toast.error(t('discussForm.error'));
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      toast.error(t('discussForm.required'));
    }
  };

  return (
    <section className="flex flex-col items-center container mx-auto mt-10">
      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">{t('discussForm.title')}</h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
          {t('discussForm.desc')}
        </p>
      </Fade>

      {/* Dvostrani layout */}
      <div className="flex flex-col md:flex-row w-full justify-center items-stretch gap-8">
        {/* Lijeva strana: Info o firmi */}
        <FirmaInfoBox />

        {/* Desna strana: Kontakt forma */}
       <Fade direction="up" triggerOnce>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder={t('discussForm.placeholder.name')}
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder={t('discussForm.placeholder.company')}
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
              placeholder={t('discussForm.placeholder.email')}
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder={t('discussForm.placeholder.phone')}
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
              placeholder={t('discussForm.placeholder.projectIdea')}
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
            {t('discussForm.send')}
          </Button>
        </div>
      </Fade>
      </div>
      <ToastContainer />
    </section>
  );
};
