<script setup lang="ts">
import { useProfileStore } from '5_entities/Profile';
import AppButton from '6_shared/ui/AppButton/AppButton.vue';
import { AppButtonTheme } from '6_shared/ui/AppButton/types/AppButtonTheme';
import AppText from '6_shared/ui/AppText/AppText.vue';
import { storeToRefs } from 'pinia';

const store = useProfileStore();
const { readonly, errors } = storeToRefs(store);

const handleAllowEdit = () => {
  readonly.value = false;
};

const handleCancelEdit = () => {
  store.cancelChanges();
  readonly.value = true;
  errors.value = undefined;
};

const handleSaveEdit = async () => {
  await store.updateData();

  if (!errors) {
    readonly.value = true;
    console.log('Save change data');
  }
};
</script>

<template>
  <div :class="cls.ProfilePageHeader">
    <AppText :title="$t('profile.profile')" />

    <div :class="cls.btns">
      <AppButton
        :theme="readonly ? AppButtonTheme.OUTLINE : AppButtonTheme.OUTLINE_RED"
        @click="() => (readonly ? handleAllowEdit() : handleCancelEdit())"
        >{{
          readonly ? $t('profile.redaktirovat') : $t('profile.otmenit')
        }}</AppButton
      >
      <AppButton
        v-show="!readonly"
        :theme="AppButtonTheme.OUTLINE"
        @click="handleSaveEdit"
        >{{ $t('profile.sokhranit') }}</AppButton
      >
    </div>
  </div>
</template>

<style module="cls">
.ProfilePageHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
}

.btns {
  display: flex;
  gap: 16px;
}
</style>
