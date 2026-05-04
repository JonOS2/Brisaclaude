<template>
  <div data-slot="tabs-list" role="tablist" :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ class: { type: String, default: '' } });
const classes = computed(() => ['bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
