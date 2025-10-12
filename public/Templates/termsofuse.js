
// routes/termos.js
export default () => {
  const container = document.createElement('div');

  // Garantir que o body pode fazer scroll
  document.body.style.overflow = 'auto';
  document.body.style.height = 'auto';
  document.documentElement.style.overflow = 'auto';

  container.innerHTML = `
    <div class="termos-page-background">
      <div class="termos-container">
        <div class="termos-header">
          <button class="btn-voltar" id="voltarBtn">← Voltar</button>
          <div class="logo-brand">
            <img src="images/favicon.ico.png" alt="Aniverfy Logo">
            <span class="brand">Aniverfy</span>
          </div>
          <h1>Termos de Uso</h1>
        </div>

        <div class="termos-content">
          <div class="last-update">
            <strong>Última atualização:</strong> 09 de outubro de 2025
          </div>

          <p>Bem-vindo ao <strong>Aniverfy</strong>! Estes Termos de Uso regem o acesso e utilização da nossa plataforma de criação de homenagens digitais personalizadas. Ao utilizar nossos serviços, você concorda com todos os termos aqui descritos.</p>

          <h2>📋 1. Aceitação dos Termos</h2>
          <p>Ao criar uma conta, acessar ou utilizar qualquer funcionalidade do Aniverfy, você declara:</p>
          <ul>
            <li>Ter lido, compreendido e concordado com estes Termos de Uso</li>
            <li>Ter capacidade legal para celebrar contratos (ser maior de 18 anos ou ter autorização dos responsáveis)</li>
            <li>Fornecer informações verdadeiras e atualizadas</li>
            <li>Cumprir todas as leis aplicáveis em sua jurisdição</li>
          </ul>

          <div class="important-box">
            <h4>⚠️ Importante</h4>
            <p>Se você não concordar com qualquer parte destes termos, não utilize nossos serviços. O uso continuado da plataforma após alterações nos termos constitui aceitação das mudanças.</p>
          </div>

          <h2>💝 2. Sobre o Aniverfy</h2>
          <p>O Aniverfy é uma plataforma digital que permite aos usuários criar homenagens personalizadas para celebrar aniversários e momentos especiais, oferecendo:</p>
          <ul>
            <li>📸 Upload e organização de fotos do aniversariante</li>
            <li>🖼️ Criação de galerias de momentos especiais</li>
            <li>💌 Coleta de mensagens de amigos e familiares</li>
            <li>⏳ Contador de vida com idade exata e tempo vivido</li>
            <li>🕰️ Linha do tempo de conquistas e momentos marcantes</li>
            <li>🎁 Sistema de sugestão de presentes</li>
            <li>🎨 Temas personalizáveis com cores e músicas</li>
            <li>🎵 Integração com músicas do YouTube</li>
            <li>💳 Sistema de cartões presente digitais</li>
            <li>🔔 Notificações de aniversários próximos</li>
          </ul>

          <h2>👤 3. Cadastro e Conta de Usuário</h2>
          
          <h3>3.1. Criação de Conta</h3>
          <p>Para utilizar o Aniverfy, você deve:</p>
          <ol>
            <li>Fornecer informações precisas e completas durante o cadastro</li>
            <li>Manter seus dados sempre atualizados</li>
            <li>Criar uma senha segura e mantê-la confidencial</li>
            <li>Não compartilhar sua conta com terceiros</li>
            <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
          </ol>

          <h3>3.2. Responsabilidade pela Conta</h3>
          <p>Você é totalmente responsável por todas as atividades realizadas em sua conta, incluindo:</p>
          <ul>
            <li>Homenagens criadas e publicadas</li>
            <li>Conteúdos enviados (fotos, vídeos, textos, mensagens)</li>
            <li>Transações financeiras realizadas</li>
            <li>Interações com outros usuários</li>
          </ul>

          <h2>🖼️ 4. Conteúdo do Usuário</h2>

          <h3>4.1. Propriedade do Conteúdo</h3>
          <p>Você mantém todos os direitos sobre o conteúdo que envia ao Aniverfy. No entanto, ao fazer upload de conteúdo, você concede ao Aniverfy uma licença mundial, não exclusiva, isenta de royalties para:</p>
          <ul>
            <li>Armazenar, processar e exibir seu conteúdo</li>
            <li>Realizar backups e cópias de segurança</li>
            <li>Otimizar imagens e vídeos para melhor performance</li>
            <li>Disponibilizar o conteúdo conforme suas configurações de privacidade</li>
          </ul>

          <h3>4.2. Conteúdo Proibido</h3>
          <div class="important-box">
            <h4>🚫 É estritamente proibido enviar ou publicar:</h4>
            <ul>
              <li>Conteúdo ilegal, pornográfico, obsceno ou sexualmente explícito</li>
              <li>Material que viole direitos autorais de terceiros</li>
              <li>Conteúdo que promova ódio, discriminação, violência ou assédio</li>
              <li>Informações falsas, enganosas ou difamatórias</li>
              <li>Malware, vírus ou códigos maliciosos</li>
              <li>Dados pessoais de terceiros sem consentimento</li>
              <li>Conteúdo que viole a privacidade de menores de idade</li>
              <li>Spam, propaganda não autorizada ou correntes</li>
            </ul>
          </div>

          <h3>4.3. Moderação e Remoção</h3>
          <p>O Aniverfy se reserva o direito de:</p>
          <ul>
            <li>Revisar qualquer conteúdo publicado na plataforma</li>
            <li>Remover conteúdo que viole estes termos sem aviso prévio</li>
            <li>Suspender ou encerrar contas que violem repetidamente nossas políticas</li>
            <li>Reportar atividades ilegais às autoridades competentes</li>
          </ul>

          <div class="section-divider"></div>

          <h2>🛡️ 5. Direitos Autorais e Propriedade Intelectual</h2>

          <h3>5.1. Músicas e Conteúdo de Terceiros</h3>
          <p>Ao utilizar músicas do YouTube ou outros conteúdos de terceiros:</p>
          <ul>
            <li>Você deve ter autorização ou direito legal para usar o conteúdo</li>
            <li>O Aniverfy utiliza APIs oficiais do YouTube e respeita suas políticas</li>
            <li>Você é responsável por garantir que tem os direitos necessários</li>
            <li>Músicas protegidas por direitos autorais podem ter restrições de uso</li>
          </ul>

          <div class="highlight-box">
            <h4>ℹ️ Recomendação</h4>
            <p>Utilize músicas de domínio público, licenças Creative Commons, ou conteúdo para o qual você possui os direitos. Para uso comercial ou público amplo, consulte um advogado especializado em propriedade intelectual.</p>
          </div>

          <h3>5.2. Marcas e Design</h3>
          <p>Todos os elementos da plataforma Aniverfy, incluindo:</p>
          <ul>
            <li>Logotipo, nome e marca Aniverfy</li>
            <li>Design da interface e experiência do usuário</li>
            <li>Códigos-fonte e funcionalidades</li>
            <li>Temas, templates e layouts</li>
          </ul>
          <p>São propriedade exclusiva do Aniverfy e protegidos por leis de propriedade intelectual.</p>

          <h2>👁️ 6. Privacidade e Compartilhamento</h2>

          <h3>6.1. Controles de Privacidade</h3>
          <p>O Aniverfy oferece diferentes níveis de privacidade para suas homenagens:</p>
          <ul>
            <li><strong>Pública:</strong> Qualquer pessoa com o link pode visualizar</li>
            <li><strong>Protegida por senha:</strong> Apenas quem possui a senha pode acessar</li>
            <li><strong>Privada:</strong> Apenas você pode visualizar</li>
            <li><strong>Compartilhamento seletivo:</strong> Apenas pessoas convidadas podem acessar</li>
          </ul>

          <h3>6.2. Proteção de Dados</h3>
          <p>Consulte nossa <strong>Política de Privacidade</strong> detalhada para entender como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a LGPD (Lei Geral de Proteção de Dados).</p>

          <div class="section-divider"></div>

          <h2>💳 7. Planos e Pagamentos</h2>

          <h3>7.1. Planos Disponíveis</h3>
          <p>O Aniverfy oferece planos gratuitos e pagos com diferentes recursos:</p>
          <ul>
            <li><strong>Plano Gratuito:</strong> Funcionalidades básicas com limitações</li>
            <li><strong>Plano Premium:</strong> Recursos avançados, mais armazenamento e personalização</li>
            <li><strong>Plano Família:</strong> Múltiplas homenagens e recursos compartilhados</li>
          </ul>

          <h3>7.2. Cartões Presente</h3>
          <p>O sistema de cartões presente funciona como:</p>
          <ul>
            <li>Você pode criar cartões com valores em reais (R$)</li>
            <li>Os cartões ficam disponíveis para resgate pelo aniversariante</li>
            <li>O Aniverfy atua como intermediário na transação</li>
            <li>Taxas de processamento podem ser aplicadas (consulte valores atuais)</li>
            <li>Resgates são processados em até 7 dias úteis</li>
          </ul>

          <h3>7.3. Política de Pagamento</h3>
          <ul>
            <li>Aceitamos cartões de crédito, débito e Pix</li>
            <li>Todos os pagamentos são processados de forma segura</li>
            <li>Renovações automáticas podem ser canceladas a qualquer momento</li>
            <li>Valores não são reembolsáveis após processamento, exceto em casos específicos</li>
          </ul>

          <h3>7.4. Política de Reembolso</h3>
          <p>Reembolsos podem ser solicitados em até 7 dias após a compra se:</p>
          <ul>
            <li>Você não utilizou os recursos do plano contratado</li>
            <li>Houve cobrança indevida ou duplicada</li>
            <li>Problemas técnicos impediram o uso da plataforma</li>
          </ul>

          <div class="section-divider"></div>

          <h2>⚠️ 8. Limitações de Responsabilidade</h2>

          <h3>8.1. Disponibilidade do Serviço</h3>
          <p>O Aniverfy se esforça para manter a plataforma disponível 24/7, mas:</p>
          <ul>
            <li>Não garantimos disponibilidade ininterrupta</li>
            <li>Manutenções programadas serão comunicadas previamente</li>
            <li>Não nos responsabilizamos por falhas de terceiros (internet, servidores, etc.)</li>
            <li>Backups automáticos são realizados, mas recomendamos que você mantenha cópias locais</li>
          </ul>

          <h3>8.2. Uso por Menores</h3>
          <div class="important-box">
            <h4>👶 Proteção de Menores</h4>
            <p>Menores de 18 anos podem ser tema de homenagens, mas NÃO podem criar contas ou utilizar a plataforma sem supervisão de um responsável legal. Fotos e dados de menores só devem ser publicados com consentimento dos pais ou responsáveis.</p>
          </div>

          <h3>8.3. Links Externos</h3>
          <p>A plataforma pode conter links para sites externos (YouTube, redes sociais, etc.). Não nos responsabilizamos pelo conteúdo ou práticas de privacidade desses sites.</p>

          <h2>🚫 9. Suspensão e Encerramento</h2>

          <h3>9.1. Por Parte do Usuário</h3>
          <p>Você pode encerrar sua conta a qualquer momento:</p>
          <ul>
            <li>Acessando as configurações da conta</li>
            <li>Seus dados serão mantidos por período legal obrigatório</li>
            <li>Homenagens públicas podem permanecer visíveis por 30 dias</li>
            <li>Após exclusão, dados não podem ser recuperados</li>
          </ul>

          <h3>9.2. Por Parte do Aniverfy</h3>
          <p>Podemos suspender ou encerrar sua conta se:</p>
          <ul>
            <li>Você violar estes Termos de Uso</li>
            <li>Houver atividade fraudulenta ou ilegal</li>
            <li>Não houver atividade por período prolongado (contas gratuitas)</li>
            <li>Houver risco à segurança da plataforma ou outros usuários</li>
          </ul>

          <h2>⚖️ 10. Lei Aplicável e Jurisdição</h2>
          <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida nos tribunais da Comarca de São Paulo, SP, renunciando-se a qualquer outro por mais privilegiado que seja.</p>

          <h2>🔄 11. Alterações nos Termos</h2>
          <p>O Aniverfy pode atualizar estes Termos periodicamente. Quando houver alterações significativas:</p>
          <ul>
            <li>Você será notificado por email ou através da plataforma</li>
            <li>As alterações entram em vigor 15 dias após a notificação</li>
            <li>O uso continuado após as mudanças constitui aceitação</li>
            <li>Se não concordar, você pode encerrar sua conta</li>
          </ul>

          <div class="info-box">
            <h4>🔔 Mantenha-se Informado</h4>
            <p>Recomendamos revisar periodicamente estes Termos de Uso. A versão mais atual estará sempre disponível em nosso site com a data da última atualização.</p>
          </div>

          <h2>❓ 12. Disposições Gerais</h2>
          <ul>
            <li>Se qualquer cláusula for considerada inválida, as demais permanecerão em vigor</li>
            <li>O não exercício de direitos não constitui renúncia</li>
            <li>Estes termos não criam relação de parceria ou representação</li>
            <li>Notificações oficiais serão enviadas para o email cadastrado</li>
          </ul>

          <div class="section-divider"></div>

          <div class="contact-section">
            <h3>Dúvidas sobre os Termos de Uso?</h3>
            <p>Nossa equipe está pronta para ajudar!</p>
            <div class="contact-info">
              <p>📧 Email Legal: <a href="mailto:legal@aniverfy.com">legal@aniverfy.com</a></p>
              <p>💬 Suporte: <a href="mailto:suporte@aniverfy.com">suporte@aniverfy.com</a></p>
              <p>📞 Telefone: (11) 9999-9999</p>
            </div>
          </div>

          <div class="commitment-box">
            <h4>💖 Nosso Compromisso</h4>
            <p>O Aniverfy se compromete a proporcionar uma plataforma segura, afetuosa e respeitosa para celebrar momentos especiais. Contamos com sua colaboração para manter nossa comunidade positiva e harmoniosa. Juntos, criamos memórias que duram para sempre! 🎉</p>
          </div>
        </div>

        <div class="termos-footer">
          <div class="footer-links">
            <a href="#/privacy">Política de Privacidade</a>
            <span class="separator">•</span>
            <a href="#/cookies">Política de Cookies</a>
            <span class="separator">•</span>
            <a href="#/faq">Perguntas Frequentes</a>
            <span class="separator">•</span>
            <a href="#/contact">Contato</a>
          </div>
          <p class="copyright">© 2025 Aniverfy. Todos os direitos reservados. Celebrando momentos especiais com amor. 💖</p>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const voltarBtn = container.querySelector('#voltarBtn');
    voltarBtn.addEventListener('click', () => {
      window.location.hash = '#/register';
    });

    // Scroll para o topo quando a página carregar
    window.scrollTo(0, 0);
  }, 0);

  return container;
};