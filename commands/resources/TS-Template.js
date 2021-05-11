const { MessageEmbed } = require('discord.js');

module.exports = {
  description: 'Get a short template of a piece of TS code',
  category: 'Resources',
  cooldown: '5s',
  guildOnly: true,
  callback: async({ message, args, client }) => {

    return message.channel.send(
      new MessageEmbed()
      .setTitle(`Showing a basic typescript template`)
      .addField(`Disclaimer`, `Note this only works with [Discord-Akairo](https://discord-akairo.github.io/)`)
      .setDescription(`\`\`\`ts\nimport { Command } from "discord-akairo";
import { fileURLToPath } from "url";
import { Message, GuildMember, MessageEmbed, ImageSize } from "discord.js";
import { Guild } from "discord.js";

export default class AvatarCommand extends Command {
    public constructor() {
        super("avatar", {
            aliases: ["avatar", "av"],
            category: "Utils",
            description: {
                content: "Display the avatar of yourself or another user",
                usage: "avatar [Member]",
                examples: [
                    "avatar", 
                    "avatar #Lukas#0000",
                    "avatar Lukas"
                ]
            },
            args: [
                {
                    id: "member",
                    type: "member",
                    match: "rest",
                    default: (msg: Message) => msg.member
                },
                {
                    id: "size",
                    type: (_: Message, str: string): null | Number => {
                        if (str && !isNaN(Number(str)) && [16, 32, 64, 128, 256, 512, 1024].includes(Number(str))) return Number(str);
                        return null;
                    },
                    match: "option",
                    flag: ["-size="],
                    default: 2048
                }
            ]
        });
    }

    public exec(message: Message, { member, size }: { member: GuildMember, size: number }): Promise<Message> {
        return message.util.send(
            new MessageEmbed()
            .setTitle("Avatar | \${member.user.tag}")
            .setColor('#0843cc')
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: size as ImageSize }))
        )
    }
}\`\`\``)
      .setColor("GREEN")
      .setFooter(`Code provided by: ${client.user.username}`, client.user.displayAvatarURL())
    )
  }
}