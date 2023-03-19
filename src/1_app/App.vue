<script setup lang="ts">
import { TheNavbar } from '3_widgets/TheNavbar';
import { TheSidebar } from '3_widgets/TheSidebar';
import { useTheme } from './providers/theme';

const { theme } = useTheme();
</script>

<template>
  <div :class="`app ${theme}`">
    <TheNavbar />

    <div class="content-page">
      <TheSidebar />
      <RouterView class="page-wrapper" />
    </div>
  </div>
</template>

<style module="cls">
.red {
  color: rgb(215, 20, 20);
}
</style>
