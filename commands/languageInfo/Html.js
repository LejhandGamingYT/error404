const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'html',
  category: 'Language-Info',
  description: 'Sends information about HTML',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const htmlembed = new MessageEmbed()
    .setTitle("Information on HTML")
    .setDescription(`HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.`)
    .addField(`Pros`, `\`\`\`1. Cost effective Multi-Platform Development\n2. Good page ranking\n3. Offline browsing\n4. Consistency across multiple browsers\n5. Better mobile access to Business Intelligence\n6. Extension of video to a wide range of platforms\n7. Geolocation\n8. A better user experience\`\`\``)
    .addField(`Cons`, `\`\`\`1. May not support old browsers\n2. Restrictions on multimedia\n3. Inconsistencies in delivery\n4. Security concerns with web apps\`\`\``)
    .addField(`Important Links`, `- [Key Resources](https://developer.mozilla.org/en-US/docs/Web/HTML#key_resources)\n- [Beginners Tutorial](https://developer.mozilla.org/en-US/docs/Web/HTML#beginners_tutorials)\n- [Advanced Topics](https://developer.mozilla.org/en-US/docs/Web/HTML#advanced_topics)\n- [Useful Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Index)`)
    .setThumbnail("https://media.discordapp.net/attachments/839896570430619648/839919288222744655/839919250708627499.png")
    .setColor("ORANGE")
    .setFooter(`Provided By ${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

    message.channel.send(htmlembed)
  }
}