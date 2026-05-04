<template>
  <form data-slot="form" @submit.prevent="$emit('submit', $event)" v-bind="$attrs">
    <slot />
  </form>
</template>

<script setup lang="ts">
defineEmits(['submit']);
</script>

<style scoped>
</style>
