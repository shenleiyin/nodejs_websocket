var http =require('http');
var io=require('socket.io');

var server = http.createServer((req,res)=>{

});
server.listen(1212);
io.listen(server).on('connection',(user)=>{
	user.on('divNode',(json)=>{
		user.broadcast.emit('style',json);
	})
})