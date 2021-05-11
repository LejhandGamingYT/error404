const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { create } = require('sourcebin');

module.exports = {
  name: 'Get',
  category: 'Api-Client',
  description: 'Basic Http get method client',
  expectedArgs: '<url> or <url> <code>',
  minArgs: 1,
  cooldown: '5s',
  guildOnly: false,
  syntaxError: 'Inappropriate Usage of the command! Try using "{PREFIX}get <url> or {PREFIX}get <url> <code>"',
  callback: async ({ client, message, args, channel }) => {
    if(!(/^(ftp|http|https):\/\/[^ "]+$/.test(args[0]))) return message.lineReply("Please provide a valid url to fetch an JSON response")
    var jsonCodeArray = args.slice(1);
    var jsonCodeString = jsonCodeArray.join(" ")
    var jsonCode = JSON.stringify(jsonCodeString)
    var status
    fetch(`${args[0]}`, {
      method: "GET",
      headers: jsonCode,
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      status = res.status;
      return res.json()
    }).then(json => {
        jsonString = JSON.stringify(json, null, 1);
        const content = jsonString;
        if(jsonString.length > 2000) {
              create(
      [
        {
          name: "Error 404 GET",
          content,
          language: "json",
        },
      ],
      {
        title: "Error 404 GET",
        description: "GET API RESPONSE using Error 404 Bot",
      }
    ).then((value) => {
       const embed = new MessageEmbed()
          .setTitle(`Get method call | Status : ${status}`)
          .setDescription(`\`\`\`json\n${value.url}\`\`\``)
          .setColor("GREEN")
          message.channel.send(embed);
    })
        }
        else {
          const embed = new MessageEmbed()
          .setTitle(`Get method call | Status : ${status}`)
          .setDescription(`\`\`\`json\n${jsonString}\`\`\``)
          .setColor("GREEN")
          message.channel.send(embed);
        }
      })
  }
}