document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
    
    // Validação simples
    if (usuario === '' || senha === '') {
        mostrarMensagem('Por favor, preencha todos os campos!', 'erro');
        return;
    }
    
    // Credenciais de teste
    if (usuario === 'admin' && senha === '123') {
        mostrarMensagem('Login realizado com sucesso!', 'sucesso');
        
    } else {
        mostrarMensagem('Usuário ou senha incorretos!', 'erro');
    }
});

function mostrarMensagem(texto, tipo) {
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = texto;
    mensagem.className = tipo;
    mensagem.style.display = 'block';
    
    // Esconder mensagem após 5 segundos
    setTimeout(() => {
        mensagem.style.display = 'none';
    }, 5000);
}