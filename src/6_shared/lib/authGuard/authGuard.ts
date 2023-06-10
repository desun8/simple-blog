import { useUserStore } from '5_entities/User';
import { RoutePath } from '6_shared/config/routes/routes';

export const authGuard = () => {
  if (useUserStore().authData) {
    return true;
  }

  return { path: RoutePath.main };
};
