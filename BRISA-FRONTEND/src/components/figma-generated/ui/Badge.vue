<template>
  <component :is="asChild ? 'span' : 'span'" data-slot="badge" :class="classes" v-bind="$attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  variant: { type: String, default: 'default' },
  asChild: { type: Boolean, default: false },
  class: { type: String, default: '' }
});

const classes = computed(() => {
  const base = 'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden';
  const variantMap: Record<string, string> = {
    default: 'border-transparent bg-primary text-primary-foreground',
    secondary: 'border-transparent bg-secondary text-secondary-foreground',
    destructive: 'border-transparent bg-destructive text-white',
    outline: 'text-foreground'
  };
  return [base, variantMap[props.variant] || variantMap.default, props.class].filter(Boolean).join(' ');
});
</script>

<style scoped>
</style>
