import { useState } from 'react';
import { Upload, UserPlus, Search, Download, MoreVertical, Eye, Edit2, History } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { cn } from '../components/ui/utils';

const tabs = [
  { id: 'ativos', label: 'Pessoas Ativas', count: 234 },
  { id: 'programas', label: 'Programas em Andamento', count: 187 },
  { id: 'todas', label: 'Todas as Pessoas', count: 1543 },
  { id: 'historico', label: 'Histórico', count: 356 },
];

const mockPessoas = [
  {
    id: 1,
    nome: 'Ana Carolina Silva',
    cpf: '123.456.789-00',
    email: 'ana.silva@email.com',
    instituicao: 'UFPE',
    programas: ['Programa de Inovação 2026', 'Tech Leaders 2025'],
    etapaAtual: 'Imersão',
    status: 'ativa',
    ultimaAtualizacao: '15/04/2026'
  },
  {
    id: 2,
    nome: 'Bruno Henrique Costa',
    cpf: '234.567.890-11',
    email: 'bruno.costa@email.com',
    instituicao: 'UFRPE',
    programas: ['Programa de Inovação 2026'],
    etapaAtual: 'Nivelamento',
    status: 'ativa',
    ultimaAtualizacao: '20/04/2026'
  },
  {
    id: 3,
    nome: 'Camila Rodrigues Santos',
    cpf: '345.678.901-22',
    email: 'camila.santos@email.com',
    instituicao: 'IFPE',
    programas: ['Tech Leaders 2025'],
    etapaAtual: 'Inscrição',
    status: 'pendente',
    ultimaAtualizacao: '18/04/2026'
  },
  {
    id: 4,
    nome: 'Daniel Oliveira Matos',
    cpf: '456.789.012-33',
    email: 'daniel.matos@email.com',
    instituicao: 'UFPE',
    programas: ['Programa de Inovação 2026', 'Desenvolvimento Ágil 2025'],
    etapaAtual: 'Imersão',
    status: 'ativa',
    ultimaAtualizacao: '22/04/2026'
  },
  {
    id: 5,
    nome: 'Eduarda Ferreira Lima',
    cpf: '567.890.123-44',
    email: 'eduarda.lima@email.com',
    instituicao: 'UNICAP',
    programas: ['Tech Leaders 2025'],
    etapaAtual: 'Concluída',
    status: 'concluida',
    ultimaAtualizacao: '10/04/2026'
  },
  {
    id: 6,
    nome: 'Felipe Almeida Rocha',
    cpf: '678.901.234-55',
    email: 'felipe.rocha@email.com',
    instituicao: 'UFPE',
    programas: ['Programa de Inovação 2026'],
    etapaAtual: 'Nivelamento',
    status: 'ativa',
    ultimaAtualizacao: '19/04/2026'
  },
];

const stats = [
  { label: 'Total de Pessoas', value: '1.543', trend: '+12%' },
  { label: 'Pessoas Ativas', value: '234', trend: '+8%' },
  { label: 'Em Programas Ativos', value: '187', trend: '+15%' },
  { label: 'Em Nivelamento', value: '89', trend: '+5%' },
  { label: 'Em Imersão', value: '52', trend: '+3%' },
  { label: 'Novos Cadastros (30d)', value: '47', trend: '+21%' },
];

