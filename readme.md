# 🎂 Aniverfy

✨ **Aniverfy** é uma aplicação web que permite criar **sites personalizados de aniversário**, emocionantes, leves e bonitos, para homenagear pessoas queridas em datas especiais.

---

## 🔗 Link do projeto em funcionamento

*(em breve)*

---

## 📑 Índice

- [Aniverfy](https://www.notion.so/Readme-2743524b5bb18010b263e0c04c38130b?pvs=21)
    - [Link do projeto em funcionamento](https://www.notion.so/Readme-2743524b5bb18010b263e0c04c38130b?pvs=21)
    - [1. Introdução](https://www.notion.so/Readme-2743524b5bb18010b263e0c04c38130b?pvs=21)
    - [2. Concepção do Produto e Usabilidade](https://www.notion.so/Readme-2743524b5bb18010b263e0c04c38130b?pvs=21)
    - [3. Público-Alvo](https://www.notion.so/Readme-2743524b5bb18010b263e0c04c38130b?pvs=21)
    - [4. Protótipo de Baixa Fidelidade](https://www.notion.so/Readme-2743524b5bb18010b263e0c04c38130b?pvs=21)
    - [5. Funcionalidades](https://www.notion.so/Readme-2743524b5bb18010b263e0c04c38130b?pvs=21)
    - [6. Estrutura Técnica](https://www.notion.so/Readme-2743524b5bb18010b263e0c04c38130b?pvs=21)
    - [7. Estrutura de Pastas](https://www.notion.so/Readme-2743524b5bb18010b263e0c04c38130b?pvs=21)
    - [8. Deploy Futuro](https://www.notion.so/Readme-2743524b5bb18010b263e0c04c38130b?pvs=21)
    - 9[. Autores](https://www.notion.so/Readme-2743524b5bb18010b263e0c04c38130b?pvs=21)

---

## 1. Introdução

O **Aniverfy** nasceu com a ideia de proporcionar uma forma única e carinhosa de comemorar aniversários.

A proposta é criar uma experiência online onde amigos e familiares possam enviar mensagens, compartilhar fotos, relembrar conquistas e até sugerir presentes.

---

## 2. Concepção do Produto e Usabilidade

Desde o início, pensamos em um produto:

- 📱 **Responsivo** (funciona em celular e desktop)
- 💖 **Emocional e afetuoso**, com design leve
- 🎨 **Personalizável** (temas, cores e futuramente músicas)
- 🚀 **Simples de usar** tanto para quem cria quanto para quem acessa

---

## 3. Público-Alvo

- Pessoas que desejam homenagear **amigos, familiares, colegas ou parceiros** em datas especiais.
- Usuários que buscam uma alternativa diferente, criativa e digital ao tradicional “parabéns”.

---

## 4. Protótipo de Baixa Fidelidade

---

## 5. Funcionalidades

- 📸 Foto do aniversariante
- 🖼️ Galeria de momentos especiais
- 💌 Mensagens de amigos e familiares
- ⏳ Contador de vida (idade exata e tempo vivido)
- 🕰️ Linha do tempo de conquistas da vida
- 🎁 Botão de sugestão de presente
- 🎨 Temas personalizados (cores e, futuramente, músicas do YouTube)

---

## 6. Estrutura Técnica

**Frontend**

- HTML + CSS (Bootstrap para layout responsivo)
- JavaScript (animações, interações, contador de vida)
- Upload de imagens com preview, zoom e posicionamento

**Backend**

- Python + Flask (API REST: CRUD, autenticação, pagamentos)
- SQLite (banco de dados inicial)
- Flask-Mail ou Brevo (envio de email com link + QR Code)
- Integração com QR Code generato
- Integração com API Mercado Pago
- Armazenamento em `/static/uploads` (futuro: Amazon S3)

---

## 7. Estrutura de Pastas

```
aniverfy/
│
├── app.py
├── requirements.txt
├── config.py
│
Arquivos estáticos
│   ├── css/
│   ├── js/
│   └── uploads/
│
├── routes/             # Rotas da aplicação
│   ├── homenagem.py
│   ├── pagamento.py
│
├── models/             # Definição das tabelas
│   ├── usuario.py
│   ├── homenagem.py
│   └── conquista.py
│
├── services/           # Lógica de serviços externos
│   ├── email.py
│   ├── qrcode.py
│   └── pagamentos.py
│
└── database/
    └── init_db.py

```

---

## 8. Deploy Futuro

- Hospedagem: a definir
- Banco: SQLite (inicialmente)
- Armazenamento de imagens: local → Amazon S3 futuramente

---

---

## 9. Autores

👩‍💻 **Juliana** – [LinkedIn](https://www.linkedin.com/in/julianareisfernandes/) | [GitHub](https://github.com/Juhreisf)

👨‍💻 **Gabriel** – [LinkedIn](https://www.linkedin.com/in/gabriel-vieira-4bbb01362/) | [GitHub](https://github.com/gabrielcnt)

---