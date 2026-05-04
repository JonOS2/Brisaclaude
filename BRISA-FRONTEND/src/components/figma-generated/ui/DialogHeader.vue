<template>
  <div :class="['flex flex-col gap-2 text-center sm:text-left', classes]">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ class: { type: String, default: '' } });
const classes = props.class;
</script>

<style scoped>
</style>
