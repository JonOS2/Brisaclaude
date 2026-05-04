<template>
  <nav data-slot="pagination" aria-label="pagination" class="mx-auto flex w-full justify-center" v-bind="$attrs">
    <ul class="flex flex-row items-center gap-1">
      <slot />
    </ul>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
