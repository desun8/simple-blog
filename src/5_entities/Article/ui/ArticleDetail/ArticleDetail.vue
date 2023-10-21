<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onUnmounted, defineProps, defineAsyncComponent } from 'vue';
import { useArticleStore } from '../../model/useArticleStore';
import { ArticleBlockType } from '../../model/types/article';
import { AppTextAlign } from '6_shared/ui/AppText/types/AppTextAlign';
import { AppTextSize } from '6_shared/ui/AppText/types/AppTextSize';

const AppText = defineAsyncComponent(
  () => import('6_shared/ui/AppText/AppText.vue')
);

const AppSkeleton = defineAsyncComponent(
  () => import('6_shared/ui/AppSkeleton/AppSkeleton.vue')
);
const UserAvatar = defineAsyncComponent(
  () => import('6_shared/ui/UserAvatar/UserAvatar.vue')
);
const AppIcon = defineAsyncComponent(
  () => import('6_shared/ui/AppIcon/AppIcon.vue')
);
const IconViews = defineAsyncComponent(
  () => import('../../assets/icons/views.svg?component')
);
const IconDate = defineAsyncComponent(
  () => import('../../assets/icons/date.svg?component')
);
const ArticleBlockCode = defineAsyncComponent(
  () => import('../ArticleBlockCode/ArticleBlockCode.vue')
);
const ArticleBlockImage = defineAsyncComponent(
  () => import('../ArticleBlockImage/ArticleBlockImage.vue')
);
const ArticleBlockText = defineAsyncComponent(
  () => import('../ArticleBlockText/ArticleBlockText.vue')
);

interface ArticleDetailProps {
  id: string;
}
const props = defineProps<ArticleDetailProps>();

const store = useArticleStore();
const { data: article, isLoading, error } = storeToRefs(store);

if (import.meta.env.STORYBOOK !== 'true') {
  store.fetchData(props.id);
}

onUnmounted(() => {
  store.$destroy();
});
</script>

<template>
  <div>
    <template v-if="isLoading">
      <AppSkeleton
        :class="cls.avatar"
        :width="200"
        :height="200"
        border-radius="50%"
      />
      <AppSkeleton :class="cls.title" :width="300" :height="32" />
      <AppSkeleton :class="cls.skeleton" :width="600" :height="24" />
      <AppSkeleton :class="cls.skeleton" width="100%" :height="200" />
      <AppSkeleton :class="cls.skeleton" width="100%" :height="200" />
    </template>

    <AppText
      v-else-if="error"
      :align="AppTextAlign.CENTER"
      :title="$t('article.proizoshla_oshibka_pri_zagruzke_stati')"
    />

    <template v-else-if="article">
      <UserAvatar :class="cls.avatar" :src="article?.img" :size="200" />
      <AppText
        :class="cls.title"
        :title="article?.title"
        :text="article?.subtitle"
        :size="AppTextSize.L"
      />

      <div v-if="article.views" :class="cls['article-info']">
        <AppIcon :Svg="IconViews" />
        <AppText :text="String(article.views)" />
      </div>

      <div v-if="article.createdAt" :class="cls['article-info']">
        <AppIcon :Svg="IconDate" />
        <AppText :text="article.createdAt" />
      </div>

      <template v-for="block in article.blocks">
        <ArticleBlockText
          v-if="block.type === ArticleBlockType.TEXT"
          :key="block.id + 'text'"
          :class="cls.block"
          :block="block"
        />

        <ArticleBlockCode
          v-else-if="block.type === ArticleBlockType.CODE"
          :key="block.id + 'code'"
          :class="cls.block"
          :block="block"
        />

        <ArticleBlockImage
          v-else-if="block.type === ArticleBlockType.IMAGE"
          :key="block.id + 'image'"
          :class="cls.block"
          :block="block"
        />
      </template>
    </template>
  </div>
</template>

<style module="cls">
.avatar {
  display: block;

  margin: 0 auto;
}

.title {
  margin-top: 20px;
}

.skeleton {
  margin-top: 15px;
}

.article-info {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 6px;
  justify-content: start;
  align-items: center;
}

.block {
  margin-top: 16px;
}
</style>
