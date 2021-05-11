const { MessageEmbed } = require('discord.js');

module.exports = {
  description: "Get a requested template for a CSS",
  category: "Resources",
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, args, client }) => {
    const embed = new MessageEmbed()
    .setTitle("CSS Starter Template")
    .setDescription(`
    \`\`\`css\n
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
    \`\`\`
    `)
    .setColor("BLUE")
    message.channel.send(embed)
}
}