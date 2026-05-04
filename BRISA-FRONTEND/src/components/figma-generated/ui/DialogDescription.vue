<template>
  <p :class="['text-muted-foreground text-sm', classes]">
    <slot />
  </p>
</template>

<script setup lang="ts">
const props = defineProps({ class: { type: String, default: '' } });
const classes = props.class;
</script>

<style scoped>
</style>
