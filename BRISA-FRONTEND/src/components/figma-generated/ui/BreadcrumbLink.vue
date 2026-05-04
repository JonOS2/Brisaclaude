<template>
  <a data-slot="breadcrumb-link" :class="classes" v-bind="$attrs">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ class: { type: String, default: '' } });
const classes = computed(() => ['hover:text-foreground transition-colors', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
