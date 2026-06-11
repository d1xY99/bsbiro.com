import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useTranslation } from 'react-i18next';

const FIRMA_INFO = {
  mail: 'bsbiro@hotmail.com',
  phone: '(+387) 061-736-613',
  address: 'Adolfa Goldbergera 9',
  city: 'Zenica, Bosna i Hercegovina',
};

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan shrink-0">
        {icon}
      </div>
      <div>
        <span className="block text-white font-semibold">{label}</span>
        <span className="block text-slate-400 font-light">{value}</span>
      </div>
    </div>
  );
}

function FirmaInfoBox() {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="glass-card p-8 lg:p-10 w-full lg:max-w-md space-y-6 h-fit"
    >
      <h2 className="font-display text-2xl font-bold text-white mb-2">{t('discussForm.contactTitle')}</h2>
      <p className="text-slate-400 font-light -mt-4">Dipl. Ing. Senad Bašić, BS Biro Zenica</p>

      <InfoRow
        icon={(
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.1 7-11a7 7 0 10-14 0c0 5.9 7 11 7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
        )}
        label={t('discussForm.address')}
        value={`${FIRMA_INFO.address}, ${FIRMA_INFO.city}`}
      />
      <InfoRow
        icon={(
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5C3 4.7 3.7 4 4.5 4h2.6c.7 0 1.3.5 1.5 1.2l.9 3.3c.2.6 0 1.3-.5 1.7l-1.4 1.1a14 14 0 005.1 5.1l1.1-1.4c.4-.5 1.1-.7 1.7-.5l3.3.9c.7.2 1.2.8 1.2 1.5v2.6c0 .8-.7 1.5-1.5 1.5C9.6 21 3 14.4 3 5.5z" />
          </svg>
        )}
        label={t('discussForm.phone')}
        value={FIRMA_INFO.phone}
      />
      <InfoRow
        icon={(
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M4.5 19.5h15a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 6v12a1.5 1.5 0 001.5 1.5z" />
          </svg>
        )}
        label={t('discussForm.email')}
        value={FIRMA_INFO.mail}
      />
      <InfoRow
        icon={(
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
          </svg>
        )}
        label={t('discussForm.workHours')}
        value={t('discussForm.workHoursValue')}
      />
    </motion.div>
  );
}

export const DiscussForm = (actions) => {
  const { t } = useTranslation();
  const { data, resetForm } = actions;
  const [loading, setLoading] = useState(false);

  const submitEmail = (e) => {
    e.preventDefault();
    const {
      name, company, email, phone, projectIdea,
    } = data;
    const templateParams = {
      from_name: name,
      company,
      email,
      phone,
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
        }, () => {
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
    <section className="container mx-auto px-6 lg:px-12 pt-32 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="section-badge">{t('menu.contact')}</span>
        <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mt-5 mb-4">
          <span className="text-gradient">{t('discussForm.title')}</span>
        </h1>
        <p className="font-light text-lg text-slate-400">
          {t('discussForm.desc')}
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-center gap-8">
        <FirmaInfoBox />

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-card p-8 lg:p-10 w-full lg:max-w-xl space-y-4"
          onSubmit={submitEmail}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder={t('discussForm.placeholder.name')}
              className="input-dark"
              onChange={actions.onChange}
            />
            <input
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder={t('discussForm.placeholder.company')}
              className="input-dark"
              onChange={actions.onChange}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder={t('discussForm.placeholder.email')}
              className="input-dark"
              onChange={actions.onChange}
            />
            <input
              id="phone"
              name="phone"
              type="tel"
              value={data.phone}
              placeholder={t('discussForm.placeholder.phone')}
              className="input-dark"
              onChange={actions.onChange}
            />
          </div>
          <textarea
            id="projectIdea"
            name="projectIdea"
            rows={6}
            value={data.projectIdea}
            placeholder={t('discussForm.placeholder.projectIdea')}
            className="input-dark resize-none"
            onChange={actions.onChange}
          />
          <button
            type="submit"
            className="btn-primary w-full text-lg disabled:opacity-60"
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            ) : null}
            {t('discussForm.send')}
          </button>
        </motion.form>
      </div>
      <ToastContainer theme="dark" />
    </section>
  );
};
