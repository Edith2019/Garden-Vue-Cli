

import About from '../components/about.vue'
import Community from '../components/community.vue'
import Partners from "../components/partners.vue";
import Whatwedo from "../components/whatwedo.vue";
import Events from "../components/events.vue";
import Contact from "../components/contact.vue";
import Home from "../components/home.vue";



const routes = [
  {
    path: '/',
    name: "Home",
    component: Home
  },
  {
    path: '/about',
    name: "about",
    component: About
  },
  {
    path: '/community',
    name: "Community",
    component: Community
  },
  {
    path: '/whatwedo',
    name: "whatwedo",
    component: Whatwedo
  },
  {
    path: '/partners',
    name: "partners",
    component: Partners
  },
  {
    path: '/events',
    name: "events",
    component: Events
  },
  {
    path: '/contact',
    name: "contact",
    component: Contact
  }

  //community.vue

]



export default routes
