<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ArticleDetail } from '5_entities/Article';
import AppText from '6_shared/ui/AppText/AppText.vue';
import { AppTextAlign } from '6_shared/ui/AppText/types/AppTextAlign';
import { CommentList } from '5_entities/Comment';
import { useArticleCommentsStore } from '../model/useArticleCommentsStore';

const route = useRoute();
const id: string = typeof route.params.id === 'string' ? route.params.id : '';

const commentsStore = useArticleCommentsStore();
if (import.meta.env.STORYBOOK !== 'true') {
  commentsStore.fetchData(id);
}
</script>

<template>
  <div>
    <ArticleDetail v-if="id" :id="id" />
    <AppText
      v-else
      :align="AppTextAlign.CENTER"
      :title="$t('article.statya_ne_naidena')"
    />

    <AppText :class="cls.commentTitle" :title="$t('article.kommentarii')" />
    <CommentList
      :comments="commentsStore.comments"
      :is-loading="commentsStore.isLoading"
    />
  </div>
</template>

<style module="cls">
.commentTitle {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
