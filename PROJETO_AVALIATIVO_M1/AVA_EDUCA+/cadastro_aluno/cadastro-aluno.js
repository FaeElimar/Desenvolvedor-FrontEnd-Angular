const inputCep = document.getElementById("cep");

inputCep.addEventListener("blur", () => {
  const cepDigitado = inputCep.value;

  if (cepDigitado !== "") {
    const url = `https://viacep.com.br/ws/${cepDigitado}/json/`;

    fetch(url)
      .then((resposta) => resposta.json())
      .then((dados) => {
        if (dados.erro) {
          alert("CEP não encontrado!");
          return;
        }

        document.getElementById("logradouro").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;

        
      })
      .catch((erro) => {
        console.log("Erro na requisição:", erro);
      });
  }
});

const formCadastro = document.getElementById('form-cadastro-aluno');

formCadastro.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const dataDigitada = document.getElementById('dataNascimento').value;

    const dataNascimento = moment(dataDigitada, 'DD/MM/YYYY', true);
    const dataMinima = moment('01/01/1900', 'DD/MM/YYYY');
    const dataAtual = moment();

    if (!dataNascimento.isValid()) {
        alert("Formato de data inválido! Por favor, utilize DD/MM/AAAA.");
        return; 
    }

    if (dataNascimento.isBefore(dataMinima) || dataNascimento.isAfter(dataAtual)) {
        alert("A data de nascimento tem de ser maior que 01/01/1900 e menor que a data de hoje.");
        return;
    }

    alert("Data válida!");
    
});
