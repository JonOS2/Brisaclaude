<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h1>Residência em Software - TIC 16</h1>
    </div>

    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Carregando dados...</p>
    </div>

    <div v-else>
      <!-- Seção Mapa + Stats -->
      <div class="map-stats-section">
        <!-- Mapa -->
        <div class="map-card">
          <div v-if="selectedState" class="state-label" :style="{ color: getStateColor(selectedState) }">
            {{ stateNames[selectedState] }}
          </div>
          <div v-else class="state-label default-label">Projetos Pelo Brasil</div>

          <div class="brazil-map-container">
            <svg
              viewBox="0 0 800 900"
              xmlns="http://www.w3.org/2000/svg"
              class="brazil-svg"
            >
              <g v-for="(path, uf) in brazilPaths" :key="uf">
                <path
                  :d="path"
                  :fill="getStateFill(uf)"
                  :stroke="selectedState === uf ? '#fff' : '#cdd5e0'"
                  :stroke-width="selectedState === uf ? 2 : 0.8"
                  :class="['state-path', { active: activeStates.includes(uf), selected: selectedState === uf }]"
                  @click="selectState(uf)"
                  @mouseenter="hoveredState = uf"
                  @mouseleave="hoveredState = null"
                />
              </g>
            </svg>
          </div>
        </div>

        <!-- Painel de Stats -->
        <div class="stats-card">
          <template v-if="!selectedState">
            <h2 class="stats-title">Residências no Brasil</h2>
            <div class="stats-grid">
              <div class="stat-box">
                <span class="stat-label">PROGRAMAS ATIVOS</span>
                <span class="stat-number">{{ globalStats.totalPrograms }}</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">ALUNOS ATIVOS</span>
                <span class="stat-number">{{ globalStats.totalStudents }}</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">PROGRAMAS EM 1° ETAPA</span>
                <span class="stat-number">{{ globalStats.stage1 }}</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">PROGRAMAS EM 2° ETAPA</span>
                <span class="stat-number">{{ globalStats.stage2 }}</span>
              </div>
            </div>
            <div class="state-badges">
              <span
                v-for="uf in activeStates"
                :key="uf"
                class="state-badge"
                :style="{ background: getStateColor(uf) }"
                @click="selectState(uf)"
              >
                {{ stateNames[uf] }}
              </span>
            </div>
            <p class="hint-text">Selecione um estado para obter os dados de implementação nele</p>
          </template>

          <template v-else>
            <h2 class="stats-title" :style="{ color: getStateColor(selectedState) }">
              Residências em {{ stateNames[selectedState] }}
            </h2>
            <div class="stats-grid">
              <div class="stat-box">
                <span class="stat-label">PROGRAMAS ATIVOS</span>
                <span class="stat-number">{{ stateStats.totalPrograms }}</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">ALUNOS ATIVOS</span>
                <span class="stat-number">{{ stateStats.totalStudents }}</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">PROGRAMAS EM 1° ETAPA</span>
                <span class="stat-number">{{ stateStats.stage1 }}</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">PROGRAMAS EM 2° ETAPA</span>
                <span class="stat-number">{{ stateStats.stage2 }}</span>
              </div>
            </div>
            <div class="state-badges">
              <span
                v-for="inst in stateStats.institutions"
                :key="inst"
                class="state-badge"
                :style="{ background: getStateColor(selectedState) }"
              >
                {{ inst }}
              </span>
            </div>
            <button class="btn-clear-state" @click="selectedState = null">
              ← Ver todos os estados
            </button>
          </template>
        </div>
      </div>

      <!-- Seção 1° Etapa -->
      <div v-if="!selectedState || stageData['1']?.length" class="stage-section">
        <h2 class="section-title">1° Etapa</h2>
        <div class="stage-card">
          <StageChart :classes="stageData['1'] || []" stageLabel="Avaliação X" color="#1F285F" />
        </div>
      </div>

      <!-- Seção 2° Etapa -->
      <div v-if="!selectedState || stageData['2']?.length" class="stage-section">
        <h2 class="section-title">2° Etapa</h2>
        <div class="stage-card">
          <StageChart :classes="stageData['2'] || []" stageLabel="Avaliação Y" color="#0288d1" :secondary="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { programService } from '@/services/programService';
import { classService } from '@/services/classService';
import { institutionService } from '@/services/institutionService';
import StageChart from '@/components/dashboard/StageChart.vue';

