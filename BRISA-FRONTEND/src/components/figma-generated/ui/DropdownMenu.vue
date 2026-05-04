<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton as="div" data-slot="dropdown-menu-trigger" class="outline-none">
      <slot name="trigger" />
    </MenuButton>

    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95">
      <MenuItems
        data-slot="dropdown-menu-content"
        class="absolute right-0 z-50 mt-2 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none">
        <slot />
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';
</script>

<style scoped>
</style>
