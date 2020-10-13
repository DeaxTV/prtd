const Discord = require("discord.js");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const client = new Discord.Client();//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const ayarlar = require("./ayarlar.json");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const chalk = require("chalk");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const moment = require("moment");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
var Jimp = require("jimp");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const { Client, Util } = require("discord.js");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const weather = require("weather-js");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const fs = require("fs");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const db = require("quick.db");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const http = require("http");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const express = require("express");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
require("./util/eventLoader.js")(client);//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const path = require("path");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const request = require("request");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const snekfetch = require("snekfetch");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const queue = new Map();//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const YouTube = require("simple-youtube-api");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
const ytdl = require("ytdl-core");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r

const app = express();//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
app.get("/", (request, response) => {//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
  console.log(Date.now() + "PİNG PONG");//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
  response.sendStatus(200);//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
});
app.listen(process.env.PORT);
setInterval(() => {//emir321r
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
};//emir321r//emir321r//emir321r//emir321r//emir321r

client.commands = new Discord.Collection();//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
client.aliases = new Discord.Collection();//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
fs.readdir("./komutlar/", (err, files) => {//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
  if (err) console.error(err);//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
  log(`${files.length} komut yüklenecek.`);//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
  files.forEach(f => {//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
      reject(e);
    }
  });
};//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   l0RDconsole.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// }); //DEVİLHOUSE//

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r

client.login(ayarlar.token);
//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r
//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r//emir321r