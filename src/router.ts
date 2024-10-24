import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './modules/Home/views/HomeView.vue';
import LoginView from './modules/Login/views/LoginView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/profile', name: 'Profile', component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
