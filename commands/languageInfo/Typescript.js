const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'typescript',
  category: 'Language-Info',
  description: 'Sends information on typescript',
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, client, args }) => {

    const typescriptEmbed = new MessageEmbed()
    .setTitle(`Information On Typescript`)
    .setThumbnail('https://cdn.discordapp.com/emojis/791512440021975062.png?v=1')
    .setURL('https://www.typescriptlang.org/')
    .setColor("BLUE")
    .addField(`Why Typescript?`, `TypeScript has been increasing in its popularity for the last couple of years. It’s mentioned among the five most promising languages in 2020. Angular, one of the largest frontend frameworks, is using TypeScript. About 60% of JS programmers already use TypeScript, and 22% wish to try. Why?

Historically, JavaScript has ended up as the main language for scripting web pages and apps on the Internet. It is now possible to use JavaScript on both the frontend and the backend with frameworks like Node.js and Deno. Sourced From [Here](https://serokell.io/blog/why-typescript)`)
.addField(`Disadvantages to Typescript`, `TypeScript sets aside a long effort to incorporate the code.
TypeScript doesn’t uphold theoretical classes.
When utilizing an outsider library, there should be a definition document, and now and again it’s not generally accessible.
Nature of type definition documents is a worry.
At whatever point TypeScript needs to run in a program, there should even now be a gathering step to change TypeScript to JavaScipt.
TypeScript isn’t completely coexpressive with JavaScript. Missing highlights include: HOFs, Composition, Generics with Higher key. Sourced From [Here](https://www.geeksforgeeks.org/advantages-and-disadvantages-of-typescript-over-javascript/)`)
    .setDescription(`TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.

Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.

Writing types can be optional in TypeScript, because type inference allows you to get a lot of power without writing additional code. Description Provided [Here](https://www.typescriptlang.org/)`)
.setFooter(`Provided By ${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

    message.channel.send(typescriptEmbed)
  }
}