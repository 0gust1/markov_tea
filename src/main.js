import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'

// ready translated locales
var locales = {
  fr: {
    message: {
      generateHaiku: 'Générer un haiku',
      changeModel: 'Changer le modèle'
    }
  },
  en: {
    message: {
      generateHaiku: 'Generate haiku',
      change_model: 'Change model'
    }
  }
}

// set plugin
Vue.use(VueI18n, {
  lang: 'fr',
  locales: locales
})

Vue.transition('fade', {
  enterClass: 'fadeInDown',
  leaveClass: 'fadeOutUp'
})

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {App},
  data: {
  }
})
