import i18n from 'i18n-js'

import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'

i18n.defaultLocale = 'en'
i18n.locale = 'fr'
i18n.fallbacks = true
i18n.translations = { en, es, fr }

export default i18n
