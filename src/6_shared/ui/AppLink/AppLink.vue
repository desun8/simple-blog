<script setup lang="ts">
import { RouterLink, type RouterLinkProps } from 'vue-router';
import { AppLinkTheme } from './types/AppLinkTheme';
import { toRefs } from 'vue';

interface AppLinkProps extends RouterLinkProps {
  theme?: AppLinkTheme;
}

const props = withDefaults(defineProps<AppLinkProps>(), {
  theme: AppLinkTheme.PRIMARY,
});
const { theme, to } = toRefs(props);
</script>

<template>
  <RouterLink :class="[cls.AppLink, cls[theme]]" :to="to"
    ><slot></slot
  ></RouterLink>
</template>

<style module="cls">
.AppLink {
  color: var(--primary-color);
}
.AppLink:hover {
  opacity: 0.8;
}

.primary {
  color: var(--primary-color);
}

.secondary {
  color: var(--inverted-secondary-color);
}
</style>
