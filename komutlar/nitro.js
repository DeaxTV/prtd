const Discord = require('discord.js');
const db = require("quick.db")

exports.run = (client, message, args) => {
  let userdata = ["439450931579453440"]
  if (message.author.id ==! userdata) {message.channel.send("Nitro üretebilmek için öncelikle sisteme kayıt olmalısın. Kayıt olmak için Deax#7649'a DM at!")}
  function rasteleSembol(uzunluk, semboller) {

var maske = '';

if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';

if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

if (semboller.indexOf('0') > -1) maske += '0123456789';

var sonuc = '';

 

for (var i = uzunluk; i > 0; --i) 

{

sonuc += maske[Math.floor(Math.random() * maske.length)];

}

return sonuc;

}

function spamla(){
    message.channel.send   ("https:/"+"/discord.gift/" + rasteleSembol(16,'0aA'));
}
        var veri = message.content.toString();
        var veriSn = veri.substring(10)
        var saniye = parseInt(veriSn);
        var saniye1 = saniye * 500;
        setInterval(spamla, saniye1);
        
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['nitro']
};

exports.help = {
  name: 'nitrogenerator',
  description: 'nitrogenerator',
  usage: 'nitrogenerator'
};