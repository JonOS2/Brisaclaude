import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Parceiro {
  id: string;
  nome: string;
}

interface Etapa {
  id: string;
  nome: string;
  tipo: string;
  descricao: string;
  modalidade: string;
  duracao: string;
  vagas: number | string;
  isPadrao?: boolean;
}

interface EditalContextType {
  // Dados do Programa
  nomePrograma: string;
  setNomePrograma: (value: string) => void;
  nomeTurma: string;
  setNomeTurma: (value: string) => void;
  executora: string;
  setExecutora: (value: string) => void;
  parceiros: Parceiro[];
  setParceiros: (value: Parceiro[]) => void;
  objetivo: string;
  setObjetivo: (value: string) => void;
  localidade: string;
  setLocalidade: (value: string) => void;
  emailSuporte: string;
  setEmailSuporte: (value: string) => void;
  linkPagina: string;
  setLinkPagina: (value: string) => void;
  dataPublicacao: string;
  setDataPublicacao: (value: string) => void;
  periodoInscricaoInicio: string;
  setPeriodoInscricaoInicio: (value: string) => void;
  periodoInscricaoFim: string;
  setPeriodoInscricaoFim: (value: string) => void;
  observacoes: string;
  setObservacoes: (value: string) => void;
  statusEdital: string;
  setStatusEdital: (value: string) => void;
  
  // Estrutura de Etapas
  etapas: Etapa[];
  setEtapas: (value: Etapa[]) => void;
  
  // Etapa Inscrição
  inscricaoData: any;
  setInscricaoData: (value: any) => void;
  
  // Etapa Nivelamento
  nivelamentoData: any;
  setNivelamentoData: (value: any) => void;
  
  // Etapa Imersão
  imersaoData: any;
  setImersaoData: (value: any) => void;
}

const EditalContext = createContext<EditalContextType | undefined>(undefined);

export function EditalProvider({ children }: { children: ReactNode }) {
  const [nomePrograma, setNomePrograma] = useState('');
  const [nomeTurma, setNomeTurma] = useState('');
  const [executora, setExecutora] = useState('');
  const [parceiros, setParceiros] = useState<Parceiro[]>([]);
  const [objetivo, setObjetivo] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [emailSuporte, setEmailSuporte] = useState('');
  const [linkPagina, setLinkPagina] = useState('');
  const [dataPublicacao, setDataPublicacao] = useState('');
  const [periodoInscricaoInicio, setPeriodoInscricaoInicio] = useState('');
  const [periodoInscricaoFim, setPeriodoInscricaoFim] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [statusEdital, setStatusEdital] = useState('rascunho');
  
  const [etapas, setEtapas] = useState<Etapa[]>([
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
  
  const [inscricaoData, setInscricaoData] = useState<any>({});
  const [nivelamentoData, setNivelamentoData] = useState<any>({});
  const [imersaoData, setImersaoData] = useState<any>({});

  return (
    <EditalContext.Provider
      value={{
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
        etapas,
        setEtapas,
        inscricaoData,
        setInscricaoData,
        nivelamentoData,
        setNivelamentoData,
        imersaoData,
        setImersaoData,
      }}
    >
      {children}
    </EditalContext.Provider>
  );
}

export function useEdital() {
  const context = useContext(EditalContext);
  if (!context) {
    throw new Error('useEdital must be used within EditalProvider');
  }
  return context;
}
