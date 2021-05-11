const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'dpy',
  category: 'Search',
  description: 'Searches from the discord py docs',
  expectedArgs: '<query>',
  minArgs: 1,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}dpy {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const query = args.join(" ")
    const urls = `https://discordpy.readthedocs.io/en/stable/search.html?q=${query}`
    const urll = `https://discordpy.readthedocs.io/en/latest/search.html?q=${query}`

    const embed = new MessageEmbed()
    .setTitle(`Results of your query`)
    .addField(`Stable`, `• [${query}](${urls})`)
    .addField(`Latest`, `• [${query}](${urll})`)
    .setColor("YELLOW")

    message.channel.send(embed)
  }
}