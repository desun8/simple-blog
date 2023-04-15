import { RoutePath } from '6_shared/config/routes/routes';
import { type FunctionalComponent, type SVGAttributes } from 'vue';

import IconNavMain from '../assets/i-nav-main.svg?component';
import IconNavAbout from '../assets/i-nav-about.svg?component';

type NavItem = {
  path: string;
  i18nKey: string;
  icon: FunctionalComponent<SVGAttributes>;
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
];
