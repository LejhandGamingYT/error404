const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ping',
  category: 'Utility',
  description: 'Returns the ping of the bot',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const msg = await message.channel.send(`Pinging...`)
    const embed = new MessageEmbed()
    .setDescription(`
    <:latency:840268811302076476> Websocket ping is **${client.ws.ping}** ms \n<:latency:840268811302076476> Message edit ping is **${Math.floor(msg.createdAt - message.createdAt)}** ms!
    `)
    .setColor("00f9ff")
    await message.channel.send(embed)
    msg.delete()
  }
}