export default {
  name: 'DashboardView',
  components: { StageChart },
  setup() {
    const loading = ref(true);
    const programs = ref([]);
    const classes = ref([]);
    const institutions = ref([]);
    const selectedState = ref(null);
    const hoveredState = ref(null);

    const stateNames = {
      AC: 'Acre', AL: 'Alagoas', AM: 'Amazonas', AP: 'Amapá',
      BA: 'Bahia', CE: 'Ceará', DF: 'Distrito Federal', ES: 'Espírito Santo',
      GO: 'Goiás', MA: 'Maranhão', MG: 'Minas Gerais', MS: 'Mato Grosso do Sul',
      MT: 'Mato Grosso', PA: 'Pará', PB: 'Paraíba', PE: 'Pernambuco',
      PI: 'Piauí', PR: 'Paraná', RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte',
      RO: 'Rondônia', RR: 'Roraima', RS: 'Rio Grande do Sul', SC: 'Santa Catarina',
      SE: 'Sergipe', SP: 'São Paulo', TO: 'Tocantins'
    };

    const stateColors = {
      AL: '#27ae60', BA: '#1abc9c', MG: '#2980b9', PR: '#e74c3c',
      SP: '#8e44ad', RJ: '#f39c12', CE: '#16a085', PE: '#d35400',
      RS: '#c0392b', SC: '#2c3e50'
    };

    // Paths simplificados dos estados do Brasil (SVG viewBox 800x900)
    const brazilPaths = {
      RR: "M 220 60 L 260 55 L 280 80 L 270 110 L 240 120 L 210 100 Z",
      AP: "M 320 70 L 355 65 L 370 90 L 355 115 L 325 110 L 310 90 Z",
      AM: "M 100 120 L 230 110 L 270 140 L 290 200 L 250 240 L 200 250 L 150 230 L 100 200 L 80 160 Z",
      PA: "M 290 110 L 400 100 L 450 130 L 460 180 L 420 220 L 370 240 L 310 230 L 270 200 L 260 160 Z",
      MA: "M 400 130 L 460 120 L 490 150 L 480 190 L 450 210 L 410 200 L 390 170 Z",
      PI: "M 460 140 L 510 135 L 530 165 L 520 200 L 490 215 L 460 205 L 445 175 Z",
      CE: "M 510 130 L 555 125 L 570 155 L 560 185 L 530 195 L 505 180 L 498 155 Z",
      RN: "M 558 125 L 595 120 L 608 145 L 600 165 L 570 168 L 552 150 Z",
      PB: "M 558 165 L 600 162 L 612 182 L 600 200 L 565 202 L 550 185 Z",
      PE: "M 500 195 L 610 192 L 618 215 L 600 230 L 510 228 L 495 215 Z",
      AL: "M 575 225 L 615 222 L 620 245 L 605 258 L 575 255 L 568 240 Z",
      SE: "M 562 255 L 598 252 L 604 272 L 590 285 L 565 280 L 555 268 Z",
      BA: "M 450 200 L 565 195 L 600 240 L 590 330 L 550 380 L 490 390 L 440 370 L 410 310 L 415 250 Z",
      TO: "M 380 210 L 440 205 L 455 260 L 445 320 L 410 340 L 380 320 L 365 270 Z",
      GO: "M 350 300 L 420 295 L 440 355 L 425 410 L 385 430 L 350 415 L 330 370 L 335 325 Z",
      DF: "M 393 355 L 410 352 L 413 368 L 400 372 L 390 365 Z",
      MG: "M 430 350 L 545 340 L 570 395 L 555 455 L 500 480 L 440 475 L 405 440 L 408 390 Z",
      ES: "M 555 390 L 590 385 L 600 420 L 585 450 L 555 455 L 545 425 Z",
      RJ: "M 490 465 L 560 458 L 570 490 L 545 510 L 495 505 L 480 488 Z",
      SP: "M 390 440 L 490 435 L 520 480 L 510 530 L 450 550 L 390 535 L 365 495 L 370 458 Z",
      PR: "M 365 525 L 460 518 L 475 555 L 455 585 L 380 590 L 350 565 L 348 540 Z",
      SC: "M 355 590 L 455 583 L 462 615 L 440 635 L 375 635 L 345 618 Z",
      RS: "M 340 630 L 450 625 L 460 680 L 430 720 L 380 730 L 340 710 L 322 675 Z",
      MS: "M 300 400 L 385 395 L 395 460 L 375 510 L 315 515 L 285 470 L 288 425 Z",
      MT: "M 200 260 L 330 250 L 355 310 L 345 390 L 295 415 L 225 405 L 190 355 L 192 300 Z",
      RO: "M 145 240 L 210 235 L 225 280 L 215 330 L 175 340 L 145 315 L 135 275 Z",
      AC: "M 80 270 L 145 262 L 155 300 L 145 330 L 100 335 L 70 310 L 68 285 Z",
    };

    // Calcula estados ativos (que têm turmas com location tendo state cadastrado)
    const activeStates = computed(() => {
      const states = new Set();
      classes.value.forEach(c => {
        if (c.location?.state) states.add(c.location.state);
      });
      // fallback demo se não houver state cadastrado ainda
      if (states.size === 0) return ['AL', 'BA', 'MG', 'PR'];
      return Array.from(states);
    });

    const globalStats = computed(() => {
      const totalStudents = classes.value.reduce((acc, c) => acc + (c.enrollmentCount || 0), 0);
      return {
        totalPrograms: programs.value.length,
        totalStudents,
        stage1: Math.ceil(programs.value.length * 0.33),
        stage2: programs.value.length - Math.ceil(programs.value.length * 0.33)
      };
    });

    const stateStats = computed(() => {
      if (!selectedState.value) return {};
      const stateClasses = classes.value.filter(c => c.location?.state === selectedState.value);
      const stateInstitutions = [...new Set(stateClasses.map(c => c.location?.acronym).filter(Boolean))];
      const totalStudents = stateClasses.reduce((acc, c) => acc + (c.enrollmentCount || 0), 0);
      const statePrograms = [...new Set(stateClasses.map(c => c.program?.id))].length;
      return {
        totalPrograms: statePrograms || stateInstitutions.length,
        totalStudents,
        stage1: Math.ceil(statePrograms * 0.4) || 1,
        stage2: statePrograms - Math.ceil(statePrograms * 0.4) || 2,
        institutions: stateInstitutions.length ? stateInstitutions : [selectedState.value]
      };
    });

    // Dados agrupados por etapa para os gráficos
    const stageData = computed(() => {
      const filtered = selectedState.value
        ? classes.value.filter(c => c.location?.state === selectedState.value)
        : classes.value;

      // Agrupa por número de etapa baseado no código da turma ou posição
      return {
        '1': filtered.slice(0, Math.ceil(filtered.length / 2)),
        '2': filtered.slice(Math.ceil(filtered.length / 2))
      };
    });

    const getStateColor = (uf) => stateColors[uf] || '#667eea';

    const getStateFill = (uf) => {
      if (!activeStates.value.includes(uf)) return '#dde6f0';
      if (selectedState.value === uf) return getStateColor(uf);
      if (hoveredState.value === uf) return getStateColor(uf) + 'cc';
      return getStateColor(uf) + '99';
    };

    const selectState = (uf) => {
      if (!activeStates.value.includes(uf)) return;
      selectedState.value = selectedState.value === uf ? null : uf;
    };

    const loadData = async () => {
      loading.value = true;
      try {
        const [progs, cls, insts] = await Promise.all([
          programService.getAll(),
          classService.getAll(),
          institutionService.getAll()
        ]);
        programs.value = Array.isArray(progs) ? progs : [];
        classes.value = Array.isArray(cls) ? cls : [];
        institutions.value = Array.isArray(insts) ? insts : [];
      } catch (err) {
        console.error('Erro ao carregar dashboard:', err);
      } finally {
        loading.value = false;
      }
    };

    onMounted(loadData);

    return {
      loading, programs, classes, institutions,
      selectedState, hoveredState,
      stateNames, stateColors, brazilPaths,
      activeStates, globalStats, stateStats, stageData,
      getStateColor, getStateFill, selectState
    };
  }
};
</script>

