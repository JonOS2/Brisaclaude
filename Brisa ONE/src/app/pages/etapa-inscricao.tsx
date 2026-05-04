import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Switch } from '../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ArrowLeft, ArrowRight, Plus, X } from 'lucide-react';
import { Badge } from '../components/ui/badge';

interface Campo {
  id: string;
  nome: string;
  obrigatorio: boolean;
}

interface Documento {
  id: string;
  nome: string;
  obrigatorio: boolean;
  tipoArquivo: string;
}

interface Cota {
  id: string;
  nome: string;
  percentual: number;
}

export function EtapaInscricao() {
  const navigate = useNavigate();

  const [nomeEtapa, setNomeEtapa] = useState('Inscrição');
  const [tipoEtapa, setTipoEtapa] = useState('Inscrição / Triagem');
  const [descricaoEtapa, setDescricaoEtapa] = useState('Etapa de inscrições e triagem inicial dos candidatos');
  const [periodoInicio, setPeriodoInicio] = useState('');
  const [periodoFim, setPeriodoFim] = useState('');
  const [situacao, setSituacao] = useState('obrigatoria');

  const [publicoAlvo, setPublicoAlvo] = useState('');
  const [requisitosFormacao, setRequisitosFormacao] = useState('');
  const [exigirLinkedin, setExigirLinkedin] = useState(false);
  const [exigirCpf, setExigirCpf] = useState(true);
  const [umaInscricaoPorPessoa, setUmaInscricaoPorPessoa] = useState(true);

  const [campos, setCampos] = useState<Campo[]>([
    { id: '1', nome: 'Nome completo', obrigatorio: true },
    { id: '2', nome: 'E-mail', obrigatorio: true },
    { id: '3', nome: 'CPF', obrigatorio: true },
    { id: '4', nome: 'Data de nascimento', obrigatorio: true },
    { id: '5', nome: 'Telefone', obrigatorio: true },
    { id: '6', nome: 'LinkedIn', obrigatorio: false },
    { id: '7', nome: 'Município', obrigatorio: true },
    { id: '8', nome: 'Estado', obrigatorio: true },
    { id: '9', nome: 'Formação', obrigatorio: true },
    { id: '10', nome: 'Instituição de ensino', obrigatorio: false },
    { id: '11', nome: 'Grau de escolaridade', obrigatorio: true },
  ]);

  const [documentos, setDocumentos] = useState<Documento[]>([
    { id: '1', nome: 'Documento de identidade', obrigatorio: true, tipoArquivo: 'PDF, JPG' },
    { id: '2', nome: 'CPF', obrigatorio: true, tipoArquivo: 'PDF, JPG' },
    { id: '3', nome: 'Comprovante de escolaridade', obrigatorio: true, tipoArquivo: 'PDF' },
  ]);

  const [cotas, setCotas] = useState<Cota[]>([
    { id: '1', nome: 'Ampla concorrência', percentual: 50 },
    { id: '2', nome: 'PCD / Neurodivergentes', percentual: 10 },
    { id: '3', nome: 'Negros e pardos', percentual: 30 },
    { id: '4', nome: 'Mulheres', percentual: 0 },
    { id: '5', nome: '45+', percentual: 10 },
  ]);

  const [selecionaProximaEtapa, setSelecionaProximaEtapa] = useState(true);
  const [numeroClassificados, setNumeroClassificados] = useState('250');
  const [geraListaEspera, setGeraListaEspera] = useState(true);
  const [permitirRecursos, setPermitirRecursos] = useState(true);

  const toggleCampoObrigatorio = (id: string) => {
    setCampos(campos.map(c => c.id === id ? { ...c, obrigatorio: !c.obrigatorio } : c));
  };

  const toggleDocumentoObrigatorio = (id: string) => {
    setDocumentos(documentos.map(d => d.id === id ? { ...d, obrigatorio: !d.obrigatorio } : d));
  };

  const updateCotaPercentual = (id: string, percentual: number) => {
    setCotas(cotas.map(c => c.id === id ? { ...c, percentual } : c));
  };

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">Etapa 0 — Inscrição</h2>
        <p className="text-slate-600">Configure o formulário de inscrição e elegibilidade</p>
      </div>

      <div className="space-y-6">
        {/* BLOCO A — Informações da Etapa */}
        <Card>
          <CardHeader>
            <CardTitle>Informações da Etapa</CardTitle>
            <CardDescription>Dados básicos da etapa de inscrição</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nome da Etapa</Label>
                <Input value={nomeEtapa} onChange={(e) => setNomeEtapa(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Tipo</Label>
                <Select value={tipoEtapa} onValueChange={setTipoEtapa}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Inscrição / Triagem">Inscrição / Triagem</SelectItem>
                    <SelectItem value="Avaliação">Avaliação</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Descrição</Label>
              <Textarea 
                value={descricaoEtapa} 
                onChange={(e) => setDescricaoEtapa(e.target.value)}
                rows={2}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Início do Período</Label>
                <Input type="date" value={periodoInicio} onChange={(e) => setPeriodoInicio(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Fim do Período</Label>
                <Input type="date" value={periodoFim} onChange={(e) => setPeriodoFim(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Situação</Label>
                <Select value={situacao} onValueChange={setSituacao}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="obrigatoria">Obrigatória</SelectItem>
                    <SelectItem value="opcional">Opcional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* BLOCO B — Elegibilidade */}
        <Card>
          <CardHeader>
            <CardTitle>Elegibilidade</CardTitle>
            <CardDescription>Requisitos e regras de participação</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Público-Alvo</Label>
              <Textarea 
                placeholder="Descreva o público-alvo do programa..."
                value={publicoAlvo}
                onChange={(e) => setPublicoAlvo(e.target.value)}
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label>Requisitos de Formação</Label>
              <Textarea 
                placeholder="Ex: Ensino médio completo, graduação em andamento..."
                value={requisitosFormacao}
                onChange={(e) => setRequisitosFormacao(e.target.value)}
                rows={2}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <Label htmlFor="linkedin" className="cursor-pointer">Exigir LinkedIn?</Label>
                <Switch 
                  id="linkedin" 
                  checked={exigirLinkedin} 
                  onCheckedChange={setExigirLinkedin}
                />
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <Label htmlFor="cpf" className="cursor-pointer">Exigir CPF válido?</Label>
                <Switch 
                  id="cpf" 
                  checked={exigirCpf} 
                  onCheckedChange={setExigirCpf}
                />
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <Label htmlFor="umaInscricao" className="cursor-pointer">Permitir apenas uma inscrição por pessoa?</Label>
                <Switch 
                  id="umaInscricao" 
                  checked={umaInscricaoPorPessoa} 
                  onCheckedChange={setUmaInscricaoPorPessoa}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* BLOCO C — Formulário de Inscrição */}
        <Card>
          <CardHeader>
            <CardTitle>Formulário de Inscrição</CardTitle>
            <CardDescription>Campos que o candidato deverá preencher</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {campos.map((campo) => (
              <div key={campo.id} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="font-medium text-slate-900">{campo.nome}</div>
                  {campo.obrigatorio && (
                    <Badge variant="secondary" className="bg-red-100 text-red-700 text-xs">
                      Obrigatório
                    </Badge>
                  )}
                </div>
                <Switch 
                  checked={campo.obrigatorio} 
                  onCheckedChange={() => toggleCampoObrigatorio(campo.id)}
                />
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Campo Personalizado
            </Button>
          </CardContent>
        </Card>

        {/* BLOCO D — Documentos Exigidos */}
        <Card>
          <CardHeader>
            <CardTitle>Documentos Exigidos</CardTitle>
            <CardDescription>Arquivos que devem ser anexados na inscrição</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {documentos.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium text-slate-900">{doc.nome}</div>
                  <div className="text-xs text-slate-500 mt-1">Tipos aceitos: {doc.tipoArquivo}</div>
                </div>
                <div className="flex items-center gap-3">
                  {doc.obrigatorio && (
                    <Badge variant="secondary" className="bg-red-100 text-red-700 text-xs">
                      Obrigatório
                    </Badge>
                  )}
                  <Switch 
                    checked={doc.obrigatorio} 
                    onCheckedChange={() => toggleDocumentoObrigatorio(doc.id)}
                  />
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Documento
            </Button>
          </CardContent>
        </Card>

        {/* BLOCO E — Cotas */}
        <Card>
          <CardHeader>
            <CardTitle>Configuração de Cotas</CardTitle>
            <CardDescription>Defina os percentuais de vagas reservadas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {cotas.map((cota) => (
              <div key={cota.id} className="flex items-center gap-4">
                <div className="flex-1">
                  <Label>{cota.nome}</Label>
                </div>
                <div className="w-32">
                  <div className="flex items-center gap-2">
                    <Input 
                      type="number" 
                      value={cota.percentual}
                      onChange={(e) => updateCotaPercentual(cota.id, parseInt(e.target.value) || 0)}
                      className="text-right"
                    />
                    <span className="text-slate-600">%</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <Label>Permitir apenas uma cota por candidato</Label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <Label>Reverter vagas não preenchidas para ampla concorrência</Label>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* BLOCO F — Classificação para o Nivelamento */}
        <Card>
          <CardHeader>
            <CardTitle>Classificação para a Próxima Etapa</CardTitle>
            <CardDescription>Configure a seleção de candidatos para o nivelamento</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-teal-50 border border-teal-200 rounded-lg">
              <Label htmlFor="selecionaProxima" className="cursor-pointer">
                Esta etapa seleciona candidatos para a próxima?
              </Label>
              <Switch 
                id="selecionaProxima"
                checked={selecionaProximaEtapa} 
                onCheckedChange={setSelecionaProximaEtapa}
              />
            </div>

            {selecionaProximaEtapa && (
              <div className="space-y-4 pl-4 border-l-2 border-teal-500">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Número de Classificados</Label>
                    <Input 
                      type="number"
                      value={numeroClassificados}
                      onChange={(e) => setNumeroClassificados(e.target.value)}
                      placeholder="Ex: 250"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Critério de Classificação</Label>
                    <Select defaultValue="ordem">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ordem">Ordem de inscrição</SelectItem>
                        <SelectItem value="sorteio">Sorteio</SelectItem>
                        <SelectItem value="analise">Análise curricular</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Critério de Desempate</Label>
                  <Input placeholder="Ex: Maior idade, ordem de inscrição..." />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <Label htmlFor="listaEspera" className="cursor-pointer">Gerar lista de espera</Label>
                    <Switch 
                      id="listaEspera"
                      checked={geraListaEspera} 
                      onCheckedChange={setGeraListaEspera}
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <Label htmlFor="recursos" className="cursor-pointer">Permitir recursos</Label>
                    <Switch 
                      id="recursos"
                      checked={permitirRecursos} 
                      onCheckedChange={setPermitirRecursos}
                    />
                  </div>
                </div>

                {permitirRecursos && (
                  <div className="space-y-2">
                    <Label>Prazo de Recurso</Label>
                    <Input type="number" placeholder="Dias após a divulgação" />
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navegação */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          <Button variant="outline" onClick={() => navigate('/estrutura-etapas')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Button onClick={() => navigate('/etapa-nivelamento')}>
            Continuar
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
