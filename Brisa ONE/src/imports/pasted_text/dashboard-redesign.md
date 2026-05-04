Quero que você edite a tela atual de **Dashboard** do sistema BRISA ONE, mantendo a navbar já existente e a identidade visual geral do sistema, mas corrigindo principalmente dois pontos: **Funil do Edital** e **Perfil dos Participantes**.

## Objetivo da correção
A tela atual já tem uma boa base, mas alguns blocos precisam ficar mais estratégicos, analíticos e compactos.

### Problemas a resolver
1. **Funil do Edital**
- Está muito grande verticalmente
- Está redundante
- Está ocupando espaço demais para uma informação que poderia ser mostrada de forma mais inteligente
- A quantidade de etapas está excessiva para a visão principal da dashboard

2. **Perfil dos Participantes**
- Está simplificado demais
- Hoje parece mais um resumo textual do que uma área analítica
- Precisa gerar mais insights relevantes para gestão
- Deve ficar visualmente mais rica e mais próxima de um painel analítico real

---

# 1. Ajustar o bloco “Funil do Edital”

## O que quero
Redesenhe esse bloco para que ele fique **mais compacto, mais executivo e menos redundante**.

## Problema atual
Hoje ele mostra muitas etapas em sequência com barras longas, uma embaixo da outra. Isso deixa a leitura cansativa e ocupa muito espaço.

## Como quero que fique
Transforme o funil em uma visualização mais enxuta, priorizando os **macroestágios do processo**, e não todos os microdetalhes.

### Em vez de mostrar todas as etapas detalhadas na visão principal:
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

### Quero agrupar isso em algo mais sintético, por exemplo:
- **Inscritos**
- **Inscrições válidas**
- **Em Nivelamento**
- **Aprovados para Imersão**
- **Em Imersão**
- **Concluintes / Aprovados finais**

Ou outra estrutura equivalente, desde que fique mais compacta e mais clara.

## Regras para esse novo funil
- Ele deve ocupar **menos altura**
- Deve ser mais visual e menos cansativo
- Pode ser em formato de:
  - funil horizontal,
  - steps com cards,
  - colunas comparativas,
  - ou cards sequenciais com taxa de conversão
- Mostrar **valor absoluto** e, se possível, **percentual de conversão**
- A leitura deve ser rápida

## Importante
Os **microestados** como “confirmados”, “contratos assinados”, etc. não precisam desaparecer do sistema, mas não devem poluir a visão principal da dashboard.

### Se fizer sentido:
- deixar um link ou botão como **“Ver detalhamento do funil”**
- esse detalhamento pode abrir uma visão expandida, drawer, modal ou painel secundário

## Exemplo do tipo de leitura desejada
- Inscritos: 612
- Válidos: 540
- Nivelamento: 229
- Aprovados para Imersão: 50
- Imersão: 44
- Concluintes: 40
- Aprovados finais: 36

Se quiser, você pode ainda destacar:
- taxa de aproveitamento do Nivelamento
- taxa de conversão até Imersão
- taxa final de conclusão

O importante é que a seção fique **mais estratégica e menos verbosa**.

---

# 2. Reformular o bloco “Perfil dos Participantes”

## O que quero
Essa seção precisa deixar de ser apenas um resumo simples e virar uma **área analítica de perfil da base**.

Quero algo mais próximo de dashboards analíticos reais, com gráficos variados, boa hierarquia visual e geração de insights.

## Problema atual
Hoje esse bloco está muito simples, com pouca exploração dos dados. Ele não aproveita o potencial de análise da base.

## Como quero que fique
Transforme o bloco “Perfil dos Participantes” em uma seção mais robusta, podendo ocupar uma área maior na dashboard e ser organizada em múltiplos gráficos menores.

### Essa seção deve mostrar insights como:
- **Alunos por tipo de formação**
- **Vagas / participantes por categoria de cota**
- **Alunos por faixa etária**
- **Alunos por etnia**
- **Alunos por gênero**
- **Top instituições de origem**
- Se fizer sentido, também:
  - participantes com deficiência / neurodivergência
  - distribuição por nível de formação
  - distribuição por curso de origem

