<script setup lang="ts">
import { type Comment } from '../../model/types/comment';
import UserAvatar from '6_shared/ui/UserAvatar/UserAvatar.vue';
import AppText from '6_shared/ui/AppText/AppText.vue';
import AppSkeleton from '6_shared/ui/AppSkeleton/AppSkeleton.vue';

interface CommentCardProps {
  comment: Comment;
  isLoading?: boolean;
}

withDefaults(defineProps<CommentCardProps>(), {});
</script>

<template>
  <div :class="cls.CommentCard">
    <template v-if="isLoading">
      <div :class="cls.header">
        <AppSkeleton width="30" height="30" border-radius="50%" />
        <AppSkeleton width="100" height="16" />
      </div>
      <AppSkeleton :class="cls.text" width="100%" height="50" />
    </template>

    <template v-else>
      <div :class="cls.header">
        <UserAvatar
          v-if="comment.user.avatar"
          :src="comment.user.avatar"
          :size="30"
        />
        <AppText :title="comment.user.username" />
      </div>

      <AppText :class="cls.text" :text="comment.text" />
    </template>
  </div>
</template>

<style module="cls">
.CommentCard {
  padding: 10px;
  border: 1px solid var(--primary-color);
}

.header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.text {
  margin-top: 10px;
}
</style>
