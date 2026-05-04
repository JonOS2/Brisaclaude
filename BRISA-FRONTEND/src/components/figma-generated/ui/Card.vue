<template>
  <div :class="['bg-card text-card-foreground flex flex-col gap-6 rounded-xl border', classes]">
    <div v-if="$slots.header" :class="['@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', headerClass]">
      <slot name="header" />
    </div>

    <div :class="['px-6 [&:last-child]:pb-6', contentClass]">
      <slot />
    </div>

    <div v-if="$slots.footer" :class="['flex items-center px-6 pb-6 [.border-t]:pt-6', footerClass]">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  class: { type: String, default: '' },
  headerClass: { type: String, default: '' },
  contentClass: { type: String, default: '' },
  footerClass: { type: String, default: '' },
});

const classes = props.class;
</script>

<style scoped>
</style>
