import TelegramBot from "node-telegram-bot-api";
const TOKEN = "7991261995:AAGm6kv9v3q9EHsOLa2K87cs3R6NgS7iLuw"
const bot = new TelegramBot(TOKEN, { polling: true })

bot.on("message",function(msg){
    const chatId = msg.chat.id;
    const text = msg.text;

    bot.sendMessage(chatId,`Salom -> ${text}`);

    console.log(msg);
    console.log("*******");
    console.log(chatId,text);
})







console.log("Bot ishga tushdi...");
