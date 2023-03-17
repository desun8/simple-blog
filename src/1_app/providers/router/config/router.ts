import {createRouter, createWebHistory, type Router} from 'vue-router';

import {routes} from '6_shared/config/routes/routes';

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});
