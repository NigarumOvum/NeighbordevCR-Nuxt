import locale6010b66b from '../../static/lang/en-US.js'
import locale13dd0660 from '../../static/lang/pt-PT.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en"},
  vueI18nLoader: false,
  locales: [{"code":"en","iso":"en-US","name":"English","file":"en-US.js","dir":"ltr"},{"code":"pt","iso":"pt-PT","name":"Portuguese","file":"pt-PT.js","dir":"ltr"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix",
  lazy: false,
  langDir: "/Users/nigarumovum/Downloads/Projects/neighbordevcr-nuxt/static/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":true,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","iso":"en-US","name":"English","file":"en-US.js","dir":"ltr"},{"code":"pt","iso":"pt-PT","name":"Portuguese","file":"pt-PT.js","dir":"ltr"}],
  localeCodes: ["en","pt"],
  additionalMessages: [],
}

export const localeMessages = {
  'en-US.js': () => Promise.resolve(locale6010b66b),
  'pt-PT.js': () => Promise.resolve(locale13dd0660),
}
