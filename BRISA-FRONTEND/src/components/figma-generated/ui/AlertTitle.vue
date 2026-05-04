<template>
  <div data-slot="alert-title" :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ class: { type: String, default: '' } });
const classes = computed(() => ['col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
