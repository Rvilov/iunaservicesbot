const { Telegraf } = require("telegraf");

const bot = new Telegraf("5176663392:AAFjFIMne8a174rxbI7Fxieupisq9doPUl4");

bot.start((ctx) => {

    ctx.reply("Welcome pervert")

});

bot.command("mywaifu",(ctx)=>{
    ctx.reply("WaifuPic!!")
});

bot.hears(["holis iuna","HOLIS IUNA","Holis iuna","Holis Iuna"], ctx => {
    ctx.reply("Holis "+ ctx.from.first_name)
});

bot.hears("Senpai", ctx => {
    ctx.reply("SEMPAIII")
});

bot.launch();