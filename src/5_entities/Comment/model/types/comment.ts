import type { User } from '5_entities/User';

export type Comment = {
  id: string;
  user: User;
  text: string;
};
