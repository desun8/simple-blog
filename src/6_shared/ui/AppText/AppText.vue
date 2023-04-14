<script setup lang="ts">
import { toRefs } from 'vue';
import { AppTextTheme } from './types/AppTextTheme';

interface AppTextProps {
  title?: string;
  text?: string;
  theme?: AppTextTheme;
}

const props = withDefaults(defineProps<AppTextProps>(), {
  theme: AppTextTheme.PRIMARY,
});
const { title, text, theme } = toRefs(props);
</script>

<template>
  <div :class="cls[theme]">
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

  font: var(--font-l);
}

.text {
  color: var(--text-color);

  font: var(--font-m);
}
</style>
