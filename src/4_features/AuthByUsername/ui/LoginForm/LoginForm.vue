<script setup lang="ts">
import AppButton from '6_shared/ui/AppButton/AppButton.vue';
import AppInput from '6_shared/ui/AppInput/AppInput.vue';
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const handleSubmit = () => {};
</script>

<template>
  <form :class="cls.LoginForm" @submit.prevent="handleSubmit">
    <AppInput
      v-model="username"
      name="username"
      :label="$t('common.vvedite_login')"
      placeholder=""
    />
    <AppInput
      v-model="password"
      name="password"
      :label="$t('common.vvedite_parol')"
      placeholder=""
    />
    <AppButton :class="cls['submit-button']" type="submit">{{
      $t('common.voiti')
    }}</AppButton>
  </form>
</template>

<style module="cls">
.LoginForm {
  display: grid;
  gap: 10px;

  width: 400px;
}

.submit-button {
  justify-self: end;
}
</style>
