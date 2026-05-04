import { Home, BarChart3, Users, Building2, FileText, LogOut } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';
import { cn } from './ui/utils';
import logoImg from '../../imports/image-1.png';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/' },
  { id: 'programas', label: 'Programas', icon: Building2, path: '/programas' },
  { id: 'pessoas', label: 'Pessoas', icon: Users, path: '/pessoas' },
  { id: 'cadastro', label: 'Cadastro', icon: FileText, path: '/cadastro' },
  { id: 'carreira', label: 'Carreira', icon: BarChart3, path: '/carreira' },
];

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '/cadastro') {
      return location.pathname.startsWith('/cadastro') ||
             (location.pathname === '/' && !menuItems.find(item => item.path === location.pathname && item.id !== 'dashboard'));
    }
    return location.pathname === path;
  };

  return (
    <nav className="bg-[#171F4A] border-b border-[#1e2854] sticky top-0 z-50">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button onClick={() => navigate('/')} className="flex items-center gap-3">
              <img src={logoImg} alt="BRISA ONE" className="h-8" />
              <span className="text-white font-semibold text-lg">BRISA ONE</span>
            </button>

            {/* Menu Principal */}
            <div className="flex items-center gap-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm",
                      active
                        ? "bg-[#2a3661] text-white font-medium"
                        : "text-slate-300 hover:text-white hover:bg-[#1e2854]"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Botão Sair */}
          <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-all text-sm font-medium">
            <LogOut className="w-4 h-4" />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
