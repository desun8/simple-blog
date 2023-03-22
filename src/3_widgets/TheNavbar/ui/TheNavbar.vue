<script setup lang="ts">
import AppButton from '6_shared/ui/AppButton/AppButton.vue';
import { computed, ref } from 'vue';

const isAuth = ref(false);

const openModal = () => {
  console.log('login');
};

const logout = () => {
  console.log('logout');
};

const handleClick = () => {
  if (isAuth.value) {
    logout();
  } else {
    openModal();
  }

  isAuth.value = !isAuth.value;
};
</script>

<template>
  <div :class="cls.TheNavbar">
    <AppButton :class="cls.links" @click="handleClick">
      {{ isAuth ? $t('common.logout') : $t('common.login') }}
    </AppButton>
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
