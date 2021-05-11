const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'coffeescript',
  category: 'Language-Info',
  description: 'Sends information on coffeescript',
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, client, args }) => {

    const coffeescriptEmbed = new MessageEmbed()
    .setTitle(`Information On Coffeescript!`)
    .setURL('https://coffeescript.org/#overview')
    .setColor("ORANGE")
    .setDescription(`CoffeeScript is a little language that compiles into JavaScript. Underneath that awkward Java-esque patina, JavaScript has always had a gorgeous heart. CoffeeScript is an attempt to expose the good parts of JavaScript in a simple way.

The golden rule of CoffeeScript is: “It’s just JavaScript.” The code compiles one-to-one into the equivalent JS, and there is no interpretation at runtime. You can use any existing JavaScript library seamlessly from CoffeeScript (and vice-versa). The compiled output is readable, pretty-printed, and tends to run as fast or faster than the equivalent handwritten JavaScript. Description provided [Here](https://coffeescript.org/#overview)`)
    .addField(`So why coffeescript?`, `Coffeescript is a clean and simple version of javascript. As shown in the examples below it shortens and cleans up your javascript code while still compiling into JS. Coffeescript provides a great continuation and can be applied to everything javascript can.`)
    .addField(`Downsides`, `What are the downsides to coffeescript? Well for some people it is the syntax's that comes with it. Most people are not a fan. However, that is the only downside as most as me and other people who have tried it see.`)
    .addField(`Coffeescript`, `\`\`\`coffeescript\n# Assignment:
number   = 42
opposite = true

# Conditions:
number = -42 if opposite

# Functions:
square = (x) -> x * x

# Arrays:
list = [1, 2, 3, 4, 5]

# Objects:
math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x
\`\`\``, true)
    .addField(`Javascript`, `\`\`\`js\n// Assignment:
var cubes, list, math, num, number, opposite, race, square;

number = 42;

opposite = true;

if (opposite) {
  // Conditions:
  number = -42;
}

// Functions:
square = function(x) {
  return x * x;
};

// Arrays:
list = [1, 2, 3, 4, 5];

// Objects:
math = {
  root: Math.sqrt,
  square: square,
  cube: function(x) {
    return x * square(x);
  }
};
\`\`\``, true)
    .setThumbnail('https://cdn.discordapp.com/attachments/839896570430619648/839911461669306468/coffeescript2.png')
    .setFooter(`Provided By ${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))

    message.channel.send(coffeescriptEmbed)
  }
}