<script setup lang="ts">
import { CSSProperties, computed, toRefs } from 'vue';

interface AppSkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

const props = withDefaults(defineProps<AppSkeletonProps>(), {});
const { width, height, borderRadius } = toRefs(props);

const addPx = (value: string | number) => {
  if (typeof value === 'number' || !isNaN(Number(value))) {
    return `${value}px`;
  }

  return value;
};

const styles = computed(() => {
  const style: CSSProperties = {};
  if (width?.value) {
    style.width = addPx(width.value);
  }

  if (height?.value) {
    style.height = addPx(height.value);
  }

  if (borderRadius?.value) {
    style.borderRadius = addPx(borderRadius.value);
  }

  return style;
});
</script>

<template>
  <div :class="cls.AppSkeleton" :style="styles"></div>
</template>

<style module="cls">
@keyframes load {
  from {
    left: -150px;
  }

  to {
    left: 100%;
  }
}

.AppSkeleton {
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 50px;

  box-shadow: 0 2px 10px 0 var(--skeleton-shadow);
}

.AppSkeleton::before {
  content: '';
  display: block;
  position: absolute;
  left: -150px;
  top: 0;

  height: 100%;
  width: 80%;

  background: linear-gradient(
    to right,
    transparent 0%,
    var(--skeleton-color) 50%,
    transparent 100%
  );

  animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
</style>
