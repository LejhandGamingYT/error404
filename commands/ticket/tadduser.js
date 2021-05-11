const { MessageEmbed } = require('discord.js');
const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
  name: 'tadduser',
  category: 'Ticket',
  description: 'Adds user to to the existing ticket',
  permissions: ['ADMINISTRATOR'],
  expectedArgs: '<channel> <user>',
  minArgs: 1,
  maxArgs: 2,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}tadduser {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const existchannel = message.mentions.channels.first()
        const user = message.mentions.users.first()
 
        ticket.ticketAddUser(existchannel, user)
  }
}