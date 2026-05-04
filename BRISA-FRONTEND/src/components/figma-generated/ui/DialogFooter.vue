<template>
  <div :class="['flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', classes]">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ class: { type: String, default: '' } });
const classes = props.class;
</script>

<style scoped>
</style>
