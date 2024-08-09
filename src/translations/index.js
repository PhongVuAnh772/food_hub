import vi from './locates/vi.json';
import en from './locates/en.json';
import { getCurrencies, getLocales } from 'react-native-localize';
import { I18n } from 'i18n-js';

const translations = {
  en: en,
  vi: vi,
};

const locales = getLocales();
const localizationLocale = locales.length > 0 ? locales[0] : { languageCode: 'en' }; // Fallback to 'en' if locales array is empty

const i18n = new I18n(translations);

i18n.locale = localizationLocale.languageCode || 'en'; // Fallback to 'en' if languageCode is undefined
i18n.enableFallback = true;

export default i18n;
