<template>
  <div class="timeline-card">
    <div class="timeline-header">
      <h3 class="stats-title">Conclusoes ao Longo do Tempo</h3>
      <select v-model="granularity" class="granularity-select">
        <option value="day">Dia</option>
        <option value="week">Semana</option>
        <option value="month">Mes</option>
      </select>
    </div>

    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Carregando serie temporal...</p>
    </div>

    <div v-else>
      <div v-if="!hasData" class="empty-state-info">Sem conclusoes para o filtro atual.</div>
      <div v-else class="chart-container">
        <Line :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js';
import { analyticsService } from '../../services/analyticsService';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

export default {
  name: 'CourseCompletionTimeline',
  components: { Line },
  props: {
    classId: {
      type: [Number, String],
      required: false,
      default: null
    },
    stageId: {
      type: [Number, String],
      required: false,
      default: null
    }
  },
  setup(props) {
    const loading = ref(false);
    const rows = ref([]);
    const granularity = ref('week');

    const load = async () => {
      loading.value = true;
      try {
        const data = await analyticsService.getCourseCompletions({
          classId: props.classId,
          stageId: props.stageId,
          granularity: granularity.value
        });
        rows.value = Array.isArray(data) ? data : [];
      } catch (err) {
        console.error('Erro ao carregar conclusoes temporais:', err);
        rows.value = [];
      } finally {
        loading.value = false;
      }
    };

    watch(
      () => [props.classId, props.stageId, granularity.value],
      () => {
        if (!props.classId) {
          rows.value = [];
          return;
        }
        load();
      },
      { immediate: true }
    );

    const hasData = computed(() => rows.value.length > 0);

    const chartData = computed(() => ({
      labels: rows.value.map(r => r.period),
      datasets: [
        {
          label: 'Conclusoes',
          data: rows.value.map(r => r.total),
          borderColor: '#1F285F',
          backgroundColor: 'rgba(31, 40, 95, 0.15)',
          borderWidth: 2,
          fill: true,
          pointBackgroundColor: '#1F285F',
          tension: 0.25
        }
      ]
    }));

    const chartOptions = computed(() => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { backgroundColor: 'rgba(31,40,95,0.95)' }
      },
      scales: {
        x: { ticks: { color: '#666' }, grid: { color: 'rgba(0,0,0,0.05)' } },
        y: { beginAtZero: true, ticks: { color: '#666' }, grid: { color: 'rgba(0,0,0,0.05)' } }
      }
    }));

    return {
      loading,
      granularity,
      hasData,
      chartData,
      chartOptions
    };
  }
};
</script>

<style scoped>
.timeline-card {
  margin-top: 16px;
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 12px rgba(31, 40, 95, 0.06);
}
.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.granularity-select {
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid #dde6f0;
  color: #1F285F;
  font-weight: 600;
}
.chart-container {
  position: relative;
  height: 260px;
}
.empty-state-info { color: #666; padding: 12px; }
.loading-state { display:flex; flex-direction:column; align-items:center; gap:8px; padding:16px; }
.spinner { width:36px; height:36px; border:3px solid #dde6f0; border-top-color:#1F285F; border-radius:50%; animation:spin .8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>
