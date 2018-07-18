const Discord = require('discord.js')

exports.run = (client, message, args) => {
    var info_embed = new Discord.RichEmbed()
            .setColor('7EBCAD')
            .setTitle(`Informations sur ${client.user.username}`)
            .addField('Développeurs :', "Ravem Team")
            .addField('Library :', "Discord.js")
            .addField('Base de données :', "lowdb")
            .addField('Language de code :', "JavaScript")
            .setTimestamp(new Date)
            .addField('Serveurs :', `${client.guilds.size}`)
            .addField('Utilisateurs', client.users.size)
            .addField('Version du bot :', "1.0.0")
            .addField('\n\nLiens :', "__FanCreate :__ https://discord.gg/Xf4Bkh3\n__FanShare :__ https://discord.gg/V3ad45Q \n__Lien du bot :__ https://lc.cx/mQz7")
            .setThumbnail('https://cdn.discordapp.com/icons/447920023827251201/7087033799720809aaee2709cec6fdf6.jpg')
            .setFooter(client.user.username, client.user.avatarURL)
        message.channel.send(info_embed)
        console.log('info envoyé')
}

exports.help = {
    name: "info",
    description: "Affiche les infos bot"
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["infobot", "botinfo", "stats", "statistiques"]
}