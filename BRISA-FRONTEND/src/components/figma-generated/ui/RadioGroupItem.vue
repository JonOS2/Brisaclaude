<template>
  <RadioGroupOption :value="value" as="template" v-slot="{ checked, active, disabled }">
    <button
      type="button"
      data-slot="radio-group-item"
      :disabled="disabled"
      :class="classes(checked, active)"
      v-bind="$attrs">
      <span v-if="checked" data-slot="radio-group-indicator" class="relative flex items-center justify-center">
        <span class="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
      </span>
    </button>
  </RadioGroupOption>
</template>

<script setup lang="ts">
import { RadioGroupOption } from '@headlessui/vue';

const props = defineProps({ value: { type: String, required: true }, class: { type: String, default: '' } });

const classes = (checked: boolean, active: boolean) => [
  'border-input text-primary aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50',
  checked ? 'border-primary' : '',
  active ? 'ring-2 ring-ring/50' : '',
  props.class
].filter(Boolean).join(' ');
</script>

<style scoped>
</style>
