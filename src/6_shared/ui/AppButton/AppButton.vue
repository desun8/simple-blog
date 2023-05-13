<script setup lang="ts">
import { type ButtonHTMLAttributes, toRefs } from 'vue';
import { AppButtonSize } from './types/AppButtonSize';
import { AppButtonTheme } from './types/AppButtonTheme';

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  theme?: AppButtonTheme;
  square?: boolean;
  size?: AppButtonSize;
}

const props = withDefaults(defineProps<Props>(), {
  size: AppButtonSize.M,
  type: 'button',
});

const { size, type, theme, square } = toRefs(props);
</script>

<template>
  <button
    :class="[
      cls.AppButton,
      cls[theme || ''],
      cls[size],
      { [cls.square]: square },
    ]"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<style module="cls">
.AppButton {
  padding: 6px 12px;

  color: var(--primary-color);

  cursor: pointer;
}

.clear,
.clearInverted {
  margin: 0;
  padding: 0;
  border: 0;

  background-color: transparent;
}

.clearInverted {
  color: var(--inverted-primary-color);
}

.primary {
  color: var(--primary-color);
}

.secondary {
  color: var(--inverted-secondary-color);
}

.outline,
.outline-red {
  border-width: 1px;
  border-style: solid;

  background-color: transparent;
}

.outline {
  border-color: var(--primary-color);

  color: var(--primary-color);
}

.outline-red {
  border-color: var(--red-light);

  color: var(--red-light);
}

.background {
  border: 0;

  background-color: var(--bg-color);
  color: var(--primary-color);
}

.backgroundInverted {
  border: 0;

  background-color: var(--inverted-bg-color);
  color: var(--inverted-primary-color);
}

.square {
  padding: 0;
}

.square.size-m {
  width: var(--font-line-m);
  height: var(--font-line-m);

  font-size: var(--font-size-m);
}

.square.size-l {
  width: var(--font-line-l);
  height: var(--font-line-l);

  font-size: var(--font-size-l);
}

.square.size-xl {
  width: var(--font-line-xl);
  height: var(--font-line-xl);

  font-size: var(--font-size-xl);
}

.size-m {
  font-size: var(--font-size-m);
}

.size-l {
  font-size: var(--font-size-l);
}

.size-xl {
  font-size: var(--font-size-xl);
}

.AppButton:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
