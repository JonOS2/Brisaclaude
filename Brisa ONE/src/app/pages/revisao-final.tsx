import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useEdital } from '../context/edital-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  Edit, 
  FileText,
  Calendar,
  Users,
  Award,
  Briefcase,
  DollarSign,
  Send,
  Save
} from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../components/ui/dialog';

export function RevisaoFinal() {
  const navigate = useNavigate();
  const { 
    nomePrograma, 
    nomeTurma, 
    executora, 
    parceiros,
    statusEdital,
    etapas,
    periodoInscricaoInicio,
    periodoInscricaoFim,
  } = useEdital();

  const [publishDialogOpen, setPublishDialogOpen] = useState(false);

  // Simulação de validações
  const validacoes = [
    { id: 1, tipo: 'sucesso', mensagem: 'Dados do programa completos', valido: true },
    { id: 2, tipo: 'sucesso', mensagem: 'Estrutura de etapas configurada', valido: true },
    { id: 3, tipo: 'sucesso', mensagem: 'Formulário de inscrição definido', valido: true },
    { id: 4, tipo: 'alerta', mensagem: 'Prova do nivelamento sem data definida', valido: false },
    { id: 5, tipo: 'sucesso', mensagem: 'Sistema de avaliação configurado', valido: true },
    { id: 6, tipo: 'alerta', mensagem: 'Critério de certificação não especificado', valido: false },
    { id: 7, tipo: 'sucesso', mensagem: 'Cotas configuradas (100% distribuído)', valido: true },
    { id: 8, tipo: 'sucesso', mensagem: 'Benefícios e contratos definidos', valido: true },
  ];

  const alertas = validacoes.filter(v => !v.valido);
  const sucessos = validacoes.filter(v => v.valido);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Não definido';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const handlePublish = () => {
    setPublishDialogOpen(false);
    // Aqui implementaria a lógica de publicação
  };

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">Revisão Final</h2>
        <p className="text-slate-600">Revise todas as configurações antes de publicar o edital</p>
      </div>

      <div className="space-y-6">
        {/* Status de Validação */}
        <Card className={alertas.length > 0 ? 'border-2 border-amber-200' : 'border-2 border-emerald-200'}>
          <CardHeader className={alertas.length > 0 ? 'bg-amber-50' : 'bg-emerald-50'}>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {alertas.length > 0 ? (
                    <>
                      <AlertCircle className="w-6 h-6 text-amber-600" />
                      Validações Automáticas
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      Todas as Validações Passaram
                    </>
                  )}
                </CardTitle>
                <CardDescription className="mt-1">
                  {sucessos.length} de {validacoes.length} verificações aprovadas
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-slate-900">
                  {Math.round((sucessos.length / validacoes.length) * 100)}%
                </div>
                <div className="text-sm text-slate-600">Completo</div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-2">
              {validacoes.map((validacao) => (
                <div 
                  key={validacao.id}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    validacao.valido ? 'bg-emerald-50' : 'bg-amber-50'
                  }`}
                >
                  {validacao.valido ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  )}
                  <span className={validacao.valido ? 'text-emerald-900' : 'text-amber-900'}>
                    {validacao.mensagem}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resumo do Programa */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-600" />
                <CardTitle>Dados do Programa</CardTitle>
              </div>
              <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
                <Edit className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-slate-500 mb-1">Nome do Programa</div>
                <div className="font-medium text-slate-900">
                  {nomePrograma || 'Não informado'}
                </div>
              </div>
              <div>
                <div className="text-sm text-slate-500 mb-1">Turma/Edição</div>
                <div className="font-medium text-slate-900">
                  {nomeTurma || 'Não informado'}
                </div>
              </div>
              <div>
                <div className="text-sm text-slate-500 mb-1">Executora</div>
                <div className="font-medium text-slate-900">
                  {executora || 'Não informado'}
                </div>
              </div>
              <div>
                <div className="text-sm text-slate-500 mb-1">Status</div>
                <Badge 
                  variant="secondary"
                  className={
                    statusEdital === 'rascunho' ? 'bg-slate-100 text-slate-700' :
                    statusEdital === 'em_revisao' ? 'bg-amber-100 text-amber-700' :
                    'bg-emerald-100 text-emerald-700'
                  }
                >
                  {statusEdital === 'rascunho' && 'Rascunho'}
                  {statusEdital === 'em_revisao' && 'Em Revisão'}
                  {statusEdital === 'publicado' && 'Publicado'}
                </Badge>
              </div>
              {parceiros.length > 0 && (
                <div className="col-span-2">
                  <div className="text-sm text-slate-500 mb-2">Parceiros</div>
                  <div className="flex flex-wrap gap-2">
                    {parceiros.map(p => (
                      <Badge key={p.id} variant="secondary">
                        {p.nome}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Timeline Consolidada */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-teal-600" />
              <CardTitle>Timeline do Processo Seletivo</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold flex-shrink-0">
                  0
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900">Período de Inscrições</div>
                  <div className="text-sm text-slate-600 mt-1">
                    {formatDate(periodoInscricaoInicio)} até {formatDate(periodoInscricaoFim)}
                  </div>
                </div>
              </div>

              {etapas.map((etapa, index) => (
                <div key={etapa.id} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold flex-shrink-0">
                    {index}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">{etapa.nome}</div>
                    <div className="text-sm text-slate-600 mt-1">
                      {etapa.modalidade} • {etapa.duracao}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Etapas e Vagas */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-600" />
                <CardTitle>Etapas e Capacidade</CardTitle>
              </div>
              <Button variant="ghost" size="sm" onClick={() => navigate('/estrutura-etapas')}>
                <Edit className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {etapas.map((etapa, index) => (
                <div key={etapa.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold text-sm">
                      {index}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{etapa.nome}</div>
                      <div className="text-xs text-slate-600">{etapa.tipo}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-teal-600">
                      {typeof etapa.vagas === 'number' ? `${etapa.vagas} vagas` : etapa.vagas}
                    </div>
                    <div className="text-xs text-slate-500">{etapa.modalidade}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cotas Configuradas */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-600" />
              <CardTitle>Cotas e Elegibilidade</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between p-3 bg-slate-50 rounded">
                <span className="text-slate-700">Ampla concorrência</span>
                <span className="font-medium text-slate-900">50%</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded">
                <span className="text-slate-700">PCD / Neurodivergentes</span>
                <span className="font-medium text-slate-900">10%</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded">
                <span className="text-slate-700">Negros e pardos</span>
                <span className="font-medium text-slate-900">30%</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded">
                <span className="text-slate-700">45+</span>
                <span className="font-medium text-slate-900">10%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documentos e Requisitos */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-teal-600" />
              <CardTitle>Documentos Exigidos</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 p-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-slate-700">Documento de identidade</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-slate-700">CPF</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-slate-700">Comprovante de escolaridade</span>
              </div>
              <div className="flex items-center gap-2 p-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-slate-700">Formulário de inscrição completo</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regras de Classificação */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-600" />
              <CardTitle>Regras de Classificação e Aprovação</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="font-medium text-slate-900 mb-2">Etapa Inscrição → Nivelamento</div>
              <div className="text-sm text-slate-700 bg-slate-50 p-3 rounded">
                250 candidatos classificados por ordem de inscrição
              </div>
            </div>
            <div>
              <div className="font-medium text-slate-900 mb-2">Etapa Nivelamento → Imersão</div>
              <div className="text-sm text-slate-700 bg-slate-50 p-3 rounded">
                50 aprovados com base em: Nota da prova (70%) + Cursos opcionais (30%)
              </div>
            </div>
            <div>
              <div className="font-medium text-slate-900 mb-2">Aprovação Final da Imersão</div>
              <div className="text-sm text-slate-700 bg-slate-50 p-3 rounded">
                Avaliação Parcial (40%) + Avaliação Final (60%) com critérios múltiplos
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefícios */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-teal-600" />
              <CardTitle>Benefícios da Imersão</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-900">Bolsa mensal durante 6 meses</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-900">Notebook em comodato</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-900">Certificado de conclusão</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ações Finais */}
        <div className="flex items-center justify-between pt-6 border-t-2 border-slate-300">
          <Button variant="outline" onClick={() => navigate('/etapa-imersao')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar e Editar
          </Button>

          <div className="flex gap-3">
            <Button variant="outline" size="lg">
              <Save className="w-4 h-4 mr-2" />
              Salvar Rascunho
            </Button>
            <Button 
              size="lg"
              onClick={() => setPublishDialogOpen(true)}
              disabled={alertas.length > 0}
              className="bg-teal-600 hover:bg-teal-700"
            >
              <Send className="w-4 h-4 mr-2" />
              Publicar Edital
            </Button>
          </div>
        </div>

        {alertas.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-amber-900 mb-1">
                  Corrija os alertas antes de publicar
                </div>
                <div className="text-sm text-amber-700">
                  Existem {alertas.length} validações que precisam ser resolvidas antes da publicação do edital.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dialog de Confirmação de Publicação */}
      <Dialog open={publishDialogOpen} onOpenChange={setPublishDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Publicar Edital</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja publicar este edital? Após a publicação, algumas configurações não poderão ser alteradas.
            </DialogDescription>
          </DialogHeader>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 my-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-teal-900 mb-1">
                  Edital pronto para publicação
                </div>
                <div className="text-sm text-teal-700">
                  Todas as validações foram aprovadas e o edital está completo.
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setPublishDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handlePublish} className="bg-teal-600 hover:bg-teal-700">
              <Send className="w-4 h-4 mr-2" />
              Confirmar Publicação
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
