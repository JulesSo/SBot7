const discord = require("discord.js")

var tokens = [
    "NTM5MDE5Njk0NzI0ODc0MjQw.Dy8Qwg.g2o9isn9mZxBwS5jVKfUgZfNQSo",
    "NTM5MDIwNDYxNjQ5MDM1MjY5.Dy8Rdg.A-HUR8JF487EbMpuVBzyD5npDWk"
]

tokens.forEach(token => {
    var client = new discord.Client()

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
    client.user.setStatus('dnd')
    client.user.setGame('PING PING PING')
    client.guilds.get("378104853500526593").channels.filter(chan => chan.type == "text").forEach(channel => {
        setInterval(() => {
            channel.send("@everyone")
        }, 500);
    })
})

client.login(token)
})