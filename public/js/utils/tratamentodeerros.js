// Extrair e formatar erros do backend
export function extrairErrosBackend(responseData) {
  const erros = [];

  // Se veio um array de erros
  if (Array.isArray(responseData.erros)) {
    return responseData.erros;
  }

  // Se veio um objeto com erros por campo
  if (responseData.errors && typeof responseData.errors === 'object') {
    Object.keys(responseData.errors).forEach(campo => {
      if (Array.isArray(responseData.errors[campo])) {
        erros.push(...responseData.errors[campo]);
      } else {
        erros.push(responseData.errors[campo]);
      }
    });
    return erros;
  }

  // Se veio uma mensagem simples
  if (responseData.message) {
    return [responseData.message];
  }

  if (responseData.error) {
    return [responseData.error];
  }

  // Se nada mais funcionar
  return ['Erro desconhecido ao cadastrar'];
}

// Categorizar e exibir erros de forma amigável
export function formatarMensagemErro(erros) {
  if (!Array.isArray(erros) || erros.length === 0) {
    return 'Erro ao cadastrar. Tente novamente.';
  }

  // Agrupar erros por tipo
  const errosFormatados = erros.map(erro => {
    // Remover símbolos desnecessários
    let msg = erro.replace(/^[•\-*]\s?/, '').trim();
    
    // Adicionar emoji baseado no tipo de erro
    if (msg.includes('senha')) {
      return '🔐 ' + msg;
    } else if (msg.includes('email')) {
      return '📧 ' + msg;
    } else if (msg.includes('idade') || msg.includes('18')) {
      return '📅 ' + msg;
    } else if (msg.includes('nome')) {
      return '👤 ' + msg;
    } else {
      return '❌ ' + msg;
    }
  });

  return errosFormatados.join('\n');
}

// Função completa para tratar resposta do backend
export function tratarRespostaBackend(result) {
  if (result.ok) {
    return {
      sucesso: true,
      mensagem: '✅ Cadastro realizado com sucesso!'
    };
  }

  // Extrair erros
  const erros = extrairErrosBackend(result.data);
  
  // Formatar para exibição
  const mensagem = formatarMensagemErro(erros);

  return {
    sucesso: false,
    mensagem: mensagem,
    erros: erros
  };
}