var express = require('express');
var io = require('socket.io');
var server = express();
var http = require('http').Server(server);

http.listen(1233);
server.use('/aa',(req,res)=>{
	// console.log(22);
	res.send('404');
});

server.use('/',express.static('./'));
io.listen(http).on('connection',(user)=>{
	// console.log(11);
	user.emit('msg',1);
})