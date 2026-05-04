<template>
  <Popover class="relative inline-block">
    <PopoverButton as="div" class="outline-none">
      <slot name="trigger" />
    </PopoverButton>

    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1">
      <PopoverPanel class="absolute z-50 mt-2 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md focus:outline-none">
        <slot name="content" />
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
</script>

<style scoped>
</style>
