import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useFetch } from '6_shared/lib/useFetch/useFetch';
import { type ArticleSchema } from './types/articleSchema';
import { type Article } from './types/article';

export const useArticleStore = defineStore('article', (): ArticleSchema => {
  const data = ref<Article>();
  const isLoading = ref(false);
  const error = ref<string>();

  async function fetchData(id: string) {
    isLoading.value = true;
    error.value = undefined;

    const {
      data: resData,
      error: err,
      isFetching,
    } = await useFetch<Article>(`/articles/${id}`).get().json<Article>();

    if (err.value && typeof err.value === 'string') {
      error.value = err.value;
    }

    isLoading.value = isFetching.value;

    if (error.value === undefined && resData.value) {
      data.value = resData.value;
    }

    return resData;
  }

  return {
    data,
    isLoading,
    error,
    fetchData,
  };
});
