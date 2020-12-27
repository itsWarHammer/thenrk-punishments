
const Discord = require('discord.js');

const client = new Discord.Client();

var channelsToForward = ["730495629670744065", "777486803170885673", "777549766040092682", "734567553451556885", "777842178008940554", "777937599637487677", "778142257869619211", "778180003908681779", "778201140415430696"];

// First: MiniGames | Second: Survival | Third: Bending | Fourth: Towny | Fifth: Creative | Sixth: Factions | Seventh: Skyblock | Eighth: Hubs | 9th: Prison

var mainChannel = "778202268549644299";
    
client.once('ready' , () => {
    console.log('online!');
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("Play.TheNRK.Net")
})

client.on("message", (m) => {

    if (channelsToForward.includes(m.channel.id.toString())) {
        var ch = client.channels.fetch(mainChannel)
            .then(ch => ch.send(m.embeds));
    }                                                  
})

client.login('Nzc3MTgxMzk1MzkzOTcwMTc2.X6_skw.izWoFDV8pqnXXFaEmTPjPohHOPc');