<script setup lang="ts">
import { useTheme } from '1_app/providers/theme';
import AppButton from '6_shared/ui/AppButton/AppButton.vue';
import { AppButtonTheme } from '6_shared/ui/AppButton/types/AppButtonTheme';
import IconTheme from '../assets/icons/theme.svg?component';

const { toggleTheme } = useTheme();
</script>

<template>
  <AppButton
    :class="cls.ThemeSwitcher"
    :theme="AppButtonTheme.CLEAR"
    @click="toggleTheme"
  >
    <IconTheme :class="cls.icon" />
  </AppButton>
</template>

<style module="cls">
.ThemeSwitcher {
  width: auto;
}

.icon {
  color: var(--theme-switcher-color);
}
</style>
