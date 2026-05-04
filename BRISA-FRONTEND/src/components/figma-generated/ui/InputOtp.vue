<template>
  <div data-slot="input-otp" :class="containerClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ containerClass: { type: String, default: '' } });
const containerClasses = computed(() => ['flex items-center gap-2', props.containerClass].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
