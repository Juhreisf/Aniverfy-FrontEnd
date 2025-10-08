import { createConfetti } from '/public/js/utils/animacaobtnvoltar.js';
import { registerUser } from '../js/api.js';

export default () => {
  const container = document.createElement('div');

  container.innerHTML = `
    <section class="contenderRegister">
      
      <!-- Botão de voltar -->
      <div class="button-container">
        <button class="back-button" id="backButton">
          <span class="arrow">←</span>
          <span>VOLTAR</span>
        </button>
      </div>

      <!-- Título da página -->
      <h1 class="tituloRegister">Bem-vinda!</h1>

      <!-- Formulário de cadastro -->
      <main class="register">
        <form class="formRegister" id="registerForm">

          <!-- Campo: Nome completo -->
          <div class="boxLegendaInput">
            <label for="nameRegister" class="legendaRegister">Nome completo</label>
            <input
              type="text"
              id="nameRegister"
              placeholder="Digite seu nome"
              class="btnRegister"
              required
            />
          </div>

          <!-- Campo: Data de nascimento -->
          <div class="boxLegendaInput">
            <label for="dataRegister" class="legendaRegister">Data de nascimento</label>
            <input
              type="date"
              id="dataRegister"
              class="btnRegister"
              required
            />
          </div>

          <!-- Campo: Email -->
          <div class="boxLegendaInput">
            <label for="usernameRegister" class="legendaRegister">Email</label>
            <input
              type="email"
              id="usernameRegister"
              placeholder="example@gmail.com"
              class="btnRegister"
              required
            />
          </div>

          <!-- Campo: Senha -->
          <div class="boxLegendaInput">
            <label for="passwordRegister" class="legendaRegister">Senha</label>
            <input
              type="password"
              id="passwordRegister"
              placeholder="********"
              class="btnRegister"
              required
            />
          </div>

          <!-- Campo: Confirmar senha -->
          <div class="boxLegendaInput">
            <label for="confirmPassword" class="legendaRegister">Repetir senha</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="********"
              class="btnRegister"
              required
            />
          </div>

          <!-- Botão de envio -->
          <div class="btnEnviar">
            <button type="submit" id="enviarRegister">Enviar</button>
          </div>
        </form>
      </main>
    </section>
  `;

  /** 
   * Função: Inicializa eventos do template
   * (colocada dentro de setTimeout para garantir que o HTML esteja renderizado)
   * Não esquecer de colocar modal para os termos de uso.
   */
  setTimeout(() => {
    const backButton = container.querySelector('#backButton');
    const form = container.querySelector('#registerForm');

    // Evento: Botão Voltar
    if (backButton) {
      backButton.addEventListener('click', () => {
        createConfetti(() => {
          window.location.hash = '#/login';
        });
      });
    } else {
      console.error('Botão #backButton não encontrado!');
    }

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

      // Validação simples de senha
      if (userData.password !== userData.confirmPassword) {
        alert('As senhas não coincidem!');
        return;
      }

      // Chama a API de cadastro
      const result = await registerUser(userData);

      if (result.ok) {
        alert('Cadastro realizado com sucesso!');
        window.location.hash = '#/login';
      } else {
        alert('Erro ao cadastrar. Tente novamente.');
        console.error(result.data);
      }
    });
  }, 0);

  return container;
};
