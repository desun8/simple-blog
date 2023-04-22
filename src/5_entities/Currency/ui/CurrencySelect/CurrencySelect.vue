<script setup lang="ts">
import AppSelect from '6_shared/ui/AppSelect/AppSelect.vue';
import { Currency } from '../../model/types/currency';
import { computed, toRefs } from 'vue';

interface CurrencySelectProps {
  modelValue: string | number;
  readonly?: boolean;
}

const props = withDefaults(defineProps<CurrencySelectProps>(), {});
const { modelValue } = toRefs(props);
const emit = defineEmits(['update:modelValue']);

const options = [
  { value: Currency.RUB, label: Currency.RUB },
  { value: Currency.EUR, label: Currency.EUR },
  { value: Currency.USD, label: Currency.USD },
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
    :label="$t('common.ukazhite_valyutu')"
    :options="options"
    :disabled="readonly"
  />
</template>
