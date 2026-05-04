Crie a tela **Programas** para o sistema **BRISA ONE**, mantendo a navbar superior já existente no protótipo. A seção **Programas** deve estar visivelmente ativa na navbar e ser acessível a partir dela.

## Objetivo da tela
Essa tela deve permitir visualizar **todos os programas cadastrados no sistema**, mas de forma organizada e escalável, sem abrir mostrando de forma desordenada programas antigos que hoje já não são prioridade.

A ideia é semelhante à lógica já usada na tela de **Pessoas**:
- o sistema possui um histórico completo;
- mas a experiência inicial deve priorizar o que está **ativo, em andamento ou recente**;
- o histórico deve continuar acessível por filtros, abas ou classificações.

Importante:
Essa tela não deve ser só uma lista de nomes de programas. Ela precisa mostrar também **informações estratégicas e operacionais** de cada programa, para que o gestor consiga entender rapidamente:
- quais programas estão ativos;
- em que etapa cada programa/turma está;
- quantas pessoas estão vinculadas;
- como está o andamento do ciclo do programa;
- quais datas e marcos são mais importantes.

---

## Estrutura geral da tela

### 1. Navbar superior
Manter a navbar atual.
Itens:
- Dashboard
- Carreira
- Programas
- Pessoas
- Cadastro

Nesta tela, **Programas** deve estar ativo.

---

### 2. Topo da página
Criar um topo semelhante ao padrão da tela de Pessoas.

Elementos:
- título principal: **Programas**
- subtítulo curto, algo como:
  “Gerencie os programas cadastrados, acompanhe suas turmas, etapas e andamento geral.”
- no canto superior direito, adicionar ações principais como:
  - **Novo programa**
  - **Cadastrar edital** ou **Nova turma/edição**
- se fizer sentido visualmente, incluir uma ação secundária como:
  - **Importar edital**
  - **Vincular turma**

O resultado deve deixar claro que:
- existe o conceito de programa;
- mas também existe edição/turma vinculada a ele;
- a tela pode exibir os dois níveis com boa organização.

---

### 3. Organização principal por contexto
Assim como foi feito em Pessoas, criar uma organização inicial com abas, chips ou segmentação horizontal.

Sugestão de categorias:
- **Programas Ativos**
- **Em Andamento**
- **Todas as Turmas**
- **Histórico**
- **Encerrados**

Ou uma estrutura equivalente, desde que:
- a visão inicial priorize o presente;
- o histórico não polua a primeira leitura.

Comportamento esperado:
- abrir por padrão em **Programas Ativos** ou **Em Andamento**
- mostrar contadores em cada aba

Exemplo visual:
- Programas Ativos (4)
- Em Andamento (3)
- Todas as Turmas (18)
- Histórico (11)

---

### 4. Cards de resumo no topo
Logo abaixo das abas, criar uma faixa de cards executivos com métricas rápidas.

Cards sugeridos:
- Total de programas
- Programas ativos
- Turmas em andamento
- Em período de inscrição
- Em nivelamento
- Em imersão
- Encerrados
- Projetos ativos

Esses cards devem permitir leitura rápida da situação geral do ecossistema de programas.

Exemplo de leitura:
- Total de programas: 12
- Programas ativos: 4
- Turmas em andamento: 5
- Em inscrição: 2
- Em nivelamento: 2
- Em imersão: 3
- Encerrados: 7
- Projetos ativos: 14

---

### 5. Barra de busca e filtros
A tela precisa ser preparada para escalar.

Adicionar uma barra de busca ampla, seguida de filtros robustos, parecidos com o padrão da tela de Pessoas.

Campo de busca:
- buscar por nome do programa, edição, turma, parceiro, instituição, localidade ou identificador

Filtros sugeridos:
- status do programa
- etapa atual
- ano / edição / turma
- instituição parceira
- localidade
- período
- tipo de programa
- presença de edital vinculado
- situação: ativo, em andamento, inscrição aberta, encerrado, arquivado

Adicionar botão de:
- **Filtros avançados**

Visualmente, essa área deve passar a sensação de sistema robusto, pronto para crescer.

---

### 6. Listagem principal dos programas
A visualização principal deve ser mais rica que uma simples tabela, mas ainda organizada o suficiente para escalar.

### Direção recomendada
Criar uma **listagem em cards horizontais ou tabela expandida**, onde cada item represente um programa/turma com um bom resumo visual.

Cada item deve permitir entender rapidamente:
- qual é o programa
- em que edição/turma ele está
- qual o status atual
- em que etapa ele se encontra
- quantas pessoas estão vinculadas
- quais são as datas principais
- qual é o andamento geral

---

## Informações que cada programa deve exibir

### Informações principais
Cada item da listagem deve mostrar, no mínimo:
- nome do programa
- nome da turma/edição
- parceiro / instituição vinculada
- localidade
- período de execução
- status geral
- etapa atual

