Crie a tela **Dashboard** para o sistema **BRISA ONE**, mantendo a navbar superior já existente no protótipo. A seção **Dashboard** deve estar visivelmente ativa na navbar e ser acessível a partir dela.

Objetivo da tela:
Esta deve ser a **tela principal e mais importante do sistema**. Ela não deve ser apenas uma página com números soltos. Deve funcionar como um **painel de comando gerencial e operacional**, permitindo que a coordenação visualize rapidamente:
- a saúde geral dos programas e turmas;
- o funil do processo seletivo;
- o andamento das etapas de Nivelamento e Imersão;
- riscos operacionais e alertas críticos;
- desempenho dos alunos e projetos;
- evidências de impacto acadêmico e profissional.

Importante:
O sistema gerencia programas com regras específicas. O design da dashboard deve refletir essa lógica real do negócio, e não um dashboard genérico.

### Contexto de negócio que deve orientar a interface
Considere que:
- há programas, editais e turmas;
- uma turma passa por um funil: inscrição → seleção para nivelamento → nivelamento → prova final → classificação para imersão → imersão → avaliações → conclusão;
- o Nivelamento é remoto/assíncrono;
- a Imersão é híbrida, em grupo, com acompanhamento por projeto;
- existem regras de cotas;
- a tela deve priorizar **programas e turmas ativas**, não o histórico inteiro logo de entrada.

### Regras centrais do programa que devem influenciar a organização dos indicadores
Considere as seguintes regras e use-as como base para os blocos da interface:
- até 250 alunos entram no Nivelamento;
- até 50 alunos seguem para a Imersão;
- no Nivelamento existem cursos obrigatórios e não obrigatórios;
- não concluir cursos obrigatórios reprova/elimina o aluno dessa progressão;
- a prova final do Nivelamento vale até 80 pontos;
- cursos não obrigatórios podem somar até 20 pontos;
- pode haver pontuação adicional por critérios do edital;
- aprovação no Nivelamento depende de regra de corte relativa ao melhor desempenho da turma;
- a Imersão dura 6 meses;
- há reuniões presenciais semanais na Imersão;
- faltas geram advertência e eventual desligamento;
- a avaliação da Imersão tem componentes como desempenho do grupo, participação e avaliação do orientador;
- a dashboard deve conseguir mostrar tanto operação quanto impacto.

## Estrutura geral da tela

### 1. Navbar superior
Manter a navbar já existente.
Itens:
- Dashboard
- Carreira
- Programas
- Pessoas
- Cadastro

Nesta tela, **Dashboard** deve estar ativa.

---

### 2. Topo da página
Criar um topo forte, executivo e muito legível.

Elementos:
- título principal: **Dashboard**
- subtítulo curto, institucional, algo como:
  “Visão geral dos programas, turmas, desempenho e impacto.”
- ao lado direito, incluir ações rápidas discretas, como:
  - Exportar relatório
  - Atualizar dados
  - Compartilhar visão

---

### 3. Barra global de filtros
Logo abaixo do topo, adicionar uma barra de filtros robusta, horizontal, visualmente limpa e com cara de sistema real.

Filtros obrigatórios:
- Programa
- Edital / Turma
- Período
- Localidade
- Etapa
- Status
- Projeto
- Orientador
- Instituição
- Categoria de cota
- Toggle: **Somente ativos** / **Incluir histórico**

Comportamento esperado:
- por padrão, a dashboard deve abrir em **programas/turmas ativas**
- o histórico deve ser acessível, mas não deve poluir a visão inicial

Exemplo de chips ou filtros aplicados:
- Programa: BRISA TIC
- Turma: UFAL 2025.2
- Status: Ativos
- Etapa: Todas

---

### 4. Faixa de indicadores executivos
Criar a primeira linha da dashboard com cards de alto impacto visual, limpos e fáceis de escanear.

Cards sugeridos:
- Programas ativos
- Turmas ativas
- Pessoas ativas
- Em Nivelamento
- Em Imersão
- Projetos ativos
- Taxa geral de aprovação
- Alertas críticos

Esses cards devem ter:
- número principal em destaque
- rótulo claro
- pequena variação percentual ou comparação temporal, se couber
- microdescrição opcional

Exemplo de conteúdo visual:
- Programas ativos: 3
- Turmas ativas: 5
- Pessoas ativas: 428
- Em Nivelamento: 250
- Em Imersão: 50
- Projetos ativos: 10
- Taxa geral de aprovação: 78%
- Alertas críticos: 14

Esses cards devem comunicar rapidamente a saúde do sistema.

---

### 5. Linha 2: Funil do edital + Alertas críticos
Dividir a próxima linha em dois blocos principais.

