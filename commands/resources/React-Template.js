const { MessageEmbed } = require('discord.js');

module.exports = {
  description: "Get a requested template for a React",
  category: "Resources",
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, args, client }) => {
    const embed = new MessageEmbed()
    .setTitle("React JS Starter Template")
    .setDescription(`
    01. Basic - [here](https://www.mediafire.com/file/gk8qpoe0jrtjcvz/react-template.zip/file)

    02. Npx method
    \`\`\`sh\n
npx create-react-app my-app
    \`\`\`
    `)
    .setColor("BLUE")
    message.channel.send(embed)
}
}