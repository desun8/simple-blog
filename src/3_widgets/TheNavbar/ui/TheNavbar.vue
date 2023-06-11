<script setup lang="ts">
import { computed, ref } from 'vue';
import { useUserStore } from '5_entities/User';
import AppButton from '6_shared/ui/AppButton/AppButton.vue';
import { AppButtonTheme } from '6_shared/ui/AppButton/types/AppButtonTheme';
import { LoginModal } from '4_features/AuthByUsername';
import { useRoute, useRouter } from 'vue-router';

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();
const showAuthModal = ref(false);
const shouldRenderModal = computed(() => !userStore.authData);

const handleOpenModal = () => {
  showAuthModal.value = true;
};

const handleCloseModal = () => {
  showAuthModal.value = false;
};

const logout = () => {
  userStore.logout();
  handleCloseModal(); // Без этого модалка не открывается после логаута
  if (route.meta.authOnly) {
    router.push('/');
  }
};

const handleAuthClick = () => {
  if (userStore.authData) {
    logout();
  } else {
    handleOpenModal();
  }
};
</script>

<template>
  <div :class="cls.TheNavbar">
    <AppButton
      :class="cls.links"
      :theme="AppButtonTheme.CLEAR_INVERTED"
      @click="handleAuthClick"
    >
      {{ userStore.authData ? $t('common.logout') : $t('common.login') }}
    </AppButton>

    <!-- TODO: Сделать полноценный динамический импорт. Сейчас компонент модалки загружается всегда, если пользователь не авторизован  -->
    <LoginModal
      v-if="shouldRenderModal"
      :is-open="showAuthModal"
      :on-close="handleCloseModal"
    />
  </div>
</template>

<style module="cls">
.TheNavbar {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: var(--navbar-height);
  padding: 20px;

  background-color: var(--inverted-bg-color);
}

.links {
  display: grid;
  grid-auto-flow: column;
  gap: 16px;

  margin-left: auto;
}
</style>
