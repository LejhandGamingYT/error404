const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'vue',
  category: 'Language-Info',
  description: 'Sends information about Vue JS',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const vueembed = new MessageEmbed()
    .setTitle("Information on Vue JS")
    .setDescription(`Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.`)
    .addField(`Pros`, `\`\`\`#1 Approachable\n#2 Versatile\n#3 Performant\n#4 Ease of integration\n#5 Easy Development\`\`\``)
    .addField(`Cons`, `\`\`\`1. Less Plugins/Components\n2. Issues with iOS & Safari\n3. Small Community\n4. More Flexible than Needed\`\`\``)
    .addField(`Important Links`, `- [Getting Started](https://vuejs.org/v2/guide/#Getting-Started)`)
    .setThumbnail("https://media.discordapp.net/attachments/839011306367483928/840104454346899466/6446.png")
    .setColor("42b883")
    .setFooter(`Provided By ${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

    message.channel.send(vueembed)
  }
}