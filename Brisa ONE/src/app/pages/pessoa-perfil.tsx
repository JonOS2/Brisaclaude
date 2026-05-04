import { useState } from 'react';
import {
  ArrowLeft, Edit2, UserPlus, MoreVertical, MapPin, Mail, Phone, Linkedin,
  Calendar, GraduationCap, Briefcase, Award, TrendingUp, FileText, Clock,
  CheckCircle, XCircle, AlertCircle, Download, ExternalLink
} from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { cn } from '../components/ui/utils';

const tabs = [
  { id: 'resumo', label: 'Resumo' },
  { id: 'dados-pessoais', label: 'Dados Pessoais' },
  { id: 'dados-academicos', label: 'Dados Acadêmicos' },
  { id: 'participacoes', label: 'Participações em Programas' },
  { id: 'desempenho', label: 'Desempenho no Programa' },
  { id: 'acompanhamento', label: 'Carreira' },
  { id: 'documentos', label: 'Documentos' },
  { id: 'historico', label: 'Histórico' },
];

const timelineEvents = [
  { date: '15/04/2026', title: 'Avaliação parcial concluída', type: 'success', description: 'Nota: 8.5' },
  { date: '10/04/2026', title: 'Curso de Python concluído', type: 'success', description: '40h - Certificado emitido' },
  { date: '28/03/2026', title: 'Início da Imersão', type: 'info', description: 'Projeto: Sistema de Gestão Acadêmica' },
  { date: '15/03/2026', title: 'Aprovado no Nivelamento', type: 'success', description: 'Classificação: 12º lugar' },
  { date: '01/03/2026', title: 'Prova final realizada', type: 'info', description: 'Nota: 9.2' },
  { date: '15/02/2026', title: 'Inscrição confirmada', type: 'info', description: 'Programa de Inovação 2026' },
  { date: '10/02/2026', title: 'Cadastro realizado', type: 'info', description: 'Perfil criado no sistema' },
];

