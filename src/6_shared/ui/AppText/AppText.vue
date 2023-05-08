<script setup lang="ts">
import { toRefs } from 'vue';
import { AppTextTheme } from './types/AppTextTheme';
import { AppTextAlign } from './types/AppTextAlign';

interface AppTextProps {
  title?: string;
  text?: string;
  theme?: AppTextTheme;
  align?: AppTextAlign;
}

const props = withDefaults(defineProps<AppTextProps>(), {
  theme: AppTextTheme.PRIMARY,
  align: AppTextAlign.LEFT,
});
const { title, text, theme } = toRefs(props);
</script>

<template>
  <div :class="[cls[theme], cls[align]]">
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

.left {
  text-align: left;
}

.right {
  text-align: right;
}

.center {
  text-align: center;
}
</style>
