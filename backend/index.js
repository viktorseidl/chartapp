const express = require('express');
const http=require('http'); 
const {v4:uuidV4}=require('uuid');
const app = express();
const ExpressPeerServer = require('peer').ExpressPeerServer;
const server = http.createServer(app); 
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		//methods: [ "GET", "POST" ]
	}
}); 
const connections={}
const rooms={
  Rooms:{},
  Start:{}
}
const peerserver=ExpressPeerServer(server, {
  debug: true
})
app.use('/peerjs', peerserver); 
 
peerserver.on('connection', (client) => { 
  connections[client.id]=client.id
  rooms.Start[client.id]=client.id
  console.log('messageconnected ',client.id)
  //console.log(rooms)
});
peerserver.on('disconnect', (client) => { 
  delete connections[client.id] 
  delete rooms.Start[client.id]
  console.log('messagedisconnected ',client.id)
});  
app.get('/',(req,res)=>{
  //console.log(req)
  res.redirect(`/${uuidV4}`)
})
app.get('/:roomID',(req,res)=>{
  //console.log(req)
})
io.on('connection',socket =>{  
  //console.log(socket)
   console.log('socket connected ',socket.id)
   socket.on('joinRoom', (room,peer) => {
    console.log('socket joinedRoom '+room+' peerid: '+peer);
    socket.join(room)
  });
   socket.on('disconnect', () => {
    console.log('socket disconnected');
  });
})


const port = process.env.PORT || 4000;
server.listen(port, 'localhost',() => {
  console.log(`Server is running on port ${port}`);
});