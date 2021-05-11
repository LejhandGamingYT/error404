const { MessageEmbed } = require('discord.js');
const { get } = require('sourcebin')

module.exports = {
  name: 'srcb-get',
  category: 'Sourcebin',
  description: 'Fetch code from a sourcebin',
  expectedArgs: '<code link>',
  minArgs: 1,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}srcb-fetch {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, args, client }) => {
    
    const query = args.join(' ')

    const bin = await get(query)

    message.channel.send(
      new MessageEmbed()
      .setDescription(`\`\`\`js\n${bin.files[0].content}\n\`\`\``)
      .setColor("GREEN")
      .setFooter(`Code Retrieved By: ${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
    )
  }
}