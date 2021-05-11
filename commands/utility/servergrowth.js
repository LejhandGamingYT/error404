const { MessageEmbed, MessageAttachment } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
  name: 'servergrowth',
  category: 'Utility',
  description: 'Shows you the servers growth',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    const guildJoins = client.joins.ensure(message.guild.id, {
            "monday": 0,
            "tuesday": 0,
            "wednesday": 0,
            "thursday": 0,
            "friday": 0,
            "saturday": 0,
            "sunday": 0,
        })

        const chart = {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Joins',
                    data: Object.values(guildJoins)
                }]
            }
        }

        let enChart = encodeURIComponent(JSON.stringify(chart))
        const chartUrl = `https://quickchart.io/chart?c=${enChart}&backgroundColor=(rgb(47,%2049,%2054))`;
        message.channel.send(new Discord.MessageAttachment(chartUrl, "servergrowth.png"))
  }
}