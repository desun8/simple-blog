<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { type Comment } from '../../model/types/comment';

const CommentCard = defineAsyncComponent(
  () => import('../CommentCard/CommentCard.vue')
);
const AppText = defineAsyncComponent(
  () => import('6_shared/ui/AppText/AppText.vue')
);

interface CommentListProps {
  comments: Comment[] | undefined;
  isLoading?: boolean;
}

withDefaults(defineProps<CommentListProps>(), {});
</script>

<template>
  <div :class="cls.CommentList">
    <template v-if="comments && comments.length">
      <CommentCard
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        :is-loading="isLoading"
      />
    </template>
    <AppText v-else :text="$t('article.kommentarii_ne_naideny')" />
  </div>
</template>

<style module="cls">
.CommentList {
  display: grid;
  gap: 20px;
}
</style>
