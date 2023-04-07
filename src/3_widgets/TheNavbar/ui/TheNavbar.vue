<script setup lang="ts">
import { LoginModal } from '4_features/AuthByUsername';
import AppButton from '6_shared/ui/AppButton/AppButton.vue';
import { AppButtonTheme } from '6_shared/ui/AppButton/types/AppButtonTheme';
import { ref } from 'vue';

const isAuth = ref(false);
const isAuthModal = ref(false);

const handleOpenModal = () => {
  console.log('open modal');
  isAuthModal.value = true;
};

const handleCloseModal = () => {
  console.log('close modal');
  isAuthModal.value = false;
};

const logout = () => {
  console.log('logout');
};

const handleClick = () => {
  if (isAuth.value) {
    logout();
  } else {
    handleOpenModal();
  }

  // isAuth.value = !isAuth.value;
};
</script>

<template>
  <div :class="cls.TheNavbar">
    <AppButton
      :class="cls.links"
      :theme="AppButtonTheme.CLEAR"
      @click="handleClick"
    >
      {{ isAuth ? $t('common.logout') : $t('common.login') }}
    </AppButton>

    <LoginModal :is-open="isAuthModal" :on-close="handleCloseModal">
    </LoginModal>
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
