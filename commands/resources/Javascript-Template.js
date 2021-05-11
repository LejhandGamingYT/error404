const { MessageEmbed } = require('discord.js');

module.exports = {
  description: "Get a requested template for a Javascript",
  category: "Resources",
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, args, client }) => {
    const embed = new MessageEmbed()
    .setTitle("Javascript Starter Template")
    .setDescription(`
    \`\`\`js\n
function myFunction(p1, p2) {
  return p1 * p2;
}

const p1 = 20;
const p2 = 10;

myFunction(p1, p2)
    \`\`\`
    `)
    .setColor("YELLOW")
    message.channel.send(embed)
}
}