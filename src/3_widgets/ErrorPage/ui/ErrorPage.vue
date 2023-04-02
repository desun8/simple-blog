<script setup lang="ts">
import AppButton from '6_shared/ui/AppButton/AppButton.vue';

const reloadPage = () => {
  location.reload();
};
</script>

<template>
  <div :class="cls.ErrorPage">
    <p>{{ $t('common.proizoshla_nepredvidennaya_oshibka') }}</p>
    <AppButton @click="reloadPage">{{
      $t('common.obnovit_stranicu')
    }}</AppButton>
  </div>
</template>

<style module="cls">
.ErrorPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
}
</style>
