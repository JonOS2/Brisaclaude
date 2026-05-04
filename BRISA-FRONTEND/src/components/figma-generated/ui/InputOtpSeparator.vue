<template>
  <div data-slot="input-otp-separator" role="separator" class="flex items-center" v-bind="$attrs">
    <MinusIcon class="size-4" />
  </div>
</template>

<script setup lang="ts">
import { MinusIcon } from 'lucide-vue-next';
</script>

<style scoped>
</style>