#### Bloco A — Funil do edital
Esse é um dos elementos centrais da tela.
Criar um gráfico de funil ou bloco de etapas mostrando a progressão da turma.

Etapas sugeridas:
- Inscritos
- Inscrições válidas
- Selecionados para Nivelamento
- Confirmados no Nivelamento
- Ativos no Nivelamento
- Aprovados no Nivelamento
- Classificados para Imersão
- Confirmados na Imersão
- Contratos assinados
- Ativos na Imersão
- Concluintes
- Aprovados finais

Esse bloco deve ter leitura muito clara.
Pode usar:
- funil vertical
- steps com barras
- cards encadeados com percentuais de conversão

Exemplo visual de números fictícios:
- Inscritos: 612
- Inscrições válidas: 540
- Selecionados para Nivelamento: 250
- Confirmados no Nivelamento: 236
- Ativos no Nivelamento: 229
- Aprovados no Nivelamento: 67
- Classificados para Imersão: 50
- Confirmados na Imersão: 47
- Contratos assinados: 45
- Ativos na Imersão: 44
- Concluintes: 40
- Aprovados finais: 36

Esse bloco deve parecer estratégico e operacional ao mesmo tempo.

#### Bloco B — Alertas críticos
Ao lado do funil, criar uma área de alertas operacionais prioritários.

Mostrar itens como:
- alunos com cursos obrigatórios pendentes
- alunos abaixo da faixa de aprovação
- alunos com segunda falta não justificada
- alunos com risco de desligamento
- contratos pendentes
- recibos/bolsas pendentes
- documentos pendentes
- projetos com avaliação próxima
- grupos com baixo desempenho

Visual:
- lista com severidade por cor
- ícones de alerta
- contadores por categoria
- destaque para urgência

Exemplo:
- 8 alunos com cursos obrigatórios não concluídos
- 3 alunos com 2 faltas não justificadas
- 5 contratos pendentes de assinatura
- 2 grupos com avaliação parcial em 7 dias

---

### 6. Linha 3: Blocos por etapa
Criar uma terceira linha com dois grandes painéis lado a lado:
- **Nivelamento**
- **Imersão**

Esses dois blocos devem ser claramente separados, mas visualmente consistentes.

#### Bloco Nivelamento
Objetivo:
mostrar a saúde da primeira etapa do programa.

Indicadores obrigatórios:
- alunos em Nivelamento
- % com cursos obrigatórios concluídos
- média de cursos não obrigatórios concluídos
- progresso médio geral
- aptos para prova
- média da prova final
- taxa de aprovação do Nivelamento
- nota de corte atual

Visualizações sugeridas:
- barras de progresso por faixa: 0%, 33%, 66%, 100%
- gráfico de distribuição das notas da prova
- mini ranking por assunto da prova
- indicador de cursos obrigatórios com maior atraso

Também incluir um pequeno bloco de “Atenção” dentro dessa seção:
- alunos sem concluir cursos obrigatórios
- alunos com progresso baixo
- alunos ainda não aptos para prova

Exemplo visual:
- Progresso médio: 71%
- Cursos obrigatórios concluídos: 84%
- Média da prova: 63,4
- Nota de corte atual: 58,0
- Aptos para prova: 198

#### Bloco Imersão
Objetivo:
mostrar a saúde da segunda etapa do programa.

Indicadores obrigatórios:
- alunos ativos na Imersão
- grupos/projetos ativos
- presença média semanal
- alunos com advertência
- alunos em risco de desligamento
- média da avaliação parcial
- média da avaliação final
- taxa de aprovação da Imersão

Visualizações sugeridas:
- gráfico de presença por semana
- gráfico de andamento dos projetos
- distribuição de faltas justificadas e não justificadas
- comparativo entre desempenho por projeto
- comparativo entre componentes avaliativos

Também incluir um pequeno bloco de “Atenção” dentro dessa seção:
- alunos com faltas críticas
- grupos com baixa evolução
- apresentações próximas
- pendências de bolsa ou contrato

Exemplo visual:
- Alunos ativos: 44
- Projetos ativos: 10
- Presença média: 91%
- Advertências: 4
- Em risco de desligamento: 2
- Média parcial: 72,8
- Média final projetada: 79,4

---

### 7. Linha 4: Perfil dos participantes + Desempenho acadêmico/técnico
Dividir essa linha em dois blocos.

#### Bloco Perfil dos participantes
Objetivo:
mostrar a composição da base atual.

Gráficos sugeridos:
- distribuição por sexo
- faixa etária
- categoria de cota
- residentes em AL x fora de AL
- instituição de origem
- curso de origem
- nível de formação

