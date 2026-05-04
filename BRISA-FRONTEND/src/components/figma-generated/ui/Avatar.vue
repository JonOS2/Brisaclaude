<template>
  <div :class="['relative flex size-10 shrink-0 overflow-hidden rounded-full', classes]">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  class: { type: String, default: '' },
});

const classes = props.class;
</script>

<style scoped>
</style>
