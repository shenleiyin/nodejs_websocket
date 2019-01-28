var http = require('http');
var io = require('socket.io');

var server = http.createServer((req,res)=>{

});
server.listen(1212);

// var arr=[];
io.listen(server).on('connection',(user)=>{
	// console.log(user);
	// arr.push(user);
	user.broadcast.emit('msg','有人上线了');

	user.on('msg',(str)=>{
		//除了自己给别人发
		user.broadcast.emit('msg',str);
		//给自己发
		user.emit('msg',str);
		// console.log(str);
		// user.emit('msg',str);
		// for(var i=0;i<arr.length;i++){
		// 	arr[i].emit('msg',str);
		// }
		user.on('disconnect',()=>{
			user.broadcast.emit('msg','有人下线了！');
		})
	})

	
})