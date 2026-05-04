Crie a tela **Detalhe do Programa** para o sistema **BRISA ONE**, mantendo a navbar superior já existente no protótipo. A seção **Programas** deve permanecer acessível pela navbar, mas agora a interface deve representar a visualização detalhada de **um programa/turma específica**.

## Objetivo da tela
Essa tela deve ser uma das áreas centrais do sistema.

Ela não deve parecer apenas uma ficha cadastral do programa.  
Ela deve funcionar como o **centro operacional e gerencial de uma turma/edição**, permitindo que a coordenação acompanhe:

- identidade do programa
- status atual
- cronograma
- processo seletivo
- andamento do nivelamento
- andamento da imersão
- grupos e projetos
- pessoas vinculadas
- avaliações
- documentos e regras
- impacto e resultados

Importante:
Essa tela precisa comunicar claramente que o gestor está olhando para **uma edição operacional específica** de um programa, e não apenas para um cadastro genérico.

---

## Contexto de negócio que deve orientar a interface
Considere a lógica real do programa:

- o programa possui edições/turmas
- o processo passa por: inscrição → seleção → nivelamento → prova final → classificação para imersão → imersão → avaliações → conclusão
- o **nivelamento** é remoto/assíncrono e tem lógica própria
- a **imersão** é híbrida, dura 6 meses, envolve grupos e projetos
- existem cronogramas com marcos muito importantes
- existem regras formais de cotas, faltas, contratos, bolsa, avaliações e aprovação
- essa tela deve servir tanto para leitura executiva quanto para operação do dia a dia

---

## Regras importantes que devem influenciar a organização dos blocos
Considere, na construção visual dessa tela, que:

- até **250 alunos** podem entrar no nivelamento
- até **50 alunos** seguem para a imersão
- o nivelamento possui cursos obrigatórios e não obrigatórios
- não concluir cursos obrigatórios reprova ou elimina a progressão
- a prova final do nivelamento vale até **80 pontos**
- cursos não obrigatórios podem somar até **20 pontos**
- pode haver pontuação adicional por critérios do edital
- a imersão dura **6 meses**
- a imersão exige média de **20 horas semanais**
- há reuniões presenciais semanais
- a **segunda falta não justificada** gera advertência
- a **terceira falta não justificada** gera exclusão
- a **sexta falta total**, mesmo justificada, também exclui
- a avaliação da imersão tem dois momentos: parcial e final
- as avaliações envolvem desempenho do grupo, participação e avaliação do orientador
- há contratos, bolsa e notebook em comodato

Essa tela deve refletir essa lógica real e não ser genérica.

---

# Estrutura geral da tela

## 1. Navbar superior
Manter a navbar já existente com:
- Dashboard
- Carreira
- Programas
- Pessoas
- Cadastro

Nesta tela, **Programas** deve estar ativo.

---

## 2. Cabeçalho principal do programa
Criar um header forte no topo da página, com aparência executiva e institucional.

### Exibir:
- nome do programa
- turma/edição
- instituição/parceiro vinculado
- localidade
- período do programa
- status geral
- etapa atual

### Exemplo de leitura:
**Residência em TIC BRISA – EASY/UFAL**  
Turma UFAL 2025.2  
Maceió – AL  
Ago/2025 → Jun/2026  
Status: Em andamento  
Etapa atual: Imersão

### No canto direito do cabeçalho:
Adicionar ações principais como:
- **Editar programa**
- **Ver dashboard**
- **Gerar relatório**
- **Mais ações**

Essas ações devem parecer importantes e úteis.

---

## 3. Cards-resumo logo abaixo do cabeçalho
Criar uma faixa de cards compactos com os principais indicadores da turma.

### Cards sugeridos:
- Inscritos
- Selecionados para Nivelamento
- Ativos no Nivelamento
- Aprovados para Imersão
- Ativos na Imersão
- Concluintes
- Projetos ativos
- Alertas críticos

---

## 4. Navegação interna por abas
Organize o conteúdo em abas internas.

