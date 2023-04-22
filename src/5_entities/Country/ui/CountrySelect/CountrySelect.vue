<script setup lang="ts">
import AppSelect from '6_shared/ui/AppSelect/AppSelect.vue';
import { Country } from '../../model/types/country';
import { computed, toRefs } from 'vue';

interface CurrencySelectProps {
  modelValue: string | number;
  readonly?: boolean;
}

const props = withDefaults(defineProps<CurrencySelectProps>(), {});
const { modelValue } = toRefs(props);
const emit = defineEmits(['update:modelValue']);

const options = [
  { value: Country.Armenia, label: Country.Armenia },
  { value: Country.Russia, label: Country.Russia },
  { value: Country.Belarus, label: Country.Belarus },
  { value: Country.Kazakhstan, label: Country.Kazakhstan },
  { value: Country.Ukraine, label: Country.Ukraine },
];

const value = computed({
  get() {
    return modelValue.value;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <AppSelect
    v-model="value"
    name="currency"
    :label="$t('common.ukazhite_stranu')"
    :options="options"
    :disabled="readonly"
  />
</template>
