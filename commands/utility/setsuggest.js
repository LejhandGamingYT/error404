const { MessageEmbed } = require('discord.js');
const suggestSchema = require('../../models/suggestSchema.js');

module.exports = {
  name: 'setsuggest',
  category: 'Utility',
  description: 'Sets the channel where to send suggestions',
  expectedArgs: '<true/false> <channel>',
  minArgs: 1,
  maxArgs: 2,
  permissions: ['ADMINISTRATOR'],
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}setsuggest {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async({ client, message, args, channel }) => {
    let toggling = ["false", "true"];
    if (!toggling.includes(args[0])) {
        return message.channel.send("Please provide a valid options. Either **false** or **true** it.");
    }

    if (args[0] === "true") {
        let channel = message.mentions.channels.first();
        let channelid = channel.id;
        let webhookid;
        let webhooktoken;
        if (!channel) return message.channel.send("Please provide the channel that you want to make it as suggestions channel.");

        channel.createWebhook("Error 404", {
            avatar: "https://i.ibb.co/XF0bcbw/2068213.jpg"
        }).then(webhook =>{
        webhookid = webhook.id;
        webhooktoken = webhook.token;

        const data = new suggestSchema({
          Guild: message.guild.id,
          Toggling: args[0],
          Channel: channelid,
          WbID: webhookid,
          WbToken: webhooktoken
        })
        data.save();
        })

        return message.channel.send(`The suggestions channel has been enabled for <#${channel.id}>`);
    }

    if (args[0] === "false") {
      
        const data = new suggestSchema({
          Guild: message.guild.id,
          Toggling: args[0],
          Channel: channelid,
          WbID: webhookid,
          WbToken: webhooktoken
        })
        data.save();

        return message.channel.send("The suggestions channel has been disabled")
    }
  }
}