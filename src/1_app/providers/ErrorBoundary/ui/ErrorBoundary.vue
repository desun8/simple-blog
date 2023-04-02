<script setup lang="ts">
import { ErrorPage } from '3_widgets/ErrorPage';
import { ComponentPublicInstance, onErrorCaptured, ref } from 'vue';

const hasErr = ref(false);
const errMsg = ref('');

onErrorCaptured(
  (err: Error, instance: ComponentPublicInstance | null, info: string) => {
    console.error(
      'Error captured:',
      err,
      '\n\n',
      instance,
      '\n\n',
      'info: ',
      info
    );
    hasErr.value = true;
    errMsg.value = err.message || 'Unknown error';

    return false;
  }
);
</script>

<template>
  <div v-if="hasErr">
    <ErrorPage />
  </div>

  <slot v-else></slot>
</template>
