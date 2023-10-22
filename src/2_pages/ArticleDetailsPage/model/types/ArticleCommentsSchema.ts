import { type Ref } from 'vue';
import { type Comment } from '5_entities/Comment';

export type ArticleCommentsSchema = {
  comments: Ref<Comment[] | undefined>;
  isLoading: Ref<boolean>;
  error: Ref<string | undefined>;

  fetchData: (id: string) => void;
};
