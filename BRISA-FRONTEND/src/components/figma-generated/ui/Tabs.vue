<template>
  <div data-slot="tabs" :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue';

const props = defineProps({
  modelValue: { type: String, default: '' },
  class: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue']);
const activeValue = ref(props.modelValue);
const tabOrder = ref<string[]>([]);

watch(() => props.modelValue, (v) => {
  activeValue.value = v;
});

watch(activeValue, (v) => {
  emit('update:modelValue', v);
});

function registerTab(value: string) {
  if (!tabOrder.value.includes(value)) tabOrder.value.push(value);
  if (!activeValue.value) activeValue.value = value;
}

function setActive(value: string) {
  activeValue.value = value;
}

function moveTab(current: string, direction: 'next' | 'prev' | 'first' | 'last') {
  if (!tabOrder.value.length) return;
  const index = tabOrder.value.indexOf(current);
  if (direction === 'first') return setActive(tabOrder.value[0]);
  if (direction === 'last') return setActive(tabOrder.value[tabOrder.value.length - 1]);
  if (index === -1) return;
  const nextIndex = direction === 'next'
    ? (index + 1) % tabOrder.value.length
    : (index - 1 + tabOrder.value.length) % tabOrder.value.length;
  setActive(tabOrder.value[nextIndex]);
}

provide('tabsCtx', { activeValue, registerTab, setActive, moveTab });

const classes = computed(() => ['flex flex-col gap-2', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
