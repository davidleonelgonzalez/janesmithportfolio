// main.js
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Contacts from './components/Contacts.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/projects', component: Projects },
  { path: '/skills', component: Skills },
  { path: '/contacts', component: Contacts },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
