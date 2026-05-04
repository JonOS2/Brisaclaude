import { Outlet, useLocation, useNavigate } from 'react-router';
import { Check, Save, FileText, List, UserCheck, GraduationCap, Users, ClipboardCheck } from 'lucide-react';
import { useEdital } from '../context/edital-context';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from './ui/utils';

const steps = [
  {
    id: 'dados-programa',
    path: '/cadastro',
    label: 'Dados do Programa',
    icon: FileText,
    description: 'Informações gerais'
  },
  {
    id: 'estrutura-etapas',
    path: '/cadastro/estrutura-etapas',
    label: 'Estrutura das Etapas',
    icon: List,
    description: 'Definição do fluxo'
  },
  {
    id: 'etapa-inscricao',
    path: '/cadastro/etapa-inscricao',
    label: 'Etapa 0 — Inscrição',
    icon: UserCheck,
    description: 'Formulário e elegibilidade'
  },
  {
    id: 'etapa-nivelamento',
    path: '/cadastro/etapa-nivelamento',
    label: 'Etapa 1 — Nivelamento',
    icon: GraduationCap,
    description: 'Cursos e avaliação'
  },
  {
    id: 'etapa-imersao',
    path: '/cadastro/etapa-imersao',
    label: 'Etapa 2 — Imersão',
    icon: Users,
    description: 'Projetos e benefícios'
  },
  {
    id: 'revisao-final',
    path: '/cadastro/revisao-final',
    label: 'Revisão Final',
    icon: ClipboardCheck,
    description: 'Validar e publicar'
  },
];

export function WizardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { nomePrograma, statusEdital, etapas, periodoInscricaoInicio, periodoInscricaoFim } = useEdital();

  const currentStepIndex = steps.findIndex(step => step.path === location.pathname);

  const getStepStatus = (index: number) => {
    if (index < currentStepIndex) return 'completed';
    if (index === currentStepIndex) return 'current';
    return 'upcoming';
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div>
      {/* Sub-header da seção Cadastro */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-semibold text-slate-900">Cadastro de Programa</h1>
              <p className="text-sm text-slate-600">Configure e publique novos editais</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Salvar Rascunho
              </Button>
              {statusEdital && (
                <Badge
                  variant={statusEdital === 'publicado' ? 'default' : 'secondary'}
                  className={cn(
                    statusEdital === 'rascunho' && 'bg-slate-100 text-slate-700',
                    statusEdital === 'em_revisao' && 'bg-amber-100 text-amber-700',
                    statusEdital === 'publicado' && 'bg-emerald-100 text-emerald-700'
                  )}
                >
                  {statusEdital === 'rascunho' && 'Rascunho'}
                  {statusEdital === 'em_revisao' && 'Em Revisão'}
                  {statusEdital === 'publicado' && 'Publicado'}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Stepper Lateral Esquerdo */}
        <aside className="w-80 bg-white border-r border-slate-200 min-h-[calc(100vh-121px)] sticky top-[121px] overflow-y-auto">
          <div className="p-6">
            <div className="space-y-2">
              {steps.map((step, index) => {
                const status = getStepStatus(index);
                const Icon = step.icon;
                
                return (
                  <button
                    key={step.id}
                    onClick={() => navigate(step.path)}
                    className={cn(
                      "w-full text-left p-4 rounded-lg transition-all relative group",
                      status === 'current' && 'bg-teal-50 border border-teal-200',
                      status === 'completed' && 'bg-slate-50 hover:bg-slate-100 border border-slate-200',
                      status === 'upcoming' && 'hover:bg-slate-50 border border-transparent'
                    )}
                  >
                    <div className="flex items-start gap-3">
                      {/* Ícone/Status */}
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                        status === 'completed' && 'bg-teal-500 text-white',
                        status === 'current' && 'bg-teal-500 text-white',
                        status === 'upcoming' && 'bg-slate-200 text-slate-500'
                      )}>
                        {status === 'completed' ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Icon className="w-4 h-4" />
                        )}
                      </div>

                      {/* Conteúdo */}
                      <div className="flex-1 min-w-0">
                        <div className={cn(
                          "font-medium text-sm mb-0.5",
                          status === 'current' && 'text-teal-900',
                          status === 'completed' && 'text-slate-900',
                          status === 'upcoming' && 'text-slate-600'
                        )}>
                          {step.label}
                        </div>
                        <div className={cn(
                          "text-xs",
                          status === 'current' && 'text-teal-700',
                          status === 'completed' && 'text-slate-600',
                          status === 'upcoming' && 'text-slate-500'
                        )}>
                          {step.description}
                        </div>
                      </div>
                    </div>

                    {/* Linha de conexão */}
                    {index < steps.length - 1 && (
                      <div className={cn(
                        "absolute left-[35px] top-[56px] w-0.5 h-4",
                        status === 'completed' ? 'bg-teal-500' : 'bg-slate-200'
                      )} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Área Central */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>

        {/* Painel Resumo Direito */}
        <aside className="w-80 bg-white border-l border-slate-200 min-h-[calc(100vh-121px)] sticky top-[121px] overflow-y-auto">
          <div className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Resumo do Edital</h3>
            
            <div className="space-y-4">
              {/* Nome do Programa */}
              {nomePrograma ? (
                <div>
                  <div className="text-xs text-slate-500 mb-1">Nome do Programa</div>
                  <div className="font-medium text-slate-900">{nomePrograma}</div>
                </div>
              ) : (
                <div className="text-sm text-slate-400 italic">
                  Preencha os dados do programa para ver o resumo
                </div>
              )}

              {/* Status */}
              {statusEdital && (
                <div>
                  <div className="text-xs text-slate-500 mb-1">Status</div>
                  <Badge 
                    variant="secondary"
                    className={cn(
                      statusEdital === 'rascunho' && 'bg-slate-100 text-slate-700',
                      statusEdital === 'em_revisao' && 'bg-amber-100 text-amber-700',
                      statusEdital === 'publicado' && 'bg-emerald-100 text-emerald-700'
                    )}
                  >
                    {statusEdital === 'rascunho' && 'Rascunho'}
                    {statusEdital === 'em_revisao' && 'Em Revisão'}
                    {statusEdital === 'publicado' && 'Publicado'}
                  </Badge>
                </div>
              )}

              {/* Período de Inscrição */}
              {(periodoInscricaoInicio || periodoInscricaoFim) && (
                <div>
                  <div className="text-xs text-slate-500 mb-1">Período de Inscrição</div>
                  <div className="text-sm text-slate-900">
                    {formatDate(periodoInscricaoInicio)} até {formatDate(periodoInscricaoFim)}
                  </div>
                </div>
              )}

              {/* Etapas */}
              {etapas.length > 0 && (
                <div>
                  <div className="text-xs text-slate-500 mb-2">Etapas do Processo</div>
                  <div className="space-y-2">
                    {etapas.map((etapa, index) => (
                      <div key={etapa.id} className="bg-slate-50 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-medium flex-shrink-0">
                            {index}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm text-slate-900">{etapa.nome}</div>
                            <div className="text-xs text-slate-600 mt-0.5">{etapa.modalidade}</div>
                            <div className="text-xs text-teal-600 mt-1">
                              {typeof etapa.vagas === 'number' ? `${etapa.vagas} vagas` : etapa.vagas}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Informações Adicionais */}
              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs text-slate-500">
                  Última atualização: Hoje às 14:32
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
