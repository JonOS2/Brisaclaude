<template>
  <g :class="{ 'hovered-state': isHoveredDelayed && isActive(state.id) }">
    <path
        :d="state.d"
        :fill="getStateFill(state.id)"
        :stroke="selectedState === state.id ? '#ffffff' : '#b0c4d8'"
        :stroke-width="selectedState === state.id ? 2 : 0.5"
        :class="['state-path', { active: isActive(state.id), selected: selectedState === state.id }]"
        @click="handleClick(state.id)"
        @mouseenter="handleMouseEnter(state.id, $event)"
        @mouseleave="handleMouseLeave"
    >
        <title>{{ state.name }}</title>
    </path>
    <text
        :x="state.lx"
        :y="state.ly"
        class="state-label"
        text-anchor="middle"
        pointer-events="none"
    >
        {{ state.id }}
    </text>
  </g>
</template>

<script>
export default {
  name: 'StateItem',
  props: {
    state: {
      type: Object,
      required: true
    },
    hovered: {
      type: String,
      default: null
    },
    selectedState: {
      type: String,
      default: null
    },
    activeStates: {
      type: Array,
      required: true
    },
    stateColors: {
      type: Object,
      required: true
    }
  },
  emits: ['select', 'move-to-front', 'hover-leave'],
  data() {
    return {
      hoverTimeout: null,
      isHoveredDelayed: false
    };
  },
  methods: {
    isActive(id) {
      return this.activeStates.includes(id);
    },
    getStateFill(id) {
      if (!this.isActive(id)) return '#dde8f4';
      const color = this.stateColors[id] || '#667eea';
      if (this.selectedState === id) return color;
      if (this.hovered === id) return color + 'dd';
      return color + 'aa';
    },
    handleClick(id) {
      if (this.isActive(id)) this.$emit('select', id);
    },
    handleMouseEnter(stateId, event) {
      this.$emit('move-to-front', stateId, event);
      
      // Limpar timeout anterior se existir
      if (this.hoverTimeout) clearTimeout(this.hoverTimeout);
      
      // Definir timeout para 1.5 segundos
      this.hoverTimeout = setTimeout(() => {
        this.isHoveredDelayed = true;
      }, 100);
    },
    handleMouseLeave() {
      // Limpar timeout se o mouse sair antes de 1.5s
      if (this.hoverTimeout) clearTimeout(this.hoverTimeout);
      
      this.isHoveredDelayed = false;
      this.$emit('hover-leave');
    }
  },
  beforeUnmount() {
    // Limpar timeout ao desmontar o componente
    if (this.hoverTimeout) clearTimeout(this.hoverTimeout);
  }
};
</script>

<style scoped>
/* Animação de zoom sincronizada para path e label */
.state-path,
.state-label {
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center;
}

.state-path {
  cursor: default;
  transition: fill 0.2s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.state-path.active {
  cursor: pointer;
}

.state-label {
  font-size: 13px;
  font-family: sans-serif;
  fill: #445;
  font-weight: 500;
  user-select: none;
}

/* Zoom in ao passar o mouse */
.hovered-state .state-path.active {
  opacity: 0.85;
  transform: scale(1.08);
}

.hovered-state .state-label {
  transform: scale(1.08);
}

.state-path.selected {
  filter: drop-shadow(0 2px 5px rgba(0,0,0,0.22));
}
</style>