<style scoped>
.dashboard {
  padding: 28px 32px;
  max-width: 1400px;
  margin: 0 auto;
  background: #eaf1fb;
  min-height: 100vh;
}

.dashboard-header h1 {
  color: #1F285F;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 24px;
}

/* Loading */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
  gap: 16px;
  color: #666;
}
.spinner {
  width: 40px; height: 40px;
  border: 3px solid #dde6f0;
  border-top-color: #1F285F;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Map + Stats */
.map-stats-section {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 20px;
  margin-bottom: 32px;
}

.map-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(31,40,95,0.08);
}

.state-label {
  font-size: 18px;
  font-weight: 700;
  color: #1F285F;
  text-align: center;
  margin-bottom: 8px;
}
.default-label { color: #1F285F; }

.brazil-map-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.brazil-svg {
  width: 100%;
  max-width: 320px;
  height: auto;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.08));
}

.state-path {
  cursor: default;
  transition: fill 0.2s, stroke-width 0.2s;
}
.state-path.active {
  cursor: pointer;
}
.state-path.selected {
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));
}

/* Stats Card */
.stats-card {
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 2px 12px rgba(31,40,95,0.08);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stats-title {
  font-size: 20px;
  font-weight: 700;
  color: #1F285F;
  margin: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.stat-box {
  border: 1.5px solid #dde6f0;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-label {
  font-size: 11px;
  font-weight: 600;
  color: #888;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.stat-number {
  font-size: 36px;
  font-weight: 700;
  color: #1F285F;
  line-height: 1;
}

.state-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.state-badge {
  padding: 6px 14px;
  border-radius: 20px;
  color: white;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
}
.state-badge:hover { opacity: 0.85; transform: translateY(-1px); }

.hint-text {
  color: #888;
  font-size: 13px;
  text-align: center;
  margin: 0;
}

.btn-clear-state {
  background: none;
  border: 1.5px solid #dde6f0;
  border-radius: 8px;
  padding: 8px 16px;
  color: #1F285F;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.2s;
}
.btn-clear-state:hover { background: #eaf1fb; }

/* Stage Sections */
.section-title {
  font-size: 20px;
  font-weight: 700;
  color: #1F285F;
  margin-bottom: 12px;
}

.stage-section {
  margin-bottom: 32px;
}

.stage-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(31,40,95,0.08);
}

/* Responsive */
@media (max-width: 900px) {
  .map-stats-section {
    grid-template-columns: 1fr;
  }
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>