### Abas obrigatórias:
- **Visão Geral**
- **Cronograma**
- **Processo Seletivo**
- **Nivelamento**
- **Imersão**
- **Projetos**
- **Pessoas**
- **Avaliação e Desempenho**
- **Documentos e Regras**
- **Impacto e Resultados**

---

# Estrutura de cada aba

## Aba 1 — Visão Geral
Essa deve ser a aba inicial.

### Blocos dentro da aba:
#### A. Resumo executivo
- status geral
- etapa atual
- ocupação das vagas
- andamento geral do ciclo

#### B. Mini linha do tempo / ciclo do programa
Mostrar o ciclo:
- Inscrição
- Nivelamento
- Prova final
- Imersão
- Avaliação final
- Encerramento

Destacar a etapa atual.

#### C. Alertas e pendências
Mostrar:
- contratos pendentes
- documentos pendentes
- alunos em risco
- avaliação próxima
- grupo com baixo desempenho
- pendência de bolsa
- prazo importante se aproximando

#### D. Próximos marcos
Mostrar os próximos eventos do cronograma.

---

## Aba 2 — Cronograma
### Mostrar:
- período de inscrição
- divulgação de resultado preliminar
- período de recursos
- resultado final
- confirmação de participação
- início e fim do nivelamento
- data da prova final
- divulgação da imersão
- assinatura de contratos
- início da imersão
- treinamento presencial
- avaliação parcial
- avaliação final
- emissão de certificados

### Visual recomendado:
- timeline vertical ou horizontal
- cada marco com status:
  - concluído
  - em andamento
  - próximo
  - atrasado

---

## Aba 3 — Processo Seletivo
### Mostrar:
- total de inscritos
- inscrições válidas
- inscrições pendentes
- desclassificados
- lista de espera
- selecionados para nivelamento
- confirmações
- distribuição por cota
- distribuição por instituição de origem
- ranking por pontuação/classificação

### Incluir:
#### A. Funil resumido do seletivo
Etapas sugeridas:
- Inscritos
- Válidos
- Selecionados para Nivelamento
- Confirmados
- Ativos

#### B. Bloco de cotas
Mostrar ocupação por categoria:
- ampla concorrência
- PcD / neurodivergência
- negros/pardos
- mulheres
- 45+

#### C. Bloco de origem dos candidatos
- instituições de origem
- tipo de formação
- localidade

---

## Aba 4 — Nivelamento
Essa é uma das abas mais importantes.

### Mostrar:
- total em nivelamento
- progresso médio
- cursos obrigatórios concluídos
- cursos não obrigatórios concluídos
- aptos para prova
- média da prova
- nota de corte
- aprovados para imersão

### Dividir a aba em blocos:

#### A. Saúde do Nivelamento
- progresso médio geral
- % com todos os obrigatórios concluídos
- % aptos para prova
- alunos atrasados
- alunos com risco de não aprovação

#### B. Cursos
Mostrar uma lista, grade ou tabela dos cursos com:
- nome do curso
- obrigatório ou não obrigatório
- taxa de conclusão
- percentual médio de progresso
- curso com maior atraso

### MUITO IMPORTANTE
Nesta seção de **Cursos**, incluir no topo direito uma ação clara:
- **Submeter planilha de cursos**
- ação secundária opcional: **Baixar modelo**

Essa ação representa o envio da planilha que contém os **dados de cada aluno em cada curso**.  
A interface deve deixar claro que o desempenho/progresso dos cursos será alimentado por planilha, e não manualmente um por um.

A planilha de cursos deve representar algo como:
- aluno
- curso
- status
- percentual de progresso
- conclusão
- data de conclusão
- obrigatório / não obrigatório

Mesmo sendo protótipo, essa ação deve parecer real e importante.

#### C. Prova Final
- média geral
- distribuição de notas
- ranking por assunto ou seção
- aprovados x reprovados
- nota de corte atual

