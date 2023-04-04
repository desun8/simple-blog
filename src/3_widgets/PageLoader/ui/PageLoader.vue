<script setup lang="ts">
import LoaderSpinner from '6_shared/ui/LoaderSpinner/LoaderSpinner.vue';
</script>

<template>
  <div :class="cls.PageLoader">
    <LoaderSpinner />
  </div>
</template>

<style module="cls">
.PageLoader {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}
</style>
