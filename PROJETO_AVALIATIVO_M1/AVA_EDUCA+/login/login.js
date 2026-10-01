import { login } from '../js/auth.js';

const formLogin = document.getElementById('login');

formLogin.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailDigitado = document.getElementById('email').value;
    const senhaDigitada = document.getElementById('senha').value;

    login(emailDigitado, senhaDigitada)
    .then(usuarioLogado => {
        // Corrigido: usuarioLogado 
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
        alert("Login efetuado com sucesso!");
    })
    .catch((erro) => {
        alert(erro);
    });
});

document.getElementById('res-senha').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Funcionalidade em construção');
});