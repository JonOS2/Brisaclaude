<template>
  <div :class="['bg-muted flex size-full items-center justify-center rounded-full', classes]">
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
