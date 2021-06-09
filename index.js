const TelegramBot = require('node-telegram-bot-api');

const token = '1854446970:AAFg3gIZ7K0jJo5kMPfaHAHPRO8wqgIjjMQ';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    const options = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Red', callback_data: '1' }],
                [{ text: 'Green', callback_data: '2' }],
            ]
        })
    }

    console.log(msg)

    if (msg.text.toLowerCase() === 'привет') {
        bot.sendMessage(chatId, `Hi, ${msg.chat.first_name}✌`);
    }

    if (msg.text === '/start') {
        bot.sendMessage(chatId, 'Choose a button', options);
    }
});


// hex: '#E54441'
// hex: '#35BE32'
//some changes
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    const opts = {
        chat_id: msg.chat.id,
        message_id: msg.message_id,
    };
    console.log(msg.reply_markup.inline_keyboard)
    // const hex = msg.reply_markup.inline_keyboard.hex;
    bot.sendMessage(msg.text, opts);
});
