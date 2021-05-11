const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'javascript',
  category: 'Language-Info',
  description: 'Sends information on javascript',
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, client, args }) => {

    const javascriptEmbed = new MessageEmbed()
    .setTitle(`Information On Javascript`)
    .setURL('https://www.javascript.com/about')
    .setDescription(`JavaScript.com is a resource built by the Pluralsight team for the JavaScript community.

Because JavaScript is a great language for coding beginners, we've gathered some of the best learning resources around and built a JavaScript course to help new developers get up and running.

With the help of community members contributing content to the site, JavaScript.com aims to also keep more advanced developers up to date on news, frameworks, and libraries. Sourced From [Here](https://www.javascript.com/about)`)
    .addField(`So why javascript?`, `You should learn javascript for a multitude of reasons. Its classic and can hold many features like to code a discord bot or add elements to your website. Another reason may be the adaptation of it and how many libraries there are.`)
    .setColor("YELLOW")
    .setThumbnail('https://cdn.discordapp.com/emojis/719844448057425953.png?v=1')
    .setFooter(`Provided By ${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

    message.channel.send(javascriptEmbed)
  }
}