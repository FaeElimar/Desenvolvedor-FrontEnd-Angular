import { listarCursos } from "../js/cursos.js";

const usuarioTeste = { email: "ana.silva@edutech.com" };
sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioTeste));

const usuario = JSON.parse(sessionStorage.getItem('usuarioLogado'));

const dadosUsuario = sessionStorage.getItem('usuarioLogado');
if (dadosUsuario) {
    const usuario = JSON.parse(dadosUsuario);
    document.getElementById('nome-usuario').textContent = usuario.nome;
}

listarCursos(usuario)
  .then((cursos) => {
    const painel = document.querySelector('.painel-cartoes');

    painel.innerHTML = '';

    cursos.forEach((curso) => {
      painel.innerHTML += `
        <article class="cartao-aluno">
            <h3>${curso.nomeCurso}</h3>
            <p>Professor: ${curso.emailProfessor}</p>
            <p>ID do Curso: ${curso.id}</p>
        </article>
      `;
    });
  })
  .catch((erro) => {
    console.log("Erro encontrado:", erro);
  });