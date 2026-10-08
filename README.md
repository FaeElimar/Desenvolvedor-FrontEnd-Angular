AVA-EDUCA+
Descrição do Projeto
O AVA-EDUCA+ é um protótipo de plataforma acadêmica desenvolvido para resolver o problema da descentralização de informações. Ele centraliza os dados de alunos e cursos, facilitando o trabalho da equipe pedagógica no acompanhamento acadêmico, substituindo o uso de diversas planilhas e sistemas isolados por uma interface única e responsiva.

Técnicas e Tecnologias Utilizadas
HTML5: Estruturação semântica da aplicação.
CSS3: Estilização responsiva utilizando Flexbox e CSS Grid.
JavaScript (Vanilla): Lógica de negócios, manipulação do DOM e eventos.
ES6 Modules: Organização do código JavaScript em módulos (import/export).
Armazenamento Web: Uso de sessionStorage para autenticação de login e localStorage para persistência dos dados cadastrados (CRUD).
APIs e Bibliotecas Externas:
Integração com a API ViaCEP (via fetch) para preenchimento automático de endereços.
Uso da biblioteca Moment.js para validação de datas.
Estrutura do Projeto
O projeto está organizado em uma arquitetura de pastas que separa responsabilidades:

/assets: Imagens e ícones.
/css: Folhas de estilo globais e específicas das páginas.
/js: Lógica central do sistema, módulos de autenticação, cursos e alunos, incluindo a classe Aluno.js.
/dados: Arquivos de simulação de banco de dados (listagem-usuarios.js, listagem-cursos.js, listagem-alunos.js).
/login, /dashboard, /cadastro-aluno: Diretórios contendo as páginas HTML de cada módulo.
Como Executar
Faça o clone deste repositório na sua máquina ou baixe o código fonte.
Abra a pasta do projeto em um editor de código (como o VS Code).
Devido ao uso de ES6 Modules, é necessário rodar o projeto em um servidor local. Recomenda-se o uso da extensão Live Server no VS Code.
Clique com o botão direito no arquivo index.html (na raiz do projeto) e selecione "Open with Live Server".
O sistema abrirá automaticamente no navegador.
(Acesso de teste - E-mail: ana.silva@edutech.com / Senha: 123456).
Melhorias que Podem ser Aplicadas Futuramente
Implementar um back-end real com banco de dados (ex: Node.js e PostgreSQL) para substituir o uso do localStorage e dos arquivos estáticos de listagem.

Desenvolver a tela e a funcionalidade da funcionalidade "Esqueceu sua senha".

Criar a página de detalhes de "Cursos", que atualmente encontra-se desabilitada no menu.

Implementar a funcionalidade de edição e exclusão de alunos já cadastrados.

Projeto Pronto
