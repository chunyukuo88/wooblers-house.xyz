import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const Languages = ['en', 'chi', 'ru'];

const options = {
  order: [ 'navigator', 'htmlTag', 'path', 'subdomain'],

  caches: ['localStorage', 'cookie'],
  checkWhitelist: true,
  cookieMinutes: 10,
  cookieDomain: 'myDomain',
  excludeCacheFor: ['cimode'],
  htmlTag: document.documentElement,
  lookupCookie: 'i18next',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  lookupLocalStorage: 'i18nextLng',
  lookupQuerystring: 'lng',
}

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      debug: true,
      whitelist: Languages,
      detection: options,

      interpolation: {
        escapeValue: false,
      }
    });

export default i18n;

