import { createRouter, createWebHistory, type Router } from 'vue-router';
import { useUserStore } from '5_entities/User';
import { RoutePath, routes } from '6_shared/config/routes/routes';

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.meta.authOnly && !useUserStore().authData) {
    next({ path: RoutePath.main });
  } else next();
});
