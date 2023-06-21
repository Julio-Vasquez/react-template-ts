interface Lang {
  value: string
  text: string
}

type body = 'es' | 'en'

export const LANGS: Record<body, Lang> = {
  es: {
    value: 'es',
    text: 'spanish'
  },
  en: {
    value: 'en',
    text: 'english'
  }
}
