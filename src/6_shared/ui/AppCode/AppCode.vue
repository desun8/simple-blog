<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '6_shared/ui/AppButton/AppButton.vue';
import { AppButtonTheme } from '6_shared/ui/AppButton/types/AppButtonTheme';
import IconCopy from './copy.svg?component';

const codeElm = ref<HTMLElement | null>(null);

function handleCopy() {
  if (!codeElm.value) return;
  navigator.clipboard.writeText(codeElm.value.innerText);
}
</script>

<template>
  <div :class="cls.AppCode">
    <pre :class="cls.pre">
    <AppButton
      :class="cls.copyButton"
      :theme="AppButtonTheme.CLEAR"
      @click="handleCopy"
      >
      <span class="sr-only">{{ $t('article.kopirovat') }}</span>
      <IconCopy :class="cls.copyIcon" />
    </AppButton>
    <code ref="codeElm">
      <slot></slot>
    </code>
  </pre>
  </div>
</template>

<style module="cls">
.AppCode {
  position: relative;
  overflow: auto;
}

.pre {
  overflow: auto;

  margin: 0;

  padding: 20px;
  border: 1px solid var(--primary-color);

  background-color: var(--code-bg);
}

.copyButton {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
}

.copyIcon {
  stroke: var(--primary-color);
}
</style>
