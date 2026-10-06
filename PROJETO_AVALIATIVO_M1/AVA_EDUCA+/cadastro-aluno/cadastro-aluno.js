import { Aluno } from '../js/Aluno.js';
import { cadastrarAluno } from './alunos.js';

const formCadastro = document.getElementById('form-cadastro-aluno');

const dadosUsuario = sessionStorage.getItem('usuarioLogado');
if (dadosUsuario) {
    const usuario = JSON.parse(dadosUsuario);
    document.getElementById('nome-usuario').textContent = usuario.nome;
}

formCadastro.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const dataDigitada = document.getElementById('dataNascimento').value;
    const dataNascimentoMoment = moment(dataDigitada, 'DD/MM/YYYY', true);
    const dataMinima = moment('01/01/1990', 'DD/MM/YYYY');
    const dataAtual = moment();

    if (!dataNascimentoMoment.isValid()) {
        alert("Formato de data inválido! Utilize DD/MM/AAAA.");
        return;
    }

    if (dataNascimentoMoment.isBefore(dataMinima) || dataNascimentoMoment.isAfter(dataAtual)) {
        alert("A data de nascimento tem de ser maior que 01/01/1990 e menor que a data de hoje.");
        return;
    }

    const nome = document.getElementById('nome').value;
    const genero = document.getElementById('genero').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const cep = document.getElementById('cep').value;
    const logradouro = document.getElementById('logradouro').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;

    // 3. Instanciação do objeto Aluno utilizando a classe (RF12)
    const novoAluno = new Aluno(
        nome, genero, dataDigitada, cpf, telefone, email, 
        cep, logradouro, numero, complemento, bairro, cidade, estado
    );

    try {
        const resposta = await cadastrarAluno(novoAluno);
        alert(resposta);
        formCadastro.reset();
    } catch (erro) {
        alert("Erro ao efetuar o cadastro: " + erro);
    }
});