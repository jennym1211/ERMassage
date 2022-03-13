import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import VueFacebookPage from 'vue-facebook-page'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueMeta from 'vue-meta'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'
Vue.use(VueFacebookPage, /** Add your facebook appId here */)
Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
library.add(faHatWizard)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueMeta)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
