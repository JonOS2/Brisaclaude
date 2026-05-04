<template>
  <div data-slot="input-otp-slot" :data-active="active" :class="classes" v-bind="$attrs">
    {{ char }}
    <div v-if="active && !char" class="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div class="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ char: { type: String, default: '' }, active: { type: Boolean, default: false }, class: { type: String, default: '' } });
const classes = computed(() => ['relative flex h-9 w-9 items-center justify-center border-y border-r text-sm bg-input-background first:rounded-l-md first:border-l last:rounded-r-md', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
