<template>
  <div data-slot="aspect-ratio" class="relative w-full" :style="styleObj" v-bind="$attrs">
    <div class="absolute inset-0">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  ratio: { type: Number, default: 16 / 9 }
});

const styleObj = computed(() => ({ paddingBottom: `${100 / (props.ratio || 1)}%` }));
</script>

<style scoped>
</style>
