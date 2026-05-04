import { computed, onMounted, onUnmounted, ref } from 'vue';

export function useMobile(breakpoint = 768) {
  const width = ref(typeof window === 'undefined' ? breakpoint : window.innerWidth);

  function onResize() {
    width.value = window.innerWidth;
  }

  onMounted(() => {
    window.addEventListener('resize', onResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
  });

  const isMobile = computed(() => width.value < breakpoint);
  return { isMobile, width };
}
