<script setup lang="ts">
import { ProfileCard, useProfileStore } from '5_entities/Profile';
import { storeToRefs } from 'pinia';
import { onUnmounted } from 'vue';
import ProfilePageHeader from './ProfilePageHeader.vue';

const store = useProfileStore();
const { data, isLoading, errorMsg, readonly } = storeToRefs(store);
await store.fetchData();

onUnmounted(() => {
  store.$destroy();
});
</script>

<template>
  <div>
    <ProfilePageHeader />

    <ProfileCard
      v-model:data="data"
      :is-loading="isLoading"
      :error="errorMsg"
      :is-readonly="readonly"
    />
  </div>
</template>
