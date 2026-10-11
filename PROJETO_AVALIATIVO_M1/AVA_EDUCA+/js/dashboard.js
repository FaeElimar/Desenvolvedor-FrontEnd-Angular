import { listarCursos } from './cursos.js';

const dadosUsuario = sessionStorage.getItem('usuarioLogado');
let usuario = null; 

if (dadosUsuario) {
    usuario = JSON.parse(dadosUsuario);
    const elementoNome = document.getElementById('nome-usuario');
    
    if (elementoNome) {
        const nomeParaExibir = usuario.nome || (usuario.email ? usuario.email.split('@')[0] : 'Usuário');
        elementoNome.textContent = nomeParaExibir;
    }
} else {
    window.location.href = '../index.html';
}

const btnSair = document.getElementById('btn-sair');
if (btnSair) {
    btnSair.addEventListener('click', (evento) => {
        evento.preventDefault();
        sessionStorage.removeItem('usuarioLogado');
        window.location.href = '../index.html';
    });
}

const painelCursos = document.getElementById('painel-cursos');

function formatarDataBR(dataIso) {
    if (!dataIso) return 'Data não definida';
    const partes = dataIso.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

if (usuario && painelCursos) {
    // Chamamos a sua Promise
    listarCursos(usuario)
        .then(cursosRetornados => {
            painelCursos.innerHTML = '';
            
            cursosRetornados.forEach(curso => {
                const article = document.createElement('article');
                article.className = 'cartao-aluno'; 
                
                article.innerHTML = `
                    <h3 style="color: #0c2844; margin-bottom: 10px;">${curso.nomeCurso}</h3>
                    <p style="margin-bottom: 5px;"><strong>Início:</strong> ${formatarDataBR(curso.dataInicio)}</p>
                    <p><strong>Conclusão:</strong> ${formatarDataBR(curso.dataFim)}</p>
                `;
                
                painelCursos.appendChild(article);
            });
        })
        .catch(erro => {
            painelCursos.innerHTML = `<p style="grid-column: 1 / -1; color: #d9534f; font-weight: bold; text-align: center;">${erro}</p>`;
        });
}