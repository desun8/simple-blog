<script setup lang="ts">
import { FunctionalComponent, SVGAttributes } from 'vue';
import AppLink from '6_shared/ui/AppLink/AppLink.vue';
import { AppLinkTheme } from '6_shared/ui/AppLink/types/AppLinkTheme';

interface TheSidebarNavLinkProps {
  to: string;
  text: string;
  icon: FunctionalComponent<SVGAttributes>;
  collapsed: boolean;
}
defineProps<TheSidebarNavLinkProps>();
</script>

<template>
  <AppLink
    :class="[cls.TheSidebarNavLink, { [cls['is-collapsed']]: collapsed }]"
    :theme="AppLinkTheme.SECONDARY"
    :to="to"
  >
    <component :is="icon"></component>
    <!-- eslint-disable-next-line @intlify/vue-i18n/no-dynamic-keys -->
    <span :class="cls.label">{{ $t(`common.${text}`) }}</span>
  </AppLink>
</template>

<style module="cls">
.TheSidebarNavLink {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  gap: 5px;
}

.label {
  white-space: nowrap;

  transition: all 0.2s;
}

.is-collapsed .label {
  width: 0;

  opacity: 0;
}
</style>
