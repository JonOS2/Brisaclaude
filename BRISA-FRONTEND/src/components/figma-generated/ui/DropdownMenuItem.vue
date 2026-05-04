<template>
  <MenuItem v-slot="{ active, disabled }" as="template">
    <button
      data-slot="dropdown-menu-item"
      type="button"
      :disabled="disabled || $attrs.disabled"
      :class="classes(active)"
      v-bind="$attrs">
      <slot />
    </button>
  </MenuItem>
</template>

<script setup lang="ts">
import { MenuItem } from '@headlessui/vue';
const props = defineProps({
  inset: { type: Boolean, default: false },
  variant: { type: String, default: 'default' },
  class: { type: String, default: '' }
});
const classes = (active: boolean) => [
  'relative flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none disabled:pointer-events-none disabled:opacity-50',
  active ? 'bg-accent text-accent-foreground' : '',
  props.inset ? 'pl-8' : '',
  props.variant === 'destructive' ? 'text-destructive' : '',
  props.class
].filter(Boolean).join(' ');
</script>

<style scoped>
</style>
