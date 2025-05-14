const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios');

console.log('=== INICIANDO BOT ===');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]
  },
  webVersionCache: {
    type: 'remote',
    remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html'
  }
});

client.on('qr', qr => {
  console.log('\n=== ESCANEIE ESTE QR CODE ===');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('\n✅ BOT PRONTO PARA USO!');
});

client.on('message', async msg => {
  console.log('Evento de mensagem disparado!'); // Log para depuração
  console.log('Mensagem recebida:', msg.body); // Log da mensagem recebida
  const texto = msg.body.toLowerCase();
  if (texto.includes('olá') || texto.includes('oi')) {
    
    try {
      await axios.post('http://localhost:5678/webhook-test/bot-whatsapp-imoveis', {
        message: texto,
        from: msg.from
      });
      console.log('Mensagem enviada para o webhook com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar mensagem para o webhook:', error.message);
    }
  }
});

client.initialize();

console.log('Aguardando conexão...')