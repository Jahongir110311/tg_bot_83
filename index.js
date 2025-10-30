import TelegramBot from "node-telegram-bot-api";
const TOKEN = "7991261995:AAGm6kv9v3q9EHsOLa2K87cs3R6NgS7iLuw"
const bot = new TelegramBot(TOKEN, { polling: true })

bot.on("message",function(msg){
    const chatId = msg.chat.id;
    const text = msg.text;
    const firstname = msg.chat.first_name;


    bot.sendMessage(chatId,`Xush kelibsiz!, ${firstname}` , {
        reply_markup: {
            keyboard: [
                [{text: "Boshlash 🔥"}],
                [{text: "Menu 🫡"},{text: "Sozlamalar ⚙️"}]
            ]
        },
        resize_keyboard: true,
    });


    console.log(msg);
})


console.log("Bot ishga tushdi...");
