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
      <RouterView v-slot="{ Component }" class="page-wrapper">
        <template v-if="Component">
          <Transition mode="out-in">
            <KeepAlive>
              <Suspense timeout="0">
                <component :is="Component"></component>

                <template #fallback>
                  {{ $t('common.loading') }}
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
