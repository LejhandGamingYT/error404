const { MessageEmbed } = require('discord.js');
const translate = require('@vitalets/google-translate-api');

module.exports = {
  name: 'translate',
  category: 'Search',
  description: 'Translates from one language to another',
  expectedArgs: '<lang iso code> <text>',
  minArgs: 1,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}translate {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    let lang = args[0]
    let query = args.slice(1).join(" ");

    translate(query, {to: lang}).then(res => {
      const embed = new MessageEmbed()
      .addField("Language (from)", res.from.language.iso, true)
      .addField("Language (to)", lang, true)
      .addField("Translation", res.text)
      .setColor("00f9ff")
    message.channel.send(embed);
}).catch(err => {
    message.channel.send("An error occured")
});
  }
}