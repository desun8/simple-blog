<script setup lang="ts">
import { RoutePath } from '6_shared/config/routes/routes';
import AppButton from '6_shared/ui/AppButton/AppButton.vue';
import { AppButtonSize } from '6_shared/ui/AppButton/types/AppButtonSize';
import { AppButtonTheme } from '6_shared/ui/AppButton/types/AppButtonTheme';
import AppLink from '6_shared/ui/AppLink/AppLink.vue';
import { AppLinkTheme } from '6_shared/ui/AppLink/types/AppLinkTheme';
import { computed, ref } from 'vue';
import IconNavMain from '../../assets/i-nav-main.svg?component';
import IconNavAbout from '../../assets/i-nav-about.svg?component';
import { LangSwitcher } from '4_features/LangSwitcher';
import { ThemeSwitcher } from '4_features/ThemeSwitcher';

const collapsed = ref(false);
const onToggle = () => {
  collapsed.value = !collapsed.value;
};

const labelCollapsedBtn = computed(() => (collapsed.value ? '>' : '<'));
</script>

<template>
  <aside :class="[cls.TheSidebar, { [cls.collapsed]: collapsed }]">
    <AppButton
      :class="cls.collapseBtn"
      :theme="AppButtonTheme.BACKGROUND_INVERTED"
      :size="AppButtonSize.L"
      square
      @click="onToggle"
    >
      {{ labelCollapsedBtn }}
    </AppButton>

    <nav :class="cls.nav">
      <AppLink
        :class="cls.link"
        :theme="AppLinkTheme.SECONDARY"
        :to="RoutePath.main"
      >
        <IconNavMain />
        <span :class="cls.linkLabel">{{ $t('common.glavnaya') }}</span>
      </AppLink>

      <AppLink
        :class="cls.link"
        :theme="AppLinkTheme.SECONDARY"
        :to="RoutePath.about"
      >
        <IconNavAbout />
        <span :class="cls.linkLabel">{{ $t('common.o_nas') }}</span>
      </AppLink>
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

.link {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  gap: 5px;
}

.linkLabel {
  transition: all 0.2s;
  white-space: nowrap;
}

.collapsed .linkLabel {
  width: 0;
  opacity: 0;
}
</style>
