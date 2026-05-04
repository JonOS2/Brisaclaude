<template>
  <div data-slot="alert" role="alert" :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  variant: { type: String, default: 'default' },
  class: { type: String, default: '' }
});

const classes = computed(() => {
  const base = 'relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current';
  const variantMap: Record<string, string> = {
    default: 'bg-card text-card-foreground',
    destructive: 'text-destructive bg-card [&>svg]:text-current'
  };
  return [base, variantMap[props.variant] || variantMap.default, props.class].filter(Boolean).join(' ');
});
</script>

<style scoped>
</style>
