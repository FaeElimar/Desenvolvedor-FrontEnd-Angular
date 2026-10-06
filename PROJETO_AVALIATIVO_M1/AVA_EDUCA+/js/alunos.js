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
