<template>
  <li data-slot="breadcrumb-item" :class="classes" v-bind="$attrs">
    <slot />
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ class: { type: String, default: '' } });
const classes = computed(() => ['inline-flex items-center gap-1.5', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
