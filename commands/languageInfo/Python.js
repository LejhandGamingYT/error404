const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'python',
  category: 'Language-Info',
  description: 'Sends information about Python',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const pythonembed = new MessageEmbed()
    .setTitle("Information on Python")
    .setDescription(`Python is a programming language that lets you work quickly and integrate systems more effectively`)
    .addField(`Pros`, `\`\`\`1. Versatile, Easy to Use and Fast to Develop\n2. Has All the Libraries You Can Imagine\n3. Great for Prototypes - You Can Do More with Less Code\`\`\``)
    .addField(`Cons`, `\`\`\`1. Speed Limitations\n2. Not Native to Mobile Environment\`\`\``)
    .addField(`Important Links`, `- [Docs](https://docs.python.org/3/)`)
    .setThumbnail("https://media.discordapp.net/attachments/840134013724131359/840166248708177920/python-logo.png")
    .setColor("YELLOW")
    .setFooter(`Provided By ${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

    message.channel.send(pythonembed)
  }
}