const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'css',
  category: 'Language-Info',
  description: 'Sends information about CSS',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const cssembed = new MessageEmbed()
    .setTitle("Information on CSS")
    .setDescription(`Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.`)
    .addField(`Pros`, `\`\`\`1. Easier to maintain and update\n2. Greater consistency in design\n3. More formatting options\n4. Lightweight code\n5. Faster download times\n6. Search engine optimization benefits\n7. Ease of presenting different styles to different viewers\n8. Greater accessibility\`\`\``)
    .addField(`Cons`, `\`\`\`1. With CSS, what works with one browser might not always work with another. The web developers need to test for compatibility, running the program across multiple browsers.\n2. There exists a scarcity of security.\`\`\``)
    .addField(`Important Links`, `- [Key Resources](https://developer.mozilla.org/en-US/docs/Web/CSS#key_resources)\n- [Beginners Tutorial](https://developer.mozilla.org/en-US/docs/Web/CSS#tutorials)\n- [Reference](https://developer.mozilla.org/en-US/docs/Web/CSS#reference)\n- [Tools](https://developer.mozilla.org/en-US/docs/Web/CSS#tools_for_css_development)`)
    .setThumbnail("https://media.discordapp.net/attachments/839011306367483928/840100481761280000/120px-CSS3_logo_and_wordmark.png")
    .setColor("264de4")
    .setFooter(`Provided By ${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

    message.channel.send(cssembed)
  }
}