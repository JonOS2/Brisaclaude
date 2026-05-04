<template>
  <teleport to="body">
    <div v-if="open" class="fixed inset-0 z-50">
      <div class="absolute inset-0 bg-black/50" @click="$emit('close')"></div>
      <div class="absolute right-0 top-0 h-full w-full max-w-md bg-background border-l p-4 shadow-lg">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
defineProps({ open: { type: Boolean, default: false } });
defineEmits(['close']);
</script>

<style scoped>
</style>
