<template>
  <li
    data-slot="breadcrumb-separator"
    role="presentation"
    aria-hidden="true"
    :class="classes"
    v-bind="$attrs">
    <slot>
      <ChevronRight class="size-3.5" />
    </slot>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ChevronRight } from 'lucide-vue-next';
const props = defineProps({ class: { type: String, default: '' } });
const classes = computed(() => ['[&>svg]:size-3.5', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
