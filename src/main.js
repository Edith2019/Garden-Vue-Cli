import Vue from 'vue'
import App from './App.vue'

import router from './router';
import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(router)
Vue.use(vueEventCalendar, { locale: 'en' })

Vue.config.productionTip = false



new Vue({
  router,
  vueEventCalendar,
  render: h => h(App),
}).$mount('#app')
