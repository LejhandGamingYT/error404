const { MessageEmbed } = require('discord.js');

module.exports = {
  description: "Get a requested template for a Java",
  category: "Resources",
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, args, client }) => {
    const embed = new MessageEmbed()
    .setTitle("Java Starter Template")
    .setDescription(`
    \`\`\`java\n
  public class Main {
  static void addition(int a, int b) {
    int c = int a + int b;
    System.out.println(c);
  }

  public static void main(String[] args) {
    int a = 10;
    int b = 20;
    myMethod(a, b);

    // OUTPUT IS 30
  }
}
    \`\`\`
    `)
    .setColor("ORANGE")
    message.channel.send(embed)
}
}