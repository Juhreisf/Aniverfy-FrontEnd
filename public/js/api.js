const API_URL = 'https://jsonplaceholder.typicode.com';

export async function registerUser(userData) {
    try {
        const response = await fetch(`${API_URL}/posts`, { //trocar posts por register
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        const data = await response.json();

        return { ok: response.ok, data };

    } catch (error) {
        console.error("Erro na conexão:", error);

        return { ok: false, data: { message: "Falha de conexão com o servidor." } };
    }
}

export async function loginUser(loginData){
    try {
        const response = await fetch(`${API_URL}/login`,{
            method: "POST",
            headers: { "Content-Type":"aplication/json"},
            body: JSON.stringify(loginData),
        });
        const data = await response.json();
        return {ok: response.ok, data};
    
    } catch (error) {
        console.error('Erro na API (login):', error);
        return {ok: false, data: error };
    }
}