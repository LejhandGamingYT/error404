const { MessageEmbed } = require('discord.js');
const { create } = require('sourcebin');

module.exports = {
  name: 'srcb-create',
  category: 'Sourcebin',
  description: 'Uploads the code to the sourcebin',
  expectedArgs: '<code>',
  minArgs: 1,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}srcb-create {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {

    const content = args.join(" ");

    create(
      [
        {
          name: "Code Upload",
          content,
          language: "javascript",
        },
      ],
      {
        title: "Code Upload",
        description: "Code uploaded using Error 404 Bot",
      }
    ).then((value) => {
      message.channel.send(`Uploaded Code: ${value.url}`)
    })
  },
};