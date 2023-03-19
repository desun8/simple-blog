<script setup lang="ts">
import { TheNavbar } from '3_widgets/TheNavbar';
import { TheSidebar } from '3_widgets/TheSidebar';
import { useTheme } from './providers/theme';

const { theme } = useTheme();
</script>

<template>
  <div :class="`app ${theme}`">
    <TheNavbar />

    <h1>Hello world!</h1>
    <RouterView />
  </div>
</template>

<style module="cls">
.red {
  color: rgb(215, 20, 20);
}
</style>
