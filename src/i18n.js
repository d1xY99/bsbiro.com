import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'bs',
    lng: 'bs', 
    defaultNS: 'translation',
    debug: false,
    backend: {
      loadPath: 'locales/{{lng}}/translations.json',
    },
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['localStorage', 'navigator', 'cookie'],
      caches: ['localStorage'],
      lookupLocalStorage: 'language', 
      lookupCookie: 'i18next',        
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n