export function PessoaPerfil() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('resumo');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header do Perfil */}
      <header className="bg-white border-b border-slate-200">
        <div className="px-8 py-6">
          <div className="flex items-start justify-between mb-6">
            <button
              onClick={() => navigate('/pessoas')}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Voltar para Pessoas</span>
            </button>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <UserPlus className="w-4 h-4 mr-2" />
                Registrar novo vínculo
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Atualizar acompanhamento
              </Button>
              <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                <Edit2 className="w-4 h-4 mr-2" />
                Editar perfil
              </Button>
              <Button variant="outline" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Informações principais */}
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-3xl">AC</span>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="font-semibold text-slate-900 text-2xl mb-1">Ana Carolina Silva</h1>
                  <div className="flex items-center gap-3 text-sm text-slate-600 mb-3">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      Ciência da Computação - UFPE
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Recife, PE
                    </span>
                  </div>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700">Ativa</Badge>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Programa Atual</div>
                  <div className="font-medium text-slate-900 text-sm">Programa de Inovação 2026</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Etapa Atual</div>
                  <div className="font-medium text-slate-900 text-sm">Imersão</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Desempenho</div>
                  <div className="font-medium text-teal-600 text-sm">8.5 / 10.0</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-1">Última Atualização</div>
                  <div className="font-medium text-slate-900 text-sm">15/04/2026</div>
                </div>
              </div>
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

      {/* Conteúdo */}
      <div className="px-8 py-6">
        {activeTab === 'resumo' && (
          <div className="space-y-6">
            {/* Cards de métricas */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-slate-600">Programas Vinculados</div>
                  <Award className="w-4 h-4 text-teal-500" />
                </div>
                <div className="text-2xl font-semibold text-slate-900">2</div>
                <div className="text-xs text-teal-600 mt-1">1 ativo</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-slate-600">Cursos Concluídos</div>
                  <GraduationCap className="w-4 h-4 text-teal-500" />
                </div>
                <div className="text-2xl font-semibold text-slate-900">12</div>
                <div className="text-xs text-slate-600 mt-1">180h de formação</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-slate-600">Presença</div>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-2xl font-semibold text-slate-900">95%</div>
                <div className="text-xs text-emerald-600 mt-1">Excelente</div>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-slate-600">Situação Profissional</div>
                  <Briefcase className="w-4 h-4 text-teal-500" />
                </div>
                <div className="text-2xl font-semibold text-slate-900">Empregada</div>
                <div className="text-xs text-slate-600 mt-1">Dev. Frontend</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Progresso no Programa */}
              <div className="col-span-2 bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Progresso no Programa Atual</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-700">Etapa de Inscrição</span>
                      <Badge className="bg-emerald-100 text-emerald-700 text-xs">Concluída</Badge>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-700">Etapa de Nivelamento</span>
                      <Badge className="bg-emerald-100 text-emerald-700 text-xs">Concluída</Badge>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-700">Etapa de Imersão</span>
                      <Badge className="bg-teal-100 text-teal-700 text-xs">Em andamento</Badge>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Último Marco */}
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Último Marco</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Avaliação parcial concluída</div>
                      <div className="text-xs text-slate-600 mt-1">15/04/2026</div>
                      <div className="text-xs text-teal-600 mt-1">Nota: 8.5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Resumida */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Eventos Recentes</h3>
              <div className="space-y-4">
                {timelineEvents.slice(0, 5).map((event, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center",
                        event.type === 'success' && "bg-emerald-100",
                        event.type === 'info' && "bg-blue-100"
                      )}>
                        {event.type === 'success' && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                        {event.type === 'info' && <Clock className="w-4 h-4 text-blue-600" />}
                      </div>
                      {index < 4 && <div className="w-0.5 h-8 bg-slate-200 my-1" />}
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-medium text-slate-900 text-sm">{event.title}</div>
                          <div className="text-xs text-slate-600 mt-1">{event.description}</div>
                        </div>
                        <div className="text-xs text-slate-500">{event.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dados-pessoais' && (
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900 mb-6">Informações Pessoais</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-xs text-slate-600 mb-1">Nome Completo</div>
                <div className="font-medium text-slate-900">Ana Carolina Silva</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">CPF</div>
                <div className="font-medium text-slate-900">123.456.789-00</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">E-mail</div>
                <div className="font-medium text-slate-900 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  ana.silva@email.com
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Telefone</div>
                <div className="font-medium text-slate-900 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400" />
                  (81) 99999-9999
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">LinkedIn</div>
                <div className="font-medium text-teal-600 flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <a href="#" className="hover:underline">linkedin.com/in/anacarolina</a>
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Data de Nascimento</div>
                <div className="font-medium text-slate-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  15/03/2002
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Município / Estado</div>
                <div className="font-medium text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  Recife, Pernambuco
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Gênero</div>
                <div className="font-medium text-slate-900">Feminino</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Categoria de Cota</div>
                <div className="font-medium text-slate-900">Escola Pública</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Status no Sistema</div>
                <Badge className="bg-emerald-100 text-emerald-700">Ativa</Badge>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dados-academicos' && (
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900 mb-6">Informações Acadêmicas</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-xs text-slate-600 mb-1">Nível de Formação</div>
                <div className="font-medium text-slate-900">Graduação</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Grau de Escolaridade</div>
                <div className="font-medium text-slate-900">Superior Incompleto</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Instituição de Ensino</div>
                <div className="font-medium text-slate-900">Universidade Federal de Pernambuco - UFPE</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Curso</div>
                <div className="font-medium text-slate-900">Ciência da Computação</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Período / Semestre Atual</div>
                <div className="font-medium text-slate-900">6º Período</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Situação da Matrícula</div>
                <Badge className="bg-emerald-100 text-emerald-700">Ativa</Badge>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Previsão de Conclusão</div>
                <div className="font-medium text-slate-900">Dezembro/2027</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Participação em Pesquisa/Extensão</div>
                <div className="font-medium text-teal-600">Sim - Monitoria de Algoritmos</div>
              </div>
              <div className="col-span-2">
                <div className="text-xs text-slate-600 mb-2">Observações</div>
                <div className="text-sm text-slate-700 bg-slate-50 rounded p-3 border border-slate-200">
                  Sem histórico de trancamento. Desempenho acadêmico acima da média.
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'participacoes' && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">Programa de Inovação 2026</h3>
                <Badge className="bg-teal-100 text-teal-700">Ativo</Badge>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-slate-600 mb-1">Período</div>
                  <div className="text-sm font-medium text-slate-900">Fev/2026 - Jun/2026</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-1">Etapa Atual</div>
                  <div className="text-sm font-medium text-slate-900">Imersão</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-1">Status</div>
                  <Badge className="bg-emerald-100 text-emerald-700 text-xs">Em andamento</Badge>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-1">Projeto</div>
                  <div className="text-sm font-medium text-teal-600">Sistema de Gestão Acadêmica</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Ver detalhes</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">Tech Leaders 2025</h3>
                <Badge className="bg-slate-100 text-slate-700">Concluído</Badge>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-slate-600 mb-1">Período</div>
                  <div className="text-sm font-medium text-slate-900">Mar/2025 - Jul/2025</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-1">Etapa Alcançada</div>
                  <div className="text-sm font-medium text-slate-900">Imersão - Concluída</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-1">Resultado</div>
                  <Badge className="bg-emerald-100 text-emerald-700 text-xs">Aprovada</Badge>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-1">Projeto</div>
                  <div className="text-sm font-medium text-slate-600">E-commerce Platform</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Ver detalhes</Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'desempenho' && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h4 className="font-semibold text-slate-900 mb-4">Progresso no Nivelamento</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-slate-700">Cursos Obrigatórios</span>
                      <span className="text-sm font-medium text-teal-600">12/12</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-slate-700">Cursos Opcionais</span>
                      <span className="text-sm font-medium text-teal-600">5/8</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: '62.5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h4 className="font-semibold text-slate-900 mb-4">Avaliações</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Prova Final</span>
                    <span className="text-lg font-semibold text-teal-600">9.2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Avaliação Parcial</span>
                    <span className="text-lg font-semibold text-teal-600">8.5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Classificação</span>
                    <Badge className="bg-amber-100 text-amber-700">12º lugar</Badge>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h4 className="font-semibold text-slate-900 mb-4">Presença e Participação</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Taxa de Presença</span>
                    <span className="text-lg font-semibold text-emerald-600">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Faltas Justificadas</span>
                    <span className="text-sm font-medium text-slate-900">1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Advertências</span>
                    <span className="text-sm font-medium text-slate-900">0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h4 className="font-semibold text-slate-900 mb-4">Desempenho por Competência</h4>
              <div className="space-y-4">
                {[
                  { competencia: 'Pensamento Computacional', valor: 9.0 },
                  { competencia: 'Desenvolvimento Web', valor: 8.5 },
                  { competencia: 'Banco de Dados', valor: 8.8 },
                  { competencia: 'Trabalho em Equipe', valor: 9.2 },
                  { competencia: 'Comunicação', valor: 8.7 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-700">{item.competencia}</span>
                      <span className="text-sm font-medium text-teal-600">{item.valor.toFixed(1)}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: `${item.valor * 10}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'acompanhamento' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-6">Trajetória e Impacto</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="border-r border-slate-200 pr-6">
                  <h4 className="text-sm font-medium text-slate-600 mb-4">Antes do Programa</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-slate-600 mb-1">Situação Acadêmica</div>
                      <div className="text-sm font-medium text-slate-900">Matriculada - 4º período</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 mb-1">Situação Profissional</div>
                      <div className="text-sm font-medium text-slate-900">Sem vínculo empregatício</div>
                    </div>
                  </div>
                </div>
                <div className="border-r border-slate-200 pr-6">
                  <h4 className="text-sm font-medium text-slate-600 mb-4">Durante o Programa</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-slate-600 mb-1">Situação Acadêmica</div>
                      <div className="text-sm font-medium text-slate-900">Matriculada - 5º período</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 mb-1">Situação Profissional</div>
                      <div className="text-sm font-medium text-teal-600">Estágio - Dev. Frontend</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-600 mb-4">Situação Atual</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-slate-600 mb-1">Situação Acadêmica</div>
                      <div className="text-sm font-medium text-emerald-600">Matriculada - 6º período</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 mb-1">Situação Profissional</div>
                      <div className="text-sm font-medium text-emerald-600">CLT - Dev. Frontend Jr.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h4 className="font-semibold text-slate-900 mb-4">Informações Profissionais</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-slate-600 mb-1">Empresa</div>
                    <div className="text-sm font-medium text-slate-900">TechSolutions Ltda</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 mb-1">Cargo/Função</div>
                    <div className="text-sm font-medium text-slate-900">Desenvolvedora Frontend Jr.</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 mb-1">Atua na Área de Tecnologia</div>
                    <Badge className="bg-emerald-100 text-emerald-700 text-xs">Sim</Badge>
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 mb-1">Prontidão para Mercado</div>
                    <Badge className="bg-teal-100 text-teal-700 text-xs">Alta</Badge>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h4 className="font-semibold text-slate-900 mb-4">Links e Portfólio</h4>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-2 text-sm text-teal-600 hover:underline">
                    <ExternalLink className="w-4 h-4" />
                    GitHub: github.com/anacarolina
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm text-teal-600 hover:underline">
                    <ExternalLink className="w-4 h-4" />
                    Portfólio: anacarolina.dev
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm text-teal-600 hover:underline">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn: linkedin.com/in/anacarolina
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'documentos' && (
          <div className="bg-white rounded-lg border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <h3 className="font-semibold text-slate-900">Documentos e Evidências</h3>
            </div>
            <div className="divide-y divide-slate-200">
              {[
                { nome: 'RG ou CNH', status: 'validado', data: '10/02/2026' },
                { nome: 'CPF', status: 'validado', data: '10/02/2026' },
                { nome: 'Comprovante de Escolaridade', status: 'validado', data: '10/02/2026' },
                { nome: 'Autodeclaração de Residência', status: 'validado', data: '10/02/2026' },
                { nome: 'Comprovante de Matrícula', status: 'validado', data: '15/04/2026' },
                { nome: 'Contrato de Trabalho', status: 'pendente', data: '-' },
              ].map((doc, index) => (
                <div key={index} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-slate-400" />
                    <div>
                      <div className="font-medium text-slate-900 text-sm">{doc.nome}</div>
                      <div className="text-xs text-slate-600">Enviado em {doc.data}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={cn(
                      "text-xs",
                      doc.status === 'validado' && "bg-emerald-100 text-emerald-700",
                      doc.status === 'pendente' && "bg-amber-100 text-amber-700"
                    )}>
                      {doc.status === 'validado' && <CheckCircle className="w-3 h-3 mr-1" />}
                      {doc.status === 'pendente' && <AlertCircle className="w-3 h-3 mr-1" />}
                      {doc.status === 'validado' ? 'Validado' : 'Pendente'}
                    </Badge>
                    {doc.status === 'validado' && (
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'historico' && (
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900 mb-6">Linha do Tempo</h3>
            <div className="space-y-4">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      event.type === 'success' && "bg-emerald-100",
                      event.type === 'info' && "bg-blue-100"
                    )}>
                      {event.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                      {event.type === 'info' && <Clock className="w-5 h-5 text-blue-600" />}
                    </div>
                    {index < timelineEvents.length - 1 && <div className="w-0.5 h-12 bg-slate-200 my-2" />}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <div className="font-medium text-slate-900">{event.title}</div>
                        <div className="text-sm text-slate-600 mt-1">{event.description}</div>
                      </div>
                      <div className="text-sm text-slate-500 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
