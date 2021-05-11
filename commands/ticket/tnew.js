const { MessageEmbed } = require('discord.js');
const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
  name: 'tnew',
  category: 'Ticket',
  description: 'Creates a new ticket',
  expectedArgs: '<reason>',
  minArgs: 1,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}tnew {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const reason = args.join(" ")
    ticket.makeTicket(message, reason, "swrf")
  }
}