const { MessageEmbed } = require('discord.js');
const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
  name: 'trole',
  category: 'Ticket',
  description: 'Sets a role which can access a ticket',
  permissions: ['ADMINISTRATOR'],
  expectedArgs: '<role>',
  minArgs: 1,
  maxArgs: 1,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}trole {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const role = message.mentions.roles.first()
 
    ticket.setRole(message, role)
  }
}