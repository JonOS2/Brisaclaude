import { useState } from 'react';
import {
  Plus, Upload, Search, Eye, Edit2, BarChart3, Users, MoreVertical,
  Calendar, MapPin, Building2, TrendingUp, AlertTriangle, CheckCircle,
  Clock, Target, FileText, Award
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { cn } from '../components/ui/utils';

const tabs = [
  { id: 'ativos', label: 'Programas Ativos', count: 4 },
  { id: 'andamento', label: 'Em Andamento', count: 3 },
  { id: 'todas', label: 'Todas as Turmas', count: 18 },
  { id: 'historico', label: 'Histórico', count: 11 },
];

const programas = [
  {
    id: 1,
    nome: 'Residência em TIC BRISA',
    turma: 'UFAL 2025.2',
    parceiro: 'EASY/UFAL',
    localidade: 'Maceió - AL',
    periodo: 'Ago/2025 → Jun/2026',
    status: 'andamento',
    etapaAtual: 'Imersão',
    inscritos: 612,
    ativos: 44,
    nivelamento: 0,
    imersao: 44,
    projetos: 10,
    orientadores: 4,
    proximoMarco: 'Avaliação parcial em 7 dias',
    progresso: 65,
  },
  {
    id: 2,
    nome: 'Programa de Inovação Tech',
    turma: 'UFPE 2026.1',
    parceiro: 'UFPE/C.E.S.A.R',
    localidade: 'Recife - PE',
    periodo: 'Fev/2026 → Dez/2026',
    status: 'andamento',
    etapaAtual: 'Nivelamento',
    inscritos: 540,
    ativos: 229,
    nivelamento: 229,
    imersao: 0,
    projetos: 0,
    orientadores: 2,
    proximoMarco: 'Prova final em 15 dias',
    progresso: 42,
  },
  {
    id: 3,
    nome: 'Tech Leaders Program',
    turma: 'UFRPE 2026.1',
    parceiro: 'UFRPE/Porto Digital',
    localidade: 'Recife - PE',
    periodo: 'Mar/2026 → Set/2026',
    status: 'inscricao',
    etapaAtual: 'Inscrição',
    inscritos: 342,
    ativos: 0,
    nivelamento: 0,
    imersao: 0,
    projetos: 0,
    orientadores: 0,
    proximoMarco: 'Encerramento de inscrições em 3 dias',
    progresso: 15,
  },
  {
    id: 4,
    nome: 'Residência em TIC BRISA',
    turma: 'UFAL 2024.2',
    parceiro: 'EASY/UFAL',
    localidade: 'Maceió - AL',
    periodo: 'Ago/2024 → Jun/2025',
    status: 'encerrado',
    etapaAtual: 'Encerrado',
    inscritos: 580,
    ativos: 0,
    nivelamento: 0,
    imersao: 0,
    projetos: 12,
    orientadores: 5,
    proximoMarco: '-',
    progresso: 100,
  },
];

const etapas = ['Inscrição', 'Seleção', 'Nivelamento', 'Imersão', 'Encerrado'];

export function Programas() {
  const [activeTab, setActiveTab] = useState('ativos');
  const [showFilters, setShowFilters] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'andamento':
        return 'bg-teal-100 text-teal-700 border-teal-200';
      case 'inscricao':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'encerrado':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'andamento':
        return 'Em andamento';
      case 'inscricao':
        return 'Inscrição aberta';
      case 'encerrado':
        return 'Encerrado';
      default:
        return status;
    }
  };

  const getEtapaIndex = (etapa: string) => {
    return etapas.indexOf(etapa);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="px-8 py-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-semibold text-slate-900 text-2xl">Programas</h1>
              <p className="text-sm text-slate-600 mt-1">
                Gerencie os programas cadastrados, acompanhe suas turmas, etapas e andamento geral.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Importar edital
              </Button>
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Nova turma
              </Button>
              <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Novo programa
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-8 py-6 space-y-6">
        {/* Tabs */}
        <div className="bg-white rounded-lg border border-slate-200">
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

          {/* Stats Cards */}
          <div className="p-6 border-b border-slate-200 bg-slate-50">
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-slate-600">Total de Programas</div>
                  <Award className="w-4 h-4 text-teal-500" />
                </div>
                <div className="text-2xl font-semibold text-slate-900">12</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-slate-600">Programas Ativos</div>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-2xl font-semibold text-slate-900">4</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-slate-600">Turmas em Andamento</div>
                  <TrendingUp className="w-4 h-4 text-teal-500" />
                </div>
                <div className="text-2xl font-semibold text-slate-900">5</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-slate-600">Projetos Ativos</div>
                  <Target className="w-4 h-4 text-purple-500" />
                </div>
                <div className="text-2xl font-semibold text-slate-900">14</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-slate-600">Em Inscrição</div>
                  <FileText className="w-4 h-4 text-blue-500" />
                </div>
                <div className="text-2xl font-semibold text-slate-900">2</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-slate-600">Em Nivelamento</div>
                  <Building2 className="w-4 h-4 text-amber-500" />
                </div>
                <div className="text-2xl font-semibold text-slate-900">2</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-slate-600">Em Imersão</div>
                  <Users className="w-4 h-4 text-purple-500" />
                </div>
                <div className="text-2xl font-semibold text-slate-900">3</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-slate-600">Encerrados</div>
                  <CheckCircle className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-2xl font-semibold text-slate-900">7</div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar por nome do programa, turma, parceiro, instituição ou localidade..."
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

            {showFilters && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                <select className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm">
                  <option>Status</option>
                  <option>Ativo</option>
                  <option>Em andamento</option>
                  <option>Inscrição aberta</option>
                  <option>Encerrado</option>
                </select>
                <select className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm">
                  <option>Etapa atual</option>
                  <option>Inscrição</option>
                  <option>Nivelamento</option>
                  <option>Imersão</option>
                  <option>Encerrado</option>
                </select>
                <select className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm">
                  <option>Ano</option>
                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                </select>
                <select className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm">
                  <option>Localidade</option>
                  <option>Maceió - AL</option>
                  <option>Recife - PE</option>
                  <option>Outras</option>
                </select>
              </div>
            )}
          </div>

          {/* Listagem */}
          <div className="divide-y divide-slate-200">
            {programas.map((programa) => {
              const etapaIndex = getEtapaIndex(programa.etapaAtual);
              return (
                <div key={programa.id} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-6">
                    {/* Bloco Esquerdo */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-slate-900 text-lg mb-1">
                            {programa.nome}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-slate-600 mb-2">
                            <span className="font-medium text-teal-600">{programa.turma}</span>
                            <span className="flex items-center gap-1">
                              <Building2 className="w-3.5 h-3.5" />
                              {programa.parceiro}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {programa.localidade}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Calendar className="w-3.5 h-3.5" />
                            {programa.periodo}
                          </div>
                        </div>
                        <Badge className={cn("border", getStatusColor(programa.status))}>
                          {getStatusLabel(programa.status)}
                        </Badge>
                      </div>

                      {/* Etapas */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          {etapas.map((etapa, index) => (
                            <div key={index} className="flex items-center">
                              <div
                                className={cn(
                                  "px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                                  index === etapaIndex
                                    ? "bg-teal-100 text-teal-700 border border-teal-200"
                                    : index < etapaIndex
                                    ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                                    : "bg-slate-100 text-slate-500 border border-slate-200"
                                )}
                              >
                                {etapa}
                              </div>
                              {index < etapas.length - 1 && (
                                <div
                                  className={cn(
                                    "w-6 h-0.5 mx-1",
                                    index < etapaIndex ? "bg-emerald-400" : "bg-slate-200"
                                  )}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                          <div
                            className="bg-gradient-to-r from-teal-500 to-teal-400 h-2 rounded-full"
                            style={{ width: `${programa.progresso}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Indicadores */}
                      <div className="grid grid-cols-6 gap-3 mb-3">
                        <div className="bg-slate-50 rounded-lg p-2 border border-slate-200">
                          <div className="text-xs text-slate-600 mb-0.5">Inscritos</div>
                          <div className="font-semibold text-slate-900">{programa.inscritos}</div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-2 border border-slate-200">
                          <div className="text-xs text-slate-600 mb-0.5">Ativos</div>
                          <div className="font-semibold text-teal-600">{programa.ativos}</div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-2 border border-slate-200">
                          <div className="text-xs text-slate-600 mb-0.5">Nivelamento</div>
                          <div className="font-semibold text-slate-900">{programa.nivelamento}</div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-2 border border-slate-200">
                          <div className="text-xs text-slate-600 mb-0.5">Imersão</div>
                          <div className="font-semibold text-slate-900">{programa.imersao}</div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-2 border border-slate-200">
                          <div className="text-xs text-slate-600 mb-0.5">Projetos</div>
                          <div className="font-semibold text-slate-900">{programa.projetos}</div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-2 border border-slate-200">
                          <div className="text-xs text-slate-600 mb-0.5">Orientadores</div>
                          <div className="font-semibold text-slate-900">{programa.orientadores}</div>
                        </div>
                      </div>

                      {/* Próximo Marco */}
                      {programa.proximoMarco !== '-' && (
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-amber-500" />
                          <span className="text-slate-600">Próximo marco:</span>
                          <span className="font-medium text-amber-600">{programa.proximoMarco}</span>
                        </div>
                      )}
                    </div>

                    {/* Ações */}
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.location.href = `/programas/${programa.id}`}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Visualizar
                      </Button>
                      <Button variant="outline" size="sm">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Dashboard
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="w-4 h-4 mr-2" />
                        Pessoas
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit2 className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                      <Button variant="outline" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600">
                Mostrando <span className="font-medium">1-4</span> de <span className="font-medium">18</span> programas
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
