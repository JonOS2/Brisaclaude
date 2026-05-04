<template>
  <input data-slot="slider" type="range" :class="classes" v-model="localValue" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: Number, default: 0 },
  class: { type: String, default: '' }
});
const emit = defineEmits(['update:modelValue']);

const localValue = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', Number(v))
});

const classes = computed(() => ['w-full accent-primary', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
