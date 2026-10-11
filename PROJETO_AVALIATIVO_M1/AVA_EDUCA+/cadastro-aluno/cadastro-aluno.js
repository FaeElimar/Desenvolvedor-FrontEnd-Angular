import { Aluno } from "../js/alunos.js";
import { cadastrarAluno } from "../js/alunos.js";

// 1. --- LÓGICA DO VIACEP ---
const inputCep = document.getElementById("cep");

inputCep.addEventListener("blur", () => {
  // Limpa o CEP para garantir que só vão os números
  const cepDigitado = inputCep.value.replace(/\D/g, "");

  if (cepDigitado !== "") {
    const url = `https://viacep.com.br/ws/${cepDigitado}/json/`;

    fetch(url)
      .then((resposta) => resposta.json())
      .then((dados) => {
        if (dados.erro) {
          alert("CEP não encontrado!");
          return;
        }
        // Preenche os campos
        document.getElementById("logradouro").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;
      })
      .catch((erro) => {
        console.log("Erro na requisição do ViaCEP:", erro);
      });
  }
});

const dadosUsuario = sessionStorage.getItem("usuarioLogado");
if (dadosUsuario) {
  const usuario = JSON.parse(dadosUsuario);
  const elementoNome = document.getElementById("nome-usuario");

  if (elementoNome) {
    const nomeParaExibir =
      usuario.nome || (usuario.email ? usuario.email.split("@")[0] : "Usuário");
    elementoNome.textContent = nomeParaExibir;
  }
}

const btnSair = document.getElementById("btn-sair");
if (btnSair) {
  btnSair.addEventListener("click", (evento) => {
    evento.preventDefault();
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = "../index.html";
  });
}

const formCadastro = document.getElementById("form-cadastro-aluno");

formCadastro.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const dataDigitada = document.getElementById("dataNascimento").value;
  const dataNascimentoMoment = moment(dataDigitada, "DD/MM/YYYY", true);
  const dataMinima = moment("01/01/1990", "DD/MM/YYYY");
  const dataAtual = moment();

  if (!dataNascimentoMoment.isValid()) {
    alert("Formato de data inválido! Utilize DD/MM/AAAA.");
    return;
  }

  if (
    dataNascimentoMoment.isBefore(dataMinima) ||
    dataNascimentoMoment.isAfter(dataAtual)
  ) {
    alert(
      "A data de nascimento tem de ser maior que 01/01/1990 e menor que a data de hoje.",
    );
    return;
  }

  const nome = document.getElementById("nome").value;
  const genero = document.getElementById("genero").value;
  const cpf = document.getElementById("cpf").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const cep = document.getElementById("cep").value;
  const logradouro = document.getElementById("logradouro").value;
  const numero = document.getElementById("numero").value;
  const complemento = document.getElementById("complemento").value;
  const bairro = document.getElementById("bairro").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value;

  const novoAluno = new Aluno(
    nome,
    genero,
    dataDigitada,
    cpf,
    telefone,
    email,
    cep,
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  );

  try {
    const resposta = await cadastrarAluno(novoAluno);
    alert(resposta);
    formCadastro.reset();
  } catch (erro) {
    alert("Erro ao efetuar o cadastro: " + erro);
  }
});
