import { registerUser } from '../js/api.js';

export default () => {
  const container = document.createElement('div');

  container.innerHTML = `
    <div class="register-page-background">
      <div class="register-container">
        <div class="logo-brand">
          <img src="images/favicon.ico.png" alt="Aniverfy Logo">
          <span class="brand">Aniverfy</span>
        </div>

        <div class="register-header">
          <h2>Vamos celebrar juntos!</h2>
          <p>Crie sua conta e comece a celebrar</p>
        </div>
        
        <form id="registerForm" class="register-form">
          <div class="form-group">
            <label for="nameRegister">Nome completo</label>
            <input type="text" id="nameRegister" placeholder="Digite seu nome" required />
          </div>

          <div class="form-group">
            <label for="dataRegister">Data de nascimento</label>
            <input type="date" id="dataRegister" required />
          </div>

          <div class="form-group">
            <label for="usernameRegister">Email</label>
            <input type="email" id="usernameRegister" placeholder="example@gmail.com" required />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="passwordRegister">Senha</label>
              <input type="password" id="passwordRegister" placeholder="••••••••" required />
            </div>

            <div class="form-group">
              <label for="confirmPassword">Repetir senha</label>
              <input type="password" id="confirmPassword" placeholder="••••••••" required />
            </div>
          </div>

          <button type="submit" class="btn-submit">Enviar</button>
        </form>

        <p class="login-link">Já tem uma conta? <a href="#/login">Entrar</a></p>
        
        <div id="mensagem"></div>
      </div>
    </div>
  `;

  // Inicializa eventos
  setTimeout(() => {
    const form = container.querySelector('#registerForm');

    // Evento: Enviar Formulário
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Coleta os dados do formulário
      const userData = {
        name: form.querySelector('#nameRegister').value.trim(),
        birthDate: form.querySelector('#dataRegister').value,
        email: form.querySelector('#usernameRegister').value.trim(),
        password: form.querySelector('#passwordRegister').value,
        confirmPassword: form.querySelector('#confirmPassword').value,
      };

      // Validações
      if (!userData.name || !userData.birthDate || !userData.email || !userData.password || !userData.confirmPassword) {
        mostrarMensagem('Por favor, preencha todos os campos!', 'erro');
        return;
      }

      if (userData.password !== userData.confirmPassword) {
        mostrarMensagem('As senhas não coincidem!', 'erro');
        return;
      }

      if (userData.password.length < 6) {
        mostrarMensagem('A senha deve ter no mínimo 6 caracteres!', 'erro');
        return;
      }

      // Chama a API de cadastro
      const result = await registerUser(userData);

      if (result.ok) {
        mostrarMensagem('Cadastro realizado com sucesso!', 'sucesso');
        setTimeout(() => {
          window.location.hash = '#/login';
        }, 1500);
      } else {
        mostrarMensagem('Erro ao cadastrar. Tente novamente.', 'erro');
        console.error(result.data);
      }
    });

    function mostrarMensagem(texto, tipo) {
      const mensagem = container.querySelector('#mensagem');
      mensagem.textContent = texto;
      mensagem.className = tipo;
      mensagem.style.display = 'block';

      setTimeout(() => {
        mensagem.style.display = 'none';
      }, 5000);
    }
  }, 0);

  return container;
};