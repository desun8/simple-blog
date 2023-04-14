<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { InputHTMLAttributes, computed, toRefs, useAttrs } from 'vue';

interface AppInputProps extends InputHTMLAttributes {
  modelValue: string | number;
  label?: string;
  type?: 'text' | 'number' | 'password';
  placeholder: string;
  name: string;
}

defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<AppInputProps>(), {
  type: 'text',
});
const { modelValue, type, name, placeholder } = toRefs(props);

const attrs = useAttrs();
const inputAttrs = computed(() => {
  const inputAttrs = { ...attrs };
  delete inputAttrs.class;
  return inputAttrs;
});

const labelFor = computed(() =>
  inputAttrs.value.id ? `${inputAttrs.value.id}` : undefined
);
</script>

<template>
  <label :for="labelFor" :class="[cls.AppInput, $attrs.class]">
    <span v-if="label" :class="cls.label">{{ label }}</span>
    <input
      :class="cls.input"
      v-bind="inputAttrs"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </label>
</template>

<style module="cls">
.AppInput {
  display: flex;
}

.label {
  flex-shrink: 0;

  margin-right: 5px;
}

.label::after {
  content: ':';
}

.input {
  width: 100%;
  border: none;

  background: transparent;
  color: var(--primary-color);
  outline: none;

  text-shadow: 0 0 0 var(--primary-color);
}
.input:focus {
  outline: none;
}
</style>
