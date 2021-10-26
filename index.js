"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importStar(require("discord.js"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on('ready', function () {
    console.log('the bot is ready!!');
});
var guildId = '901208340766552084';
var guild = client.guilds.cache.get(guildId);
var commands;
if (guild) {
    commands = guild.commands;
}
else {
    commands = (_a = client.application) === null || _a === void 0 ? void 0 : _a.commands;
}
commands === null || commands === void 0 ? void 0 : commands.create({
    name: 'ping',
    description: 'Replies with pong.',
});
client.on('messageCreate', function (message) {
    if (message.content === 'gerda') {
        message.reply({
            files: [{
                    attachment: './Users/Will/Desktop/bot trial/gerda.gif',
                    name: 'Gerda'
                }]
        });
    }
});
client.on('messageCreate', function (message) {
    if (message.content === 'legionfarm players be like') {
        message.reply({
            content: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Flegionfarm&psig=AOvVaw0kCLA3LHlRVlqsdcJz5i2p&ust=1635027585885000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJigu8iG3_MCFQAAAAAdAAAAABAT',
        });
    }
});
client.on('messageCreate', function (message) {
    if (message.content === 'potet') {
        message.reply({
            content: 'https://tenor.com/view/amberlynn-reid-alr-amberlynn-tongue-out-lick-gif-12445857',
        });
    }
});
client.on('messageCreate', function (message) {
    if (message.content === 'but i like u?') {
        message.reply({
            content: 'shes mine faget',
        });
    }
});
client.on('messageCreate', function (message) {
    if (message.content.includes('yum'))
        message.reply({
            content: 'https://c.tenor.com/GlHzsaqxUrYAAAAd/fruit-finger-cum.gif',
        });
});
client.on('messageCreate', function (message) {
    if (message.content === 'ur staying with me woolumy') {
        message.reply({
            content: 'https://c.tenor.com/zviA91JGhNIAAAAd/lost-puppy-dog.gif',
        });
    }
});
client.on('messageCreate', function (message) {
    if (message.content === 'ur staying with me woolumy') {
        message.reply({
            content: 'https://c.tenor.com/zviA91JGhNIAAAAd/lost-puppy-dog.gif',
        });
    }
});
client.login(process.env.TOKEN);
