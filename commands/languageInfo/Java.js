const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'java',
  category: 'Language-Info',
  description: 'Sends information about Java',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const javaembed = new MessageEmbed()
    .setTitle("Information on Java")
    .setDescription(`Java SE lets you develop and deploy Java applications on desktops and servers. Java SE and component technologies offer the rich user interface, performance, versatility, portability, and security that today's applications require`)
    .addField(`Pros`, `\`\`\`1. Object-Oriented\n2. Platform-Independent\n3. Distributed computing\n4. Memory allocation\`\`\``)
    .addField(`Cons`, `\`\`\`1. Performance\n2. Look and Feel\`\`\``)
    .addField(`Important Links`, `- [Docs](https://docs.oracle.com/en/java/)`)
    .setThumbnail("https://media.discordapp.net/attachments/840134013724131359/840160557772439552/141px-Java_programming_language_logo.png")
    .setColor("5382a1")
    .setFooter(`Provided By ${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

    message.channel.send(javaembed)
  }
}