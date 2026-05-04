Crie a tela de **Perfil Individual da Pessoa** para o sistema BRISA ONE, mantendo a navbar superior já existente no protótipo. A seção **Pessoas** deve permanecer acessível pela navbar, mas agora a interface deve representar a visualização detalhada de uma pessoa específica.

Objetivo da tela:
Essa tela deve funcionar como o **perfil central de uma pessoa cadastrada no sistema**, com foco principal no aluno. Ela deve reunir:
1. informações cadastrais e documentais do aluno;
2. dados acadêmicos e de participação levantados a partir do edital;
3. histórico de participação em programas e etapas;
4. dados de desempenho dentro do programa;
5. informações de acompanhamento acadêmico, carreira e impacto.

Importante:
Uma pessoa pode participar de mais de um programa ao longo do tempo. Portanto, esta tela não deve parecer presa a um único programa. Ela deve ter uma camada de **dados globais da pessoa** e outra camada de **participações/vínculos com programas**.

Estrutura geral da tela:

1. Cabeçalho do perfil
No topo da página, criar uma área de destaque com:
- nome completo da pessoa
- foto/avatar
- status atual no sistema
- etapa atual
- programa atual ou vínculo mais recente
- instituição de ensino
- curso ou formação
- última atualização

Adicionar no canto superior direito ações como:
- Editar perfil
- Atualizar acompanhamento
- Registrar novo vínculo/programa
- Mais ações

2. Organização da navegação interna
A tela deve ser organizada em abas ou blocos bem definidos, evitando excesso de informação em uma única rolagem.

Sugestão de seções/abas:
- Resumo
- Dados pessoais
- Dados acadêmicos
- Participações em programas
- Desempenho no programa
- Acompanhamento acadêmico e carreira
- Documentos e evidências
- Histórico / timeline

3. Aba ou seção “Resumo”
Essa deve ser a visão geral inicial do aluno.

Exibir cards/resumos rápidos como:
- Programas vinculados
- Etapa atual
- Situação acadêmica atual
- Situação profissional atual
- Presença
- Média de desempenho
- Quantidade de cursos concluídos
- Último marco relevante

Também incluir uma pequena timeline resumida com eventos principais.

4. Aba ou seção “Dados pessoais”
Exibir dados cadastrais da pessoa.

Campos sugeridos:
- nome completo
- CPF
- e-mail
- telefone
- LinkedIn
- data de nascimento
- município / estado
- gênero
- categoria de cota
- status da pessoa no sistema

Essa seção deve ter visual limpo, com boa hierarquia e possibilidade de edição posterior.

5. Aba ou seção “Dados acadêmicos”
Mostrar as informações acadêmicas do aluno, incluindo dados utilizados no processo seletivo e no acompanhamento posterior.

Campos sugeridos:
- nível de formação
- grau de escolaridade
- instituição de ensino
- curso
- período / semestre atual
- situação da matrícula
- previsão de conclusão
- participação em pesquisa, extensão ou monitoria
- histórico de trancamento
- histórico de reprovação, se aplicável

Essa área deve comunicar tanto a base cadastral quanto a evolução acadêmica ao longo do tempo.

6. Aba ou seção “Participações em programas”
Essa seção é muito importante.

Ela deve deixar claro que a pessoa pode ter múltiplos vínculos com diferentes programas, editais ou turmas.
Criar uma visualização clara com:
- cards ou tabela de participações
- nome do programa
- edição/turma
- período
- etapa alcançada
- status
- resultado
- projeto vinculado, quando houver

Também pode existir um seletor de participação ativa, para que o usuário escolha qual vínculo deseja detalhar mais profundamente na tela.

7. Aba ou seção “Desempenho no programa”
Mostrar o desempenho da pessoa dentro do programa selecionado.

Incluir informações como:
- progresso no nivelamento
- cursos obrigatórios concluídos
- cursos não obrigatórios concluídos
- nota da prova final
- classificação
- aprovação para imersão
- presença
- faltas justificadas e não justificadas
- advertências
- participação em grupo/projeto
- avaliação parcial
- avaliação final
- desempenho por competência

Apresentar esses dados de forma visual e fácil de escanear, usando:
- cards
- barras de progresso
- mini gráficos
- indicadores por status

8. Aba ou seção “Acompanhamento acadêmico e carreira”
Essa seção deve representar a evolução mais ampla da pessoa além do programa.

Objetivo:
mostrar o impacto acadêmico e profissional do aluno antes, durante e depois de sua participação.

Incluir:
- situação acadêmica atual
- matrícula ativa ou não
- semestre atual
- trancamento
- conclusão de curso
- estágio
- emprego
- empresa
- cargo/função
- atua na área de tecnologia ou não
- participação em projetos, pesquisa ou extensão
- interesse de carreira
- prontidão para mercado
- links de GitHub, portfólio ou LinkedIn

Também incluir uma lógica visual de progressão, como:
- antes do programa
- durante o programa
- após o programa

Essa seção deve transmitir claramente a ideia de **trajetória e impacto**.

9. Aba ou seção “Documentos e evidências”
Criar uma área para visualização dos documentos da pessoa.

Exemplos:
- documento de identidade
- CPF
- comprovante de escolaridade
- autodeclaração de residência
- documentos de cota
- comprovantes acadêmicos
- comprovantes profissionais
- evidências de estágio/emprego
- links e anexos complementares

Essa área deve parecer organizada e confiável, com status como:
- enviado
- pendente
- validado
- recusado

10. Aba ou seção “Histórico / timeline”
Criar uma linha do tempo consolidando os principais eventos da pessoa no sistema.

Exemplos de eventos:
- cadastro realizado
- inscrição em edital
- aprovação no nivelamento
- conclusão de cursos
- prova final
- entrada na imersão
- avaliações
- advertências
- conclusão do programa
- atualização acadêmica
- início de estágio
- contratação
- conclusão da graduação

Essa timeline deve ajudar o gestor a entender rapidamente a trajetória do aluno.

11. Organização visual e UX
A tela deve parecer robusta, escalável e profissional, preparada para uso real.
Ela deve evitar aparência de formulário cru.
Pensar mais como um **perfil analítico e gerencial** do aluno.

Direção de UX:
- separar claramente dados globais da pessoa e dados por participação em programa
- facilitar leitura rápida
- destacar informações mais importantes logo no topo
- permitir aprofundamento por abas ou blocos
- passar sensação de rastreabilidade e acompanhamento longitudinal

12. Estilo visual
Seguir o padrão já existente no sistema:
- visual corporativo e institucional
- estilo SaaS moderno
- navbar azul escura
- fundo claro
- detalhes em azul claro
- cards bem organizados
- boa legibilidade
- aparência limpa, moderna e confiável

13. Elementos visuais desejados
Incluir na composição:
- cards de resumo
- tabela ou cards de participações
- timeline vertical ou horizontal
- barras de progresso
- chips de status
- indicadores de situação acadêmica e profissional
- área de documentos organizada
- mini gráficos ou indicadores visuais de evolução

Importante:
- não tratar esse perfil como se o aluno pertencesse a um único programa
- deixar claro o histórico de vínculos
- combinar visão cadastral, acadêmica, operacional e de impacto
- o resultado deve parecer uma tela estratégica de acompanhamento individual, e não apenas uma ficha de cadastro