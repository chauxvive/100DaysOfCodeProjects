require('env2)('.env')
var slack = require('slack');
var through = require('through2')
var websocket = require('websocket-stream')


var user = {
    token: process.env.token
}

slack.rtm.connect(user, function (err, rtm) {
    if (err) return console.error(err)
    var ws = websocket(rtm.url)
    var typing = through(write)
    ws.pipe(typing)
    typing.pipe(ws)

    //ws.on('data', function(data) {
    //    console.log(data.toString())
    })
})

function write (buf, enc, next){
    var row = JSON.parse(buf.toSting())
    if (row.type !== 'user_typing') return next()

    var msg = {
        type: 'typing',
        channel: row.channel,

    }
}
