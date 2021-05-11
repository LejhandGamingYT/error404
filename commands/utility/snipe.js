const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'snipe',
  category: 'Utility',
  description: 'Shows the last deleted message in the channel',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("There are no deleted messages in this channel!")
    const embed = new MessageEmbed()
    .setAuthor(msg.author)
    .setDescription(msg.content)
    .setColor("RANDOM")
    .setFooter(message.author.tag, message.author.avatarURL())
    if(msg.image)embed.setImage(msg.image)

    message.channel.send(embed)
  }
}