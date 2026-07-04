const TelegramBot = require('node-telegram-bot-api');
const token = '8803941799:AAEVPORXf6niDbWyx6ohNmEDvayXsSeAiKI';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '🚀 Добро пожаловать на твой тестовый сервер!', {
    reply_markup: {
      keyboard: [
        [{ text: '📱 Открыть тестовый сервер', web_app: { url: 'https://my-test-server.onrender.com' } }]
      ],
      resize_keyboard: true
    }
  });
});

bot.on('web_app_data', (msg) => {
  bot.sendMessage(msg.chat.id, `📨 Получил данные: "${msg.web_app_data.data}"`);
});

console.log('✅ Бот с WebApp запущен!');
