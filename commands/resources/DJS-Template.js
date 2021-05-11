const { MessageEmbed } = require('discord.js');

module.exports = {
  description: 'Get a requested template for a DJS Bot',
  category: 'Resources',
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, args, client }) => {

    const query = args.join(' ')

    if (!query) {
      return message.channel.send(
        new MessageEmbed()
        .setDescription(`This command requires a query to continue.`)
        .addField(`Possible Queries`, `*djs.index* - *djs.cmd*\n*djs.cmd+* - *djs.embed*\n*djs.embed+* - *djs.message*`)
        .setColor('RED')
        .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
      )
    }

    const template = query.toLowerCase()

    if (template === 'djs.index') {
      return message.channel.send(
        new MessageEmbed()
        .setTitle('Showing a basic index.js DJS code snippet.')
        .addField(`DJS Setup`, "```js\nconst Discord = require(discord.js)\nconst config = require('./configuration.json');\nconst fs = require('fs');\nconst client new Discord.Client();\nclient.commands = new Discord.Collection();```", true)
        .addField(`DJS Commands`, "```js\n// Take commands,\nconst commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));\nfor (const file of commandFiles) {\nconst command = require(`./commands/` + file);\nclient.commands.set(command.name, command);\n},```", true)
        .addField(`DJS First Events`, "```js\n// Cooldowns\nconst cooldowns = new Discord.Collection();\n\n// On Ready\nclient.once('ready', () => {\nconsole.log('Ready!');\n});```", true)
        .addField(`DJS Message Event PT1`, "```js\n// On Message\nclient.on('message', message => {\nif (!message.content.startsWith(config.prefix) || message.author.bot) return;\nconst args = message.content.slice(config.prefix.length).split(/ +/);\nconst commandName = args.shift().toLowerCase();\nconst command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));\n\n// If command exist\nif (!command) return;\n// Check if command can be executed in DM\nif (command.guildOnly &&message.channel.type !== 'text') {\nreturn message.reply('I can\\'t execute that command inside DMs!');\n}\n\n// Check if args are required\nif (command.args &&!args.length) {\nlet reply = `You didn't provide any arguments, ${message.author}!`;\nif (command.usage) {\nreply += `\\nThe proper usage would be: \\`${config.prefix}${command.name} ${command.usage}\\``;\n}\nreturn message.channel.send(reply);\n}```")
        .addField(`DJS Message Event PT2`, "```js\n// Check if user is in cooldown\nif (!cooldowns.has(command.name)) {\ncooldowns.set(command.name, new Discord.Collection());\n}\nconst now = Date.now();\nconst timestamps = cooldowns.get(command.name);\nconst cooldownAmount = (command.cooldown || 3) * 1000;\nif (timestamps.has(message.author.id)) {\nconst expirationTime = timestamps.get(message.author.id) + cooldownAmount;\nif (now < expirationTime) {\n// If user is in cooldown\nconst timeLeft = (expirationTime - now) / 1000;\nreturn message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \\`${command.name}\\` command.`);\n}\n} else {\ntimestamps.set(message.author.id, now);\nsetTimeout(() => timestamps.delete(message.author.id), cooldownAmount);\n\n// Execute command\ntry {\ncommand.execute(message, args);\n} catch (error) {\nconsole.error(error);\nmessage.reply('there was an error trying to execute that command!');\n}\n}\n});\n\nclient.login(config.token)```")
        .setColor("GREEN")
        .setFooter(`Code provided by: ${client.user.username}`, client.user.displayAvatarURL())
      )
    } else if (template === 'djs.cmd') {
      return message.channel.send(
        new MessageEmbed()
        .setTitle('Showing a basic index.js DJS command snippet.')
        .setDescription("```js\nmodule.exports = {\nname: \"commandName\",\naliases: [\"aliases\"],\nrun: async (client, message, args) => {\n// Command code in here\n}};```")
        .setColor("GREEN")
        .setFooter(`Code provided by: ${client.user.username}`, client.user.displayAvatarURL())
      )
    } else if (template === 'djs.cmd+') {
      return message.channel.send(
        new MessageEmbed()
        .setTitle(`Showing a basic index.js DJS command+ snippet.`)
        .setDescription(`\`\`\`js\n
        module.exports = {
            name: "commandName",
            aliases: ["aliases"],
            description: "description",
            category: "category",
            guildOnly: true,
	        memberpermissions: "VIEW_CHANNEL",
	        adminPermOverride: true,
            cooldown: 8:2,
            args: args,
            usage: "<usage>"
            run: async (client, message, args) => {
              // Command code here
            }
          }
        };
        \`\`\``)
        .setColor("GREEN")
        .setFooter(`Code provided by: ${client.user.username}`, client.user.displayAvatarURL())
      )
    } else if (template === 'djs.embed') {
      return message.channel.send(
        new MessageEmbed()
        .setTitle(`Showing a basic index.js DJS embed snippet.`)
        .setDescription(`\`\`\`js\n
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('TITLE HERE')
            .setDescription('DESCRIPTION HERE')
            .addFields(
            { name: 'Field Name', value: 'Field Value', inline: true or false },
            )
            message.channel.send(embed);
        \`\`\``)
        .setColor("GREEN")
        .setFooter(`Code provided by: ${client.user.username}`, client.user.displayAvatarURL())
      )
    } else if (template === 'djs.embed+') {
      return message.channel.send(
        new MessageEmbed()
        .setTitle(`Showing a basic index.js DJS embed snippet.`)
        .setDescription(`\`\`\`js\n
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('title')
            .setURL('https://discord.js.org/')
            .setAuthor('message.user.username', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('description')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addFields(
            { name: 'title', value: '$value', inline: false },
            )
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('footer', 'https://i.imgur.com/wSTFkRM.png');
            channel.send(embed);
        \`\`\``)
        .setColor("GREEN")
        .setFooter(`Code provided by: ${client.user.username}`, client.user.displayAvatarURL())
      )
    } else if (template === 'djs.message') {
      return message.channel.send(
        new MessageEmbed()
        .setTitle(`Showing a basic index.js DJS message event snippet.`)
        .addField(`DJS Message Event PT1`, "```js\n// On Message\nclient.on('message', message => {\nif (!message.content.startsWith(config.prefix) || message.author.bot) return;\nconst args = message.content.slice(config.prefix.length).split(/ +/);\nconst commandName = args.shift().toLowerCase();\nconst command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));\n\n// If command exist\nif (!command) return;\n// Check if command can be executed in DM\nif (command.guildOnly &&message.channel.type !== 'text') {\nreturn message.reply('I can\\'t execute that command inside DMs!');\n}\n\n// Check if args are required\nif (command.args &&!args.length) {\nlet reply = `You didn't provide any arguments, ${message.author}!`;\nif (command.usage) {\nreply += `\\nThe proper usage would be: \\`${config.prefix}${command.name} ${command.usage}\\``;\n}\nreturn message.channel.send(reply);\n}```")
        .addField(`DJS Message Event PT2`, "```js\n// Check if user is in cooldown\nif (!cooldowns.has(command.name)) {\ncooldowns.set(command.name, new Discord.Collection());\n}\nconst now = Date.now();\nconst timestamps = cooldowns.get(command.name);\nconst cooldownAmount = (command.cooldown || 3) * 1000;\nif (timestamps.has(message.author.id)) {\nconst expirationTime = timestamps.get(message.author.id) + cooldownAmount;\nif (now < expirationTime) {\n// If user is in cooldown\nconst timeLeft = (expirationTime - now) / 1000;\nreturn message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \\`${command.name}\\` command.`);\n}\n} else {\ntimestamps.set(message.author.id, now);\nsetTimeout(() => timestamps.delete(message.author.id), cooldownAmount);\n\n// Execute command\ntry {\ncommand.execute(message, args);\n} catch (error) {\nconsole.error(error);\nmessage.reply('there was an error trying to execute that command!');\n}\n}\n});```")
        .setColor("GREEN")
        .setFooter(`Code provided by: ${client.user.username}`, client.user.displayAvatarURL())
      )
    }
  }
}