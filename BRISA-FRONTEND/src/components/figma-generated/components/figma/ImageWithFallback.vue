<template>
  <img
    :src="currentSrc"
    :alt="alt"
    @error="handleError"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  src: { type: String, default: '' },
  fallbackSrc: { type: String, default: '' },
  alt: { type: String, default: '' }
});

const currentSrc = ref(props.src);

watch(() => props.src, (value) => {
  currentSrc.value = value;
});

function handleError() {
  if (props.fallbackSrc) {
    currentSrc.value = props.fallbackSrc;
  }
}
</script>

<style scoped>
</style>
