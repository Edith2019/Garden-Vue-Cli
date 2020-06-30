import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router';
import AOS from 'aos'
import 'aos/dist/aos.css'
// import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
// import VCalendar from 'v-calendar';

import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
import VueProgressiveImage from "vue-progressive-image";
import VueSmoothScroll from 'vue2-smooth-scroll'

// import VCalendar from 'v-calendar';
// Vue.use(VCalendar, {
//   componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
//   // ...,                // ...other defaults
// });


Vue.config.productionTip = false
Vue.use(VueRouter);


Vue.use(VueProgressiveImage, {
  cache: false,
});

Vue.use(VueSmoothScroll)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  created() {
    AOS.init()
  },
  render: h => h(App),
  router

}).$mount('#app')
