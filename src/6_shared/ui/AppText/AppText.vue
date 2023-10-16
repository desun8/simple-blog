<script setup lang="ts">
import { toRefs } from 'vue';
import { AppTextTheme } from './types/AppTextTheme';
import { AppTextAlign } from './types/AppTextAlign';
import { AppTextSize } from './types/AppTextSize';

interface AppTextProps {
  title?: string;
  text?: string;
  theme?: AppTextTheme;
  align?: AppTextAlign;
  size?: AppTextSize;
}

const props = withDefaults(defineProps<AppTextProps>(), {
  theme: AppTextTheme.PRIMARY,
  align: AppTextAlign.LEFT,
  size: AppTextSize.M,
});
const { title, text, theme } = toRefs(props);
</script>

<template>
  <div :class="[cls[theme], cls[align], cls[size]]">
    <p v-if="title" :class="cls.title">{{ title }}</p>
    <p v-if="text" :class="cls.text">{{ text }}</p>
  </div>
</template>

<style module="cls">
.primary {
  --title-color: var(--primary-color);
  --text-color: var(--secondary-color);
}

.error {
  --title-color: var(--red-dark);
  --text-color: var(--red-light);
}

.title {
  color: var(--title-color);
}

.text {
  color: var(--text-color);
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}

.center {
  text-align: center;
}

.size-m .title {
  font: var(--font-l);
}

.size-m .text {
  font: var(--font-m);
}

.size-l .title {
  font: var(--font-xl);
}

.size-l .text {
  font: var(--font-l);
}
</style>
