<template>
  <div data-slot="form-item" :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ class: { type: String, default: '' } });
const classes = computed(() => ['grid gap-2', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
