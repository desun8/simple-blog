<script setup lang="ts">
import { Profile } from '5_entities/Profile/model/types';
import AppInput from '6_shared/ui/AppInput/AppInput.vue';
import { useInputValue } from './utils/useInputValue';
import { computed, defineAsyncComponent, toRefs } from 'vue';
import { CurrencySelect } from '5_entities/Currency';
import { CountrySelect } from '5_entities/Country';
import { AppTextTheme } from '6_shared/ui/AppText/types/AppTextTheme';
import { AppTextAlign } from '6_shared/ui/AppText/types/AppTextAlign';

const AppText = defineAsyncComponent(
  () => import('6_shared/ui/AppText/AppText.vue')
);
const UserAvatar = defineAsyncComponent(
  () => import('6_shared/ui/UserAvatar/UserAvatar.vue')
);

interface ProfileCardProps {
  data: Profile | undefined;
  hasError: boolean;
  isReadonly: boolean;
}
const emits = defineEmits(['update:data']);
const props = defineProps<ProfileCardProps>();
const { data } = toRefs(props);

const updateData = (key: keyof Profile, value: Profile[keyof Profile]) => {
  emits('update:data', { ...props.data, [key]: value });
};

const firstname = useInputValue(data, 'firstname', updateData);
const lastname = useInputValue(data, 'lastname', updateData);
const age = useInputValue(data, 'age', updateData);
const city = useInputValue(data, 'city', updateData);
const country = useInputValue(data, 'country', updateData);
const currency = useInputValue(data, 'currency', updateData);
const username = useInputValue(data, 'username', updateData);
const avatar = useInputValue(data, 'avatar', updateData);

const fullname = computed(() => `${firstname} ${lastname}`);
</script>

<template>
  <div :class="[cls.ProfileCard, { [cls.editing]: !isReadonly }]">
    <div v-if="hasError" :class="cls.error">
      <AppText
        :theme="AppTextTheme.ERROR"
        :title="$t('profile.proizoshla_oshibka_pri_zagruzke_profilya')"
        :text="$t('profile.poprobuite_obnovit_stranicu')"
        :align="AppTextAlign.CENTER"
      />
    </div>

    <template v-else-if="data">
      <div v-if="data.avatar" :class="cls.avatarWrapper">
        <UserAvatar :src="data.avatar" :alt="fullname" />
      </div>
      <div :class="cls['input-list']">
        <AppInput
          v-model="firstname"
          name="firstname"
          :label="$t('profile.vashe_imya')"
          :placeholder="$t('profile.vvedite_imya')"
          :readonly="isReadonly"
        />
        <AppInput
          v-model="lastname"
          name="lastname"
          :label="$t('profile.vasha_familiya')"
          :placeholder="$t('profile.vvedite_familiyu')"
          :readonly="isReadonly"
        />
        <AppInput
          v-model="age"
          name="age"
          type="number"
          :label="$t('profile.vash_vozrast')"
          :placeholder="$t('profile.vvedite_vozrast')"
          :readonly="isReadonly"
        />
        <AppInput
          v-model="city"
          name="city"
          :label="$t('profile.vash_gorod')"
          :placeholder="$t('profile.vvedite_gorod')"
          :readonly="isReadonly"
        />
        <CountrySelect v-model="country" :readonly="isReadonly" />
        <CurrencySelect v-model="currency" :readonly="isReadonly" />
        <AppInput
          v-model="username"
          name="username"
          :label="$t('profile.vashe_imya_polzovatelya')"
          :placeholder="$t('profile.vvedite_imya_polzovatelya')"
          :readonly="isReadonly"
        />
        <AppInput
          v-model="avatar"
          name="avatar"
          :label="$t('profile.avatar')"
          :placeholder="$t('profile.vvedite_ssylku_na_avatar')"
          :readonly="isReadonly"
        />
      </div>
    </template>
  </div>
</template>

<style module="cls">
.ProfileCard {
  padding: 20px;
  border: 2px solid var(--inverted-bg-color);
}

.ProfileCard.editing {
  border-color: var(--inverted-primary-color);
}

.input-list {
  display: grid;
  gap: 10px;
}

.error {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 300px;
}

.avatarWrapper {
  display: flex;
  justify-content: center;

  width: 100%;
  margin-bottom: 20px;
}
</style>
