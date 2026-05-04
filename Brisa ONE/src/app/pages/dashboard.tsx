import { useState } from 'react';
import {
  Download, RefreshCw, Share2, Users, GraduationCap, Award, Briefcase,
  TrendingUp, AlertTriangle, CheckCircle, XCircle, Clock, ChevronDown,
  Calendar, Building2, Filter, MapPin, Target
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { cn } from '../components/ui/utils';

const alertas = [
  { tipo: 'crítico', mensagem: '8 alunos com cursos obrigatórios não concluídos', count: 8 },
  { tipo: 'atenção', mensagem: '3 alunos com 2 faltas não justificadas', count: 3 },
  { tipo: 'atenção', mensagem: '5 contratos pendentes de assinatura', count: 5 },
  { tipo: 'info', mensagem: '2 grupos com avaliação parcial em 7 dias', count: 2 },
];

const funilMacro = [
  { etapa: 'Inscritos', valor: 612, conversao: 100, cor: 'from-blue-500 to-blue-400' },
  { etapa: 'Inscrições Válidas', valor: 540, conversao: 88, cor: 'from-teal-500 to-teal-400' },
  { etapa: 'Em Nivelamento', valor: 229, conversao: 42, cor: 'from-purple-500 to-purple-400' },
  { etapa: 'Aprovados p/ Imersão', valor: 50, conversao: 22, cor: 'from-amber-500 to-amber-400' },
  { etapa: 'Em Imersão', valor: 44, conversao: 88, cor: 'from-emerald-500 to-emerald-400' },
  { etapa: 'Aprovados Finais', valor: 36, conversao: 82, cor: 'from-indigo-500 to-indigo-400' },
];

const proximosEventos = [
  { data: '24/04', titulo: 'Divulgação da lista preliminar da Imersão', tipo: 'info' },
  { data: '27/04', titulo: 'Encerramento de recursos', tipo: 'atenção' },
  { data: '03/05', titulo: 'Avaliação parcial dos projetos', tipo: 'crítico' },
  { data: '26/05', titulo: 'Avaliação final dos projetos', tipo: 'crítico' },
];

export function Dashboard() {
  const [filtroAtivo, setFiltroAtivo] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="px-8 py-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-semibold text-slate-900 text-2xl">Dashboard</h1>
              <p className="text-sm text-slate-600 mt-1">
                Visão geral dos programas, turmas, desempenho e impacto.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Atualizar dados
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar visão
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar relatório
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Filtros */}
      <div className="bg-white border-b border-slate-200">
        <div className="px-8 py-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-medium text-slate-700">Filtros:</span>
            </div>
            <select className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-sm">
              <option>Programa: BRISA TIC</option>
              <option>Programa: Tech Leaders</option>
            </select>
            <select className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-sm">
              <option>Turma: UFAL 2025.2</option>
              <option>Turma: UFPE 2026.1</option>
            </select>
            <select className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-sm">
              <option>Período: 2026</option>
              <option>Período: 2025</option>
            </select>
            <select className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-sm">
              <option>Etapa: Todas</option>
              <option>Etapa: Nivelamento</option>
              <option>Etapa: Imersão</option>
            </select>
            <button
              onClick={() => setFiltroAtivo(!filtroAtivo)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                filtroAtivo
                  ? "bg-teal-100 text-teal-700 border border-teal-200"
                  : "bg-slate-100 text-slate-600 border border-slate-200"
              )}
            >
              {filtroAtivo ? 'Somente ativos' : 'Incluir histórico'}
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="px-8 py-6 space-y-6">
        {/* Cards Executivos */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-slate-600">Programas Ativos</div>
              <Award className="w-4 h-4 text-teal-500" />
            </div>
            <div className="text-2xl font-semibold text-slate-900">3</div>
            <div className="text-xs text-teal-600 mt-1">+1 desde último mês</div>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-slate-600">Turmas Ativas</div>
              <Building2 className="w-4 h-4 text-teal-500" />
            </div>
            <div className="text-2xl font-semibold text-slate-900">5</div>
            <div className="text-xs text-slate-600 mt-1">Em andamento</div>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-slate-600">Pessoas Ativas</div>
              <Users className="w-4 h-4 text-teal-500" />
            </div>
            <div className="text-2xl font-semibold text-slate-900">428</div>
            <div className="text-xs text-teal-600 mt-1">+12% desde início</div>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-slate-600">Taxa de Aprovação</div>
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-semibold text-slate-900">78%</div>
            <div className="text-xs text-emerald-600 mt-1">Acima da meta</div>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-slate-600">Em Nivelamento</div>
              <GraduationCap className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-semibold text-slate-900">229</div>
            <div className="text-xs text-blue-600 mt-1">Progresso médio: 71%</div>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-slate-600">Em Imersão</div>
              <Target className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-2xl font-semibold text-slate-900">44</div>
            <div className="text-xs text-purple-600 mt-1">10 projetos ativos</div>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-slate-600">Projetos Ativos</div>
              <Briefcase className="w-4 h-4 text-teal-500" />
            </div>
            <div className="text-2xl font-semibold text-slate-900">10</div>
            <div className="text-xs text-slate-600 mt-1">Grupos formados</div>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-slate-600">Alertas Críticos</div>
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl font-semibold text-amber-600">14</div>
            <div className="text-xs text-amber-600 mt-1">Requer atenção</div>
          </div>
        </div>

        {/* Funil + Alertas */}
        <div className="grid grid-cols-3 gap-6">
          {/* Funil */}
          <div className="col-span-2 bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Funil do Edital</h3>
              <Button variant="outline" size="sm">
                Ver detalhamento
              </Button>
            </div>
            <div className="grid grid-cols-6 gap-3">
              {funilMacro.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-teal-300 transition-all">
                    <div className="text-xs text-slate-600 mb-2 h-8">{item.etapa}</div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">{item.valor}</div>
                    <div className="flex items-center gap-1">
                      <div className={cn("w-full bg-slate-200 rounded-full h-1.5")}>
                        <div className={cn("bg-gradient-to-r h-1.5 rounded-full", item.cor)} style={{ width: `${item.conversao}%` }}></div>
                      </div>
                    </div>
                    <div className="text-xs text-teal-600 font-medium mt-1">{item.conversao}%</div>
                  </div>
                  {index < funilMacro.length - 1 && (
                    <div className="absolute top-1/2 -right-1.5 transform -translate-y-1/2 w-3 h-3">
                      <svg className="w-3 h-3 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-xs text-slate-600 mb-1">Taxa de Aproveitamento Nivelamento</div>
                <div className="text-lg font-semibold text-purple-600">22%</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-600 mb-1">Conversão até Imersão</div>
                <div className="text-lg font-semibold text-emerald-600">7%</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-600 mb-1">Taxa de Conclusão Final</div>
                <div className="text-lg font-semibold text-indigo-600">6%</div>
              </div>
            </div>
          </div>

          {/* Alertas */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Alertas Críticos</h3>
            <div className="space-y-3">
              {alertas.map((alerta, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-3 rounded-lg border-l-4 bg-opacity-10",
                    alerta.tipo === 'crítico' && "border-red-500 bg-red-50",
                    alerta.tipo === 'atenção' && "border-amber-500 bg-amber-50",
                    alerta.tipo === 'info' && "border-blue-500 bg-blue-50"
                  )}
                >
                  <div className="flex items-start gap-2">
                    <AlertTriangle
                      className={cn(
                        "w-4 h-4 flex-shrink-0 mt-0.5",
                        alerta.tipo === 'crítico' && "text-red-600",
                        alerta.tipo === 'atenção' && "text-amber-600",
                        alerta.tipo === 'info' && "text-blue-600"
                      )}
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">{alerta.mensagem}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nivelamento + Imersão */}
        <div className="grid grid-cols-2 gap-6">
          {/* Nivelamento */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Nivelamento</h3>
              <Badge className="bg-blue-100 text-blue-700">229 alunos ativos</Badge>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Progresso Médio</div>
                  <div className="text-xl font-semibold text-slate-900">71%</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Cursos Obrigatórios</div>
                  <div className="text-xl font-semibold text-teal-600">84%</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Média da Prova</div>
                  <div className="text-xl font-semibold text-slate-900">63.4</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Nota de Corte</div>
                  <div className="text-xl font-semibold text-amber-600">58.0</div>
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-2">Distribuição de Progresso</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">0-33%</span>
                    <span className="font-medium text-red-600">18 alunos</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5">
                    <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '8%' }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">34-66%</span>
                    <span className="font-medium text-amber-600">67 alunos</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5">
                    <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '29%' }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">67-100%</span>
                    <span className="font-medium text-emerald-600">144 alunos</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5">
                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '63%' }}></div>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <div className="text-xs font-medium text-amber-700 mb-2">Atenção necessária</div>
                <div className="space-y-1">
                  <div className="text-xs text-slate-600">• 8 alunos sem cursos obrigatórios completos</div>
                  <div className="text-xs text-slate-600">• 12 alunos ainda não aptos para prova</div>
                </div>
              </div>
            </div>
          </div>

          {/* Imersão */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Imersão</h3>
              <Badge className="bg-purple-100 text-purple-700">44 alunos ativos</Badge>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Projetos Ativos</div>
                  <div className="text-xl font-semibold text-slate-900">10</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Presença Média</div>
                  <div className="text-xl font-semibold text-emerald-600">91%</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Média Parcial</div>
                  <div className="text-xl font-semibold text-slate-900">72.8</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Projeção Final</div>
                  <div className="text-xl font-semibold text-teal-600">79.4</div>
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-2">Avaliação por Componente</div>
                <div className="space-y-2">
                  {[
                    { componente: 'Desempenho do Grupo', valor: 8.2 },
                    { componente: 'Participação Individual', valor: 7.8 },
                    { componente: 'Avaliação do Orientador', valor: 8.5 },
                    { componente: 'Qualidade Técnica', valor: 7.5 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-700">{item.componente}</span>
                        <span className="text-xs font-medium text-teal-600">{item.valor}</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5">
                        <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: `${item.valor * 10}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <div className="text-xs font-medium text-amber-700 mb-2">Atenção necessária</div>
                <div className="space-y-1">
                  <div className="text-xs text-slate-600">• 4 advertências ativas</div>
                  <div className="text-xs text-slate-600">• 2 alunos em risco de desligamento</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Perfil dos Participantes - Analítico */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-900 mb-6">Perfil dos Participantes</h3>

          {/* Linha 1: Gênero e Etnia */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-sm font-medium text-slate-700 mb-3">Distribuição por Gênero</h4>
              <div className="space-y-3">
                {[
                  { genero: 'Feminino', valor: 52, count: 223, cor: 'bg-purple-500' },
                  { genero: 'Masculino', valor: 46, count: 197, cor: 'bg-blue-500' },
                  { genero: 'Não-binário', valor: 2, count: 8, cor: 'bg-teal-500' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-slate-700">{item.genero}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-600">{item.count}</span>
                        <span className="text-sm font-semibold text-slate-900 w-10 text-right">{item.valor}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className={cn(item.cor, "h-3 rounded-full")} style={{ width: `${item.valor}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-slate-700 mb-3">Distribuição por Etnia</h4>
              <div className="space-y-3">
                {[
                  { etnia: 'Pardo', valor: 48, count: 206, cor: 'bg-amber-500' },
                  { etnia: 'Branco', valor: 28, count: 120, cor: 'bg-slate-400' },
                  { etnia: 'Negro', valor: 18, count: 77, cor: 'bg-slate-700' },
                  { etnia: 'Indígena', valor: 4, count: 17, cor: 'bg-emerald-600' },
                  { etnia: 'Amarelo', valor: 2, count: 8, cor: 'bg-yellow-500' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-slate-700">{item.etnia}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-600">{item.count}</span>
                        <span className="text-sm font-semibold text-slate-900 w-10 text-right">{item.valor}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className={cn(item.cor, "h-3 rounded-full")} style={{ width: `${item.valor}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Linha 2: Faixa Etária e Formação */}
          <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-slate-200">
            <div>
              <h4 className="text-sm font-medium text-slate-700 mb-3">Faixa Etária</h4>
              <div className="h-40 flex items-end justify-between gap-2">
                {[
                  { faixa: '18-20', valor: 15, count: 64 },
                  { faixa: '21-23', valor: 28, count: 120 },
                  { faixa: '24-26', valor: 32, count: 137 },
                  { faixa: '27-30', valor: 18, count: 77 },
                  { faixa: '31-40', valor: 5, count: 21 },
                  { faixa: '41+', valor: 2, count: 9 },
                ].map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-gradient-to-t from-teal-500 to-teal-400 rounded-t hover:from-teal-600 hover:to-teal-500 transition-all cursor-pointer" style={{ height: `${item.valor * 3}px` }}></div>
                    <div className="text-xs font-medium text-slate-900 mt-2">{item.count}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{item.faixa}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-slate-700 mb-3">Nível de Formação</h4>
              <div className="space-y-3">
                {[
                  { tipo: 'Graduação em andamento', valor: 68, count: 291, cor: 'bg-blue-500' },
                  { tipo: 'Graduado', valor: 18, count: 77, cor: 'bg-emerald-500' },
                  { tipo: 'Técnico', valor: 8, count: 34, cor: 'bg-purple-500' },
                  { tipo: 'Pós-graduação', valor: 6, count: 26, cor: 'bg-indigo-500' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-slate-700">{item.tipo}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-600">{item.count}</span>
                        <span className="text-sm font-semibold text-slate-900 w-10 text-right">{item.valor}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className={cn(item.cor, "h-3 rounded-full")} style={{ width: `${item.valor}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Linha 3: Categoria de Cota e Instituições */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-slate-700 mb-3">Categoria de Cota</h4>
              <div className="space-y-2.5">
                {[
                  { categoria: 'Ampla Concorrência', vagas: 100, preenchidas: 87, percentual: 87 },
                  { categoria: 'Mulheres', vagas: 60, preenchidas: 58, percentual: 97 },
                  { categoria: 'Negros/Pardos', vagas: 50, preenchidas: 48, percentual: 96 },
                  { categoria: 'PcD', vagas: 20, preenchidas: 14, percentual: 70 },
                  { categoria: '45+', vagas: 20, preenchidas: 19, percentual: 95 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-700">{item.categoria}</span>
                      <span className="text-xs text-slate-600">{item.preenchidas}/{item.vagas}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className={cn("h-2 rounded-full", item.percentual >= 90 ? "bg-emerald-500" : item.percentual >= 70 ? "bg-amber-500" : "bg-red-500")} style={{ width: `${item.percentual}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-slate-700 mb-3">Top Instituições de Origem</h4>
              <div className="space-y-2.5">
                {[
                  { instituicao: 'UFAL', count: 142, percentual: 33 },
                  { instituicao: 'IFAL', count: 98, percentual: 23 },
                  { instituicao: 'UNEAL', count: 76, percentual: 18 },
                  { instituicao: 'UFPE', count: 52, percentual: 12 },
                  { instituicao: 'Outras', count: 60, percentual: 14 },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-24 text-xs text-slate-700 font-medium">{item.instituicao}</div>
                    <div className="flex-1 bg-slate-200 rounded-full h-6 relative overflow-hidden">
                      <div className="bg-gradient-to-r from-teal-500 to-teal-400 h-6 rounded-full flex items-center justify-end pr-2" style={{ width: `${item.percentual}%` }}>
                        <span className="text-xs font-medium text-white">{item.count}</span>
                      </div>
                    </div>
                    <div className="w-10 text-xs text-slate-600 text-right">{item.percentual}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desempenho por Competência */}
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6">

            <h3 className="font-semibold text-slate-900 mb-4">Desempenho por Competência</h3>
            <div className="grid grid-cols-7 gap-4">
              {[
                { competencia: 'Proatividade', valor: 7.8 },
                { competencia: 'Comunicação', valor: 8.2 },
                { competencia: 'Responsabilidade', valor: 8.5 },
                { competencia: 'Autoestudo', valor: 7.4 },
                { competencia: 'Trabalho em Equipe', valor: 8.7 },
                { competencia: 'Produção Técnica', valor: 7.6 },
                { competencia: 'Qualidade Técnica', valor: 7.9 },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2">
                    <div className="relative inline-block">
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle cx="40" cy="40" r="32" stroke="#e2e8f0" strokeWidth="8" fill="none" />
                        <circle
                          cx="40"
                          cy="40"
                          r="32"
                          stroke="#14b8a6"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${(item.valor / 10) * 201} 201`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-semibold text-slate-900">{item.valor}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-700 font-medium px-1 leading-tight">{item.competencia}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impacto Acadêmico e Carreira */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Impacto Acadêmico e Profissional</h3>
          <div className="grid grid-cols-6 gap-4">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4 border border-emerald-200">
              <div className="text-xs text-emerald-700 mb-1">Matrícula Ativa</div>
              <div className="text-2xl font-semibold text-emerald-900">88%</div>
              <div className="text-xs text-emerald-600 mt-1">Permanência no curso</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
              <div className="text-xs text-blue-700 mb-1">Em Estágio</div>
              <div className="text-2xl font-semibold text-blue-900">32%</div>
              <div className="text-xs text-blue-600 mt-1">Primeiras experiências</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-4 border border-teal-200">
              <div className="text-xs text-teal-700 mb-1">Empregados</div>
              <div className="text-2xl font-semibold text-teal-900">24%</div>
              <div className="text-xs text-teal-600 mt-1">CLT ou PJ</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
              <div className="text-xs text-purple-700 mb-1">Atuando em Tech</div>
              <div className="text-2xl font-semibold text-purple-900">41%</div>
              <div className="text-xs text-purple-600 mt-1">Na área de tecnologia</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4 border border-amber-200">
              <div className="text-xs text-amber-700 mb-1">Concluintes</div>
              <div className="text-2xl font-semibold text-amber-900">18%</div>
              <div className="text-xs text-amber-600 mt-1">Graduação concluída</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 border border-indigo-200">
              <div className="text-xs text-indigo-700 mb-1">Por Parceiros</div>
              <div className="text-2xl font-semibold text-indigo-900">9%</div>
              <div className="text-xs text-indigo-600 mt-1">Contratados</div>
            </div>
          </div>
        </div>

        {/* Agenda e Prazos */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Próximos Eventos e Prazos</h3>
          <div className="space-y-3">
            {proximosEventos.map((evento, index) => (
              <div key={index} className="flex items-start gap-4 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                <div className="flex flex-col items-center flex-shrink-0 w-12">
                  <div className="text-xs text-slate-500 font-medium">ABR</div>
                  <div className="text-lg font-semibold text-slate-900">{evento.data.split('/')[0]}</div>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900 text-sm">{evento.titulo}</div>
                  <Badge
                    className={cn(
                      "mt-1 text-xs",
                      evento.tipo === 'crítico' && "bg-red-100 text-red-700",
                      evento.tipo === 'atenção' && "bg-amber-100 text-amber-700",
                      evento.tipo === 'info' && "bg-blue-100 text-blue-700"
                    )}
                  >
                    {evento.tipo === 'crítico' && 'Crítico'}
                    {evento.tipo === 'atenção' && 'Atenção'}
                    {evento.tipo === 'info' && 'Informativo'}
                  </Badge>
                </div>
                <Calendar className="w-4 h-4 text-slate-400 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
