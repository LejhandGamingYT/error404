const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'npm',
  category: 'Search',
  description: 'Searches from the npm js docs',
  expectedArgs: '<query>',
  minArgs: 1,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}npm {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {

    try {
      let query = args.join(" ");
      const data = await fetch("https://registry.npmjs.org/" + query.toLowerCase()).then(lang => lang.json()) 
      let embed = new MessageEmbed()
      .setAuthor("NPM Package")
      .addField("Name",data.name)
      .addField("Description",data.description)
      .addField("Author",data.author.name)
      .addField("License",data.license)
      .addField("Keywords",data.keywords.join(", "))
      .setColor("RED")
      .setFooter(`${message.author.username}`,message.author.displayAvatarURL())
      .setTimestamp()
      message.channel.send(embed)
    } catch (error) {
      message.reply("Npm package not found")
    }
  }
}