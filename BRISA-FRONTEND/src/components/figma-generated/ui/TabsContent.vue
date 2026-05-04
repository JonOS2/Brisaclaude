<template>
  <div v-show="visible" data-slot="tabs-content" :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue';

const props = defineProps({
  value: { type: String, required: true },
  activeValue: { type: String, default: '' },
  class: { type: String, default: '' }
});

const tabsCtx = inject<{ activeValue: Ref<string> } | null>('tabsCtx', null);
const visible = computed(() => tabsCtx ? tabsCtx.activeValue.value === props.value : props.value === props.activeValue);
const classes = computed(() => ['flex-1 outline-none', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
