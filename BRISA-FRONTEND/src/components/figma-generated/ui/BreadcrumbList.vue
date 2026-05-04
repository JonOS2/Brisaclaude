<template>
  <ol data-slot="breadcrumb-list" :class="classes" v-bind="$attrs">
    <slot />
  </ol>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ class: { type: String, default: '' } });
const classes = computed(() => ['text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
