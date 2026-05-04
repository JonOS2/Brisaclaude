import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ArrowLeft, ArrowRight, Plus, Check, X } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Slider } from '../components/ui/slider';

interface Curso {
  id: string;
  nome: string;
  obrigatorio: boolean;
  pontua: boolean;
  cargaHoraria: number;
  status: 'ativo' | 'rascunho';
}

export function EtapaNivelamento() {
  const navigate = useNavigate();

  const [cursos, setCursos] = useState<Curso[]>([
    { id: '1', nome: 'Introdução à plataforma', obrigatorio: true, pontua: false, cargaHoraria: 2, status: 'ativo' },
    { id: '2', nome: 'Lógica de programação', obrigatorio: true, pontua: true, cargaHoraria: 40, status: 'ativo' },
    { id: '3', nome: 'Programação Python', obrigatorio: true, pontua: true, cargaHoraria: 60, status: 'ativo' },
    { id: '4', nome: 'Organização de computadores', obrigatorio: true, pontua: true, cargaHoraria: 30, status: 'ativo' },
    { id: '5', nome: 'Banco de dados', obrigatorio: true, pontua: true, cargaHoraria: 40, status: 'ativo' },
    { id: '6', nome: 'Empreendedorismo e gerência de projetos', obrigatorio: false, pontua: true, cargaHoraria: 20, status: 'ativo' },
    { id: '7', nome: 'Desenvolvimento mobile', obrigatorio: false, pontua: true, cargaHoraria: 30, status: 'ativo' },
    { id: '8', nome: 'Business Intelligence', obrigatorio: false, pontua: true, cargaHoraria: 25, status: 'ativo' },
    { id: '9', nome: 'Big Data', obrigatorio: false, pontua: true, cargaHoraria: 30, status: 'ativo' },
    { id: '10', nome: 'Inteligência Artificial', obrigatorio: false, pontua: true, cargaHoraria: 35, status: 'ativo' },
    { id: '11', nome: 'IoT', obrigatorio: false, pontua: true, cargaHoraria: 20, status: 'ativo' },
    { id: '12', nome: 'Engenharia de Requisitos', obrigatorio: false, pontua: true, cargaHoraria: 15, status: 'ativo' },
    { id: '13', nome: 'Treinamento de IA', obrigatorio: false, pontua: true, cargaHoraria: 25, status: 'ativo' },
    { id: '14', nome: 'UI/UX', obrigatorio: false, pontua: true, cargaHoraria: 30, status: 'ativo' },
  ]);

  const [habilitarProva, setHabilitarProva] = useState(true);
  const [emitirCertificado, setEmitirCertificado] = useState(true);
  const [pontuacaoMaximaProva, setPontuacaoMaximaProva] = useState(70);
  const [pontosCursosOpcionais, setPontosCursosOpcionais] = useState(30);
  const [notaMinimaAprovacao, setNotaMinimaAprovacao] = useState(50);
  const [numeroAprovados, setNumeroAprovados] = useState('50');

  const toggleCursoObrigatorio = (id: string) => {
    setCursos(cursos.map(c => c.id === id ? { ...c, obrigatorio: !c.obrigatorio } : c));
  };

  const toggleCursoPontua = (id: string) => {
    setCursos(cursos.map(c => c.id === id ? { ...c, pontua: !c.pontua } : c));
  };

  const cursosObrigatorios = cursos.filter(c => c.obrigatorio);
  const cursosOpcionais = cursos.filter(c => !c.obrigatorio);
  const cargaHorariaTotal = cursos.reduce((sum, c) => sum + (c.obrigatorio ? c.cargaHoraria : 0), 0);

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">Etapa 1 — Nivelamento</h2>
        <p className="text-slate-600">Configure os cursos, avaliações e critérios de aprovação</p>
      </div>

      <div className="space-y-6">
        {/* Configuração Geral */}
        <Card>
          <CardHeader>
            <CardTitle>Configuração Geral</CardTitle>
            <CardDescription>Dados principais da etapa de nivelamento</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nome da Etapa</Label>
                <Input defaultValue="Nivelamento" />
              </div>
              <div className="space-y-2">
                <Label>Modalidade</Label>
                <Select defaultValue="remota-assincrona">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remota-assincrona">Remota Assíncrona</SelectItem>
                    <SelectItem value="remota-sincrona">Remota Síncrona</SelectItem>
                    <SelectItem value="hibrida">Híbrida</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Carga Horária Total</Label>
                <Input value={`${cargaHorariaTotal}h`} disabled className="bg-slate-50" />
              </div>
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
              <Label>Plataforma Utilizada</Label>
              <Input placeholder="Ex: Moodle, Google Classroom..." />
            </div>
          </CardContent>
        </Card>

        {/* Cursos */}
        <Card>
          <CardHeader>
            <CardTitle>Cursos do Nivelamento</CardTitle>
            <CardDescription>
              Configure os cursos obrigatórios e opcionais
              <div className="mt-2 flex gap-4 text-sm">
                <span className="text-teal-600 font-medium">{cursosObrigatorios.length} obrigatórios</span>
                <span className="text-slate-600">{cursosOpcionais.length} opcionais</span>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-2 text-sm font-medium text-slate-600">Curso</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-slate-600 w-32">C.H.</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-slate-600 w-32">Obrigatório</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-slate-600 w-32">Pontua</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-slate-600 w-24">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {cursos.map((curso) => (
                    <tr key={curso.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-2">
                        <div className="font-medium text-slate-900">{curso.nome}</div>
                      </td>
                      <td className="py-3 px-2 text-center text-slate-600">
                        {curso.cargaHoraria}h
                      </td>
                      <td className="py-3 px-2 text-center">
                        <div className="flex justify-center">
                          <Switch 
                            checked={curso.obrigatorio}
                            onCheckedChange={() => toggleCursoObrigatorio(curso.id)}
                          />
                        </div>
                      </td>
                      <td className="py-3 px-2 text-center">
                        <div className="flex justify-center">
                          <Switch 
                            checked={curso.pontua}
                            onCheckedChange={() => toggleCursoPontua(curso.id)}
                          />
                        </div>
                      </td>
                      <td className="py-3 px-2 text-center">
                        <Badge 
                          variant="secondary"
                          className={curso.status === 'ativo' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}
                        >
                          {curso.status === 'ativo' ? 'Ativo' : 'Rascunho'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Button variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Novo Curso
            </Button>
          </CardContent>
        </Card>

        {/* Regra de Conclusão dos Cursos */}
        <Card>
          <CardHeader>
            <CardTitle>Regra de Conclusão dos Cursos</CardTitle>
            <CardDescription>Defina quando um curso é considerado concluído</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <Label>Exigir 100% de completude</Label>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <Label>Exigir vídeo introdutório</Label>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <Label>Exigir conclusão de atividades</Label>
              <Switch defaultChecked />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <Label>Exigir acerto mínimo em exercícios</Label>
                <Switch defaultChecked />
              </div>
              <div className="pl-3">
                <Input type="number" placeholder="Percentual mínimo de acerto" defaultValue="70" />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <Label>Exigir avaliação final do curso</Label>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Prova Final */}
        <Card>
          <CardHeader>
            <CardTitle>Prova Final</CardTitle>
            <CardDescription>Configuração da avaliação final da etapa</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-teal-50 border border-teal-200 rounded-lg">
              <Label htmlFor="habilitarProva" className="cursor-pointer">Habilitar prova final</Label>
              <Switch 
                id="habilitarProva"
                checked={habilitarProva}
                onCheckedChange={setHabilitarProva}
              />
            </div>

            {habilitarProva && (
              <div className="space-y-4 pl-4 border-l-2 border-teal-500">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Data</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Horário</Label>
                    <Input type="time" />
                  </div>
                  <div className="space-y-2">
                    <Label>Duração (minutos)</Label>
                    <Input type="number" defaultValue="120" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Quantidade de Questões</Label>
                    <Input type="number" defaultValue="50" />
                  </div>
                  <div className="space-y-2">
                    <Label>Tipo</Label>
                    <Select defaultValue="multipla-escolha">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="multipla-escolha">Múltipla Escolha</SelectItem>
                        <SelectItem value="dissertativa">Dissertativa</SelectItem>
                        <SelectItem value="mista">Mista</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <Label>Questões apresentadas sequencialmente</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <Label>Permitir voltar em questões anteriores</Label>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <Label>Botão enviar obrigatório ao finalizar</Label>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Cálculo da Nota */}
        <Card className="border-2 border-teal-200">
          <CardHeader className="bg-teal-50">
            <CardTitle>Cálculo da Nota e Aprovação</CardTitle>
            <CardDescription>Configure a fórmula de pontuação e critérios de classificação</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="bg-slate-900 text-white p-6 rounded-lg">
              <div className="text-sm text-slate-400 mb-2">Fórmula de Cálculo</div>
              <div className="font-mono text-lg">
                Nota Final = (Nota Prova × {pontuacaoMaximaProva}%) + (Cursos Opcionais × {pontosCursosOpcionais}%) + Bônus Localidade
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Pontuação Máxima da Prova (%)</Label>
                  <span className="text-sm font-medium text-teal-600">{pontuacaoMaximaProva}%</span>
                </div>
                <Slider 
                  value={[pontuacaoMaximaProva]} 
                  onValueChange={(value) => setPontuacaoMaximaProva(value[0])}
                  max={100}
                  step={5}
                  className="py-4"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Pontos por Cursos Não Obrigatórios (%)</Label>
                  <span className="text-sm font-medium text-teal-600">{pontosCursosOpcionais}%</span>
                </div>
                <Slider 
                  value={[pontosCursosOpcionais]} 
                  onValueChange={(value) => setPontosCursosOpcionais(value[0])}
                  max={100}
                  step={5}
                  className="py-4"
                />
              </div>

              <div className="space-y-2">
                <Label>Bônus por Localidade/Residência</Label>
                <Input type="number" placeholder="Pontos extras" defaultValue="5" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Nota Mínima para Aprovação</Label>
                  <span className="text-sm font-medium text-teal-600">{notaMinimaAprovacao} pontos</span>
                </div>
                <Slider 
                  value={[notaMinimaAprovacao]} 
                  onValueChange={(value) => setNotaMinimaAprovacao(value[0])}
                  max={100}
                  step={5}
                  className="py-4"
                />
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <Label>Regra de corte: % da maior nota da turma</Label>
                  <Switch />
                </div>

                <div className="space-y-2">
                  <Label>Quantidade de Aprovados para Próxima Etapa</Label>
                  <Input 
                    type="number" 
                    value={numeroAprovados}
                    onChange={(e) => setNumeroAprovados(e.target.value)}
                    placeholder="Número de classificados"
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <Label>Gerar lista preliminar</Label>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <Label>Permitir recurso</Label>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <Label>Gerar lista final</Label>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certificação */}
        <Card>
          <CardHeader>
            <CardTitle>Certificação</CardTitle>
            <CardDescription>Configure a emissão de certificados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-teal-50 border border-teal-200 rounded-lg">
              <Label htmlFor="emitirCertificado" className="cursor-pointer">Emitir certificado</Label>
              <Switch 
                id="emitirCertificado"
                checked={emitirCertificado}
                onCheckedChange={setEmitirCertificado}
              />
            </div>

            {emitirCertificado && (
              <div className="space-y-4 pl-4 border-l-2 border-teal-500">
                <div className="space-y-2">
                  <Label>Critério para Certificação</Label>
                  <Select defaultValue="aprovacao">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aprovacao">Aprovação na etapa</SelectItem>
                      <SelectItem value="conclusao">Conclusão de todos os cursos</SelectItem>
                      <SelectItem value="nota">Nota mínima atingida</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Texto Padrão do Certificado</Label>
                  <Input placeholder="Ex: Certificamos que concluiu com aproveitamento..." />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navegação */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          <Button variant="outline" onClick={() => navigate('/etapa-inscricao')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Button onClick={() => navigate('/etapa-imersao')}>
            Continuar
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
