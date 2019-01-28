var http =require('http');
var io=require('socket.io');

var server = http.createServer((req,res)=>{

});
server.listen(1212);

var userNode=[];
var msgArr=[];
io.listen(server).on('connection',(user)=>{
	 
	user.on('name',(str)=>{
		userNode.push(str);
		//lastNames  所有发过来的信息
		user.lastNames = str;
		// console.log(user);
		user.broadcast.emit('user',userNode);
		user.emit('user',userNode);
		user.emit('allmsg',msgArr);
	});
	user.on('msg',(str)=>{
		msgArr.push({userName:user.lastNames,msg:str,timer:new Date().toLocaleTimeString()});
		user.broadcast.emit('msg',{userName:user.lastNames,msg:str,timer:new Date().toLocaleTimeString()});
		user.emit('mymsg',{userName:user.lastNames,msg:str,timer:new Date().toLocaleTimeString()});
	});
	user.on('disconnect',()=>{
		//删除下线的那个人
		userNode.splice(userNode.indexOf(user.lastNames),1);
		user.broadcast.emit('userup',user.lastNames);
	})
})