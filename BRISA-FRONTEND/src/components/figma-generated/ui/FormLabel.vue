<template>
  <label data-slot="form-label" :for="forId" :class="classes" v-bind="$attrs">
    <slot />
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ forId: { type: String, default: '' }, error: { type: Boolean, default: false }, class: { type: String, default: '' } });
const classes = computed(() => ['data-[error=true]:text-destructive', props.error ? 'text-destructive' : '', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
