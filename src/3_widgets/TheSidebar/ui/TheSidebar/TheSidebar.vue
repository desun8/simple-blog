<script setup lang="ts">
import AppButton from '6_shared/ui/AppButton/AppButton.vue';
import { AppButtonSize } from '6_shared/ui/AppButton/types/AppButtonSize';
import { AppButtonTheme } from '6_shared/ui/AppButton/types/AppButtonTheme';
import { computed, ref } from 'vue';
import { LangSwitcher } from '4_features/LangSwitcher';
import { ThemeSwitcher } from '4_features/ThemeSwitcher';
import { navItems } from '../../model/navItems';
import TheSidebarNavLink from '../TheSidebarNavLink/TheSidebarNavLink.vue';
import { useUserStore } from '5_entities/User';

const userStore = useUserStore();
const collapsed = ref(false);
const onToggle = () => {
  collapsed.value = !collapsed.value;
};

const labelCollapsedBtn = computed(() => (collapsed.value ? '>' : '<'));
const filteredNavItems = computed(() =>
  userStore.authData ? navItems : navItems.filter((item) => !item.authOnly)
);
</script>

<template>
  <aside
    :class="[cls.TheSidebar, { [cls.collapsed]: collapsed }]"
    data-testid="the-sidebar"
  >
    <AppButton
      :class="cls.collapseBtn"
      :theme="AppButtonTheme.BACKGROUND_INVERTED"
      :size="AppButtonSize.L"
      square
      data-testid="the-sidebar-toggle"
      @click="onToggle"
    >
      {{ labelCollapsedBtn }}
    </AppButton>

    <nav :class="cls.nav">
      <TheSidebarNavLink
        v-for="link in filteredNavItems"
        :key="link.path"
        :to="link.path"
        :text="link.i18nKey"
        :icon="link.icon"
        :collapsed="collapsed"
      />
    </nav>

    <div :class="cls.switchers">
      <ThemeSwitcher />
      <LangSwitcher :short="collapsed" />
    </div>
  </aside>
</template>

<style module="cls">
.TheSidebar {
  position: relative;

  width: var(--sidebar-width);
  height: calc(100vh - var(--navbar-height));

  background-color: var(--inverted-bg-color);

  transition: width 0.3s;
}

.collapsed {
  width: var(--sidebar-width-collapsed);
}

.switchers {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 100%;
}

.collapsed .switchers {
  flex-direction: column;
}

.collapseBtn {
  position: absolute;
  right: -32px;
  bottom: 32px;
}

.nav {
  display: grid;
  gap: 10px;

  padding: 30px;
}
</style>
