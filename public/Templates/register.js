import { createConfetti } from '/public/js/utils/animacaobtnvoltar.js';

export default () => {
    const container = document.createElement('div');

    const template = `
        <section class="contenderRegister">
      <div class="button-container">
        <button class="back-button" id="backButton">
            <span class="arrow">←</span>
            <span>VOLTAR</span>
        </button>
      </div>

      <h1 class="tituloRegister">Bem vinda!</h1>

      <main class="register">
        <form class="formRegister">
          <div class="boxLegendaInput">
            <label class="legendaRegister">Nome completo</label>
            <input
              type="text"
              id="nameRegister"
              placeholder="digite seu nome"
              class="btnRegister"
            />
          </div>

          <div class="boxLegendaInput">
            <label class="legendaRegister">Data de nascimento</label>
            <input type="date" id="dataRegister" class="btnRegister" />
          </div>

          <div class="boxLegendaInput">
            <label class="legendaRegister">Email</label>
            <input
              type="email"
              id="usernameRegister"
              placeholder="example@gmail.com"
              class="btnRegister"
            />
          </div>

          <div class="boxLegendaInput">
            <label class="legendaRegister">Senha</label>
            <input
              type="password"
              id="passwordRegister"
              placeholder="********"
              class="btnRegister"
            />
          </div>

          <div class="boxLegendaInput">
            <label class="legendaRegister">Repetir Senha</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="********"
              class="btnRegister"
            />
          </div>

          <div class="btnEnviar">
            <button type="button" id="enviarRegister">Enviar</button>
          </div>
        </form>
      </main>
    </section>
    `;
    
    container.innerHTML = template;

    setTimeout(() => {
        const backButton = container.querySelector('#backButton');
        
        if (backButton) {
            backButton.addEventListener('click', () => {
                createConfetti(() => {
                    window.location.hash = '#/login';
                });
            });
        } else {
            console.error('Botão #backButton não encontrado!');
        }
    }, 0);

    return container;
}