const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'angular',
  category: 'Language-Info',
  description: 'Sends information about Angular JS',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel, instance }) => {

    const angularembed = new MessageEmbed()
    .setTitle("Information on Angular JS")
    .setDescription(`Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps`)
    .addField(`Pros`, `\`\`\`#1 Angular provides a great selection of third-party integrations that can be added to the framework with ease. This gives developers even more tools to improve the overall form and function of their product\n#2 Angular offers faster load time and increased security by using a brilliant concept commonly known as “ahead-of-time compiler.” Angular compiles HTML and TypeScript into JavaScript during the development, which means all of the code is compiled before the browser even loads your web app\n#3 With Angular elements and modules, this framework is designed to be fully customizable, giving more power to the developer and designer. Angular elements can also easily be added to projects that were built using another framework, which just adds to the appeal of this program\`\`\``)
    .addField(`Cons`, `\`\`\`1. One of the major drawbacks to using Angular is the platform’s limited SEO options and poor accessibility for search engine crawlers. Being that Google is the number one search engine on the planet, we can’t imagine this problem will continue to persist for much longer before a solution is presented in another update\n2. Unless you’re working on a project of appropriate size and complexity, Angular can easily weigh you down. Save this one for the big-ticket assignments and you’ll fare just fine.\`\`\``)
    .addField(`Important Links`, `- [Docs](https://angular.io/docs)`)
    .setThumbnail("https://media.discordapp.net/attachments/839011306367483928/840127101783900180/angular.png")
    .setColor("RED")
    .setFooter(`Provided By ${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

    message.channel.send(angularembed)
  }
}