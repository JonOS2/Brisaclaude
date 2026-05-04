import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Switch } from '../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react';
import { Slider } from '../components/ui/slider';

export function EtapaImersao() {
  const navigate = useNavigate();

  const [existeBolsa, setExisteBolsa] = useState(true);
  const [existeNotebook, setExisteNotebook] = useState(true);
  const [exigirContrato, setExigirContrato] = useState(true);
  const [projetosDefinidos, setProjetosDefinidos] = useState(true);
  const [gruposMontadosPeloSistema, setGruposMontadosPeloSistema] = useState(true);
  
  const [pesoAvaliacaoParcial, setPesoAvaliacaoParcial] = useState(40);
  const [pesoAvaliacaoFinal, setPesoAvaliacaoFinal] = useState(60);

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">Etapa 2 — Imersão</h2>
        <p className="text-slate-600">Configure projetos, avaliações, presença e benefícios</p>
      </div>

      <Tabs defaultValue="visao-geral" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="projetos">Projetos e Grupos</TabsTrigger>
          <TabsTrigger value="presenca">Presença</TabsTrigger>
          <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
          <TabsTrigger value="beneficios">Benefícios</TabsTrigger>
        </TabsList>

        {/* SUBTAB: VISÃO GERAL */}
        <TabsContent value="visao-geral" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configuração Geral da Imersão</CardTitle>
              <CardDescription>Dados principais da etapa de imersão</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nome da Etapa</Label>
                  <Input defaultValue="Imersão" />
                </div>
                <div className="space-y-2">
                  <Label>Modalidade</Label>
                  <Select defaultValue="hibrida">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hibrida">Híbrida</SelectItem>
                      <SelectItem value="presencial">Presencial</SelectItem>
                      <SelectItem value="remota">Remota</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Carga Horária Total</Label>
                  <Input type="number" defaultValue="960" />
                </div>
                <div className="space-y-2">
                  <Label>Duração (meses)</Label>
                  <Input type="number" defaultValue="6" />
                </div>
                <div className="space-y-2">
                  <Label>Média de Horas Semanais</Label>
                  <Input type="number" defaultValue="40" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Data de Início</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Data de Fim</Label>
                  <Input type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Local das Atividades Presenciais</Label>
                <Input placeholder="Ex: Campus Universitário - Bloco A" />
              </div>

              <div className="space-y-2">
                <Label>Período do Treinamento de Integração</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Input type="date" placeholder="Início" />
                  <Input type="date" placeholder="Fim" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SUBTAB: PROJETOS E GRUPOS */}
        <TabsContent value="projetos" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Projetos e Formação de Grupos</CardTitle>
              <CardDescription>Configure a estrutura de projetos e equipes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <Label htmlFor="projetosDefinidos" className="cursor-pointer">
                  Projetos serão definidos nesta etapa?
                </Label>
                <Switch 
                  id="projetosDefinidos"
                  checked={projetosDefinidos}
                  onCheckedChange={setProjetosDefinidos}
                />
              </div>

              {projetosDefinidos && (
                <div className="space-y-4 pl-4 border-l-2 border-teal-500">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <Label htmlFor="gruposSistema" className="cursor-pointer">
                      Grupos serão montados pelo sistema/coordenação?
                    </Label>
                    <Switch 
                      id="gruposSistema"
                      checked={gruposMontadosPeloSistema}
                      onCheckedChange={setGruposMontadosPeloSistema}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Tamanho Mínimo do Grupo</Label>
                      <Input type="number" defaultValue="3" />
                    </div>
                    <div className="space-y-2">
                      <Label>Tamanho Máximo do Grupo</Label>
                      <Input type="number" defaultValue="5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Professor Orientador</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de vinculação" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="um-por-grupo">Um orientador por grupo</SelectItem>
                        <SelectItem value="compartilhado">Orientador compartilhado</SelectItem>
                        <SelectItem value="sem-orientador">Sem orientador fixo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Empresa Parceira do Projeto</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="obrigatorio">Obrigatório</SelectItem>
                        <SelectItem value="opcional">Opcional</SelectItem>
                        <SelectItem value="nao-aplicavel">Não se aplica</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Critérios de Distribuição dos Alunos</Label>
                    <Textarea 
                      placeholder="Ex: Equilibrar nível técnico, diversidade de perfis, preferências declaradas..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Observações sobre Projetos</Label>
                    <Textarea 
                      placeholder="Notas internas sobre metodologia, temas, entregas..."
                      rows={3}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* SUBTAB: PRESENÇA */}
        <TabsContent value="presenca" className="space-y-6">
          <Card className="border-2 border-amber-200">
            <CardHeader className="bg-amber-50">
              <CardTitle>Regras de Frequência e Presença</CardTitle>
              <CardDescription>Configure as políticas de presença e justificativas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800">
                  As regras de presença são aplicadas automaticamente pelo sistema e geram notificações aos alunos e coordenação.
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Label className="font-medium">Encontros Presenciais Obrigatórios</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="text-sm text-slate-600">Presença obrigatória em eventos presenciais programados</div>
                </div>

                <div className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Label className="font-medium">Frequência Semanal com Professor Orientador</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="text-sm text-slate-600 mb-3">Exigir participação nas reuniões semanais de orientação</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <div className="text-xs text-slate-500">Frequência mínima</div>
                      <Input type="number" defaultValue="75" placeholder="%" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-slate-500">Dia/horário padrão</div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="segunda">Segunda-feira</SelectItem>
                          <SelectItem value="terca">Terça-feira</SelectItem>
                          <SelectItem value="quarta">Quarta-feira</SelectItem>
                          <SelectItem value="quinta">Quinta-feira</SelectItem>
                          <SelectItem value="sexta">Sexta-feira</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-slate-200 rounded-lg">
                  <Label className="font-medium mb-3 block">Contabilização de Faltas</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                      <span className="text-sm">Diferenciar faltas justificadas e não justificadas</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-2 border-red-200 bg-red-50 rounded-lg">
                  <Label className="font-medium mb-3 block text-red-900">Regras de Advertência e Exclusão</Label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded border border-red-200">
                      <div>
                        <div className="text-sm font-medium text-slate-900">2ª falta injustificada → Advertência</div>
                        <div className="text-xs text-slate-600 mt-0.5">Sistema notifica automaticamente</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border border-red-200">
                      <div>
                        <div className="text-sm font-medium text-slate-900">3ª falta injustificada → Exclusão</div>
                        <div className="text-xs text-slate-600 mt-0.5">Exclusão automática do programa</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border border-red-200">
                      <div>
                        <div className="text-sm font-medium text-slate-900">6ª falta total → Exclusão</div>
                        <div className="text-xs text-slate-600 mt-0.5">Independente de justificativa</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-slate-200 rounded-lg">
                  <Label className="font-medium mb-3 block">Análise de Justificativas</Label>
                  <div className="space-y-2">
                    <Label className="text-sm text-slate-600">Responsável pela Análise</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="coordenacao">Coordenação do Programa</SelectItem>
                        <SelectItem value="orientador">Professor Orientador</SelectItem>
                        <SelectItem value="comissao">Comissão de Avaliação</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SUBTAB: AVALIAÇÕES */}
        <TabsContent value="avaliacoes" className="space-y-6">
          <Card className="border-2 border-teal-200">
            <CardHeader className="bg-teal-50">
              <CardTitle>Sistema de Avaliações</CardTitle>
              <CardDescription>Configure as avaliações parcial e final com critérios múltiplos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {/* Avaliação Parcial */}
              <div className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Avaliação Parcial</h3>
                  <div className="text-sm text-teal-600 font-medium">Peso: {pesoAvaliacaoParcial}%</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="font-medium text-sm text-slate-900 mb-3">1. Nota do Grupo do Projeto</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Avaliação pela banca</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Apresentação do projeto</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Qualidade técnica do código</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Documentação</span>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="font-medium text-sm text-slate-900 mb-3">2. Nota de Participação</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Avaliação entre colegas do grupo</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Contribuição individual</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Colaboração e trabalho em equipe</span>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="font-medium text-sm text-slate-900 mb-3">3. Nota de Comportamento e Desempenho</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Avaliação pelo orientador</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Assiduidade</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Comprometimento</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Evolução técnica</span>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avaliação Final */}
              <div className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Avaliação Final</h3>
                  <div className="text-sm text-teal-600 font-medium">Peso: {pesoAvaliacaoFinal}%</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="font-medium text-sm text-slate-900 mb-3">1. Nota do Grupo do Projeto</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Apresentação final</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Produto final entregue</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Inovação e criatividade</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Viabilidade do projeto</span>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="font-medium text-sm text-slate-900 mb-3">2. Nota de Participação</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Avaliação 360° entre pares</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Liderança e proatividade</span>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="font-medium text-sm text-slate-900 mb-3">3. Nota de Comportamento e Desempenho</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Avaliação final do orientador</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Crescimento durante o programa</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Habilidades técnicas adquiridas</span>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Configuração de Pesos */}
              <div className="bg-slate-900 text-white p-6 rounded-lg">
                <div className="text-sm text-slate-400 mb-4">Fórmula de Cálculo Final</div>
                <div className="font-mono text-base mb-6">
                  Nota Final = (Avaliação Parcial × {pesoAvaliacaoParcial}%) + (Avaliação Final × {pesoAvaliacaoFinal}%)
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Peso da Avaliação Parcial</span>
                      <span className="text-teal-400 font-medium">{pesoAvaliacaoParcial}%</span>
                    </div>
                    <Slider 
                      value={[pesoAvaliacaoParcial]} 
                      onValueChange={(value) => {
                        setPesoAvaliacaoParcial(value[0]);
                        setPesoAvaliacaoFinal(100 - value[0]);
                      }}
                      max={100}
                      step={5}
                      className="py-4"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Peso da Avaliação Final</span>
                      <span className="text-teal-400 font-medium">{pesoAvaliacaoFinal}%</span>
                    </div>
                    <Slider 
                      value={[pesoAvaliacaoFinal]} 
                      onValueChange={(value) => {
                        setPesoAvaliacaoFinal(value[0]);
                        setPesoAvaliacaoParcial(100 - value[0]);
                      }}
                      max={100}
                      step={5}
                      className="py-4"
                    />
                  </div>
                </div>
              </div>

              {/* Regra de Aprovação */}
              <div className="border border-slate-200 rounded-lg p-4">
                <Label className="font-medium mb-3 block">Regra de Aprovação Final</Label>
                <div className="space-y-3">
                  <Select defaultValue="percentual">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentual">Baseado em % da maior nota</SelectItem>
                      <SelectItem value="nota-minima">Nota mínima absoluta</SelectItem>
                      <SelectItem value="classificacao">Por classificação</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input type="number" placeholder="Valor do critério" defaultValue="70" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SUBTAB: BENEFÍCIOS E CONTRATOS */}
        <TabsContent value="beneficios" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Bolsa e Auxílios</CardTitle>
              <CardDescription>Configure os benefícios financeiros do programa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <Label htmlFor="existeBolsa" className="cursor-pointer">Programa oferece bolsa?</Label>
                <Switch 
                  id="existeBolsa"
                  checked={existeBolsa}
                  onCheckedChange={setExisteBolsa}
                />
              </div>

              {existeBolsa && (
                <div className="space-y-4 pl-4 border-l-2 border-teal-500">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Valor da Bolsa (R$)</Label>
                      <Input type="number" placeholder="Ex: 1500" />
                    </div>
                    <div className="space-y-2">
                      <Label>Quantidade de Meses</Label>
                      <Input type="number" defaultValue="6" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <Label>Exigir conta bancária em nome do aluno</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <Label>Exigir assinatura digital de recibo</Label>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Equipamentos em Comodato</CardTitle>
              <CardDescription>Empréstimo de equipamentos aos participantes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <Label htmlFor="existeNotebook" className="cursor-pointer">Oferece notebook em comodato?</Label>
                <Switch 
                  id="existeNotebook"
                  checked={existeNotebook}
                  onCheckedChange={setExisteNotebook}
                />
              </div>

              {existeNotebook && (
                <div className="space-y-3 pl-4 border-l-2 border-teal-500">
                  <div className="space-y-2">
                    <Label>Modelo/Especificação do Equipamento</Label>
                    <Input placeholder="Ex: Notebook Intel i5, 8GB RAM, 256GB SSD" />
                  </div>
                  <div className="space-y-2">
                    <Label>Prazo de Devolução</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fim-programa">Ao fim do programa</SelectItem>
                        <SelectItem value="6-meses">6 meses após conclusão</SelectItem>
                        <SelectItem value="doacao">Doação ao aluno aprovado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contratos e Documentação</CardTitle>
              <CardDescription>Requisitos legais e documentais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <Label htmlFor="exigirContrato" className="cursor-pointer">Exigir assinatura de contrato?</Label>
                <Switch 
                  id="exigirContrato"
                  checked={exigirContrato}
                  onCheckedChange={setExigirContrato}
                />
              </div>

              {exigirContrato && (
                <div className="space-y-4 pl-4 border-l-2 border-teal-500">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <Label>Assinatura de responsável legal para menor de idade</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <Label>Prazo para Assinatura dos Contratos</Label>
                      <Input type="number" placeholder="Dias após a convocação" defaultValue="7" />
                    </div>
                    <div className="space-y-2">
                      <Label>Prazo para Confirmação de Participação</Label>
                      <Input type="number" placeholder="Dias após a convocação" defaultValue="5" />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Navegação */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        <Button variant="outline" onClick={() => navigate('/etapa-nivelamento')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <Button onClick={() => navigate('/revisao-final')}>
          Continuar para Revisão
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
