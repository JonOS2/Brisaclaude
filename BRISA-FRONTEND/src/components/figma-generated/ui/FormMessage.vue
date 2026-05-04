<template>
  <p v-if="message" data-slot="form-message" :class="classes" v-bind="$attrs">{{ message }}</p>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ message: { type: String, default: '' }, class: { type: String, default: '' } });
const classes = computed(() => ['text-destructive text-sm', props.class].filter(Boolean).join(' '));
</script>

<style scoped>
</style>
