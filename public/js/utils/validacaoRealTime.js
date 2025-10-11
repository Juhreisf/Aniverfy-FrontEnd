import { 
  validarSenha, 
  validarEmail, 
  validarIdade
} from './validacoes.js';

export function inicializarValidacaoRealTime(inputs, errorElements) {
  
  // ✅ VALIDAÇÃO EM TEMPO REAL - NOME
  inputs.name.addEventListener('input', () => {
    const name = inputs.name.value.trim();
    if (!name) {
      mostrarErro('name', '👤 Nome é obrigatório', inputs, errorElements);
    } else if (name.length < 3) {
      mostrarErro('name', '👤 Nome deve ter pelo menos 3 caracteres', inputs, errorElements);
    } else {
      limparErro('name', inputs, errorElements);
    }
  });

  // ✅ VALIDAÇÃO EM TEMPO REAL - EMAIL
  inputs.email.addEventListener('input', () => {
    const email = inputs.email.value.trim();
    if (!email) {
      mostrarErro('email', '📧 Email é obrigatório', inputs, errorElements);
    } else if (!validarEmail(email)) {
      mostrarErro('email', '📧 Email inválido (exemplo@gmail.com)', inputs, errorElements);
    } else {
      limparErro('email', inputs, errorElements);
    }
  });

  // ✅ VALIDAÇÃO EM TEMPO REAL - DATA DE NASCIMENTO
  inputs.birthDate.addEventListener('change', () => {
    const birthDate = inputs.birthDate.value;
    if (!birthDate) {
      mostrarErro('birthDate', '📅 Data é obrigatória', inputs, errorElements);
    } else if (!validarIdade(birthDate)) {
      mostrarErro('birthDate', '📅 Você deve ter pelo menos 18 anos', inputs, errorElements);
    } else {
      limparErro('birthDate', inputs, errorElements);
    }
  });

  // ✅ VALIDAÇÃO EM TEMPO REAL - SENHA (Com detalhes)
  inputs.password.addEventListener('input', () => {
    const password = inputs.password.value;
    const errosSenha = validarSenha(password);

    if (errosSenha.length > 0) {
      mostrarErroDetalhado('password', errosSenha, inputs, errorElements);
    } else {
      limparErro('password', inputs, errorElements);
    }

    // Validar coincidência de senhas também
    if (inputs.confirmPassword.value && password !== inputs.confirmPassword.value) {
      mostrarErro('confirmPassword', '🔐 As senhas não coincidem', inputs, errorElements);
    } else if (inputs.confirmPassword.value && password === inputs.confirmPassword.value) {
      limparErro('confirmPassword', inputs, errorElements);
    }
  });

  // ✅ VALIDAÇÃO EM TEMPO REAL - CONFIRMAR SENHA
  inputs.confirmPassword.addEventListener('input', () => {
    const password = inputs.password.value;
    const confirmPassword = inputs.confirmPassword.value;

    if (!confirmPassword) {
      mostrarErro('confirmPassword', '🔐 Confirme sua senha', inputs, errorElements);
    } else if (password !== confirmPassword) {
      mostrarErro('confirmPassword', '🔐 As senhas não coincidem', inputs, errorElements);
    } else {
      limparErro('confirmPassword', inputs, errorElements);
    }
  });
}

function mostrarErro(campo, mensagem, inputs, errorElements) {
  const errorElement = errorElements[campo];
  if (errorElement) {
    errorElement.textContent = mensagem;
    errorElement.style.color = '#e74c3c';
    errorElement.style.display = 'block';
    errorElement.style.fontSize = '12px';
    errorElement.style.marginTop = '5px';
    
    const input = inputs[campo];
    if (input) {
      input.style.borderColor = '#e74c3c';
    }
  }
}

function mostrarErroDetalhado(campo, erros, inputs, errorElements) {
  const errorElement = errorElements[campo];
  if (errorElement) {
    errorElement.innerHTML = erros.map(e => `<div>🔐 ${e.replace('• ', '')}</div>`).join('');
    errorElement.style.color = '#e74c3c';
    errorElement.style.display = 'block';
    errorElement.style.fontSize = '12px';
    errorElement.style.marginTop = '5px';
    
    const input = inputs[campo];
    if (input) {
      input.style.borderColor = '#e74c3c';
    }
  }
}

export function limparErro(campo, inputs, errorElements) {
  const errorElement = errorElements[campo];
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.innerHTML = '';
    errorElement.style.display = 'none';
  }
  const input = inputs[campo];
  if (input) {
    input.style.borderColor = '';
  }
}

export function mostrarErrosBackend(erros, inputs, errorElements) {
  if (!Array.isArray(erros)) return;

  erros.forEach(erro => {
    const erroLower = erro.toLowerCase();

    if (erroLower.includes('nome') || erroLower.includes('completo')) {
      mostrarErro('name', '👤 ' + erro, inputs, errorElements);
    } else if (erroLower.includes('email')) {
      mostrarErro('email', '📧 ' + erro, inputs, errorElements);
    } else if (erroLower.includes('senha')) {
      mostrarErro('password', '🔐 ' + erro, inputs, errorElements);
    } else if (erroLower.includes('data') || erroLower.includes('nascimento')) {
      mostrarErro('birthDate', '📅 ' + erro, inputs, errorElements);
    } else if (erroLower.includes('confirmar')) {
      mostrarErro('confirmPassword', '🔐 ' + erro, inputs, errorElements);
    } else {
      mostrarErro('name', erro, inputs, errorElements);
    }
  });
}