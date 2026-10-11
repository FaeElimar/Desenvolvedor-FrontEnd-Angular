# Projeto Avaliativo - AVA-EDUCA+ 🎓

Este é o projeto final do curso Carreira Tech - Trilha Desenvolvimento de Software 
Fundamentos da Programação com JavaScript T1.
O objetivo foi criar a interface de um painel educacional (Dashboard) e aplicar regras de negócio usando JavaScript (sem back-end).

## O que eu fiz neste projeto

- **Login Simulado:** Como ainda não conectamos o projeto a um banco de dados real, usei o `sessionStorage` para guardar a sessão de quem faz o login.
- **Cards Dinâmicos:** A tela do Dashboard puxa as informações dos cursos diretamente de um arquivo `.js` criado com os dados fornecidos pelo professor e mostra na tela usando JavaScript. 
- **Segurança de Rotas:** Se tentar entrar no Dashboard sem fazer login antes, o JavaScript bloqueia e manda de volta para a tela inicial.
- **Design:** Usei HTML para a estrutura e CSS Flexbox e Grid para organizar a tela e deixar responsivo.

## Nota de Transparência e Uso de IA

Durante o desenvolvimento deste projeto, utilizei a Inteligência Artificial como uma ferramenta de apoio para tirar dúvidas e destravar em algumas partes do código, principalmente para:

- **Lógica e Promises:** A estruturação da lógica com *Promises* para fazer o carregamento e filtro dos dados teve o auxílio da IA. Ela ajudou-me a entender como o JavaScript lida com retornos de dados assíncronos.
- **Correções (Debugging):** Quando ocorreram erros no Console (como falhas de caminhos de *import* ou variáveis não reconhecidas no módulo JavaScript), usei a IA para entender as mensagens de erro e aplicar as devidas revisões na estrutura do código e na sintaxe de exportação.
- **JavaScript:** Minha maior dificuldade neste projeto foi a montagem do código em JavaScript. Por isso, utilizei a Inteligência Artificial como uma ferramenta de apoio para me ajudar a estruturar o código e destravar nos momentos em que eu ficava preso.


## Tecnologias utilizadas
- HTML5 (Tags semânticas)
- CSS3 (Flexbox e Grid Layout)
- JavaScript (Módulos, Arrow Functions, Manipulação de DOM e Promises)

## Como rodar o projeto

1. Baixe os arquivos do projeto ou clone o repositório.
2. Abra a pasta do projeto no seu editor de código (como o VS Code).
3. Para evitar erros no JavaScript (erro de CORS por causa dos `imports`), instale a extensão **Live Server**.
4. Clique com o botão direito no arquivo `index.html` (na pasta `login`) e escolha **"Open with Live Server"**.

## Passo a passo para testar

O banco de dados de usuários e cursos foi dado pelo professor em arquivos `.js`. Para acessar o sistema e ver o painel funcionar, use um dos e-mails e senhas abaixo na tela de login:

**Usuário 1 (Tem 5 cursos):**
- **E-mail:** `ana.silva@edutech.com`
- **Senha:** `123456`

**Usuário 2 (Tem 2 cursos):**
- **E-mail:** `carlos.santos@edutech.com`
- **Senha:** `654321`

**Usuário 3 (Sem cursos cadastrados):**
- **E-mail:** `mariana.costa@edutech.com`
- **Senha:** `edu2026`

Após o login, o sistema vai montar os cartões de cursos do professor logado no Dashboard.
Para sair e testar a proteção de tela, basta clicar em "Sair" no cabeçalho a direita.

---
Desenvolvido por **Elimar Faé** como projeto de avaliação prática.
