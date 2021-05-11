const { MessageEmbed } = require('discord.js');
const DiscordJS = require('discord.js')
const suggestSchema = require('../../models/suggestSchema.js')

module.exports = {
  name: 'suggest',
  category: 'Utility',
  description: 'Sends a suggestion to the developer',
  expectedArgs: '<suggestion>',
  minArgs: 1,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}suggest {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {

    const su = args.join(" ")
    const data = await suggestSchema.findOne({ Guild: message.guild.id, Toggling: true })

  const modlogid = data.WbID;
  const modlogtoken = data.WbToken;
  const channelid = data.Channel;

  let channeltoget = client.channels.cache.get(channelid);

  const hook = new DiscordJS.WebhookClient(modlogid, modlogtoken);
  if (!hook) return message.channel.send("Suggestion channel is not set")

  const embed = new MessageEmbed()
  .setTitle("New Suggestion")
  .addField("Suggestion", su)
  .addField("Status", "📈 Waiting for community response")
  .setColor("00f9ff")
  .setTimestamp()

  hook.send(embed)

  channeltoget.messages.fetch({ limit: 1 }).then(messages => {
  let lastMessage = messages.first();
  lastMessage.react(`<:tickYes:840280180534411294>`)
  lastMessage.react(`<:tickNo:840280224134463579>`)
})
  }
}