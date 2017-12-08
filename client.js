const io = require('socket.io-client');
var log = console.log;

const socket = io('http://localhost:3000');

socket.on('eventoBomba', function (msg) {
	log(msg);
});
socket.emit('subscribe');

// const rpsocket = io('http://52.170.205.8:8080/?id=PostoBR-1');
// rpsocket.on('eventoBomba', log);