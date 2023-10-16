<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ArticleDetail } from '5_entities/Article';
import AppText from '6_shared/ui/AppText/AppText.vue';
import { AppTextAlign } from '6_shared/ui/AppText/types/AppTextAlign';

const route = useRoute();
const id: string = typeof route.params.id === 'string' ? route.params.id : '';
</script>

<template>
  <div>
    <ArticleDetail v-if="id" :id="id" />
    <AppText
      v-else
      :align="AppTextAlign.CENTER"
      :title="$t('article.statya_ne_naidena')"
    />
  </div>
</template>
