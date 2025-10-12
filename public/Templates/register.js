import { registerUser } from '../js/api.js';
import { tratarRespostaBackend } from '../js/utils/tratamentodeerros.js';
import { inicializarValidacaoRealTime, mostrarErrosBackend } from '../js/utils/validacaoRealTime.js';
import { mostrarSucesso, mostrarErro } from '../js/utils/modal.js';

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
            <label for="termsCheckbox">Eu aceito os <a href="#/termsofuse">Termos de Serviço</a> e a <a href="#/privacypolicy">Política de Privacidade</a></label>
            <span class="error-message" id="errorTerms"></span>
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

      // Debug - Verificar dados coletados
      console.log("📋 Dados coletados:");
      console.log("  name:", name);
      console.log("  birthDate:", birthDate);
      console.log("  email:", email);
      console.log("  password:", password);
      console.log("  confirmPassword:", confirmPassword);

      // Desabilitar botão
      submitBtn.disabled = true;
      submitBtn.textContent = '⏳ Criando conta...';

      try {
        // Criar FormData
        const formData = new FormData();
        formData.append("nome", name);
        formData.append("email", email);
        formData.append("senha", password);
        formData.append("Confirmar Senha", confirmPassword);
        
        // Converter data de YYYY-MM-DD para DD-MM-YYYY
        const [year, month, day] = birthDate.split('-');
        const dataFormatada = `${day}-${month}-${year}`;
        
        console.log("📅 Data original:", birthDate);
        console.log("📅 Data formatada:", dataFormatada);
        
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
          // ✅ USAR MODAL AO INVÉS DE ALERT
          mostrarSucesso(
            'Sua conta foi criada com sucesso!\nVocê será redirecionado para o login.',
            () => {
              window.location.hash = '#/login';
            }
          );
        } else {
          // ✅ USAR MODAL PARA ERROS TAMBÉM
          mostrarErro(resposta.mensagem);
          
          // ✅ Mostrar erros do backend nos campos
          mostrarErrosBackend(resposta.erros, inputs, errorElements);
        }

      } catch (error) {
        console.error('❌ Erro completo:', error);
        // ✅ USAR MODAL PARA ERRO DE CONEXÃO
        mostrarErro('Erro de conexão com o servidor.\nVerifique sua internet e tente novamente.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });

  }, 0);

  return container;
};