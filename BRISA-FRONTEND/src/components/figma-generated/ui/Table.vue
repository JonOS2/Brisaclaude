<template>
  <div data-slot="table-container" class="relative w-full overflow-x-auto">
    <table data-slot="table" :class="['w-full caption-bottom text-sm', classes]">
      <slot />
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ class: { type: String, default: '' } });
const classes = props.class;
</script>

<style scoped>
</style>
