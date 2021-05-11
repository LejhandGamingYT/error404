const { MessageEmbed } = require('discord.js');

module.exports = {
  description: "Get a requested template for a HTML",
  category: "Resources",
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, args, client }) => {
    const embed = new MessageEmbed()
    .setTitle("HTML Starter Template")
    .setDescription(`
    \`\`\`html\n
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Hello World
</body>
</html>
    \`\`\`
    `)
    .setColor("ORANGE")
    message.channel.send(embed)
}
}