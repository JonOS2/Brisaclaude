<template>
  <h3 :class="['text-lg leading-none font-semibold', classes]">
    <slot />
  </h3>
</template>

<script setup lang="ts">
const props = defineProps({ class: { type: String, default: '' } });
const classes = props.class;
</script>

<style scoped>
</style>
