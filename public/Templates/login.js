export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="login">
      <h2>Login</h2>
      <form id="loginForm">
        <input type="text" id="usuario" placeholder="Usuario" required /><br />
        <input type="password" id="senha" placeholder="Senha" required /><br />
        <button type="submit">Entrar</button>
      </form>
      
      <p>Não tem uma conta?</p>
      <a href="#/register">
        <button type="button">Cadastre-se</button>
      </a>
      
      <div id="mensagem"></div>
    </div>
    `;
    
    container.innerHTML = template;

    // ✅ Usar setTimeout e container.querySelector
    setTimeout(() => {
        const loginForm = container.querySelector('#loginForm');
        
        if (loginForm) {
            loginForm.addEventListener('submit', function (e) {
                e.preventDefault();

                const usuario = container.querySelector('#usuario').value;
                const senha = container.querySelector('#senha').value;

                // Validação simples
                if (usuario === '' || senha === '') {
                    mostrarMensagem('Por favor, preencha todos os campos!', 'erro');
                    return;
                }

                // Credenciais de teste
                if (usuario === 'admin' && senha === '123') {
                    mostrarMensagem('Login realizado com sucesso!', 'sucesso');
                    // ✅ Redirecionar para dashboard após login
                    setTimeout(() => {
                        window.location.hash = '#/dashboard';
                    }, 1500);
                } else {
                    mostrarMensagem('Usuário ou senha incorretos!', 'erro');
                }
            });
        }

        function mostrarMensagem(texto, tipo) {
            const mensagem = container.querySelector('#mensagem');
            mensagem.textContent = texto;
            mensagem.className = tipo;
            mensagem.style.display = 'block';

            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                mensagem.style.display = 'none';
            }, 5000);
        }
    }, 0);

    return container;
}