const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'react',
  category: 'Language-Info',
  description: 'Sends information about React JS',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const reactembed = new MessageEmbed()
    .setTitle("Information on React JS")
    .setDescription(`A JavaScript library for building user interfaces`)
    .addField(`Pros`, `\`\`\`#1 It facilitates the overall process of writing components\n#2 It boosts productivity and facilitates further maintenance\n#3 It ensures faster rendering\n#4 It guarantees stable code\n#5 It is SEO friendly\n#6 It comes with a helpful developer toolset\n#7 There is React Native for mobile app development\n#8 It is focused and easy-to-learn\n#9 It is backed by a strong community\n#10 It is used by both Fortune 500 companies and innovative startups\`\`\``)
    .addField(`Cons`, `\`\`\`1. The high pace of development\n2. Poor Documentation\n3. View Part\n4. JSX as a barrier\`\`\``)
    .addField(`Important Links`, `- [Installation](https://reactjs.org/docs/getting-started.html)\n- [Main Concepts](https://reactjs.org/docs/hello-world.html)\n- [Advanced Guides](https://reactjs.org/docs/accessibility.html)\n- [FAQ](https://reactjs.org/docs/faq-ajax.html)\n- [Tutorial](https://reactjs.org/tutorial/tutorial.html)`)
    .setThumbnail("https://media.discordapp.net/attachments/839896570430619648/839914320523296838/svgxmlbase64PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAy.png")
    .setColor("61DBFB")
    .setFooter(`Provided By ${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

    message.channel.send(reactembed)
  }
}