const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('In development!');
});
client.on('message', message => {
    console.log(message.channel.members);
  if(message.author.bot) return;{//если отправитель не бот
   if(message.channel.type == "dm") message.reply("Оставь меня в покое!");{
    if(message.content.charAt(0) == "/"){//если сообщение начинается с /
        sender = message.author;
        msg = message.content.toLowerCase();
 args = msg.split(" ");
 cmd = args[0];
 arg1 = args[1];
 arg2 = args[2];
    switch(cmd){ //распознавание команды
        case '/help':
        message.channel.send("/coin орёл|решка - попробуй угадать сторону!");
        break;

        case '/cookie':
        message.channel.send(arg1+ ", вам печенька от "+sender);
        break;

        case '/coin':
        var values = ["орёл","решка"];
        if(arg1 == undefined || values.indexOf(arg1)==-1){
            arg1 == "орел"? message.reply("Не подброшу,пока не поставишь точки над ё ! -.-"):
        message.reply("Используй: /coin орёл|решка");
         return false;
        }else{
            var result = Math.floor(Math.random() * 2) === 0 ? "орёл" : "решка";
            result == arg1? say = "! Вот это удача!" : say = "! Вот незадача :с";
            arg1 == "орёл"? arg1 = "орла" : arg1 = "решку";
            message.channel.send(sender+" ставит на "+ arg1 + " и выпадает... "+ result+say);
        break;
        }

        default: 
        message.channel.send("Команда не распознана.Используйте /help для справки");
}
    }
}
  }
});
client.login('NTQwMTY1NDc4NDI2MDgzMzQ4.DzrZNg.kmhobxHhCJw90TKbGaMCvEUvFKg');
