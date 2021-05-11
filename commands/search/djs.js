const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'djs',
  category: 'Search',
  description: 'Searches from the discord js docs',
  expectedArgs: '<query>',
  minArgs: 1,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}djs {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    let query = args.join(" ");

    const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${query}`;
                    fetch(url)
                        .then(res => res.json())
                        .then(embed => {
                            if (embed && !embed.error) {
                                message.channel.send({ embed });
                            } else {
                                message.reply(`Failed to find anything using the specified query in DiscordJS library. Please try again.`);
                            }
                        })
  }
}