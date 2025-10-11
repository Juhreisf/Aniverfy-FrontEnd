export default () => {
    const container = document.createElement('div');

    const template = `
    <!-- Header -->
    <div class="login-page-wrapper">
        <!-- Lado Esquerdo - Apresentação -->
        <div class="presentation-side">
            <div class="presentation-content">
                <div class="logo-brand">
                    <img src="images/favicon.ico.png" alt="Aniverfy Logo">
                    <span class="brand">Aniverfy</span>
                </div>

                <div class="hero-content">
                    <h2>Um link que aproxima, uma lembrança que fica.</h2><br>
                    <p>A plataforma ideal para planejar, compartilhar e eternizar suas celebrações.</p>
                </div>

                <div class="features-list">
                    <div class="feature-item">
                        <div class="feature-icon">
                            <i data-lucide="target"></i>
                        </div>
                        <span>Planejamento inteligente e intuitivo</span>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">
                            <i data-lucide="users"></i>
                        </div>
                        <span>Gestão completa de convidados</span>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">
                            <i data-lucide="calendar-clock"></i>
                        </div>
                        <span>Lembretes automáticos de datas</span>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">
                            <i data-lucide="sparkles"></i>
                        </div>
                        <span>Templates personalizados</span>
                    </div>
                </div>
            </div>

            <!-- Carrossel de Fotos -->
            <div class="photos-carousel">
                <div class="carousel-track">
                    <div class="carousel-image" style="background: linear-gradient(135deg, #FA709A 0%, #FEE140 100%);"><img src="images/aniversario1.jpeg" alt="Festa 1" /></div>
                    <div class="carousel-image" style="background: linear-gradient(135deg, #30CFD0 0%, #330867 100%);"><img src="images/aniversario2.jpeg" alt="Festa 2" /></div>
                    <div class="carousel-image" style="background: linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%);"><img src="images/aniversario3.jpeg" alt="Festa 3" /></div>
                    <div class="carousel-image" style="background: linear-gradient(135deg, #FFE985 0%, #FA742B 100%);"><img src="images/aniversario4.jpeg" alt="Festa 4" /></div>
                    <div class="carousel-image" style="background: linear-gradient(135deg, #F093FB 0%, #F5576C 100%);"><img src="images/aniversario5.jpeg" alt="Festa 5" /></div>
                    <!-- Duplicar para loop -->
                    <div class="carousel-image" style="background: linear-gradient(135deg, #FA709A 0%, #FEE140 100%);"><img src="images/aniversario1.jpeg" alt="Festa 1" /></div>
                    <div class="carousel-image" style="background: linear-gradient(135deg, #30CFD0 0%, #330867 100%);"><img src="images/aniversario2.jpeg" alt="Festa 2" /></div>
                    <div class="carousel-image" style="background: linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%);"><img src="images/aniversario3.jpeg" alt="Festa 3" /></div>
                    <div class="carousel-image" style="background: linear-gradient(135deg, #FFE985 0%, #FA742B 100%);"><img src="images/aniversario4.jpeg" alt="Festa 4" /></div>
                    <div class="carousel-image" style="background: linear-gradient(135deg, #F093FB 0%, #F5576C 100%);"><img src="images/aniversario5.jpeg" alt="Festa 5" /></div>
                </div>
            </div>
        </div>

        <!-- Lado Direito - Login -->
        <div class="login-side">
            <div class="login">
                <div class="login-header"></div>

                <h2>Bem-vindo!</h2>
                <form id="loginForm">
                    <input type="text" id="usuario" placeholder="Usuário" required />
                    <input type="password" id="senha" placeholder="Senha" required />
                    <button type="submit">Entrar</button>
                </form>
                
                <p>Não tem uma conta?</p>
                <a href="#/register">
                    <button type="button">Cadastre-se</button>
                </a>
                
                <div id="mensagem"></div>
            </div>
        </div>
    </div>
    `;

    container.innerHTML = template;

    //  Inicializar os ícones Lucide
    setTimeout(() => {
        // Carregar biblioteca Lucide se ainda não estiver carregada
        if (typeof lucide === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/lucide@latest';
            script.onload = () => {
                lucide.createIcons();
            };
            document.head.appendChild(script);
        } else {
            lucide.createIcons();
        }

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
                    // Redirecionar para dashboard após login
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