const discord = require(`discord.js`);
const client = new discord.Client();
const db = require(`./db.json`);
const fs = require(`fs`)
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
const token = process.env.TOKEN;

// Simple Server 
http.createServer().listen(port);


client.on("ready", ready =>{
    console.log(`The bot is ready with\nUsername: ${client.user.username}\nID: ${client.user.id}`)
    client.user.setActivity(`${client.users.size} Users | Patrix Cool Videos`, {type: 'WATCHING'});
})

client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.id == `623080299307204608`){
        const couted_numbers = db.counted;
        const next_count = couted_numbers + 1;
    if(message.content != db.counted + 1){
        message.delete()
        message.channel.send(`Hey, the number must be **${db.counted + 1}**`).then(msg => msg.delete(5000));
    }

    if(message.content == next_count){
        db.counted = next_count;

        fs.writeFile("./db.json", JSON.stringify(db), (err) => {
            console.log(err)
        });

    }
}
})

bot.on('error', err => {
    console.log(err);
});

client.login(token);


/*i now basically added saving of data base like above
so each time a user sends a correct count then it write's it in db.json that is the DB 
let me show it to you as you know the current count is 14. If you type a wrong thing in there then it automatically deletes the message and the `Hey, the number must be **${db.counted + 1}** as well in 5 seconds
so now iam gonna type 15 as it said me to. You can see there is no error now the db must be saved
as you can see its 15 now
anyways tq
XD
CYA
*/
