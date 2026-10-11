export class Aluno {
    constructor(nome, genero, dataNascimento, cpf, telefone, email, cep, logradouro, numero, complemento, bairro, cidade, estado) {
        this.nome = nome;
        this.genero = genero;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
}

let listaAlunos = [];

export function cadastrarAluno(aluno) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (aluno.nome && aluno.cpf) {
        listaAlunos.push(aluno);
        localStorage.setItem("alunos_cadastrados", JSON.stringify(listaAlunos));
        resolve("Aluno cadastrado com sucesso!");
      } else {
        reject("Preencha todos os campos obrigatórios.");
      }
    }, 500);
  });
}
