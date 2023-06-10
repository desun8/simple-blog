import { authGuard } from '6_shared/lib/authGuard/authGuard';
import { type RouteRecordRaw } from 'vue-router';

const MainPage = async () => import('2_pages/MainPage');
const AboutPage = async () => import('2_pages/AboutPage');
const ProfilePage = async () => import('2_pages/ProfilePage');
const ArticlesPage = async () => import('2_pages/ArticlesPage');
const ArticleDetailsPage = async () => import('2_pages/ArticleDetailsPage');
const NotFoundPage = async () => import('2_pages/NotFoundPage');

export const enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'article',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUNT = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/:id',
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
    meta: { requiresAuth: true },
    beforeEnter: [authGuard],
  },
  {
    path: RoutePath.article,
    component: ArticlesPage,
    meta: { requiresAuth: true },
    beforeEnter: [authGuard],
  },
  {
    path: RoutePath.article_details,
    component: ArticleDetailsPage,
    meta: { requiresAuth: true },
    beforeEnter: [authGuard],
  },
  {
    path: RoutePath.not_found,
    component: NotFoundPage,
  },
];
