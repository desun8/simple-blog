<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import type { ArticleBlockImage } from '../../model/types/article';
import { AppTextAlign } from '6_shared/ui/AppText/types/AppTextAlign';

const AppText = defineAsyncComponent(
  () => import('6_shared/ui/AppText/AppText.vue')
);

interface ArticleBlockImageProps {
  block: ArticleBlockImage;
}

defineProps<ArticleBlockImageProps>();
</script>

<template>
  <div :class="cls.ArticleBlockImage">
    <img v-if="block.src" :src="block.src" :alt="block.title ?? ''" />
    <AppText
      v-if="block.title"
      :text="block.title"
      :align="AppTextAlign.CENTER"
    />
  </div>
</template>

<style module="cls">
.ArticleBlockImage img {
  max-width: 100%;
}
</style>
