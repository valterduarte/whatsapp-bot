# 🤖 WhatsApp Bot

Este é um bot para WhatsApp desenvolvido com a biblioteca [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js). Ele permite receber mensagens no WhatsApp e enviá-las para um webhook configurado, facilitando a integração com outros sistemas.

---

## 🚀 Funcionalidades

- **Receber mensagens do WhatsApp**: O bot escuta mensagens recebidas em tempo real.
- **Enviar mensagens para um webhook**: As mensagens recebidas são enviadas para um endpoint configurado.
- **Autenticação local**: O bot utiliza `LocalAuth` para salvar a sessão do WhatsApp, evitando a necessidade de escanear o QR Code toda vez que for iniciado.

---

## 🛠️ Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- Uma conta ativa no WhatsApp

---

## ⚙️ Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/valterduarte/whatsapp-bot.git
   cd whatsapp-bot

   
