<template>
  <button
    data-slot="tabs-trigger"
    role="tab"
    :aria-selected="active"
    :tabindex="active ? 0 : -1"
    :class="classes"
    @click="onClick"
    @keydown="onKeydown"
    v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, type Ref } from 'vue';

const props = defineProps({
  value: { type: String, required: true },
  activeValue: { type: String, default: '' },
  class: { type: String, default: '' }
});

const emit = defineEmits(['select']);

type TabsCtx = {
  activeValue: Ref<string>;
  registerTab: (value: string) => void;
  setActive: (value: string) => void;
  moveTab: (current: string, direction: 'next' | 'prev' | 'first' | 'last') => void;
};

const tabsCtx = inject<TabsCtx | null>('tabsCtx', null);

onMounted(() => {
  tabsCtx?.registerTab(props.value);
});

const active = computed(() => tabsCtx ? tabsCtx.activeValue.value === props.value : props.value === props.activeValue);

function onClick() {
  tabsCtx?.setActive(props.value);
  emit('select', props.value);
}

function onKeydown(event: KeyboardEvent) {
  if (!tabsCtx) return;
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    tabsCtx.moveTab(props.value, 'next');
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    tabsCtx.moveTab(props.value, 'prev');
  }
  if (event.key === 'Home') {
    event.preventDefault();
    tabsCtx.moveTab(props.value, 'first');
  }
  if (event.key === 'End') {
    event.preventDefault();
    tabsCtx.moveTab(props.value, 'last');
  }
}

const classes = computed(() => [
  'inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50',
  active.value ? 'bg-card text-foreground' : 'text-foreground dark:text-muted-foreground',
  props.class
].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
