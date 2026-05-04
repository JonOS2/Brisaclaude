<template>
  <div data-slot="accordion-item" :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ class: { type: String, default: '' } });
const classes = computed(() => ['border-b last:border-b-0', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
