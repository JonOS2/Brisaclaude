<template>
  <div
    data-slot="separator-root"
    :data-orientation="orientation"
    :class="classes"
    v-bind="$attrs" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  orientation: { type: String, default: 'horizontal' },
  class: { type: String, default: '' }
});

const classes = computed(() => [
  'bg-border shrink-0',
  props.orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
  props.class
].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