Exemplo:
**Residência em TIC BRISA – EASY/UFAL**  
Turma UFAL 2025.2  
Maceió - AL  
Ago/2025 → Jun/2026  
Status: Em andamento  
Etapa atual: Imersão

---

### Informações operacionais resumidas
Cada item também deve mostrar mini-indicadores rápidos, como:
- inscritos
- participantes ativos
- em nivelamento
- em imersão
- quantidade de projetos
- quantidade de orientadores
- taxa de conclusão ou progresso geral
- próximo marco importante

Esses dados podem aparecer como:
- mini cards internos
- chips
- indicadores compactos
- pequenos blocos numéricos

Exemplo:
- Inscritos: 612
- Ativos: 229
- Imersão: 44
- Projetos: 10
- Orientadores: 4
- Próximo marco: Avaliação parcial em 7 dias

---

### Informações estratégicas específicas do programa
Como essa tela precisa mostrar mais do que cadastro, incluir também campos visuais como:
- fase atual do ciclo do programa
- quantidade de vagas ofertadas por etapa
- quantidade ocupada
- progresso do cronograma
- presença de edital
- situação documental
- alertas ou pendências importantes

Exemplos de alertas:
- contratos pendentes
- documentos pendentes
- prazo de confirmação aberto
- avaliação próxima
- turma com risco operacional

---

## 7. Representação visual da etapa atual
Isso é importante.

Cada programa deve mostrar de forma muito clara sua etapa atual.
Não quero apenas texto perdido.

Usar algum componente visual como:
- chip de status
- stepper de progresso
- badge destacado
- barra de progresso do ciclo

Etapas possíveis:
- Inscrição
- Seleção
- Nivelamento
- Prova final
- Imersão
- Avaliação parcial
- Avaliação final
- Encerrado

Se possível, mostrar isso de forma visual e elegante.

Exemplo:
[Inscrição] → [Nivelamento] → [Imersão] → [Encerrado]

Com a etapa atual destacada.

---

## 8. Ações por programa
Cada item da listagem deve ter ações claras.

Ações sugeridas:
- **Visualizar programa**
- **Editar**
- **Ver dashboard**
- **Ver pessoas vinculadas**
- **Ver cronograma**
- **Mais ações**

Essa tela deve parecer navegável e conectada ao restante do sistema.

---

## 9. Ideia importante de modelagem visual
Não tratar tudo como se “programa” e “turma” fossem a mesma coisa, mas também não complicar demais a interface.

Quero uma UX que deixe claro:
- o programa é a estrutura principal;
- a edição/turma é a instância operacional;
- a tela lista de forma compreensível esses itens sem confundir o usuário.

Uma boa solução é:
- mostrar o **nome do programa** como título principal;
- mostrar **turma/edição** como subtítulo;
- e exibir os dados operacionais daquela edição.

---

## 10. Possível organização visual do item da lista
Cada card/linha de programa pode ser dividido em blocos:

### Bloco esquerdo
- nome do programa
- turma/edição
- parceiro/instituição
- localidade

### Bloco central
- etapa atual
- período
- status
- mini linha do ciclo

### Bloco direito
- indicadores rápidos
- próximo prazo
- ações

Isso deixará a tela mais executiva e profissional.

---

## 11. Escalabilidade
A tela deve ser claramente preparada para grande crescimento.

Ela deve evitar:
- cards enormes demais
- excesso de texto
- listas desorganizadas
- dificuldade de comparar programas entre si

Ela deve permitir:
- leitura rápida
- comparação entre programas
- identificação imediata dos ativos
- acesso fácil ao histórico

---

## 12. Estilo visual
Seguir o padrão já existente no sistema:
- visual corporativo e institucional
- estilo SaaS moderno
- navbar azul escura
- fundo claro
- detalhes em azul claro
- cards limpos
- boa hierarquia visual
- aparência profissional e escalável

---

## 13. Interações esperadas
Mesmo sendo protótipo, quero que a tela pareça funcional.

Comportamentos desejados:
- clicar em **Programas** na navbar leva para esta tela
- clicar em um item do programa sugere navegação para um perfil detalhado do programa
- clicar em “Ver dashboard” sugere navegação para dashboard filtrada por aquele programa
- clicar em “Ver pessoas vinculadas” sugere abertura da tela de Pessoas já filtrada
- filtros devem parecer funcionais
- abas devem parecer clicáveis

---

## 14. Resultado esperado
Quero uma tela de **Programas** que:
- seja consistente com a tela de Pessoas;
- permita visualizar todos os programas sem poluição;
- destaque os programas atuais e relevantes;
- mostre informações operacionais e estratégicas de cada programa;
- pareça pronta para uso real em um sistema de gestão acadêmica.

A tela deve comunicar claramente:
**“aqui eu gerencio e acompanho o ciclo de vida dos programas”**.