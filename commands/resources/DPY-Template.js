const { MessageEmbed } = require('discord.js');

module.exports = {
  description: "Get a requested template for a DPY Bot",
  category: "Resources",
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, args, client }) => {

    const query = args.join(' ')

    if (!query) {
      return message.channel.send(
        new MessageEmbed()
        .setDescription(`This command requires a query to continue.`)
        .addField(`Possible Queries`, `*dpy.bot*\n*dpy.env*`)
        .setColor("YELLOW")
        .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
      )
    }

    const template = query.toLowerCase()

    if (template === 'dpy.bot') {
      return message.channel.send(
        new MessageEmbed()
        .setTitle(`Showing a basic bot.py DPY code snippet.`)
        .setDescription(`\`\`\`py\n
# bot.py
import discord
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')
GUILD = os.getenv('DISCORD_GUILD')

client = discord.Client()

@client.event
async def on_ready():
    for guild in client.guilds:
        if guild.name == GUILD:
            break

    print(
        f'{client.user} is connected to the following guild:\n'
        f'{guild.name}(id: {guild.id})'
    )

client.run(TOKEN)
        \`\`\``)
        .setColor("YELLOW")
      )
  }
  if (template === 'dpy.env') {
      return message.channel.send(
        new MessageEmbed()
        .setTitle(`Showing a basic .env DPY code snippet.`)
        .setDescription(`\`\`\`py\n
# .env
DISCORD_TOKEN={your-bot-token}
DISCORD_GUILD={your-guild-name}
        \`\`\``)
        .setColor("YELLOW")
      )
  }
}
}