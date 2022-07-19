import { LocaleCode, ordered as orderedLocales } from '@tablecheck/locales';

export const SUPPORTED_LOCALES = orderedLocales.map(({ code }) => code);
export const DEFAULT_LOCALE = LocaleCode.English;
