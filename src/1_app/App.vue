<script setup lang="ts">
import { PageLoader } from '3_widgets/PageLoader';
import { TheNavbar } from '3_widgets/TheNavbar';
import { TheSidebar } from '3_widgets/TheSidebar';
import { useTheme } from './providers/theme';
import { useUserStore } from '5_entities/User';

useUserStore().initAuthData();
const { theme } = useTheme();
</script>

<template>
  <div :class="`app ${theme}`">
    <TheNavbar />

    <div class="content-page">
      <TheSidebar />
      <RouterView v-slot="{ Component }" class="page-wrapper">
        <template v-if="Component">
          <Transition mode="out-in">
            <KeepAlive>
              <Suspense timeout="0">
                <component :is="Component"></component>

                <template #fallback>
                  <PageLoader />
                </template>
              </Suspense>
            </KeepAlive>
          </Transition>
        </template>
      </RouterView>
    </div>
  </div>
</template>

<style module="cls">
.red {
  color: rgb(215 20 20);
}
</style>
