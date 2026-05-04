<template>
  <header class="flex">
    <button :class="classes" v-on="$attrs">
      <slot />
      <ChevronDownIcon class="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
    </button>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ChevronDownIcon } from 'lucide-vue-next';

const props = defineProps({ class: { type: String, default: '' } });

const classes = computed(() => {
  const base = "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50";
  return [base, props.class].filter(Boolean).join(' ');
});
</script>

<style scoped>
</style>
