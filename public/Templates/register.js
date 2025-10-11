import { registerUser } from '../js/api.js';
import { tratarRespostaBackend } from '../js/utils/tratamentodeerros.js';
import { inicializarValidacaoRealTime, mostrarErrosBackend } from '../js/utils/validacaoRealTime.js';

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
            <span class="error-message" id="errorName"></span>
          </div>

          <div class="form-group">
            <label for="dataRegister">Data de nascimento</label>
            <input type="date" id="dataRegister" required />
            <span class="error-message" id="errorData"></span>
          </div>

          <div class="form-group">
            <label for="usernameRegister">Email</label>
            <input type="email" id="usernameRegister" placeholder="example@gmail.com" required />
            <span class="error-message" id="errorEmail"></span>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="passwordRegister">Senha</label>
              <input type="password" id="passwordRegister" placeholder="••••••••" required />
              <div class="error-message" id="errorPassword"></div>
            </div>

            <div class="form-group">
              <label for="confirmPassword">Repetir senha</label>
              <input type="password" id="confirmPassword" placeholder="••••••••" required />
              <span class="error-message" id="errorConfirmPassword"></span>
            </div>
          </div>
          
          <div class="terms">
            <input type="checkbox" id="termsCheckbox" required />
            <label for="termsCheckbox">Eu aceito os <a href="#">Termos de Serviço</a> e a <a href="#">Política de Privacidade</a></label>
          </div>
          
          <button type="submit" class="btn-submit">Enviar</button>
        </form>

        <p class="login-link">Já tem uma conta? <a href="#/login">Entrar</a></p>
      </div>
    </div>
  `;

  setTimeout(() => {
    const form = container.querySelector('#registerForm');
    
    const inputs = {
      name: form.querySelector('#nameRegister'),
      birthDate: form.querySelector('#dataRegister'),
      email: form.querySelector('#usernameRegister'),
      password: form.querySelector('#passwordRegister'),
      confirmPassword: form.querySelector('#confirmPassword')
    };

    const errorElements = {
      name: form.querySelector('#errorName'),
      birthDate: form.querySelector('#errorData'),
      email: form.querySelector('#errorEmail'),
      password: form.querySelector('#errorPassword'),
      confirmPassword: form.querySelector('#errorConfirmPassword')
    };

    // ✅ Inicializar validações em tempo real
    inicializarValidacaoRealTime(inputs, errorElements);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('.btn-submit');
      const originalText = submitBtn.textContent;

      // Coleta os dados
      const name = inputs.name.value.trim();
      const birthDate = inputs.birthDate.value;
      const email = inputs.email.value.trim();
      const password = inputs.password.value;
      const confirmPassword = inputs.confirmPassword.value;

      // Desabilitar botão
      submitBtn.disabled = true;
      submitBtn.textContent = '⏳ Criando conta...';

      try {
        // Criar FormData
        const formData = new FormData();
        formData.append("nome", name);
        formData.append("email", email);
        formData.append("senha", password);

        
        // Converter data de YYYY-MM-DD para DD-MM-YYYY
        const [year, month, day] = birthDate.split('-');
        const dataFormatada = `${day}-${month}-${year}`;
        formData.append("data_nascimento", dataFormatada);

        // Debug
        console.log("📤 Enviando:");
        for (let [key, value] of formData.entries()) {
          console.log(`  ${key}: ${value}`);
        }

        // Chamar API
        const result = await registerUser(formData);
        console.log("📥 Resultado:", result);

        // ✅ Usar tratamento de erros centralizado
        const resposta = tratarRespostaBackend(result);

        if (resposta.sucesso) {
          alert(resposta.mensagem);
          setTimeout(() => {
            window.location.hash = '#/login';
          }, 1500);
        } else {
          // ✅ Mostrar erros do backend nos campos
          mostrarErrosBackend(resposta.erros, inputs, errorElements);
        }

      } catch (error) {
        console.error('Erro:', error);
        alert('❌ Erro de conexão. Tente novamente.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }); // ✅ Fecha addEventListener

  }, 0); // ✅ Fecha setTimeout

  return container;
}; // ✅ Fecha export default