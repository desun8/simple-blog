import { RoutePath } from '6_shared/config/routes/routes';
import { type FunctionalComponent, type SVGAttributes } from 'vue';

import IconNavMain from '../assets/i-nav-main.svg?component';
import IconNavAbout from '../assets/i-nav-about.svg?component';
import IconNavProfile from '../assets/i-nav-profile.svg?component';
import IconNavArticle from '../assets/i-nav-article.svg?component';

type NavItem = {
  path: string;
  i18nKey: string;
  icon: FunctionalComponent<SVGAttributes>;
  authOnly?: boolean;
};

export const navItems: NavItem[] = [
  {
    path: RoutePath.main,
    i18nKey: 'glavnaya',
    icon: IconNavMain,
  },
  {
    path: RoutePath.about,
    i18nKey: 'o_nas',
    icon: IconNavAbout,
  },
  {
    path: RoutePath.profile,
    i18nKey: 'profile',
    icon: IconNavProfile,
    authOnly: true,
  },
  {
    path: RoutePath.article,
    i18nKey: 'article',
    icon: IconNavArticle,
    authOnly: true,
  },
];
