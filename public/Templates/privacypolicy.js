// routes/privacidade.js
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
          <h1>Política de Privacidade</h1>
        </div>

        <div class="termos-content">
          <div class="last-update">
            <strong>Última atualização:</strong> 09 de outubro de 2025
          </div>

          <p>Bem-vindo à <strong>Política de Privacidade do Aniverfy</strong>! Nós respeitamos sua privacidade e nos comprometemos a proteger seus dados pessoais em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> e demais legislações aplicáveis.</p>

          <div class="important-box">
            <h4>🔒 Nosso Compromisso</h4>
            <p>O Aniverfy trata a privacidade e segurança dos seus dados com a máxima seriedade. Esta política explica de forma transparente como coletamos, usamos, armazenamos e protegemos suas informações pessoais.</p>
          </div>

          <h2>📊 1. Informações que Coletamos</h2>

          <h3>1.1. Dados Fornecidos Diretamente por Você</h3>
          <p>Quando você cria uma conta ou usa nossos serviços, coletamos:</p>
          <ul>
            <li><strong>Dados de cadastro:</strong> Nome completo, email, senha (criptografada), telefone</li>
            <li><strong>Dados pessoais:</strong> Data de nascimento, foto de perfil</li>
            <li><strong>Conteúdo criado:</strong> Fotos, vídeos, mensagens, textos e homenagens</li>
            <li><strong>Dados de pagamento:</strong> Informações de cartão de crédito/débito, Pix (processadas por parceiros seguros)</li>
            <li><strong>Comunicações:</strong> Mensagens enviadas ao suporte, feedbacks, avaliações</li>
            <li><strong>Preferências:</strong> Configurações de notificações, temas escolhidos, idioma</li>
          </ul>

          <h3>1.2. Dados Coletados Automaticamente</h3>
          <p>Durante o uso da plataforma, coletamos automaticamente:</p>
          <ul>
            <li><strong>Dados de navegação:</strong> Páginas visitadas, tempo de permanência, cliques</li>
            <li><strong>Dados técnicos:</strong> Endereço IP, tipo de navegador, sistema operacional, dispositivo</li>
            <li><strong>Cookies:</strong> Identificadores únicos para melhorar sua experiência</li>
            <li><strong>Localização:</strong> Dados aproximados de geolocalização (quando autorizado)</li>
            <li><strong>Logs de acesso:</strong> Horários, ações realizadas na plataforma</li>
          </ul>

          <h3>1.3. Dados de Terceiros</h3>
          <p>Podemos receber informações quando você:</p>
          <ul>
            <li>Faz login com contas de redes sociais (Google, Facebook)</li>
            <li>Interage com músicas do YouTube integradas às homenagens</li>
            <li>Recebe convites de outros usuários para participar de homenagens</li>
          </ul>

          <div class="section-divider"></div>

          <h2>🎯 2. Como Usamos Seus Dados</h2>

          <h3>2.1. Finalidades do Tratamento</h3>
          <p>Utilizamos suas informações para:</p>
          <ul>
            <li><strong>Prestação de serviços:</strong> Criar, gerenciar e exibir homenagens personalizadas</li>
            <li><strong>Processamento de transações:</strong> Gerenciar pagamentos, assinaturas e cartões presente</li>
            <li><strong>Comunicação:</strong> Enviar confirmações, notificações de aniversários, atualizações importantes</li>
            <li><strong>Personalização:</strong> Adaptar conteúdo e sugestões às suas preferências</li>
            <li><strong>Melhorias:</strong> Analisar uso para aprimorar funcionalidades e experiência</li>
            <li><strong>Segurança:</strong> Prevenir fraudes, proteger contra acessos não autorizados</li>
            <li><strong>Suporte:</strong> Responder dúvidas, solucionar problemas técnicos</li>
            <li><strong>Marketing:</strong> Enviar ofertas, promoções e novidades (com seu consentimento)</li>
            <li><strong>Conformidade legal:</strong> Cumprir obrigações legais e regulatórias</li>
          </ul>

          <h3>2.2. Base Legal</h3>
          <p>Processamos seus dados com base em:</p>
          <ul>
            <li><strong>Consentimento:</strong> Você autoriza expressamente o uso de seus dados</li>
            <li><strong>Execução de contrato:</strong> Necessário para fornecer os serviços contratados</li>
            <li><strong>Legítimo interesse:</strong> Para melhorar serviços e prevenir fraudes</li>
            <li><strong>Cumprimento legal:</strong> Exigido por lei ou autoridades competentes</li>
          </ul>

          <div class="section-divider"></div>

          <h2>🤝 3. Compartilhamento de Dados</h2>

          <h3>3.3. Com Quem Compartilhamos</h3>
          <p>Seus dados podem ser compartilhados apenas nas seguintes situações:</p>

          <div class="highlight-box">
            <h4>✅ Compartilhamento Autorizado</h4>
            <ul>
              <li><strong>Processadores de pagamento:</strong> Stripe, PayPal, PagSeguro (para transações financeiras)</li>
              <li><strong>Serviços de email:</strong> Para envio de notificações e comunicações</li>
              <li><strong>Hospedagem e armazenamento:</strong> Servidores seguros para backup de dados</li>
              <li><strong>Análise e métricas:</strong> Ferramentas para entender uso da plataforma (dados anônimos)</li>
              <li><strong>Autoridades legais:</strong> Quando exigido por lei ou ordem judicial</li>
            </ul>
          </div>

          <h3>3.2. O Que NÃO Fazemos</h3>
          <div class="important-box">
            <h4>🚫 Nunca fazemos:</h4>
            <ul>
              <li>Vender seus dados pessoais para terceiros</li>
              <li>Compartilhar suas fotos ou homenagens sem sua autorização</li>
              <li>Usar suas informações para fins não descritos nesta política</li>
              <li>Enviar spam ou comunicações não solicitadas</li>
              <li>Compartilhar dados com anunciantes sem anonimização</li>
            </ul>
          </div>

          <h3>3.3. Transferência Internacional</h3>
          <p>Alguns de nossos parceiros podem estar localizados fora do Brasil. Nesses casos, garantimos que:</p>
          <ul>
            <li>A transferência atende aos requisitos da LGPD</li>
            <li>Existem salvaguardas adequadas de proteção</li>
            <li>Os dados são protegidos com o mesmo nível de segurança</li>
          </ul>

          <div class="section-divider"></div>

          <h2>🔐 4. Segurança de Dados</h2>

          <h3>4.1. Medidas de Proteção</h3>
          <p>Implementamos medidas técnicas e organizacionais para proteger seus dados:</p>
          <ul>
            <li><strong>Criptografia:</strong> SSL/TLS para transmissão de dados, senhas com hash bcrypt</li>
            <li><strong>Acesso restrito:</strong> Apenas funcionários autorizados acessam dados pessoais</li>
            <li><strong>Firewalls:</strong> Proteção contra ataques e acessos não autorizados</li>
            <li><strong>Monitoramento:</strong> Vigilância contínua de atividades suspeitas</li>
            <li><strong>Backups:</strong> Cópias de segurança regulares em servidores protegidos</li>
            <li><strong>Atualizações:</strong> Sistemas sempre atualizados com patches de segurança</li>
            <li><strong>Testes:</strong> Auditorias e testes de segurança periódicos</li>
          </ul>

          <h3>4.2. Sua Responsabilidade</h3>
          <p>Você também tem papel importante na segurança:</p>
          <ul>
            <li>Mantenha sua senha segura e não a compartilhe</li>
            <li>Use senhas fortes com letras, números e símbolos</li>
            <li>Não acesse sua conta em dispositivos públicos ou não confiáveis</li>
            <li>Ative autenticação de dois fatores quando disponível</li>
            <li>Notifique-nos imediatamente sobre atividades suspeitas</li>
          </ul>

          <div class="important-box">
            <h4>⚠️ Importante sobre Segurança</h4>
            <p>Apesar de nossos melhores esforços, nenhum sistema é 100% seguro. Em caso de violação de dados, notificaremos você e as autoridades competentes conforme exigido pela LGPD.</p>
          </div>

          <div class="section-divider"></div>

          <h2>⚖️ 5. Seus Direitos (LGPD)</h2>

          <h3>5.1. Direitos do Titular</h3>
          <p>Você tem os seguintes direitos sobre seus dados pessoais:</p>

          <ul>
            <li><strong>✅ Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
            <li><strong>✏️ Correção:</strong> Atualizar dados incompletos, inexatos ou desatualizados</li>
            <li><strong>📋 Portabilidade:</strong> Receber seus dados em formato estruturado e legível</li>
            <li><strong>🗑️ Eliminação:</strong> Solicitar exclusão de dados desnecessários ou tratados inadequadamente</li>
            <li><strong>ℹ️ Informação:</strong> Conhecer entidades com quem compartilhamos dados</li>
            <li><strong>🚫 Revogação:</strong> Retirar consentimento a qualquer momento</li>
            <li><strong>⛔ Oposição:</strong> Opor-se ao tratamento realizado sem consentimento</li>
            <li><strong>🔒 Anonimização:</strong> Solicitar bloqueio ou anonimização de dados</li>
          </ul>

          <h3>5.2. Como Exercer Seus Direitos</h3>
          <p>Para exercer qualquer um desses direitos:</p>
          <ol>
            <li>Envie email para: <a href="mailto:privacidade@aniverfy.com">privacidade@aniverfy.com</a></li>
            <li>Acesse "Configurações" > "Privacidade e Dados" na sua conta</li>
            <li>Entre em contato com nosso DPO (Encarregado de Dados)</li>
          </ol>

          <div class="highlight-box">
            <h4>⏱️ Prazo de Resposta</h4>
            <p>Responderemos suas solicitações em até 15 dias corridos, conforme estabelecido pela LGPD. Solicitações complexas podem requerer prazo adicional, sobre o qual você será informado.</p>
          </div>

          <div class="section-divider"></div>

          <h2>⏳ 6. Retenção de Dados</h2>

          <h3>6.1. Período de Armazenamento</h3>
          <p>Mantemos seus dados pessoais pelo tempo necessário para:</p>
          <ul>
            <li><strong>Conta ativa:</strong> Durante todo o período em que sua conta existir</li>
            <li><strong>Após exclusão:</strong> Até 90 dias para possibilitar recuperação</li>
            <li><strong>Obrigações legais:</strong> 5 anos ou conforme exigido por lei</li>
            <li><strong>Dados financeiros:</strong> 5 anos (Código Civil, art. 206, §5º)</li>
            <li><strong>Logs de acesso:</strong> 6 meses (Marco Civil da Internet)</li>
          </ul>

          <h3>6.2. Exclusão de Dados</h3>
          <p>Você pode solicitar a exclusão de sua conta a qualquer momento:</p>
          <ul>
            <li>Homenagens públicas serão removidas em até 30 dias</li>
            <li>Dados pessoais serão anonimizados ou deletados</li>
            <li>Backups podem conter dados por até 90 dias adicionais</li>
            <li>Dados necessários para fins legais serão mantidos conforme lei</li>
          </ul>

          <div class="section-divider"></div>

          <h2>🍪 7. Cookies e Tecnologias de Rastreamento</h2>

          <h3>7.1. O Que São Cookies</h3>
          <p>Cookies são pequenos arquivos de texto armazenados em seu dispositivo para melhorar sua experiência.</p>

          <h3>7.2. Tipos de Cookies que Usamos</h3>
          <ul>
            <li><strong>Essenciais:</strong> Necessários para funcionamento básico da plataforma</li>
            <li><strong>Funcionais:</strong> Lembram suas preferências e configurações</li>
            <li><strong>Analíticos:</strong> Coletam dados sobre uso para melhorias (Google Analytics)</li>
            <li><strong>Marketing:</strong> Rastreiam comportamento para anúncios personalizados (opcional)</li>
          </ul>

          <h3>7.3. Gerenciamento de Cookies</h3>
          <p>Você pode controlar cookies através de:</p>
          <ul>
            <li>Configurações do seu navegador</li>
            <li>Painel de preferências de cookies no site</li>
            <li>Extensões de bloqueio de rastreamento</li>
          </ul>

          <div class="info-box">
            <h4>ℹ️ Nota sobre Cookies Essenciais</h4>
            <p>Alguns cookies são essenciais para o funcionamento do site. Bloqueá-los pode afetar funcionalidades básicas como login e navegação.</p>
          </div>

          <div class="section-divider"></div>

          <h2>🔗 8. Links Externos e Integrações</h2>

          <h3>8.1. Sites de Terceiros</h3>
          <p>O Aniverfy pode conter links para sites externos como:</p>
          <ul>
            <li>YouTube (para músicas nas homenagens)</li>
            <li>Redes sociais (Facebook, Instagram, WhatsApp)</li>
            <li>Processadores de pagamento</li>
          </ul>

          <div class="important-box">
            <h4>⚠️ Importante</h4>
            <p>Não controlamos e não nos responsabilizamos pelas práticas de privacidade de sites de terceiros. Recomendamos ler as políticas de privacidade desses sites antes de fornecer qualquer informação.</p>
          </div>

          <h3>8.2. Integrações de API</h3>
          <p>Usamos APIs oficiais de:</p>
          <ul>
            <li><strong>YouTube:</strong> Para embed de músicas (sujeito à Política de Privacidade do Google)</li>
            <li><strong>Google Fonts:</strong> Para tipografias (dados anônimos)</li>
            <li><strong>CDN de imagens:</strong> Para otimização de carregamento</li>
          </ul>

          <div class="section-divider"></div>

          <h2>👶 9. Privacidade de Menores</h2>

          <h3>9.1. Restrições de Idade</h3>
          <div class="important-box">
            <h4>🔞 Importante sobre Menores</h4>
            <p>O Aniverfy não permite o cadastro de menores de 18 anos sem autorização expressa dos pais ou responsáveis legais. Se tomarmos conhecimento de coleta inadvertida de dados de menores, deletaremos imediatamente.</p>
          </div>

          <h3>9.2. Homenagens para Menores</h3>
          <p>Ao criar homenagens para menores de idade:</p>
          <ul>
            <li>Você deve ter autorização dos pais ou responsáveis</li>
            <li>Não publique informações sensíveis (endereço, escola, etc.)</li>
            <li>Use configurações de privacidade restritas</li>
            <li>Tenha cuidado ao compartilhar links da homenagem</li>
          </ul>

          <div class="section-divider"></div>

          <h2>🌍 10. Transferência Internacional de Dados</h2>

          <p>Alguns de nossos servidores e parceiros estão localizados fora do Brasil. Ao usar o Aniverfy, você concorda com a transferência internacional de dados, sempre respeitando:</p>
          <ul>
            <li>Cláusulas contratuais padrão aprovadas</li>
            <li>Adequação do país receptor às normas de proteção</li>
            <li>Garantias de segurança equivalentes à LGPD</li>
          </ul>

          <div class="section-divider"></div>

          <h2>🔄 11. Alterações Nesta Política</h2>

          <h3>11.1. Atualizações</h3>
          <p>Podemos atualizar esta Política de Privacidade periodicamente para refletir:</p>
          <ul>
            <li>Mudanças em nossas práticas de dados</li>
            <li>Novas funcionalidades da plataforma</li>
            <li>Alterações em requisitos legais</li>
            <li>Feedback de usuários e autoridades</li>
          </ul>

          <h3>11.2. Notificação de Mudanças</h3>
          <p>Quando houver alterações significativas:</p>
          <ul>
            <li>Você será notificado por email com 15 dias de antecedência</li>
            <li>Um aviso será exibido ao fazer login na plataforma</li>
            <li>A data de "última atualização" será modificada</li>
          </ul>

          <div class="info-box">
            <h4>📅 Histórico de Versões</h4>
            <p>Mantemos um histórico de versões anteriores desta política. Para consultar versões antigas, entre em contato conosco.</p>
          </div>

          <div class="section-divider"></div>

          <h2>📞 12. Contato e Encarregado de Dados (DPO)</h2>

          <div class="contact-section">
            <h3>Dúvidas sobre Privacidade?</h3>
            <p>Nossa equipe de privacidade está à disposição para ajudar!</p>
            <div class="contact-info">
              <p><strong>📧 Encarregado de Proteção de Dados (DPO):</strong><br>
              <a href="mailto:dpo@aniverfy.com">dpo@aniverfy.com</a></p>
              
              <p><strong>🔒 Privacidade Geral:</strong><br>
              <a href="mailto:privacidade@aniverfy.com">privacidade@aniverfy.com</a></p>
              
              <p><strong>📞 Telefone:</strong><br>
              (11) 9999-9999 (Seg-Sex, 9h-18h)</p>
              
              <p><strong>📍 Endereço:</strong><br>
              Rua Exemplo, 123 - São Paulo/SP - CEP 01234-567</p>
            </div>
          </div>

          <div class="section-divider"></div>

          <h2>⚖️ 13. Autoridade Nacional de Proteção de Dados (ANPD)</h2>

          <p>Você tem o direito de apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) se acreditar que o tratamento de seus dados viola a LGPD:</p>
          
          <div class="highlight-box">
            <h4>📋 Contato da ANPD</h4>
            <p><strong>Site:</strong> <a href="https://www.gov.br/anpd" target="_blank" rel="noopener">www.gov.br/anpd</a><br>
            <strong>Endereço:</strong> SIG Quadra 5, Lote 485 - Brasília/DF - CEP 70.092-900</p>
          </div>

          <div class="section-divider"></div>

          <div class="commitment-box">
            <h4>💙 Nosso Compromisso com Você</h4>
            <p>No Aniverfy, acreditamos que privacidade é um direito fundamental. Tratamos seus dados com o máximo respeito e transparência, sempre priorizando sua segurança e confiança. Estamos constantemente melhorando nossas práticas para garantir que suas memórias especiais permaneçam protegidas. Obrigado por confiar em nós! 🎉</p>
          </div>
        </div>

        <div class="termos-footer">
          <div class="footer-links">
            <a href="#/termos">Termos de Uso</a>
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