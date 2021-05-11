const { MessageEmbed, Util } = require('discord.js');

module.exports = {
  name: 'emoji-id',
  category: 'Utility',
  description: 'Sends the id of the emoji',
  expectedArgs: '<emoji>',
  minArgs: 1,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}emoji-id {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    for (const rawEmoji of args) {
      const parsedEmoji = Util.parseEmoji(rawEmoji)

      message.channel.send(`Emoji name - ${parsedEmoji.name}\nEmoji ID - ${parsedEmoji.id}`)
    }
  }
}