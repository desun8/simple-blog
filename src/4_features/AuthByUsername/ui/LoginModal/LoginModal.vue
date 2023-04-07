<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import AppModal from '6_shared/ui/AppModal/AppModal.vue';
import LoaderSpinner from '6_shared/ui/LoaderSpinner/LoaderSpinner.vue';

const LoginForm = defineAsyncComponent(
  () => import('../LoginForm/LoginForm.vue')
);

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

defineProps<LoginModalProps>();
</script>

<template>
  <AppModal :is-open="isOpen" :on-close="onClose" lazy>
    <Suspense>
      <LoginForm />
      <template #fallback><LoaderSpinner /></template>
    </Suspense>
  </AppModal>
</template>
