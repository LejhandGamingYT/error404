const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'snapshot',
  category: 'Image',
  description: 'Sends the code in an image form',
  expectedArgs: '<code>',
  minArgs: 1,
  maxArgs: 1000,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}snapshot {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    let code = args.join("%20");

    const embed = new MessageEmbed()
    .setImage("https://carbonnowsh.herokuapp.com/?code=" + code + "&backgroundColor=rgba(144,%2019,%20254,%20100)")
    .setColor('#00f9ff')

    message.channel.send(embed)
  }
}