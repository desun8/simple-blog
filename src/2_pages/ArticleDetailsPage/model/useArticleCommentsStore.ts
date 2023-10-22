import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useFetch } from '6_shared/lib/useFetch/useFetch';
import { type ArticleCommentsSchema } from './types/ArticleCommentsSchema';
import { type Comment } from '5_entities/Comment';

export const useArticleCommentsStore = defineStore(
  'articleComments',
  (): ArticleCommentsSchema => {
    const comments = ref<Comment[]>();
    const isLoading = ref(false);
    const error = ref<string>();

    async function fetchData(id: string) {
      isLoading.value = true;
      error.value = undefined;

      const params = new URLSearchParams({
        articleId: id,
        _expand: 'user',
      }).toString();

      const {
        data: resData,
        error: err,
        isFetching,
      } = await useFetch<Comment[]>(`/comments?${params}`)
        .get()
        .json<Comment[]>();

      if (err.value && typeof err.value === 'string') {
        error.value = err.value;
      }

      isLoading.value = isFetching.value;

      if (error.value === undefined && resData.value) {
        comments.value = resData.value;
      }

      return resData;
    }

    return {
      comments,
      isLoading,
      error,
      fetchData,
    };
  }
);
