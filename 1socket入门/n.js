var http = require('http');
var io = require('socket.io');

var server = http.createServer((req,res)=>{

});
server.listen(1212);
io.listen(server).on('connection',(user)=>{
	// console.log(user);
	user.on('bbb',(str)=>{
		console.log(str);
	})

	/*setInterval(()=>{
		user.emit('aaa',Math.random());
	},1000);*/
})