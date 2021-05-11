const { MessageEmbed } = require('discord.js');
const logSchema = require('../../models/logs.js');

module.exports = {
  name: 'setlogs',
  category: 'Utility',
  description: 'Sets the channel where to send logs',
  expectedArgs: '<enable/disable> <channel>',
  minArgs: 1,
  maxArgs: 2,
  permissions: ['ADMINISTRATOR'],
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}setlogs {ARGUMENTS}"',
  cooldown: '5s',
  guildOnly: true,
  callback: async({ client, message, args, channel }) => {
    let toggling = ["false", "true"];
    if (!toggling.includes(args[0])) {
        return message.channel.send("Please provide a valid options. Either **false** or **true** it.");
    }

    if (args[0] === "true") {
        let channel = message.mentions.channels.first();
        let webhookid;
        let webhooktoken;
        if (!channel) return message.channel.send("Please provide the channel that you want to make it as a mod log.");

        channel.createWebhook("Error 404", {
            avatar: "https://i.ibb.co/XF0bcbw/2068213.jpg"
        }).then(webhook =>{
        webhookid = webhook.id;
        webhooktoken = webhook.token;

        const data = new logSchema({
          Guild: message.guild.id,
          Toggling: args[0],
          WbID: webhookid,
          WbToken: webhooktoken
        })
        data.save();
        })

        return message.channel.send(`The mod log has been enabled for <#${channel.id}>`);
    }

    if (args[0] === "false") {
      
        const data = new logSchema({
          Guild: message.guild.id,
          Toggling: args[0],
          WbID: webhookid,
          WbToken: webhooktoken
        })
        data.save();

        return message.channel.send("The mod log has been disabled")
    }
  }
}