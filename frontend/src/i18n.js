import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    // load translation using http -> see /public/locales
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources: {
          en: { translation: { /* English translations */ } },
          fn: { translation: { /* French translations */ } },
          de: { translation: { /* German translations */ } },
          es: { translation: { /* Spanish translations */ } },
        },
        lng: 'en', // Default language
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false, // React already does escaping
        },
      });

export default i18n;