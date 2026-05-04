<template>
  <RadioGroup :model-value="modelValue" @update:model-value="(v:string) => emit('update:modelValue', v)">
    <div data-slot="radio-group" :class="classes" role="radiogroup" v-bind="$attrs">
      <slot />
    </div>
  </RadioGroup>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RadioGroup } from '@headlessui/vue';

const props = defineProps({
  modelValue: { type: String, default: '' },
  class: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue']);
const classes = computed(() => ['grid gap-3', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
