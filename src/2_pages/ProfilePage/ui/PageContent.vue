<script setup lang="ts">
import { ProfileCard, useProfileStore } from '5_entities/Profile';
import { storeToRefs } from 'pinia';
import { Ref, computed, defineAsyncComponent, onUnmounted } from 'vue';
import ProfilePageHeader from './ProfilePageHeader.vue';
import { AppTextTheme } from '6_shared/ui/AppText/types/AppTextTheme';
import { ValidateProfileError } from '5_entities/Profile/model/types';
import { useI18n } from 'vue-i18n';

const AppText = defineAsyncComponent(
  () => import('6_shared/ui/AppText/AppText.vue')
);

const { t } = useI18n();

const store = useProfileStore();
const { data, isLoading, errors, readonly } = storeToRefs(store);

if (!import.meta.env.STORYBOOK) {
  await store.fetchData();
}

const hasError = computed(() => errors.value !== undefined);

const translates: Record<ValidateProfileError, Ref<string>> = {
  [ValidateProfileError.INCORRECT_USER_DATA]: computed(() =>
    t('profile.imya_i_familiya_obyazatelny')
  ),
  [ValidateProfileError.INCORRECT_AGE]: computed(() =>
    t('profile.nekorrektnyi_vozrast')
  ),
  [ValidateProfileError.SERVER_ERROR]: computed(() =>
    t('profile.servernaya_oshibka_pri_sokhranenii')
  ),
  [ValidateProfileError.NO_DATA]: computed(() =>
    t('profile.dannye_ne_ukazany')
  ),
};

onUnmounted(() => {
  store.$destroy();
});
</script>

<template>
  <div>
    <ProfilePageHeader />
    <template v-if="errors">
      <!-- <Suspense> -->
      <AppText
        v-for="error in errors"
        :key="error"
        :theme="AppTextTheme.ERROR"
        :text="translates[error].value"
      />
      <!-- </Suspense> -->
    </template>

    <ProfileCard
      v-model:data="data"
      :is-loading="isLoading"
      :has-error="hasError"
      :is-readonly="readonly"
    />
  </div>
</template>
