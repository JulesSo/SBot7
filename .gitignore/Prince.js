const discord = require("discord.js")

var tokens = [
    process.env.TOKEN1,
    process.env.TOKEN2,
    process.env.TOKEN3
]

tokens.forEach(token => {
    var client = new discord.Client()

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
    client.user.setStatus('dnd')
    client.user.setGame('PING PING PING...')
    client.guilds.get("378104853500526593").channels.filter(chan => chan.type == "text").forEach(channel => {
        setInterval(() => {
            channel.send("@everyone")
        }, 500);
    })
})

client.login(token)
})
