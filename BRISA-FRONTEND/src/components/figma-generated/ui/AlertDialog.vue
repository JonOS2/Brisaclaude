<template>
  <slot name="trigger" :open="openDialog" />
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-50" @close="closeDialog">
      <TransitionChild as="template" enter="ease-out duration-200" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-150" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/50" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-6">
          <TransitionChild as="template" enter="ease-out duration-200" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="ease-in duration-150" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
            <DialogPanel class="w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg">
              <slot name="content" :close="closeDialog" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';

const props = defineProps({
  open: { type: Boolean, default: false },
  modelValue: { type: Boolean, default: undefined }
});

const emit = defineEmits(['close', 'update:modelValue', 'open']);

const open = computed(() => (props.modelValue !== undefined ? props.modelValue : props.open));

function openDialog() {
  emit('open');
  emit('update:modelValue', true);
}

function closeDialog() {
  emit('close');
  emit('update:modelValue', false);
}
</script>

<style scoped>
</style>
