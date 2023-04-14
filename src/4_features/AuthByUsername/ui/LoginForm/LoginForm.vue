<script setup lang="ts">
import AppButton from '6_shared/ui/AppButton/AppButton.vue';
import AppInput from '6_shared/ui/AppInput/AppInput.vue';
import { useLoginStore } from '../../model/useLoginStore';
import { storeToRefs } from 'pinia';
import AppText from '6_shared/ui/AppText/AppText.vue';
import { AppTextTheme } from '6_shared/ui/AppText/types/AppTextTheme';

const store = useLoginStore();
const { username, password, isLoading, errorMsg } = storeToRefs(store);

const handleSubmit = async () => {
  await store.loginByUsername();
};
</script>

<template>
  <form :class="cls.LoginForm" @submit.prevent="handleSubmit">
    <AppText :title="$t('common.forma_avtorizacii')" />
    <AppText
      v-if="errorMsg"
      :text="$t('common.ne_vernyi_login_ili_parol')"
      :theme="AppTextTheme.ERROR"
    />

    <AppInput
      v-model="username"
      name="username"
      :label="$t('common.vvedite_login')"
      placeholder=""
    />
    <AppInput
      v-model="password"
      type="password"
      name="password"
      :label="$t('common.vvedite_parol')"
      placeholder=""
    />
    <AppButton
      :class="cls['submit-button']"
      type="submit"
      :disabled="isLoading"
      >{{ $t('common.voiti') }}</AppButton
    >
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
