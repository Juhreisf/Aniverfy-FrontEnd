// Validar se todos os campos obrigatórios estão preenchidos
export function validarCamposObrigatorios(name, birthDate, email, password, confirmPassword) {
  return name && birthDate && email && password && confirmPassword;
}

// Validar se as senhas são iguais
export function validarSenhasIguais(password, confirmPassword) {
  return password === confirmPassword;
}

// Validar email
export function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validar idade (maior de 18 anos)
export function validarIdade(birthDate) {
  const dataNasc = new Date(birthDate);
  const hoje = new Date();
  let idade = hoje.getFullYear() - dataNasc.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNasc = dataNasc.getMonth();
  
  if (mesAtual < mesNasc || (mesAtual === mesNasc && hoje.getDate() < dataNasc.getDate())) {
    idade--;
  }

  return idade >= 18;
}

// Validar senha completa
export function validarSenha(senha) {
  const erros = [];

  if (senha.length < 8) {
    erros.push('• A senha deve ter pelo menos 8 caracteres');
  }

  if (!/[A-Z]/.test(senha)) {
    erros.push('• A senha deve ter pelo menos 1 letra maiúscula');
  }

  if (!/[a-z]/.test(senha)) {
    erros.push('• A senha deve ter pelo menos 1 letra minúscula');
  }

  if (!/[0-9]/.test(senha)) {
    erros.push('• A senha deve ter pelo menos 1 número');
  }

  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha)) {
    erros.push('• A senha deve ter pelo menos 1 caractere especial (!@#$%^&*)');
  }

  if (erros.length > 0) {
    erros.push('\n⚠️ Senha muito fraca');
  }

  return erros;
}