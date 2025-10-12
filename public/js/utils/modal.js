// js/utils/modal.js

export function criarModal() {
  // Remover modal existente se houver
  const modalExistente = document.getElementById('customModal');
  if (modalExistente) {
    modalExistente.remove();
  }

  const modalHTML = `
    <div id="customModal" class="custom-modal">
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <div class="modal-icon" id="modalIcon"></div>
        <h3 class="modal-title" id="modalTitle"></h3>
        <p class="modal-message" id="modalMessage"></p>
        <button class="modal-btn" id="modalBtn">OK</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

export function mostrarModal({ tipo = 'success', titulo, mensagem, callback }) {
  criarModal();

  const modal = document.getElementById('customModal');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalMessage = document.getElementById('modalMessage');
  const modalBtn = document.getElementById('modalBtn');

  // Configurar ícone baseado no tipo
  const icones = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  const titulos = {
    success: titulo || 'Sucesso!',
    error: titulo || 'Erro!',
    warning: titulo || 'Atenção!',
    info: titulo || 'Informação'
  };

  modalIcon.textContent = icones[tipo] || icones.success;
  modalIcon.className = `modal-icon ${tipo}`;
  modalTitle.textContent = titulos[tipo];
  modalMessage.textContent = mensagem;

  // Mostrar modal com animação
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);

  // Função para fechar modal
  const fecharModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.remove();
      if (callback) callback();
    }, 300);
  };

  // Event listeners
  modalBtn.addEventListener('click', fecharModal);
  modal.querySelector('.modal-overlay').addEventListener('click', fecharModal);

  // Fechar com ESC
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      fecharModal();
      document.removeEventListener('keydown', handleEsc);
    }
  };
  document.addEventListener('keydown', handleEsc);
}

// Funções de atalho
export function mostrarSucesso(mensagem, callback) {
  mostrarModal({
    tipo: 'success',
    mensagem,
    callback
  });
}

export function mostrarErro(mensagem, callback) {
  mostrarModal({
    tipo: 'error',
    mensagem,
    callback
  });
}

export function mostrarAviso(mensagem, callback) {
  mostrarModal({
    tipo: 'warning',
    mensagem,
    callback
  });
}

export function mostrarInfo(mensagem, callback) {
  mostrarModal({
    tipo: 'info',
    mensagem,
    callback
  });
}