<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const PageContent = defineAsyncComponent(() => import('./PageContent.vue'));
</script>

<template>
  <PageContent />
</template>

<style module="cls"></style>
