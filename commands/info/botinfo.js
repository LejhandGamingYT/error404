const { MessageEmbed } = require('discord.js');
const os = require('os');
const ms = require("pretty-ms");

module.exports = {
  name: 'botinfo',
  category: 'Info',
  description: 'Sends the bots info',
  cooldown: '5s',
  guildOnly: true,
  callback: async ({ client, message, args, channel }) => {
    let arch = os.arch();
    let platform = os.platform();
    let cores = os.cpus().length;
    let uptime = ms(client.uptime, {verbose:true})
    let version = os.version();
    let tomem = Math.round(os.totalmem() / 1048576);
    let freemem = Math.round(os.freemem() / 1048576);

    let stats = new MessageEmbed()
    .setTitle(`Statistics of ${client.user.username}`)
    .setColor('00f9ff')
    .addField('Architecture', `${arch}`, true)
    .addField('Platform', `${platform}`, true)
    .addField('Cores', `${cores}`, true)
    .addField('Uptime', `${uptime}`, true)
    .addField('Version', `${version}`, true)
    .addField('Free Memory', `${freemem} mb`, true)
    .addField('Total Memory', `${tomem} mb`, true)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send(stats);
  }
}