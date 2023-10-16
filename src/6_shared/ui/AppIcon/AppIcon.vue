<script setup lang="ts">
import { FunctionalComponent, SVGAttributes } from 'vue';

interface AppIconProps {
  Svg: FunctionalComponent<SVGAttributes>;
}

defineProps<AppIconProps>();
</script>

<template>
  <Component :class="cls.AppIcon" :is="Svg" />
</template>

<style module="cls">
.AppIcon,
.AppIcon * {
  fill: var(--primary-color);
}
</style>
