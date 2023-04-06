<script setup lang="ts">
import { useTheme } from '1_app/providers/theme';
import { computed, onBeforeUnmount, onMounted, ref, toRefs, watch } from 'vue';

interface AppModalProps {
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
  disabledTeleport?: boolean;
}

const ANIMATION_DELAY = 300;

const props = withDefaults(defineProps<AppModalProps>(), {});
const { isOpen, onClose, lazy, disabledTeleport } = toRefs(props);

const { theme } = useTheme();
const isVisible = ref(isOpen.value);
const isClosing = ref(false);
const isMounted = ref(false);
const closeTimerId = ref<ReturnType<typeof setTimeout>>();
const visibleTimerId = ref<ReturnType<typeof setTimeout>>();

const shouldMount = computed(() => {
  if (lazy.value && !isMounted.value) {
    return false;
  }

  return true;
});

const handleClose = () => {
  if (onClose?.value) {
    isClosing.value = true;
    closeTimerId.value = setTimeout(() => {
      onClose.value!();
      isClosing.value = false;
    }, ANIMATION_DELAY);
  }
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    handleClose();
  }
};

watch(isOpen, () => {
  if (isOpen.value) {
    if (lazy.value && !isMounted.value) {
      visibleTimerId.value = setTimeout(() => {
        isVisible.value = true;
      }, 0);
    } else {
      isVisible.value = true;
    }

    isMounted.value = true;
    window.addEventListener('keydown', handleKeyDown);
  } else {
    isVisible.value = false;
    clearTimeout(closeTimerId.value);
    window.removeEventListener('keydown', handleKeyDown);
  }
});

onBeforeUnmount(() => {
  if (visibleTimerId.value) {
    clearTimeout(visibleTimerId.value);
  }

  if (closeTimerId.value) {
    clearTimeout(closeTimerId.value);
    window.removeEventListener('keydown', handleKeyDown);
  }
});
</script>

<template>
  <Teleport v-if="shouldMount" to="body" :disabled="disabledTeleport">
    <div
      :class="[
        cls.AppModal,
        theme,
        { [cls['is-open']]: isVisible },
        { [cls['is-closing']]: isClosing },
      ]"
    >
      <div :class="cls.overlay" @click.self="handleClose">
        <div :class="cls.content">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style module="cls">
.AppModal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--modal-z-index);
}

.AppModal:not(.is-open) {
  z-index: -10;

  opacity: 0;
  pointer-events: none;
}

.overlay {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: var(--overlay-bg);
}

.content {
  max-width: 60%;
  padding: 20px;
  border-radius: 12px;

  color: var(--primary-color);
  background-color: var(--bg-color);

  transition: transform 0.3s;
  transform: scale(0.5);
}

.is-open .content {
  transform: scale(1);
}

.is-closing .content {
  transform: scale(0.2);
}
</style>
