<script setup lang="ts">
import { ref } from "vue";

import useOverflow from "../../hooks/useOverflow";

type Props = {
  src: string;
  alt?: string;
  height?: number | string;
  width?: number | string;
  fullscreen?: boolean;
}

const props = defineProps<Props>();

const loading = ref<boolean>(true);
const isFullscreenOpen = ref<boolean>(false);

const { isHiddenOverflow } = useOverflow(false);

const onLoad = () => {
  loading.value = false;
}

const onImageClick = () => {
  if (!props.fullscreen) return;
  isHiddenOverflow.value = !isHiddenOverflow.value;
  isFullscreenOpen.value = !isFullscreenOpen.value;
}
</script>

<template>
  <span v-if="loading">Loading...</span>
  <img
    :alt="alt"
    :src="src"
    :height="height"
    :width="width"
    @load="onLoad"
    @click.prevent="onImageClick"
  />
  <div v-show="isFullscreenOpen" class="fullscreen-image-container">
    <img
      class="fullscreen-image"
      :alt="alt"
      :src="src"
      @load="onLoad"
      @click="onImageClick"
    />
  </div>
</template>

<style scoped>
.fullscreen-image-container {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #fff0f4;
}
.fullscreen-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>