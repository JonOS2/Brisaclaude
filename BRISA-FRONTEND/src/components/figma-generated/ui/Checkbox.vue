<template>
  <label class="inline-flex items-center">
    <input
      type="checkbox"
      class="sr-only"
      :checked="modelValue"
      @change="onChange"
      v-bind="$attrs" />
    <span
      data-slot="checkbox"
      :aria-checked="modelValue"
      :class="classes">
      <span data-slot="checkbox-indicator" class="flex items-center justify-center text-current transition-none">
        <CheckIcon v-if="modelValue" class="size-3.5" />
      </span>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CheckIcon } from 'lucide-vue-next';

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  class: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue']);

function onChange(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
}

const classes = computed(() => [
  'peer border bg-input-background dark:bg-input/30 size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none disabled:cursor-not-allowed disabled:opacity-50',
  props.modelValue ? 'bg-primary text-primary-foreground border-primary' : '',
  props.class
].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
