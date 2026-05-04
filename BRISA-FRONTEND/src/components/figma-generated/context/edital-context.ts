import { computed, ref } from 'vue';

const edital = ref<Record<string, unknown>>({});

export function useEditalContext() {
  const hasEdital = computed(() => Object.keys(edital.value).length > 0);

  function setEdital(payload: Record<string, unknown>) {
    edital.value = payload;
  }

  function clearEdital() {
    edital.value = {};
  }

  return {
    edital,
    hasEdital,
    setEdital,
    clearEdital
  };
}