## Visualmente, quero algo mais próximo de um painel analítico
Use gráficos mais trabalhados e variados, como:
- barras horizontais
- colunas
- linhas
- área
- histograma
- gráficos comparativos
- cards com pequenas métricas

Evite deixar tudo como uma simples lista com número ao lado.

---

## Estrutura sugerida para o novo bloco “Perfil dos Participantes”
Organize essa área em subblocos analíticos.

### Sugestão de composição:
#### Linha 1
- **Gênero**
- **Etnia**

#### Linha 2
- **Faixa Etária**
- **Tipo de Formação / Escolaridade**

#### Linha 3
- **Categoria de Cota**
- **Instituições de Origem**

#### Opcional
- **PcD / neurodivergência / necessidades especiais**
- **Curso de origem**
- **Distribuição por status acadêmico**

---

## Sugestões de gráfico por tema

### Gênero
- gráfico de barras ou donut
- leitura simples e clara

### Etnia
- gráfico de barras ou linha comparativa, se houver histórico
- mostrar categorias como: negro, pardo, branco, indígena, amarelo, não informado

### Faixa Etária
- usar gráfico que permita enxergar distribuição
- pode ser histograma, linha ou área
- objetivo é mostrar concentração etária da base

### Tipo de Formação / Escolaridade
- barras horizontais
- exemplos:
  - graduação em andamento
  - graduado
  - técnico
  - bacharelado
  - licenciatura
  - tecnólogo

### Categoria de Cota
- barras comparando ocupação por cota
- exemplos:
  - ampla concorrência
  - mulheres
  - negros/pardos
  - PcD
  - 45+
- se fizer sentido, mostrar:
  - vagas reservadas
  - vagas preenchidas
  - percentual ocupado

### Instituições de Origem
- ranking em barras horizontais
- mostrar top 5 ou top 10 instituições
- ex.: UFAL, IFAL, UFRPE, UNEAL, outras

### PcD / Necessidades Especiais
- se houver dados, pode virar um gráfico complementar
- não precisa ser o foco principal, mas pode enriquecer a análise

---

## O que essa área deve transmitir
Essa seção deve permitir que o gestor bata o olho e entenda:
- quem são os participantes
- de onde vêm
- como a diversidade está distribuída
- como as cotas estão sendo ocupadas
- qual o perfil etário e acadêmico da base

Ou seja, deve ser uma seção de **insight**, não apenas de cadastro resumido.

---

# 3. Organização visual desejada

## Hierarquia
Quero que:
- o novo funil fique mais enxuto
- o bloco de perfil dos participantes fique mais rico e analítico
- a dashboard continue limpa e profissional
- os gráficos tenham boa distribuição em grid

## Direção visual
- manter o estilo corporativo/SaaS já existente
- fundo claro
- navbar azul escura
- detalhes em azul claro
- boa legibilidade
- gráficos com aparência moderna
- evitar poluição visual
- manter consistência com os outros blocos da dashboard

---

# 4. Comportamento esperado
Mesmo sendo um protótipo, quero que a interface pareça clicável e inteligente.

## Interações desejadas
- o bloco de funil pode ter uma ação de **“ver detalhamento”**
- os gráficos do perfil dos participantes devem parecer exploráveis
- a tela deve passar sensação de drill-down e análise

---

# 5. Resultado esperado
Quero uma versão melhorada da dashboard onde:

### Funil do Edital
- fique menor
- fique mais inteligente
- fique menos redundante
- mostre macroetapas e não todo o fluxo detalhado na tela principal

### Perfil dos Participantes
- fique bem mais visual
- gere mais insights
- tenha gráficos analíticos variados
- se aproxime mais de um dashboard de dados real

Faça essa atualização na tela atual, sem perder a coerência visual do restante do sistema.