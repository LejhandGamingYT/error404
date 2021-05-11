const DiscordJS = require('discord.js')
const { Collection, MessageEmbed } = require('discord.js')
const WOKCommands = require('wokcommands')
const token = process.env['TOKEN']
const keepAlive = require('./server.js')
keepAlive()
const logSchema = require('./models/logs.js');
const { CronJob } = require('cron')
const Enmap = require('enmap')

require('discord-reply');
const client = new DiscordJS.Client({
  partials: ['MESSAGE', 'REACTION']
})

client.on('ready', () => {
  const wok = new WOKCommands(client, {
    commandsDir: 'commands',
    featuresDir: 'features',
    messagesPath: './messages.json',
    showWarns: false,
    del: -1,
    defaultLanguage: "english",
    ignoreBots: true,
    dbOptions: {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    testServers: ['839011306367483924'],
    disabledDefaultCommands: [
      'command',
      'requiredrole',
      'language'
    ]
  })
  .setDefaultPrefix(';')
  .setColor('00f9ff')
  .setMongoPath('mongodb+srv://error404:teamerror404@wokproject.uhstv.mongodb.net/test')
  .setCategorySettings('Info', 'ℹ️')
  .setCategorySettings('Search', '🔎')
  .setCategorySettings('Resources', '📈')
  .setCategorySettings('Language-Info', '💻')
  .setCategorySettings('Sourcebin', '🗑️')
  .setCategorySettings('Utility', '🔨')
  .setCategorySettings('Development', '🚧')
  .setCategorySettings('Api-Client', '🌐')
  .setCategorySettings('Image', '🖼️')
  .setCategorySettings('Ticket', '🎫')
  .setDisplayName('Error 404 Bot')

  client.user.setActivity("Prefix: ; | Made by Error 404 Team")

  console.log(`Client logged in as ${client.user.tag}`)

  client.wok = wok;
})

client.on("message", async message => {

  client.prefix = client.wok.getPrefix(message.guild)
  if (message.content === `<@!${client.user.id}>`) {
    return message.channel.send(
      new MessageEmbed()
        .setTitle("Settings for this server")
        .setDescription(
          `✅ | **Prefix of this server**: \`${client.prefix}\``
        )
        .setColor("00f9ff")
    );
  }
})

client.joins = new Enmap({name: "joins", autoFetch: true, fetchAll: true})

new CronJob('0 12 * * Sun', () => {
  client.joins.clear()
}, null, true, 'America/Los_Angeles')

client.on('guildMemberAdd', member => {
  client.joins.ensure(member.guild.id, {
    "monday": 0,
    "tuesday": 0,
    "wednesday": 0,
    "thursday": 0,
    "friday": 0,
    "saturday": 0,
    "sunday": 0,
  })

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayName = days[new Date().getDay()].toLowerCase()

  client.joins.inc(member.guild.id, dayName)
})

client.snipes = new Map()
client.on('messageDelete', async function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  if (message.partial) await message.fetch();

  const data = await logSchema.findOne({ Guild: message.guild.id, Toggling: true })

  const modlogid = data.WbID;
  const modlogtoken = data.WbToken;

  const hook = new DiscordJS.WebhookClient(modlogid, modlogtoken);
  if (!hook) return;

  const embed = new MessageEmbed()
  .setTitle("Message Deleted")
  .setDescription(`**Channel** : <#${message.channel.id}> \n **By** : ${message.author.tag} \n **Message** : ${message.content}`)
  .setTimestamp()
  .setColor("00f9ff")

  return hook.send(embed)
})

client.login("ODM5MDIzNzI4NDE1MDgwNDU4.YJDnvQ.IQ4QxBtiogP_z3xfhHUnaWQLsQs")