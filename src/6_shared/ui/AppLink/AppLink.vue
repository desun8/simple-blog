<script setup lang="ts">
import { useProps } from '6_shared/lib/useProps/useProps';
import { $defineProps } from '@vue-macros/define-props/macros';
import { RouterLink, type RouterLinkProps } from 'vue-router';
import { AppLinkTheme } from './types/AppLinkTheme';

type AppLinkProps = {
  theme?: AppLinkTheme;
} & RouterLinkProps;

const props = withDefaults($defineProps<AppLinkProps>(), {
  theme: AppLinkTheme.PRIMARY,
});
const { theme, to, ...otherProps } = useProps(props);
</script>

<template>
  <RouterLink v-bind="otherProps" :class="[cls.AppLink, cls[theme]]" :to="to"
    ><slot></slot
  ></RouterLink>
</template>

<style module="cls">
.AppLink {
  color: var(--primary-color);
}

.primary {
  color: var(--primary-color);
}

.secondary {
  color: var(--inverted-secondary-color);
}
</style>
