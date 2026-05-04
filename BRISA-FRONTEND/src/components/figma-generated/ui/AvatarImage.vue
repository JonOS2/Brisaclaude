<template>
  <img v-bind="$attrs" :class="['aspect-square size-full', classes]" />
</template>

<script setup lang="ts">
const props = defineProps({
  class: { type: String, default: '' },
});

const classes = props.class;
</script>

<style scoped>
</style>
