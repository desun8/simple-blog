import { type Ref } from 'vue';
import { type Article } from './article';

export type ArticleSchema = {
  data: Ref<Article | undefined>;
  isLoading: Ref<boolean>;
  error: Ref<string | undefined>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  fetchData: (id: string) => Promise<Ref<Article | null>>;
};
