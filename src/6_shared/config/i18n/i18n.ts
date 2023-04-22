import { nextTick } from 'vue';
import { createI18n, type I18n, type I18nOptions } from 'vue-i18n';
import common from './locales/ru/common.json';
import about from './locales/ru/about.json';
import profile from './locales/ru/profile.json';

export const enum Namespaces {
  COMMON = 'common',
  ABOUT = 'about',
  PROFILE = 'profile',
}

export const enum SupportLocales {
  RU = 'ru',
  EN = 'en',
}

type Options = {
  locale: SupportLocales;
} & I18nOptions;

const namespaces = [Namespaces.COMMON, Namespaces.ABOUT, Namespaces.PROFILE];

const defaultOptions: Options = {
  legacy: false,
  locale: SupportLocales.RU,
  availableLocales: [SupportLocales.RU, SupportLocales.EN],
  fallbackLocale: 'ru',
  messages: {
    ru: { common, about, profile },
  },
};

export const i18n: I18n = createI18n(defaultOptions);

export const setI18nLanguage = (locale: SupportLocales) => {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else if (typeof i18n.global.locale !== 'string') {
    i18n.global.locale.value = locale;
  }

  document.querySelector('html')?.setAttribute('lang', locale);
};

export const loadLocaleMessages = async (locale: SupportLocales) => {
  const results = await Promise.allSettled(
    namespaces.map(async (ns) => {
      // FIXME: Fix type
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const message = await import(`./locales/${locale}/${ns}.json`);
      // FIXME: Fix type
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      return { ns, message: message.default };
    })
  );

  const messages = {};
  results.forEach((res) => {
    if (res.status === 'fulfilled') {
      const { value } = res;
      // FIXME: Fix type
      // @ts-expect-error Ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      messages[value.ns] = value.message;
    }
  });

  i18n.global.setLocaleMessage(locale, messages);

  return nextTick();
};

// export function setupI18n(options: Options = defaultOptions) {
//   const i18n = createI18n(options);
//   setI18nLanguage(i18n, options.locale);
//   return i18n;
// }

// type Namespace = Record<string, string>;

// TODO: add dynamic import for namespaces
// Первоначальный вариант работал, но без смены языка.
// После добавления смены языка появились проблемы.
// export const loadLocaleMessages_old = async (
//   locale: SupportLocales,
//   namespace: Namespaces | undefined = undefined
// ) => {
//   const isDev = import.meta.env.DEV;
//   const currMessages = i18n.global.getLocaleMessage(locale);

//   if (namespace) {
//     // FIXME: Fix type
//     // @ts-expect-error Ignore
//     if (currMessages[namespace] === undefined) {
//       if (isDev) console.log('i18n: add new namespace');
//       const messages = await import(`./locales/${locale}/${namespace}.json`)
//         .then((res: { default: Namespace }) => res.default)
//         .then((translations) => {
//           const namespaceMsg = { [namespace]: translations };
//           return { ...namespaceMsg, ...currMessages };
//         });

//       i18n.global.setLocaleMessage(locale, messages);
//     } else if (isDev) console.log('i18n: namespace exist already');
//   } else {
//     const nsList = Object.keys(currMessages);
//     console.log('🚀 ~ file: i18n.ts:74 ~ nsList:', nsList);
//     const results = await Promise.allSettled(
//       nsList.map(async (ns) => {
//         const message = await import(`./locales/${locale}/${ns}.json`);
//         return { ns, message };
//       })
//     );
//     const newMessages = {};
//     // FIXME: Fix type
//     // @ts-expect-error Ignore
//     results.forEach(({ value }) => {
//       console.log('🚀 ~ file: i18n.ts:80 ~ ns:', value);
//       // FIXME: Fix type
//       // @ts-expect-error Ignore
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//       newMessages[value.ns] = value.message.default;
//     });
//     console.log(
//       '🚀 ~ file: i18n.ts:91 ~ results.forEach ~ newMessages:',
//       newMessages
//     );

//     console.log('🚀 ~ file: i18n.ts:78 ~ results:', results);
//     // FIXME: Fix type
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//     const messages = await import(`./locales/${locale}/common.json`);
//     i18n.global.setLocaleMessage(locale, { common: messages.default });
//   }

//   return nextTick();
// };
