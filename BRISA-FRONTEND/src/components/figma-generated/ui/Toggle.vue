<template>
  <button
    type="button"
    data-slot="toggle"
    :aria-pressed="modelValue"
    :class="classes"
    @click="emit('update:modelValue', !modelValue)"
    v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  class: { type: String, default: '' }
});
const emit = defineEmits(['update:modelValue']);

const classes = computed(() => [
  'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm transition-colors',
  props.modelValue ? 'bg-accent text-accent-foreground' : 'bg-background',
  props.class
].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
