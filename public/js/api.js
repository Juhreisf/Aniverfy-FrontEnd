export function registerUser(formData) {
  
  console.log("📤 Enviando:");
  for (let [key, value] of formData.entries()) {
    console.log(`  ${key}: ${value}`);
  }

  return fetch("https://aniverfy-back-end.onrender.com/auth/criar_conta", {
    method: "POST",
    body: formData
  })
  .then(response => {
    console.log("📥 Status HTTP:", response.status);
    console.log("📥 Headers:", response.headers.get('content-type'));
    
    return response.json().then(data => {
      console.log("📥 Resposta completa do backend:", JSON.stringify(data, null, 2));
      
      return {
        status: response.status,
        ok: response.ok,
        data: data
      };
    }).catch(jsonError => {
      console.error("❌ Erro ao parsear JSON:", jsonError);
      return {
        status: response.status,
        ok: response.ok,
        data: { error: "Resposta inválida do servidor" }
      };
    });
  })
  .then(result => {
    console.log("📊 Resultado final:", result);
    return { ok: result.ok, data: result.data };
  })
  .catch(error => {
    console.error("❌ Erro de conexão:", error.message);
    return { 
      ok: false, 
      data: { error: "Erro de conexão. Tente novamente." } 
    };
  });
}