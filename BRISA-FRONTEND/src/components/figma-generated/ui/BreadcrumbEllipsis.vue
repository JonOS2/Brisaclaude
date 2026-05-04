<template>
  <span
    data-slot="breadcrumb-ellipsis"
    role="presentation"
    aria-hidden="true"
    :class="classes"
    v-bind="$attrs">
    <MoreHorizontal class="size-4" />
    <span class="sr-only">More</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { MoreHorizontal } from 'lucide-vue-next';
const props = defineProps({ class: { type: String, default: '' } });
const classes = computed(() => ['flex size-9 items-center justify-center', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
