import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './modules/Home/views/HomeView.vue';
import AboutView from './modules/Login/views/LoginView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
