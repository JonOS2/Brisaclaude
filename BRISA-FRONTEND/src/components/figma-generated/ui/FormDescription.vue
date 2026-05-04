<template>
  <p data-slot="form-description" :class="classes" v-bind="$attrs">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ class: { type: String, default: '' } });
const classes = computed(() => ['text-muted-foreground text-sm', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
