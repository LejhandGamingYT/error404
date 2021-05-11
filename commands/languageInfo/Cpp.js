const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'cpp',
  category: 'Language-Info',
  description: 'Sends information about CPP',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const cppembed = new MessageEmbed()
    .setTitle("Information on CPP")
    .setDescription(`C++ is a cross-platform language that can be used to create high-performance applications`)
    .addField(`Pros`, `\`\`\`1. Portability\n2. Object-oriented\n3. Memory Management\n4. Scalability\`\`\``)
    .addField(`Cons`, `\`\`\`1. Use of Pointers\n2. Security Issue\n3. Absence of Garbage Collector\`\`\``)
    .addField(`Important Links`, `- [Docs](https://docs.microsoft.com/en-us/cpp/?view=msvc-160)`)
    .setThumbnail("https://media.discordapp.net/attachments/840134013724131359/840134068875952178/800px-ISO_C2B2B_Logo.png?width=380&height=427")
    .setColor("BLUE")
    .setFooter(`Provided By ${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

    message.channel.send(cppembed)
  }
}