<template>
  <div
    class="relative inline-block"
    @mouseenter="show"
    @mouseleave="hide"
    @focusin="show"
    @focusout="hide"
    @keydown.esc="hide">
    <slot />
    <div
      v-if="visible"
      role="tooltip"
      class="absolute z-50 rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground shadow-md -translate-y-2">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const visible = ref(false);
function show() { visible.value = true; }
function hide() { visible.value = false; }
</script>

<style scoped>
</style>
