<template>
  <Listbox :model-value="modelValue" @update:model-value="(v) => emit('update:modelValue', v)">
    <div class="relative">
      <ListboxButton data-slot="select-trigger" :class="classes">
        <span class="block truncate">{{ selectedLabel }}</span>
        <ChevronDownIcon class="size-4 opacity-50" />
      </ListboxButton>

      <transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95">
        <ListboxOptions class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none">
          <ListboxOption
            v-for="item in options"
            :key="String(item.value)"
            :value="item.value"
            v-slot="{ active, selected }">
            <li
              :class="[
                'relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none',
                active ? 'bg-accent text-accent-foreground' : ''
              ]">
              <span class="absolute right-2 flex size-3.5 items-center justify-center">
                <CheckIcon v-if="selected" class="size-4" />
              </span>
              <span class="block truncate">{{ item.label }}</span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { CheckIcon, ChevronDownIcon } from 'lucide-vue-next';

type SelectOption = { value: string | number; label: string };

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  options: { type: Array as () => SelectOption[], default: () => [] },
  placeholder: { type: String, default: 'Selecione...' },
  class: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue']);

const selectedLabel = computed(() => {
  const found = props.options.find((item) => item.value === props.modelValue);
  return found?.label ?? props.placeholder;
});

const classes = computed(() => [
  'border-input data-[placeholder]:text-muted-foreground flex h-9 w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50',
  props.class
].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
