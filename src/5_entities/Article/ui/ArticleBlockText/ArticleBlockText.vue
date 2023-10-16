<script setup lang="ts">
import type { ArticleBlockText } from '../../model/types/article';
import AppText from '6_shared/ui/AppText/AppText.vue';

interface ArticleBlockTextProps {
  block: ArticleBlockText;
}

defineProps<ArticleBlockTextProps>();
</script>

<template>
  <div>
    <AppText v-if="block.title" :class="cls.title" :title="block.title" />
    <AppText
      v-for="(text, index) in block.paragraphs"
      :key="index"
      :class="cls.text"
      :text="text"
    />
  </div>
</template>

<style module="cls">
.title {
  margin-bottom: 16px;
}

.text {
  margin-bottom: 8px;
}
</style>
