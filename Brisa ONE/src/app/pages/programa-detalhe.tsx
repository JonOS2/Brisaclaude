import { useState } from 'react';
import {
  ArrowLeft, Edit2, BarChart3, FileText, MoreVertical, MapPin, Calendar,
  Building2, TrendingUp, AlertTriangle, CheckCircle, Upload, Download,
  Users, Target, Clock, Award, BookOpen, GraduationCap, Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { cn } from '../components/ui/utils';

const tabs = [
  { id: 'visao-geral', label: 'Visão Geral' },
  { id: 'cronograma', label: 'Cronograma' },
  { id: 'processo-seletivo', label: 'Processo Seletivo' },
  { id: 'nivelamento', label: 'Nivelamento' },
  { id: 'imersao', label: 'Imersão' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'pessoas', label: 'Pessoas' },
  { id: 'avaliacao', label: 'Avaliação e Desempenho' },
  { id: 'documentos', label: 'Documentos e Regras' },
  { id: 'impacto', label: 'Impacto e Resultados' },
];

const grupos = [
  {
    id: 1,
    nome: 'Grupo 03',
    tema: 'Plataforma de Gestão Acadêmica',
    orientador: 'Prof. João Silva',
    membros: 5,
    mediaParcial: 7.8,
    mediaFinal: 8.4,
    status: 'ok',
    proximaApresentacao: '03/05/2026',
  },
  {
    id: 2,
    nome: 'Grupo 07',
    tema: 'Sistema de Controle de Estoque',
    orientador: 'Prof. Maria Santos',
    membros: 4,
    mediaParcial: 8.2,
    mediaFinal: 8.9,
    status: 'ok',
    proximaApresentacao: '03/05/2026',
  },
  {
    id: 3,
    nome: 'Grupo 12',
    tema: 'App de Mobilidade Urbana',
    orientador: 'Prof. Carlos Oliveira',
    membros: 5,
    mediaParcial: 6.5,
    mediaFinal: 7.2,
    status: 'atencao',
    proximaApresentacao: '03/05/2026',
  },
];

const cronograma = [
  { marco: 'Período de Inscrição', data: '01/02 - 28/02', status: 'concluido' },
  { marco: 'Divulgação Resultado Preliminar', data: '05/03', status: 'concluido' },
  { marco: 'Período de Recursos', data: '06/03 - 10/03', status: 'concluido' },
  { marco: 'Resultado Final', data: '15/03', status: 'concluido' },
  { marco: 'Confirmação de Participação', data: '16/03 - 20/03', status: 'concluido' },
  { marco: 'Nivelamento', data: '21/03 - 30/04', status: 'concluido' },
  { marco: 'Prova Final', data: '01/05', status: 'concluido' },
  { marco: 'Divulgação Imersão', data: '10/05', status: 'concluido' },
  { marco: 'Assinatura de Contratos', data: '11/05 - 20/05', status: 'andamento' },
  { marco: 'Início da Imersão', data: '01/06', status: 'proximo' },
  { marco: 'Treinamento Presencial', data: '01/06 - 07/06', status: 'proximo' },
  { marco: 'Avaliação Parcial', data: '15/08', status: 'futuro' },
  { marco: 'Avaliação Final', data: '15/11', status: 'futuro' },
  { marco: 'Emissão de Certificados', data: '30/11', status: 'futuro' },
];

export function ProgramaDetalhe() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('visao-geral');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header do Programa */}
      <header className="bg-white border-b border-slate-200">
        <div className="px-8 py-6">
          <div className="flex items-start justify-between mb-6">
            <button
              onClick={() => navigate('/programas')}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Voltar para Programas</span>
            </button>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                Ver dashboard
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Gerar relatório
              </Button>
              <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                <Edit2 className="w-4 h-4 mr-2" />
                Editar programa
              </Button>
              <Button variant="outline" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Informações principais */}
          <div>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h1 className="font-semibold text-slate-900 text-2xl mb-2">
                  Residência em TIC BRISA – EASY/UFAL
                </h1>
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                  <span className="font-medium text-teal-600">Turma UFAL 2025.2</span>
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    EASY/UFAL
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Maceió - AL
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Ago/2025 → Jun/2026
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-teal-100 text-teal-700 border border-teal-200">
                  Em andamento
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 border border-purple-200">
                  Etapa: Imersão
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Resumo */}
        <div className="px-8 pb-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-xs text-slate-600 mb-1">Inscritos</div>
              <div className="text-2xl font-semibold text-slate-900">612</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-xs text-slate-600 mb-1">Selecionados p/ Nivelamento</div>
              <div className="text-2xl font-semibold text-slate-900">250</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-xs text-slate-600 mb-1">Ativos no Nivelamento</div>
              <div className="text-2xl font-semibold text-slate-900">229</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-xs text-slate-600 mb-1">Aprovados p/ Imersão</div>
              <div className="text-2xl font-semibold text-teal-600">50</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-xs text-slate-600 mb-1">Ativos na Imersão</div>
              <div className="text-2xl font-semibold text-teal-600">44</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-xs text-slate-600 mb-1">Concluintes Projetados</div>
              <div className="text-2xl font-semibold text-emerald-600">40</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-xs text-slate-600 mb-1">Projetos Ativos</div>
              <div className="text-2xl font-semibold text-purple-600">10</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-xs text-slate-600 mb-1">Alertas Críticos</div>
              <div className="text-2xl font-semibold text-amber-600">7</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-slate-200 overflow-x-auto">
          <div className="px-8 flex items-center min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap flex-shrink-0",
                  activeTab === tab.id
                    ? "border-teal-500 text-teal-700"
                    : "border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Conteúdo das Abas */}
      <div className="px-8 py-6">
        {/* Visão Geral */}
        {activeTab === 'visao-geral' && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              {/* Resumo Executivo */}
              <div className="col-span-2 bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Ciclo do Programa</h3>
                <div className="flex items-center gap-2 mb-4">
                  {['Inscrição', 'Nivelamento', 'Prova', 'Imersão', 'Avaliação', 'Encerramento'].map((etapa, index) => (
                    <div key={index} className="flex items-center flex-1">
                      <div
                        className={cn(
                          "px-3 py-2 rounded-lg text-xs font-medium w-full text-center",
                          index === 3 ? "bg-teal-100 text-teal-700 border-2 border-teal-300" :
                          index < 3 ? "bg-emerald-50 text-emerald-600 border border-emerald-200" :
                          "bg-slate-100 text-slate-500 border border-slate-200"
                        )}
                      >
                        {etapa}
                      </div>
                      {index < 5 && <div className={cn("w-3 h-0.5", index < 3 ? "bg-emerald-400" : "bg-slate-200")} />}
                    </div>
                  ))}
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 mb-6">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-400 h-3 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xs text-slate-600 mb-1">Taxa de Conversão</div>
                    <div className="text-lg font-semibold text-teal-600">7.2%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-600 mb-1">Progresso Geral</div>
                    <div className="text-lg font-semibold text-teal-600">65%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-600 mb-1">Taxa de Aprovação Projetada</div>
                    <div className="text-lg font-semibold text-emerald-600">82%</div>
                  </div>
                </div>
              </div>

              {/* Alertas */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Alertas e Pendências</h3>
                <div className="space-y-3">
                  {[
                    { tipo: 'crítico', msg: '5 contratos pendentes', count: 5 },
                    { tipo: 'atenção', msg: '3 alunos em risco', count: 3 },
                    { tipo: 'info', msg: 'Avaliação em 7 dias', count: 1 },
                  ].map((alerta, index) => (
                    <div
                      key={index}
                      className={cn(
                        "p-3 rounded-lg border-l-4",
                        alerta.tipo === 'crítico' && "bg-red-50 border-red-500",
                        alerta.tipo === 'atenção' && "bg-amber-50 border-amber-500",
                        alerta.tipo === 'info' && "bg-blue-50 border-blue-500"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <AlertTriangle
                          className={cn(
                            "w-4 h-4",
                            alerta.tipo === 'crítico' && "text-red-600",
                            alerta.tipo === 'atenção' && "text-amber-600",
                            alerta.tipo === 'info' && "text-blue-600"
                          )}
                        />
                        <span className="text-sm font-medium text-slate-900">{alerta.msg}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Próximos Marcos */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Próximos Marcos</h3>
              <div className="grid grid-cols-4 gap-4">
                {cronograma.filter(m => m.status === 'andamento' || m.status === 'proximo').slice(0, 4).map((marco, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="text-xs text-slate-600 mb-2">{marco.data}</div>
                    <div className="font-medium text-slate-900 text-sm">{marco.marco}</div>
                    <Badge className={cn("mt-2 text-xs", marco.status === 'andamento' ? "bg-teal-100 text-teal-700" : "bg-blue-100 text-blue-700")}>
                      {marco.status === 'andamento' ? 'Em andamento' : 'Próximo'}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Cronograma */}
        {activeTab === 'cronograma' && (
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900 mb-6">Cronograma Completo</h3>
            <div className="space-y-3">
              {cronograma.map((marco, index) => (
                <div key={index} className="flex items-start gap-4 pb-3 border-b border-slate-100 last:border-0">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      marco.status === 'concluido' && "bg-emerald-100",
                      marco.status === 'andamento' && "bg-teal-100",
                      marco.status === 'proximo' && "bg-blue-100",
                      marco.status === 'futuro' && "bg-slate-100"
                    )}>
                      {marco.status === 'concluido' && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                      {marco.status === 'andamento' && <TrendingUp className="w-5 h-5 text-teal-600" />}
                      {marco.status === 'proximo' && <Clock className="w-5 h-5 text-blue-600" />}
                      {marco.status === 'futuro' && <Calendar className="w-5 h-5 text-slate-400" />}
                    </div>
                    {index < cronograma.length - 1 && (
                      <div className={cn("w-0.5 h-8 my-1", marco.status === 'concluido' ? "bg-emerald-300" : "bg-slate-200")} />
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="font-medium text-slate-900">{marco.marco}</div>
                    <div className="text-sm text-slate-600 mt-1">{marco.data}</div>
                  </div>
                  <Badge className={cn(
                    "mt-2",
                    marco.status === 'concluido' && "bg-emerald-100 text-emerald-700",
                    marco.status === 'andamento' && "bg-teal-100 text-teal-700",
                    marco.status === 'proximo' && "bg-blue-100 text-blue-700",
                    marco.status === 'futuro' && "bg-slate-100 text-slate-600"
                  )}>
                    {marco.status === 'concluido' && 'Concluído'}
                    {marco.status === 'andamento' && 'Em andamento'}
                    {marco.status === 'proximo' && 'Próximo'}
                    {marco.status === 'futuro' && 'Futuro'}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Nivelamento */}
        {activeTab === 'nivelamento' && (
          <div className="space-y-6">
            {/* Saúde do Nivelamento */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="text-xs text-slate-600 mb-2">Progresso Médio</div>
                <div className="text-2xl font-semibold text-slate-900 mb-2">71%</div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: '71%' }}></div>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="text-xs text-slate-600 mb-2">Obrigatórios Concluídos</div>
                <div className="text-2xl font-semibold text-teal-600">84%</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="text-xs text-slate-600 mb-2">Aptos para Prova</div>
                <div className="text-2xl font-semibold text-slate-900">198</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="text-xs text-slate-600 mb-2">Média da Prova</div>
                <div className="text-2xl font-semibold text-teal-600">63.4</div>
              </div>
            </div>

            {/* Cursos */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">Cursos do Nivelamento</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar modelo
                  </Button>
                  <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                    <Upload className="w-4 h-4 mr-2" />
                    Submeter planilha de cursos
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { nome: 'Fundamentos de Programação', obrigatorio: true, conclusao: 92 },
                  { nome: 'Banco de Dados', obrigatorio: true, conclusao: 88 },
                  { nome: 'Desenvolvimento Web', obrigatorio: true, conclusao: 85 },
                  { nome: 'Git e Versionamento', obrigatorio: true, conclusao: 95 },
                  { nome: 'Python Avançado', obrigatorio: false, conclusao: 68 },
                  { nome: 'React Fundamentals', obrigatorio: false, conclusao: 72 },
                ].map((curso, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium text-slate-900">{curso.nome}</span>
                      {curso.obrigatorio && (
                        <Badge className="bg-red-100 text-red-700 text-xs">Obrigatório</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-slate-200 rounded-full h-2">
                        <div className={cn("h-2 rounded-full", curso.conclusao >= 80 ? "bg-emerald-500" : "bg-amber-500")} style={{ width: `${curso.conclusao}%` }}></div>
                      </div>
                      <span className="text-sm font-medium text-slate-900 w-12 text-right">{curso.conclusao}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prova Final */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">Prova Final</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar modelo
                  </Button>
                  <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                    <Upload className="w-4 h-4 mr-2" />
                    Submeter planilha da prova
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Média Geral</div>
                  <div className="text-2xl font-semibold text-slate-900">63.4</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Nota de Corte</div>
                  <div className="text-2xl font-semibold text-amber-600">58.0</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Taxa de Aprovação</div>
                  <div className="text-2xl font-semibold text-emerald-600">67%</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Imersão */}
        {activeTab === 'imersao' && (
          <div className="space-y-6">
            {/* Operação da Imersão */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="text-xs text-slate-600 mb-2">Alunos Ativos</div>
                <div className="text-2xl font-semibold text-teal-600">44</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="text-xs text-slate-600 mb-2">Grupos Ativos</div>
                <div className="text-2xl font-semibold text-slate-900">10</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="text-xs text-slate-600 mb-2">Presença Média</div>
                <div className="text-2xl font-semibold text-emerald-600">91%</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="text-xs text-slate-600 mb-2">Advertências</div>
                <div className="text-2xl font-semibold text-amber-600">4</div>
              </div>
            </div>

            {/* Avaliações */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">Avaliações da Imersão</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar modelo
                  </Button>
                  <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                    <Upload className="w-4 h-4 mr-2" />
                    Submeter planilha de avaliações
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Média Parcial</div>
                  <div className="text-2xl font-semibold text-slate-900">72.8</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Média Final Projetada</div>
                  <div className="text-2xl font-semibold text-teal-600">79.4</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Taxa de Aprovação</div>
                  <div className="text-2xl font-semibold text-emerald-600">82%</div>
                </div>
              </div>
            </div>

            {/* Grupos */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Grupos e Projetos</h3>
              <div className="grid grid-cols-2 gap-4">
                {grupos.map((grupo) => (
                  <div key={grupo.id} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">{grupo.nome}</div>
                        <div className="text-sm text-slate-600">{grupo.tema}</div>
                      </div>
                      <Badge className={cn(
                        "text-xs",
                        grupo.status === 'ok' ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                      )}>
                        {grupo.status === 'ok' ? 'OK' : 'Atenção'}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Orientador</span>
                        <span className="font-medium text-slate-900">{grupo.orientador}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Membros</span>
                        <span className="font-medium text-slate-900">{grupo.membros}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Média Parcial</span>
                        <span className="font-medium text-teal-600">{grupo.mediaParcial}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Próxima Apresentação</span>
                        <span className="font-medium text-slate-900">{grupo.proximaApresentacao}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Impacto e Resultados */}
        {activeTab === 'impacto' && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-slate-900">Concluintes</h4>
                  <Award className="w-5 h-5 text-teal-500" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">40</div>
                <div className="text-sm text-slate-600">de 50 alunos</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-slate-900">Taxa de Conclusão</h4>
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-1">80%</div>
                <div className="text-sm text-slate-600">Acima da meta</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-slate-900">Taxa de Aprovação</h4>
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-1">82%</div>
                <div className="text-sm text-slate-600">36 aprovados</div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Impacto Acadêmico e Profissional</h3>
              <div className="grid grid-cols-6 gap-4">
                {[
                  { label: 'Matrícula Ativa', valor: '88%', icon: GraduationCap, cor: 'emerald' },
                  { label: 'Em Estágio', valor: '32%', icon: Briefcase, cor: 'blue' },
                  { label: 'Empregados', valor: '24%', icon: Briefcase, cor: 'teal' },
                  { label: 'Atuando em Tech', valor: '41%', icon: Target, cor: 'purple' },
                  { label: 'Concluintes', valor: '18%', icon: Award, cor: 'amber' },
                  { label: 'Por Parceiros', valor: '9%', icon: Building2, cor: 'indigo' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className={cn("bg-gradient-to-br rounded-lg p-4 border",
                      item.cor === 'emerald' && "from-emerald-50 to-emerald-100 border-emerald-200",
                      item.cor === 'blue' && "from-blue-50 to-blue-100 border-blue-200",
                      item.cor === 'teal' && "from-teal-50 to-teal-100 border-teal-200",
                      item.cor === 'purple' && "from-purple-50 to-purple-100 border-purple-200",
                      item.cor === 'amber' && "from-amber-50 to-amber-100 border-amber-200",
                      item.cor === 'indigo' && "from-indigo-50 to-indigo-100 border-indigo-200"
                    )}>
                      <div className="flex items-center justify-between mb-2">
                        <div className={cn("text-xs font-medium",
                          item.cor === 'emerald' && "text-emerald-700",
                          item.cor === 'blue' && "text-blue-700",
                          item.cor === 'teal' && "text-teal-700",
                          item.cor === 'purple' && "text-purple-700",
                          item.cor === 'amber' && "text-amber-700",
                          item.cor === 'indigo' && "text-indigo-700"
                        )}>{item.label}</div>
                        <Icon className={cn("w-4 h-4",
                          item.cor === 'emerald' && "text-emerald-600",
                          item.cor === 'blue' && "text-blue-600",
                          item.cor === 'teal' && "text-teal-600",
                          item.cor === 'purple' && "text-purple-600",
                          item.cor === 'amber' && "text-amber-600",
                          item.cor === 'indigo' && "text-indigo-600"
                        )} />
                      </div>
                      <div className={cn("text-2xl font-bold",
                        item.cor === 'emerald' && "text-emerald-900",
                        item.cor === 'blue' && "text-blue-900",
                        item.cor === 'teal' && "text-teal-900",
                        item.cor === 'purple' && "text-purple-900",
                        item.cor === 'amber' && "text-amber-900",
                        item.cor === 'indigo' && "text-indigo-900"
                      )}>{item.valor}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Outras abas com placeholder */}
        {!['visao-geral', 'cronograma', 'nivelamento', 'imersao', 'impacto'].includes(activeTab) && (
          <div className="bg-white rounded-lg border border-slate-200 p-8 text-center">
            <p className="text-slate-600">Conteúdo da aba <strong>{tabs.find(t => t.id === activeTab)?.label}</strong> em desenvolvimento</p>
          </div>
        )}
      </div>
    </div>
  );
}
