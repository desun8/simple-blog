import { type RouteRecordRaw } from 'vue-router';

const MainPage = async () => {
  const { MainPage } = await import('2_pages/MainPage');
  return MainPage;
};

const AboutPage = async () => {
  const { AboutPage } = await import('2_pages/AboutPage');
  return AboutPage;
};

export const enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUNT = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUNT]: '*',
};

export const routes: RouteRecordRaw[] = [
  { path: RoutePath.main, component: MainPage },
  { path: RoutePath.about, component: AboutPage },
];
