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

client.on('messageCreate', (message) => {
    if (message.content === 'faget') {
        message.reply({
            content: 'https://giphy.com/gifs/timanderic-season-3-tim-and-eric-corbs-a5pXfDxlt6VTa',

        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'legionfarm players be like') {
        message.reply({
            content: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Flegionfarm&psig=AOvVaw0kCLA3LHlRVlqsdcJz5i2p&ust=1635027585885000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJigu8iG3_MCFQAAAAAdAAAAABAT',

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
    if (message.content.includes('fuck off sloby'))
        message.reply({
            content: 'https://tenor.com/view/pretty-raheem-jeep-peace-steal-gif-6040822',

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