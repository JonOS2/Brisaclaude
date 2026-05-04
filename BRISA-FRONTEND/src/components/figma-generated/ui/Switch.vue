<template>
  <Switch
    :model-value="modelValue"
    @update:model-value="(v:boolean) => emit('update:modelValue', v)"
    data-slot="switch"
    :class="switchClasses">
    <span data-slot="switch-thumb" :class="thumbClasses" />
  </Switch>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Switch } from '@headlessui/vue';

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  class: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue']);

const switchClasses = computed(() => [
  'peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50',
  props.modelValue ? 'bg-primary' : 'bg-switch-background dark:bg-input/80',
  props.class
].filter(Boolean).join(' '));

const thumbClasses = computed(() => [
  'bg-card pointer-events-none block size-4 rounded-full ring-0 transition-transform',
  props.modelValue ? 'translate-x-[calc(100%-2px)]' : 'translate-x-0'
].join(' '));
</script>

<style scoped>
</style>
