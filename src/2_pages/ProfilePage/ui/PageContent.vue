<script setup lang="ts">
import { useProfileStore } from '5_entities/Profile';
import { onUnmounted } from 'vue';

const store = useProfileStore();

onUnmounted(() => {
  store.$destroy();
});
</script>

<template>
  <div>
    <h1>{{ $t('common.profile') }}</h1>
  </div>
</template>
