import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import arLocale from './locales/ar.json';
import deLocale from './locales/de.json';
import enLocale from './locales/en.json';
import esLocale from './locales/es.json';
import frLocale from './locales/fr.json';
import idLocale from './locales/id.json';
import itLocale from './locales/it.json';
import jaLocale from './locales/ja.json';
import koLocale from './locales/ko.json';
import loLocale from './locales/lo.json';
import msLocale from './locales/ms.json';
import ptLocale from './locales/pt.json';
import ruLocale from './locales/ru.json';
import thLocale from './locales/th.json';
import tlLocale from './locales/tl.json';
import trLocale from './locales/tr.json';
import viLocale from './locales/vi.json';
import zhCNLocale from './locales/zh-CN.json';
import zhTWLocale from './locales/zh-TW.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: arLocale,
      de: deLocale,
      en: enLocale,
      es: esLocale,
      fr: frLocale,
      id: idLocale,
      it: itLocale,
      ja: jaLocale,
      ko: koLocale,
      lo: loLocale,
      ms: msLocale,
      pt: ptLocale,
      ru: ruLocale,
      th: thLocale,
      tl: tlLocale,
      tr: trLocale,
      vi: viLocale,
      'zh-CN': zhCNLocale,
      'zh-TW': zhTWLocale
    },

    ns: ['translations'],
    defaultNS: 'translations',

    debug: CONFIG.isDevelopment,

    interpolation: {
      escapeValue: false // not needed for react!!
    },

    react: {
      useSuspense: false
    }
  });

export const i18n = i18next;
