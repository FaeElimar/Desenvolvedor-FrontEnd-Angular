import { login } from '../js/auth.js';

const formLogin = document.getElementById('login');

formLogin.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailDigitado = document.getElementById('email').value;
    const senhaDigitada = document.getElementById('senha').value;

    login(emailDigitado, senhaDigitada)
    .then(usuarioLogado => {

        const nomeExtraido = (usuarioLogado && usuarioLogado.nome) ? usuarioLogado.nome : emailDigitado.split('@')[0];
        
        const dadosSessao = {
            nome: nomeExtraido,
            email: emailDigitado
        };

        sessionStorage.setItem('usuarioLogado', JSON.stringify(dadosSessao));
        alert("Login efetuado com sucesso!");
        
        window.location.href = "dashboard/dashboard.html";
    })
    .catch((erro) => {
        alert(erro);
    });
});

document.getElementById('res-senha').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Funcionalidade em construção');
});