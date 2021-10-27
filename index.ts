import discordJS, { Client, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new discordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('the bot is ready!!')
})

 const  guildId = '901208340766552084'
 const guild = client.guilds.cache.get(guildId)
 let commands

 if (guild) {
     commands = guild.commands
 } else {
     commands = client.application?.commands
 }

 commands?.create({
     name: 'ping',
     description: 'Replies with pong.',
 })

client.on('messageCreate', (message) => {
    if (message.content === 'gerda') {
        message.reply({
            files: [{
                attachment: './gerda2.png',
                name: 'Gerda'
            }]

        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'potet') {
        message.reply({
            content: 'https://tenor.com/view/amberlynn-reid-alr-amberlynn-tongue-out-lick-gif-12445857',

        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'but i like u?') {
        message.reply({
            content: 'shes mine faget',

        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content.includes('yum'))
        message.reply({
            content: 'https://c.tenor.com/GlHzsaqxUrYAAAAd/fruit-finger-cum.gif',

        })
    }
,)

client.on('messageCreate', (message) => {
    if (message.content.includes('food'))
        message.reply({
            content: 'https://c.tenor.com/h80prcQqhJoAAAAd/nikocado-avocado-grinch.gif',

        })
    }
,)


client.on('messageCreate', (message) => {
    if (message.content === 'ur staying with me woolumy') {
        message.reply({
            content: 'https://c.tenor.com/zviA91JGhNIAAAAd/lost-puppy-dog.gif',

        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'ur staying with me woolumy') {
        message.reply({
            content: 'https://c.tenor.com/zviA91JGhNIAAAAd/lost-puppy-dog.gif',

        })
    }
})
client.login(process.env.TOKEN)