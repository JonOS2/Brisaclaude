<template>
  <label data-slot="label" :class="classes" v-bind="$attrs">
    <slot />
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ class: { type: String, default: '' } });
const classes = computed(() => ['flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
