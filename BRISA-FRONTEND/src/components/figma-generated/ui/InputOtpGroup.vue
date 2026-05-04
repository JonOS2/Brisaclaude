<template>
  <div data-slot="input-otp-group" :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ class: { type: String, default: '' } });
const classes = computed(() => ['flex items-center gap-1', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
