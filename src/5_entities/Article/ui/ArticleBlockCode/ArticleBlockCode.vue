<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import type { ArticleBlockCode } from '../../model/types/article';

const AppCode = defineAsyncComponent(
  () => import('6_shared/ui/AppCode/AppCode.vue')
);

interface ArticleBlockCodeProps {
  block: ArticleBlockCode;
}

defineProps<ArticleBlockCodeProps>();
</script>

<template>
  <div>
    <AppCode v-if="block.code">{{ block.code }}</AppCode>
  </div>
</template>
