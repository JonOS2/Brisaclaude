<template>
  <div class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm">
    <div :class="['pt-0 pb-4', classes]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ class: { type: String, default: '' } });
const classes = props.class;
</script>

<style scoped>
</style>
