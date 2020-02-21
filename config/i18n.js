import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  fallbackLng: 'en',
  defaultLanguage: 'en',
  otherLanguages: ['ja']
})

// To fix "react-i18next:: i18n.languages were undefined or empty undefined" message on server side
NextI18NextInstance.i18n.languages = ['en', 'ja']

export default NextI18NextInstance

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
  i18n
} = NextI18NextInstance
