const { MessageEmbed } = require('discord.js');

module.exports = {
  description: "Get a requested template for a C++",
  category: "Resources",
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, args, client }) => {
    const embed = new MessageEmbed()
    .setTitle("C++ Starter Template")
    .setDescription(`
    \`\`\`cpp\n
#include <iostream>
using namespace std;

// main() is where program execution begins.
int main() {
   cout << "Hello World"; // prints Hello World
   return 0;
}
    \`\`\`
    `)
    .setColor("BLUE")
    message.channel.send(embed)
}
}