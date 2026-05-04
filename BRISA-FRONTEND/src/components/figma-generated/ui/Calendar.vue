<template>
  <div data-slot="calendar" class="rounded-md border p-3" v-bind="$attrs">
    <slot>
      <input type="date" class="w-full rounded-md border px-3 py-2" />
    </slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
