<script setup lang="ts">
import {
  loadLocaleMessages,
  setI18nLanguage,
  SupportLocales,
} from '6_shared/config/i18n/i18n';
import AppButton from '6_shared/ui/AppButton/AppButton.vue';
import { AppButtonTheme } from '6_shared/ui/AppButton/types/AppButtonTheme';
import { $defineProps } from '@vue-macros/define-props/macros';
import { useI18n } from 'vue-i18n';

type LangSwitcherProps = {
  short?: boolean;
};
const props = withDefaults($defineProps<LangSwitcherProps>(), {
  short: false,
});

const { locale } = useI18n();

const handleToggleLang = async () => {
  const newLocale =
    locale.value === SupportLocales.RU ? SupportLocales.EN : SupportLocales.RU;

  await loadLocaleMessages(newLocale);
  setI18nLanguage(newLocale);
};
</script>

<template>
  <AppButton :theme="AppButtonTheme.CLEAR" @click="handleToggleLang">
    {{ short ? $t('common.yazyk_korotkii') : $t('common.yazyk') }}
  </AppButton>
</template>