Escolher visualizações limpas:
- barras horizontais
- donut charts apenas onde fizer sentido
- histogramas para idade
- ranking para instituições e cursos

Importante:
essa parte deve ajudar a gestão a enxergar diversidade, origem e perfil dos participantes, sem exagero visual.

#### Bloco Desempenho acadêmico e técnico
Objetivo:
mostrar evolução de competências e desempenho qualitativo.

Indicadores e dimensões sugeridas:
- proatividade
- comunicação
- responsabilidade / organização
- autoestudo
- trabalho em equipe
- produção técnica
- qualidade técnica

Visualizações:
- radar chart comparativo
- barras por competência
- comparativo entre avaliação parcial e final
- heatmap por projeto ou turma, se fizer sentido

Essa área deve parecer mais analítica e pedagógica.

---

### 8. Linha 5: Impacto acadêmico e carreira
Criar um grande bloco de destaque na parte inferior da dashboard com foco em eficiência do programa.

Objetivo:
mostrar evidências de impacto real além do desempenho interno.

Indicadores sugeridos:
- matrícula acadêmica ativa
- permanência no curso
- conclusão da graduação
- alunos em estágio
- alunos empregados
- alunos atuando em tecnologia
- contratação por empresa parceira
- evolução antes x durante x depois do programa

Visualizações sugeridas:
- cards de impacto
- gráfico de trajetória temporal
- comparativo antes/durante/depois
- distribuição por situação acadêmica e profissional
- bloco de egressos em destaque

Exemplo de cards:
- Matrícula ativa: 88%
- Em estágio: 32%
- Empregados: 24%
- Atuando em tecnologia: 41%
- Concluintes da graduação: 18%
- Contratados por parceiros: 9%

Essa seção deve comunicar valor institucional e servir para demonstrar eficiência do programa.

---

### 9. Bloco lateral ou inferior de Agenda e Prazos
Adicionar uma área de apoio com próximos eventos e datas importantes.

Itens sugeridos:
- próxima prova do Nivelamento
- próxima avaliação parcial
- próxima avaliação final
- prazo de confirmação de participação
- prazo de assinatura de contrato
- documentos pendentes
- pendências de validação
- entregas próximas

Visual:
- lista cronológica
- calendário compacto
- timeline curta de próximos marcos

Exemplo:
- 24/10 — Divulgação da lista preliminar da Imersão
- 27/10 — Encerramento de recursos
- 03/03 — Avaliação parcial dos projetos
- 26/05 — Avaliação final dos projetos

---

## Hierarquia visual da tela
A dashboard deve seguir esta ordem de leitura:
1. filtros globais
2. cards executivos
3. funil + alertas
4. visão por etapa
5. perfil e desempenho
6. impacto e carreira
7. agenda e prazos

A interface deve ser clara, estratégica e escalável.

---

## Interações desejadas
Mesmo sendo protótipo, a tela deve parecer navegável e inteligente.

Comportamentos desejados:
- clicar em **Dashboard** na navbar abre essa tela
- clicar em um card como “Pessoas ativas” sugere navegação para a tela de Pessoas
- clicar em “Projetos ativos” sugere navegação para Programas
- clicar em dados de impacto/carreira sugere navegação para Carreira
- filtros devem parecer funcionais
- gráficos e cards devem passar sensação de drill-down, mesmo que no protótipo seja apenas visual

---

## Direção visual
Seguir o estilo do restante do sistema:
- visual corporativo, institucional e moderno
- aparência de plataforma SaaS de gestão educacional
- navbar azul escura
- fundo claro
- detalhes em azul claro
- cards bem organizados
- excelente hierarquia visual
- gráficos profissionais e limpos
- sem poluição visual
- sem excesso de cores aleatórias
- foco em legibilidade e leitura rápida

---

## Orientações importantes para evitar erros
- não criar um dashboard genérico de BI
- não encher a tela com gráficos soltos sem relação com a operação do programa
- não tratar a dashboard como uma simples página de resumo
- a tela deve refletir a lógica real do funil e das etapas
- destacar sempre a diferença entre Nivelamento e Imersão
- priorizar programas e turmas ativas
- permitir leitura executiva e também operacional
- mostrar indicadores de impacto, não apenas indicadores internos

---

## Resultado esperado
Quero uma dashboard com cara de produto real, robusta e convincente, que mostre:
- gestão do funil do edital
- andamento por etapa
- riscos e alertas
- desempenho dos alunos e projetos
- perfil dos participantes
- impacto acadêmico e profissional

A tela deve parecer o **centro de comando do sistema**.