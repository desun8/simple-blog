import { type RouteRecordRaw } from 'vue-router';

const MainPage = async () => import('2_pages/MainPage');
const AboutPage = async () => import('2_pages/AboutPage');
const ProfilePage = async () => import('2_pages/ProfilePage');
const NotFoundPage = async () => import('2_pages/NotFoundPage');

export const enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUNT = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUNT]: '/:pathMatch(.*)*',
};

export const routes: RouteRecordRaw[] = [
  {
    path: RoutePath.main,
    component: MainPage,
  },
  {
    path: RoutePath.about,
    component: AboutPage,
  },
  {
    path: RoutePath.profile,
    component: ProfilePage,
  },
  {
    path: RoutePath.not_found,
    component: NotFoundPage,
  },
];
