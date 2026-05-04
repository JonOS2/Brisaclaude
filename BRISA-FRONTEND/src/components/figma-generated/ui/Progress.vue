<template>
  <div data-slot="progress" :class="classes" v-bind="$attrs">
    <div
      data-slot="progress-indicator"
      class="bg-primary h-full w-full flex-1 transition-all"
      :style="{ transform: `translateX(-${100 - safeValue}%)` }" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  value: { type: Number, default: 0 },
  class: { type: String, default: '' }
});

const safeValue = computed(() => Math.max(0, Math.min(100, props.value ?? 0)));
const classes = computed(() => ['bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
