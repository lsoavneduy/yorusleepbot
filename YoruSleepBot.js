const Discord = require('discord.js');
const client = new Discord.Client();
const yoru = '740408209965187093';
const token = process.env.TOKEN;

client.on('ready', () => {
    console.log('I Am Ready To Yoru Sleep :3');
    client.user.setActivity("Yoru I'm Coming!!!");
});

client.on('message', msg => {
    if (!msg.author.bot) {
        if (client.users.cache.get(yoru).presence.status == 'online')
            client.channels.cache.get('750409993387507725').send("瞓啦<@" + yoru + ">~");
        else 
            console.log('Yoru is offline...');
    }
});

client.on('presenceUpdate', (oldS, newS) => {
    let yoru = '740408209965187093';
    if (newS.userID == '740408209965187093' && newS.status == 'online')
        client.channels.cache.get('750409993387507725').send("<@" + yoru + ">今日早啲瞓啦~");
});

client.on('guildMemberAdd', member => {
    member.roles.set(['750795787092623470']);
});

client.login(token);
