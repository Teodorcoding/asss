const Negras BotDiscord = require('discord.js');
const Negras BotClient = new Negras BotDiscord.Client();
exports.run = (client, message) => {
  const Negras BotEmbed = new Negras BotDiscord.MessageEmbed();
  Negras BotEmbed.setColor(0x36393F)
  Negras BotEmbed.setDescription(` Negras Boti davet etmek için [buraya](Link) tıkla!`)
  message.channel.send(Negras BotEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};