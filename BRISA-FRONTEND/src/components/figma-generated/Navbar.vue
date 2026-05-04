<template>
  <nav class="bg-[#171F4A] border-b border-[#1e2854] sticky top-0 z-50">
    <div class="px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-8">
          <button @click="router.push('/')" class="flex items-center gap-3">
            <span class="text-white font-semibold text-lg">BRISA ONE</span>
          </button>

          <div class="flex items-center gap-1">
            <button
              v-for="item in menuItems"
              :key="item.id"
              @click="router.push(item.path)"
              :class="buttonClass(item.path)">
              <component :is="item.icon" class="w-4 h-4" />
              <span>{{ item.label }}</span>
            </button>
          </div>
        </div>

        <button class="flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-all text-sm font-medium">
          <LogOut class="w-4 h-4" />
          <span>Sair</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { Home, BarChart3, Users, Building2, FileText, LogOut } from 'lucide-vue-next';

const router = useRouter();
const route = useRoute();

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/' },
  { id: 'programas', label: 'Programas', icon: Building2, path: '/programas' },
  { id: 'pessoas', label: 'Pessoas', icon: Users, path: '/pessoas' },
  { id: 'cadastro', label: 'Cadastro', icon: FileText, path: '/cadastro' },
  { id: 'carreira', label: 'Carreira', icon: BarChart3, path: '/carreira' },
];

function isActive(path: string) {
  if (path === '/cadastro') {
    return route.path.startsWith('/cadastro') || (route.path === '/' && !menuItems.find(item => item.path === route.path && item.id !== 'dashboard'));
  }
  return route.path === path;
}

function buttonClass(path: string) {
  const active = isActive(path);
  return [
    'flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm',
    active ? 'bg-[#2a3661] text-white font-medium' : 'text-slate-300 hover:text-white hover:bg-[#1e2854]'
  ].join(' ');
}
</script>

<style scoped>
</style>
