import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useEdital } from '../context/edital-context';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ArrowRight, 
  ArrowLeft, 
  Plus, 
  GripVertical, 
  Edit2, 
  Copy, 
  Trash2,
  RotateCcw,
  Users,
  Clock,
  MapPin,
  Sparkles
} from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

export function EstruturaEtapas() {
  const navigate = useNavigate();
  const { etapas, setEtapas } = useEdital();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEtapa, setEditingEtapa] = useState<any>(null);

  const handleDuplicateEtapa = (etapa: any) => {
    const newEtapa = {
      ...etapa,
      id: `etapa-${Date.now()}`,
      nome: `${etapa.nome} (Cópia)`,
      isPadrao: false,
    };
    setEtapas([...etapas, newEtapa]);
  };

  const handleDeleteEtapa = (id: string) => {
    setEtapas(etapas.filter(e => e.id !== id));
  };

  const handleRestoreDefault = () => {
    setEtapas([
      {
        id: 'etapa-0',
        nome: 'Inscrição',
        tipo: 'Inscrição / Triagem',
        descricao: 'Etapa de inscrições e triagem inicial dos candidatos',
        modalidade: 'Online',
        duracao: '30 dias',
        vagas: 'Ilimitado',
        isPadrao: true,
      },
      {
        id: 'etapa-1',
        nome: 'Nivelamento',
        tipo: 'Capacitação',
        descricao: 'Cursos online e avaliação teórica',
        modalidade: 'Remota Assíncrona',
        duracao: '3 meses',
        vagas: 250,
        isPadrao: true,
      },
      {
        id: 'etapa-2',
        nome: 'Imersão',
        tipo: 'Projeto Prático',
        descricao: 'Desenvolvimento de projetos em grupos',
        modalidade: 'Híbrida',
        duracao: '6 meses',
        vagas: 50,
        isPadrao: true,
      },
    ]);
  };

  const handleAddEtapa = () => {
    setEditingEtapa({
      id: `etapa-${Date.now()}`,
      nome: '',
      tipo: '',
      descricao: '',
      modalidade: '',
      duracao: '',
      vagas: '',
      isPadrao: false,
    });
    setDialogOpen(true);
  };

  const handleSaveEtapa = () => {
    if (editingEtapa) {
      const existingIndex = etapas.findIndex(e => e.id === editingEtapa.id);
      if (existingIndex >= 0) {
        const newEtapas = [...etapas];
        newEtapas[existingIndex] = editingEtapa;
        setEtapas(newEtapas);
      } else {
        setEtapas([...etapas, editingEtapa]);
      }
      setDialogOpen(false);
      setEditingEtapa(null);
    }
  };

  const handleEditEtapa = (etapa: any) => {
    setEditingEtapa({ ...etapa });
    setDialogOpen(true);
  };

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">Estrutura das Etapas</h2>
        <p className="text-slate-600">Configure as etapas do processo seletivo</p>
      </div>

      {/* Informativo sobre estrutura sugerida */}
      <div className="mb-6 bg-teal-50 border border-teal-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-medium text-teal-900 mb-1">Estrutura sugerida pelo sistema</div>
            <div className="text-sm text-teal-700">
              O sistema criou automaticamente 3 etapas padrão baseadas em processos seletivos acadêmicos. 
              Você pode editar, excluir, reordenar ou adicionar novas etapas conforme necessário.
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Etapas */}
      <div className="space-y-4 mb-6">
        {etapas.map((etapa, index) => (
          <Card key={etapa.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* Drag Handle */}
                <button className="cursor-move text-slate-400 hover:text-slate-600 mt-1">
                  <GripVertical className="w-5 h-5" />
                </button>

                {/* Número da Etapa */}
                <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold flex-shrink-0">
                  {index}
                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-slate-900 text-lg">{etapa.nome}</h3>
                        {etapa.isPadrao && (
                          <Badge variant="secondary" className="bg-teal-100 text-teal-700 text-xs">
                            Padrão
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-slate-600 mb-2">{etapa.tipo}</div>
                      <p className="text-slate-700">{etapa.descricao}</p>
                    </div>
                  </div>

                  {/* Informações da Etapa */}
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <div>
                        <div className="text-xs text-slate-500">Modalidade</div>
                        <div className="font-medium text-slate-900">{etapa.modalidade}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <div>
                        <div className="text-xs text-slate-500">Duração</div>
                        <div className="font-medium text-slate-900">{etapa.duracao}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-slate-400" />
                      <div>
                        <div className="text-xs text-slate-500">Vagas</div>
                        <div className="font-medium text-teal-600">
                          {typeof etapa.vagas === 'number' ? `${etapa.vagas} vagas` : etapa.vagas}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-200">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleEditEtapa(etapa)}
                    >
                      <Edit2 className="w-3.5 h-3.5 mr-1.5" />
                      Editar
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDuplicateEtapa(etapa)}
                    >
                      <Copy className="w-3.5 h-3.5 mr-1.5" />
                      Duplicar
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDeleteEtapa(etapa.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-3.5 h-3.5 mr-1.5" />
                      Excluir
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Botões de Ação */}
      <div className="flex gap-3 mb-6">
        <Button onClick={handleAddEtapa} variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Nova Etapa
        </Button>
        <Button onClick={handleRestoreDefault} variant="outline">
          <RotateCcw className="w-4 h-4 mr-2" />
          Restaurar Estrutura Padrão
        </Button>
      </div>

      {/* Navegação */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        <Button variant="outline" onClick={() => navigate('/')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <Button onClick={() => navigate('/etapa-inscricao')}>
          Continuar
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Dialog para Adicionar/Editar Etapa */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingEtapa?.nome ? 'Editar Etapa' : 'Adicionar Nova Etapa'}
            </DialogTitle>
            <DialogDescription>
              Configure as informações da etapa do processo seletivo
            </DialogDescription>
          </DialogHeader>

          {editingEtapa && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nome da Etapa</Label>
                  <Input
                    value={editingEtapa.nome}
                    onChange={(e) => setEditingEtapa({ ...editingEtapa, nome: e.target.value })}
                    placeholder="Ex: Fase de Entrevistas"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Tipo</Label>
                  <Select 
                    value={editingEtapa.tipo} 
                    onValueChange={(value) => setEditingEtapa({ ...editingEtapa, tipo: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Inscrição / Triagem">Inscrição / Triagem</SelectItem>
                      <SelectItem value="Capacitação">Capacitação</SelectItem>
                      <SelectItem value="Projeto Prático">Projeto Prático</SelectItem>
                      <SelectItem value="Avaliação">Avaliação</SelectItem>
                      <SelectItem value="Entrevista">Entrevista</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Descrição</Label>
                <Textarea
                  value={editingEtapa.descricao}
                  onChange={(e) => setEditingEtapa({ ...editingEtapa, descricao: e.target.value })}
                  placeholder="Descreva o objetivo e formato desta etapa..."
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Modalidade</Label>
                  <Select 
                    value={editingEtapa.modalidade} 
                    onValueChange={(value) => setEditingEtapa({ ...editingEtapa, modalidade: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Online">Online</SelectItem>
                      <SelectItem value="Presencial">Presencial</SelectItem>
                      <SelectItem value="Híbrida">Híbrida</SelectItem>
                      <SelectItem value="Remota Assíncrona">Remota Assíncrona</SelectItem>
                      <SelectItem value="Remota Síncrona">Remota Síncrona</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Duração</Label>
                  <Input
                    value={editingEtapa.duracao}
                    onChange={(e) => setEditingEtapa({ ...editingEtapa, duracao: e.target.value })}
                    placeholder="Ex: 2 meses"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Vagas</Label>
                  <Input
                    value={editingEtapa.vagas}
                    onChange={(e) => setEditingEtapa({ ...editingEtapa, vagas: e.target.value })}
                    placeholder="Ex: 100"
                  />
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSaveEtapa}>
              Salvar Etapa
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
