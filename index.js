const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
let numUsers = 0;

app.get('/',function(req,res){
   res.sendfile('index.html');
});

io.on('connection',function(socket){
   numUsers++;
   console.log('user connected, numsers: ' + numUsers);

   socket.on('disconnect',function(){
      numUsers--;
      
      console.log('user disconnected, numsers: ' + numUsers);
   })
});

http.listen(3000,function(){
   console.log('listening on: *:3000');
});
