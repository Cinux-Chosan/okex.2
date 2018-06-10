const io = require('socket.io-client');

const socket = io('wss://real.okex.com:10441', {
    path: '/websocket'
});

socket.emit('ping', ack =>{
    console.log('ack\n', ack)
})

socket.on('error', err => {
    console.log(err)
})

socket.on('pong', data => {
    console.log(data)
})