<script setup lang="ts">
import { RoutePath } from '6_shared/config/routes/routes';
import { useTheme } from './providers/theme';

const { theme } = useTheme();
</script>

<template>
  <div :class="`app ${theme}`">
    <nav>
      <RouterLink :to="RoutePath.main">Home</RouterLink>
      <RouterLink :to="RoutePath.about">About</RouterLink>
    </nav>

    <h1>Hello world!</h1>
    <RouterView />
  </div>
</template>

<style module="cls">
.red {
  color: rgb(215, 20, 20);
}
</style>
