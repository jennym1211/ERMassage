import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueFacebookPage from 'vue-facebook-page'
import VueMeta from 'vue-meta'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'



Vue.use(VueFacebookPage, /** Add your facebook appId here */)
Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueMeta)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