### MUITO IMPORTANTE
Nesta seção de **Prova Final**, incluir no topo direito uma ação clara:
- **Submeter planilha da prova**
- ação secundária opcional: **Baixar modelo**

Essa ação representa o envio da planilha com a **nota de cada aluno em cada seção/assunto da prova**.

A interface deve transmitir que:
- os dados da prova serão enviados por planilha;
- a tela irá consumir esses dados para gerar gráficos, médias e análises.

Exemplo de estrutura esperada da planilha:
- aluno
- nota total
- nota por seção
- nota por assunto
- status de aprovação
- posição/classificação

#### D. Atenção
- alunos com obrigatórios pendentes
- alunos abaixo da faixa de corte
- alunos ainda sem aptidão para prova

---

## Aba 5 — Imersão
Essa é a aba mais nobre da operação.

### Mostrar:
- alunos ativos na imersão
- grupos ativos
- projetos ativos
- presença média
- advertências
- alunos em risco de desligamento
- média da parcial
- média final projetada
- contratos
- bolsas
- notebooks

### Dividir em blocos:

#### A. Operação da Imersão
- alunos ativos
- grupos
- projetos
- andamento geral
- presença média

#### B. Frequência e disciplina
- faltas justificadas
- faltas não justificadas
- advertências
- risco de exclusão
- alunos com segunda falta
- alunos com terceira falta
- alunos com sexta falta total

#### C. Recursos operacionais
- contratos assinados
- contratos pendentes
- bolsas em dia
- recibos pendentes
- notebooks entregues
- notebooks pendentes/devolvidos

#### D. Avaliações da etapa
- parcial
- final
- médias da turma
- evolução parcial → final

### MUITO IMPORTANTE
Nesta aba de **Imersão**, incluir uma ação visível e importante:
- **Submeter planilha de avaliações da imersão**
- ação secundária opcional: **Baixar modelo**

Essa planilha deve representar as **notas de cada aluno em cada categoria avaliativa**.

A interface deve deixar claro que os dados de avaliação serão enviados por planilha, e usados para compor:
- médias individuais
- médias por grupo
- médias por critério
- comparativo parcial x final
- ranking e desempenho consolidado

A planilha pode contemplar:
- aluno
- grupo
- avaliação parcial/final
- notas por categoria
- subtotal por bloco
- nota final consolidada

#### E. Grupos e Projetos da Imersão
Adicionar, dentro da aba de Imersão, um bloco forte e visual para mostrar os **grupos**.

Quero visualizar claramente:
- nome ou identificador do grupo
- tema do projeto
- orientador
- quantidade de membros
- média do grupo
- status do grupo
- estágio do projeto
- próxima apresentação
- alertas do grupo

Visual recomendado:
- cards por grupo
- ou tabela analítica com boa hierarquia visual
- cada grupo deve parecer uma unidade importante da etapa

Exemplo do que cada card de grupo pode mostrar:
- Grupo 03
- Tema: Plataforma de Gestão Acadêmica
- Orientador: Prof. João Silva
- Membros: 5
- Média parcial: 7,8
- Média final projetada: 8,4
- Status: Dentro do esperado
- Próxima apresentação: 03/03

Essa área deve ser bem trabalhada, porque os grupos são centrais na imersão.

---

## Aba 6 — Projetos
### Exibir:
- nome do projeto
- grupo responsável
- orientador
- parceiro/empresa
- status do projeto
- estágio atual
- andamento
- próxima apresentação
- desempenho do grupo
- alertas do projeto

### Visual recomendado:
Usar **cards por projeto** com:
- nome
- status
- orientador
- número de membros
- andamento
- próxima entrega
- nota parcial / final se houver

---

## Aba 7 — Pessoas
### Mostrar:
- lista de participantes
- status na turma
- etapa atual
- grupo/projeto
- presença
- desempenho
- risco
- situação acadêmica/profissional resumida

### Filtros:
- etapa
- status
- grupo
- orientador
- presença
- risco
- desempenho

---

