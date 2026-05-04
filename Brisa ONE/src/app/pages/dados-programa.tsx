import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useEdital } from '../context/edital-context';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { X, Plus, ArrowRight, Save, Check } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';

export function DadosPrograma() {
  const navigate = useNavigate();
  const {
    nomePrograma,
    setNomePrograma,
    nomeTurma,
    setNomeTurma,
    executora,
    setExecutora,
    parceiros,
    setParceiros,
    objetivo,
    setObjetivo,
    localidade,
    setLocalidade,
    emailSuporte,
    setEmailSuporte,
    linkPagina,
    setLinkPagina,
    dataPublicacao,
    setDataPublicacao,
    periodoInscricaoInicio,
    setPeriodoInscricaoInicio,
    periodoInscricaoFim,
    setPeriodoInscricaoFim,
    observacoes,
    setObservacoes,
    statusEdital,
    setStatusEdital,
  } = useEdital();

  const [novoParceiro, setNovoParceiro] = useState('');

  const handleAddParceiro = () => {
    if (novoParceiro.trim()) {
      setParceiros([...parceiros, { id: Date.now().toString(), nome: novoParceiro }]);
      setNovoParceiro('');
      simulateAutoSave();
    }
  };

  const handleRemoveParceiro = (id: string) => {
    setParceiros(parceiros.filter(p => p.id !== id));
    simulateAutoSave();
  };

  const simulateAutoSave = () => {
    toast.success('Rascunho salvo automaticamente');
  };

  const handleContinue = () => {
    navigate('/estrutura-etapas');
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">Dados do Programa</h2>
        <p className="text-slate-600">Preencha as informações gerais do edital e do programa</p>
      </div>

      <div className="space-y-6">
        {/* Informações Básicas */}
        <Card>
          <CardHeader>
            <CardTitle>Informações Básicas</CardTitle>
            <CardDescription>Dados principais do programa e edital</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nomePrograma">
                  Nome do Programa <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nomePrograma"
                  placeholder="Ex: Programa de Formação em Tecnologia"
                  value={nomePrograma}
                  onChange={(e) => {
                    setNomePrograma(e.target.value);
                    simulateAutoSave();
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nomeTurma">
                  Nome da Turma/Edição <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nomeTurma"
                  placeholder="Ex: Turma 2026.1"
                  value={nomeTurma}
                  onChange={(e) => {
                    setNomeTurma(e.target.value);
                    simulateAutoSave();
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="executora">
                Executora <span className="text-red-500">*</span>
              </Label>
              <Input
                id="executora"
                placeholder="Ex: Universidade Federal de Tecnologia"
                value={executora}
                onChange={(e) => {
                  setExecutora(e.target.value);
                  simulateAutoSave();
                }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="objetivo">
                Objetivo do Programa <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="objetivo"
                placeholder="Descreva o objetivo principal do programa e os resultados esperados..."
                rows={4}
                value={objetivo}
                onChange={(e) => {
                  setObjetivo(e.target.value);
                  simulateAutoSave();
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Parceiros */}
        <Card>
          <CardHeader>
            <CardTitle>Parceiros</CardTitle>
            <CardDescription>Instituições parceiras do programa</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Nome do parceiro"
                value={novoParceiro}
                onChange={(e) => setNovoParceiro(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddParceiro()}
              />
              <Button onClick={handleAddParceiro} type="button">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar
              </Button>
            </div>

            {parceiros.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {parceiros.map((parceiro) => (
                  <Badge key={parceiro.id} variant="secondary" className="pl-3 pr-2 py-1.5">
                    {parceiro.nome}
                    <button
                      onClick={() => handleRemoveParceiro(parceiro.id)}
                      className="ml-2 hover:bg-slate-200 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Localidade e Contato */}
        <Card>
          <CardHeader>
            <CardTitle>Localidade e Contato</CardTitle>
            <CardDescription>Informações de localização e suporte</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="localidade">Localidade</Label>
                <Input
                  id="localidade"
                  placeholder="Ex: São Paulo, SP"
                  value={localidade}
                  onChange={(e) => {
                    setLocalidade(e.target.value);
                    simulateAutoSave();
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emailSuporte">
                  E-mail de Suporte <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="emailSuporte"
                  type="email"
                  placeholder="Ex: suporte@programa.edu.br"
                  value={emailSuporte}
                  onChange={(e) => {
                    setEmailSuporte(e.target.value);
                    simulateAutoSave();
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkPagina">Link da Página Oficial</Label>
              <Input
                id="linkPagina"
                type="url"
                placeholder="https://programa.edu.br"
                value={linkPagina}
                onChange={(e) => {
                  setLinkPagina(e.target.value);
                  simulateAutoSave();
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Datas e Prazos */}
        <Card>
          <CardHeader>
            <CardTitle>Datas e Prazos</CardTitle>
            <CardDescription>Defina as datas importantes do edital</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dataPublicacao">Data de Publicação</Label>
                <Input
                  id="dataPublicacao"
                  type="date"
                  value={dataPublicacao}
                  onChange={(e) => {
                    setDataPublicacao(e.target.value);
                    simulateAutoSave();
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="periodoInscricaoInicio">
                  Início das Inscrições <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="periodoInscricaoInicio"
                  type="date"
                  value={periodoInscricaoInicio}
                  onChange={(e) => {
                    setPeriodoInscricaoInicio(e.target.value);
                    simulateAutoSave();
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="periodoInscricaoFim">
                  Fim das Inscrições <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="periodoInscricaoFim"
                  type="date"
                  value={periodoInscricaoFim}
                  onChange={(e) => {
                    setPeriodoInscricaoFim(e.target.value);
                    simulateAutoSave();
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status e Observações */}
        <Card>
          <CardHeader>
            <CardTitle>Status e Observações</CardTitle>
            <CardDescription>Controle de publicação e notas adicionais</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="statusEdital">Status do Edital</Label>
              <Select value={statusEdital} onValueChange={setStatusEdital}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rascunho">Rascunho</SelectItem>
                  <SelectItem value="em_revisao">Em Revisão</SelectItem>
                  <SelectItem value="publicado">Publicado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="observacoes">Observações Gerais</Label>
              <Textarea
                id="observacoes"
                placeholder="Notas internas, observações sobre o edital..."
                rows={3}
                value={observacoes}
                onChange={(e) => {
                  setObservacoes(e.target.value);
                  simulateAutoSave();
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Ações */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2">
            {/* Auto-save feedback via toast */}
          </div>

          <div className="flex gap-3">
            <Button variant="outline">
              <Save className="w-4 h-4 mr-2" />
              Salvar Rascunho
            </Button>
            <Button onClick={handleContinue}>
              Continuar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}