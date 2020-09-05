const Discord = require('discord.js');
const client = new Discord.Client();
const yoru = '740408209965187093';
const token = process.env.TOKEN;
client.map = new Map();
client.map.set('alarm', true);

client.on('ready', () => {
    console.log('I Am Ready To Yoru Sleep :3');
    client.user.setActivity("Yoru I'm Coming!!!");
});

client.on('message', msg => {
    if (!msg.author.bot) {
        /*if (msg.content === ("!Let Yoru Take A Rest") && msg.author.id == '206003875092627456') {
            client.map.set('alarm', false);
            msg.reply('咁好啦...');
        } else if (msg.content === ("!Let Yoru Take A Rest") && !msg.author.id == '206003875092627456') {
            msg.reply('唔要喎!');
        } 

        if (msg.content === ("!Ask Yoru Sleep")) {
            client.map.set('alarm', true);
            msg.reply('OJBK~');
        }
        
        if (client.users.cache.get(yoru).presence.status == 'online' && client.map.get('alarm'))
            client.channels.cache.get('750409993387507725').send("瞓啦<@" + yoru + ">~");
        else 
            console.log('Yoru is offline...');

        if (msg.author.id == yoru && client.map.get('alarm')) {
            msg.channel.send("瞓啦<@" + yoru + ">~ 仲傾~")
        }*/
    }
});

client.on('presenceUpdate', (oldS, newS) => {
    /*let yoru = '740408209965187093';
    if (newS.userID == '740408209965187093' && newS.status == 'online' && client.map.get('alarm'))
        client.channels.cache.get('750409993387507725').send("<@" + yoru + ">今日早啲瞓啦~");*/
});

client.on('guildMemberAdd', member => {
    client.channels.cache.get('750816855240736869').send("歡迎<@" + member.id + ">加入青口組做新丁:DDD~");
    member.roles.set(['750795787092623470']);
});

client.login(token);
