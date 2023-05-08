<script setup lang="ts">
import { useUserStore } from '5_entities/User';
import { RoutePath } from '6_shared/config/routes/routes';
import { storeToRefs } from 'pinia';
import { defineAsyncComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
const PageContent = defineAsyncComponent(() => import('./PageContent.vue'));

const userStore = useUserStore();
const { authData } = storeToRefs(userStore);
const router = useRouter();

watch(authData, (curr) => {
  if (curr === undefined) {
    router.push(RoutePath.main);
  }
});
</script>

<template>
  <Suspense>
    <PageContent />
  </Suspense>
</template>
