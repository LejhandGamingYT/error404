const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'wiki',
  category: 'Search',
  description: 'Searches from wikipedia',
  expectedArgs: '<query>',
  minArgs: 1,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}wiki {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    let wiki = args.join("_");
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`

        let response
        try {
            response = await fetch(url).then(res => res.json())
        }      
        catch (e) {
            return message.reply('An Error Occured, Try Again.')
        }

        try {
            if(response.type === 'disambiguation') {
                const embed = new MessageEmbed()
                .setColor('00f9ff')
                .setTitle(response.title) 
                .setURL(response.content_urls.desktop.page)
                .setDescription([`
                ${response.extract}
                Links For Topic You Searched [Link](${response.content_urls.desktop.page}).`]) 
                message.channel.send(embed)
            }
            else {
                const embed = new MessageEmbed()
                .setColor('00f9ff')
                .setTitle(response.title)
                .setURL(response.content_urls.desktop.page)
                .setThumbnail(response.thumbnail.source)
                .setDescription(response.extract)
                message.channel.send(embed)
            }
        }
        catch {
            return message.reply('Provide A Valid Query To Search.')
        }
  }
}