## Aba 8 — Avaliação e Desempenho
### Mostrar:
- nota do grupo
- nota de participação
- nota de comportamento/desempenho
- resultado parcial
- resultado final
- média ponderada
- aprovação final

### Blocos recomendados:
#### A. Visão geral das avaliações
- média da parcial
- média da final
- taxa de aprovação
- dispersão de notas

#### B. Desempenho por componente
- NG
- NP
- NC

#### C. Evolução
- comparação parcial x final
- comparação por grupo
- comparação por orientador

#### D. Competências
- proatividade
- comunicação
- responsabilidade
- autoestudo
- trabalho em equipe
- produção técnica
- qualidade técnica

### Importante
Essa aba deve consumir e refletir os dados enviados pelas planilhas da imersão.

---

## Aba 9 — Documentos e Regras
### Mostrar:
- edital vinculado
- documentos do programa
- regras principais
- cotas previstas
- critérios de aprovação
- regras de desligamento
- documentos operacionais
- observações importantes

### Organização sugerida:
#### A. Documentos principais
- edital
- anexos
- contratos
- templates
- documentos da turma

#### B. Regras resumidas
- critérios do seletivo
- regras do nivelamento
- regras da imersão
- critérios de avaliação
- critérios de aprovação
- regras de faltas

#### C. Situação documental
- pendente
- validado
- em análise

---

## Aba 10 — Impacto e Resultados
### Indicadores sugeridos:
- concluintes
- aprovados finais
- taxa de conclusão
- taxa de aprovação
- permanência acadêmica
- estágio
- emprego
- atuação em tecnologia
- contratação por empresa parceira
- comparação entre entrada e saída

---

# Organização visual da tela
Quero uma interface com hierarquia muito clara:

1. header do programa
2. cards-resumo
3. abas
4. conteúdo profundo dentro das abas

---

# Direção de UX
A tela deve comunicar ao usuário:
- “eu estou dentro de uma turma específica”
- “aqui eu consigo operar e acompanhar tudo dela”
- “posso navegar rapidamente entre cronograma, pessoas, projetos, avaliações e resultados”

Não quero uma sensação de formulário longo.  
Quero uma experiência de **hub gerencial e operacional**.

---

# Interações desejadas
Mesmo sendo protótipo, quero que a tela pareça funcional.

### Comportamentos esperados:
- ao clicar em um item da tela de Programas, abrir esta tela
- abas devem parecer clicáveis
- cards e gráficos devem sugerir drill-down
- clicar em pessoas deve sugerir ida ao perfil individual
- clicar em projetos deve sugerir ida ao detalhamento do projeto
- clicar em dashboard deve sugerir dashboard filtrada nesse programa
- o cronograma deve parecer interativo
- documentos devem parecer acessáveis/baixáveis
- os botões de **submeter planilha** devem parecer reais, importantes e integrados ao fluxo operacional

---

# Estilo visual
Seguir o padrão já existente do sistema:
- visual corporativo e institucional
- estilo SaaS moderno
- navbar azul escura
- fundo claro
- detalhes em azul claro
- cards limpos e bem espaçados
- excelente legibilidade
- gráficos discretos e profissionais
- aparência confiável e robusta

---

# O que evitar
- não transformar essa tela em uma simples ficha cadastral
- não repetir a dashboard inteira sem adaptação
- não criar excesso de tabelas cruas
- não misturar programa genérico com turma operacional sem deixar clara a hierarquia
- não esconder informações críticas como cronograma, etapa atual, alertas, grupos, projetos e entradas por planilha

---

# Resultado esperado
Quero uma tela de **Detalhe do Programa** que pareça o verdadeiro centro daquela turma/edição.

Ela deve combinar:
- identidade institucional
- visão executiva
- operação do dia a dia
- acompanhamento pedagógico
- gestão de pessoas e grupos
- gestão de projetos
- controle formal de regras e documentos
- análise de impacto e resultados
- importação operacional por planilha

A sensação final deve ser:
**“essa é a visão-mãe do programa”**.