export function Pessoas() {
  const [activeTab, setActiveTab] = useState('ativos');
  const [showFilters, setShowFilters] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativa':
        return 'bg-emerald-100 text-emerald-700';
      case 'pendente':
        return 'bg-amber-100 text-amber-700';
      case 'concluida':
        return 'bg-blue-100 text-blue-700';
      case 'inativa':
        return 'bg-slate-100 text-slate-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'ativa':
        return 'Ativa';
      case 'pendente':
        return 'Pendente';
      case 'concluida':
        return 'Concluída';
      case 'inativa':
        return 'Inativa';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="px-8 py-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-semibold text-slate-900 text-2xl">Pessoas</h1>
              <p className="text-sm text-slate-600 mt-1">
                Gerencie todas as pessoas cadastradas no sistema e acompanhe seus vínculos com programas e etapas.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Modelo de planilha
              </Button>
              <Button variant="outline" size="sm">
                <UserPlus className="w-4 h-4 mr-2" />
                Nova pessoa
              </Button>
              <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                <Upload className="w-4 h-4 mr-2" />
                Submeter planilha
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 p-4">
              <div className="text-xs text-slate-600 mb-1">{stat.label}</div>
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-semibold text-slate-900">{stat.value}</div>
                <div className="text-xs text-teal-600 font-medium">{stat.trend}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-8 pb-8">
        <div className="bg-white rounded-lg border border-slate-200">
          {/* Tabs */}
          <div className="border-b border-slate-200">
            <div className="flex items-center px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-4 text-sm font-medium border-b-2 transition-colors",
                    activeTab === tab.id
                      ? "border-teal-500 text-teal-700"
                      : "border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300"
                  )}
                >
                  {tab.label}
                  <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar por nome, CPF, e-mail ou identificador..."
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className={cn(showFilters && "bg-slate-100")}
              >
                Filtros avançados
                <Badge variant="secondary" className="ml-2 bg-teal-100 text-teal-700">
                  0
                </Badge>
              </Button>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                <select className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Programa</option>
                  <option>Programa de Inovação 2026</option>
                  <option>Tech Leaders 2025</option>
                  <option>Desenvolvimento Ágil 2025</option>
                </select>
                <select className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Etapa</option>
                  <option>Inscrição</option>
                  <option>Nivelamento</option>
                  <option>Imersão</option>
                </select>
                <select className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Status</option>
                  <option>Ativa</option>
                  <option>Pendente</option>
                  <option>Concluída</option>
                  <option>Inativa</option>
                </select>
                <select className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Instituição</option>
                  <option>UFPE</option>
                  <option>UFRPE</option>
                  <option>IFPE</option>
                  <option>UNICAP</option>
                </select>
              </div>
            )}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    CPF
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    E-mail
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Instituição
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Programas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Etapa Atual
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Última Atualização
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {mockPessoas.map((pessoa) => (
                  <tr key={pessoa.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-slate-900">{pessoa.nome}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-600">{pessoa.cpf}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-600">{pessoa.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">{pessoa.instituicao}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {pessoa.programas.length === 1 ? (
                          <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                            {pessoa.programas[0]}
                          </Badge>
                        ) : (
                          <>
                            <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                              {pessoa.programas[0]}
                            </Badge>
                            <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-xs">
                              +{pessoa.programas.length - 1}
                            </Badge>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">{pessoa.etapaAtual}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant="secondary" className={cn("text-xs", getStatusColor(pessoa.status))}>
                        {getStatusLabel(pessoa.status)}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-600">{pessoa.ultimaAtualizacao}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => window.location.href = `/pessoas/${pessoa.id}`}
                          className="p-1 hover:bg-slate-100 rounded transition-colors"
                          title="Visualizar"
                        >
                          <Eye className="w-4 h-4 text-slate-600" />
                        </button>
                        <button className="p-1 hover:bg-slate-100 rounded transition-colors" title="Editar">
                          <Edit2 className="w-4 h-4 text-slate-600" />
                        </button>
                        <button className="p-1 hover:bg-slate-100 rounded transition-colors" title="Histórico">
                          <History className="w-4 h-4 text-slate-600" />
                        </button>
                        <button className="p-1 hover:bg-slate-100 rounded transition-colors" title="Mais opções">
                          <MoreVertical className="w-4 h-4 text-slate-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600">
                Mostrando <span className="font-medium">1-6</span> de <span className="font-medium">234</span> pessoas
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="outline" size="sm" className="bg-teal-50 text-teal-700 border-teal-200">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Próximo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
