<script setup lang="ts">
import { CSSProperties, toRefs } from 'vue';

interface UserAvatarProps {
  src: string;
  alt?: string;
  size?: number;
}

const props = withDefaults(defineProps<UserAvatarProps>(), {
  alt: '',
  size: 100,
});

const styles: CSSProperties = {
  width: `${props.size}px`,
  height: `${props.size}px`,
};
</script>

<template>
  <img
    :class="cls.UserAvatar"
    :src="src"
    :alt="alt"
    :width="size"
    :height="size"
    :style="styles"
  />
</template>

<style module="cls">
.UserAvatar {
  object-fit: cover;
  object-position: center;

  border-radius: 50%;
}
</style>
