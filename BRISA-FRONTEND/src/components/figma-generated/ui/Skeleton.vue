<template>
  <div data-slot="skeleton" :class="classes" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ class: { type: String, default: '' } });
const classes = computed(() => ['bg-accent animate-pulse rounded-md', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
