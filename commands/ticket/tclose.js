const { MessageEmbed } = require('discord.js');
const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
  name: 'tclose',
  category: 'Ticket',
  description: 'Closes an existing ticket',
  permissions: ['ADMINISTRATOR'],
  expectedArgs: '<channel>',
  minArgs: 1,
  maxArgs: 1,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}tclose {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const closingchannel = message.mentions.channels.first()
    ticket.closeTicket(message, closingchannel)
  }
}