const { MessageEmbed } = require('discord.js');
const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
  name: 'tcategory',
  category: 'Ticket',
  description: 'Sets the category of the ticket',
  permissions: ['ADMINISTRATOR'],
  expectedArgs: '<category id>',
  minArgs: 1,
  maxArgs: 1,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}tcategory {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const ID = args[0];
    ticket.Category(message, ID)
 
        message.channel.send(`Ticket Category has been set!`)
  }
}