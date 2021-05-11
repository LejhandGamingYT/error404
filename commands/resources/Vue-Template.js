const { MessageEmbed } = require('discord.js');

module.exports = {
  description: "Get a requested template for a Vue",
  category: "Resources",
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, args, client }) => {
    const embed = new MessageEmbed()
    .setTitle("Vue Starter Template")
    .setDescription(`
    \`\`\`html\n
  <html>
  <body>
    <div id="example">
      <p>{{ hello }}</p>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script>
        new Vue({
            el: '#example',
            data: { hello: 'Hello World!' }
        })
    </script>
  </body>
</html>
    \`\`\`
    `)
    .setColor("42b883")
    message.channel.send(embed)
}
}