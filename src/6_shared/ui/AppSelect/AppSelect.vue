<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { SelectHTMLAttributes, computed, toRefs, useAttrs } from 'vue';

interface AppSelectProps extends SelectHTMLAttributes {
  modelValue: string | number;
  label?: string;
  placeholder?: string;
  name: string;
  id?: string;
  options: { value: string | number; label: string }[];
}

defineProps<AppSelectProps>();
defineEmits(['update:modelValue']);

const attrs = useAttrs();
const selectAttrs = computed(() => {
  const selectAttrs = { ...attrs };
  delete selectAttrs.class;
  return selectAttrs;
});
</script>

<template>
  <div :id="id" :class="[cls.AppSelect, $attrs.class]">
    <span v-if="label" :class="cls.label">{{ label }}</span>
    <select
      v-bind="selectAttrs"
      :class="cls.select"
      :value="modelValue"
      :name="name"
      @change="
        $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
    >
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option
        v-for="item in options"
        :key="item.value"
        :class="cls.option"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<style module="cls">
.AppSelect {
  display: flex;
}

.label {
  margin-right: 5px;
}

.label::after {
  content: ':';
}

.select {
  padding: 2px 10px 2px 2px;
  border: 1px solid var(--primary-color);

  background: none;
  color: var(--primary-color);
  outline: none;
}

.select:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.option {
  color: var(--inverted-primary-color);
  background: var(--inverted-bg-color);
}
</style>
