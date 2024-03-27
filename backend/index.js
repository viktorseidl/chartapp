const express = require('express');
const http=require('http');
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');  
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});
let clients=[]
io.on('connection', (socket) => {
  console.log(socket.id);
  let iscon=false
  for(let i=0;i<clients.length;i++){
    clients[i]==socket.id?iscon=true:''
  }
  if(iscon!=true){
    clients.push(socket.id);
  }
  console.log(clients)
  socket.on('disconnect', () => {
    console.log('User disconnected');
    let arr=[]
    for(let i=0;i<clients.length;i++){
      clients[i]!=socket.id?arr.push(clients[i]):''
    }
    clients=arr
    console.log(clients)
  });

  socket.on('message', (data) => {
    console.log('Message received:', data);
    io.emit('message', data); // Broadcast message to all clients
  });
  // Handle offer message from client
  socket.on('offer', (offer) => {
    console.log('offer:', offer);
    for(let i=0;i<clients.length;i++){
      clients[i]!=socket.id?socket.broadcast.emit('offer', offer):''
    }
    // Broadcast the offer to all other clients 
  });
  // Handle answer message from client
  socket.on('answer', (answer) => {
    console.log('answer:', answer);
    // Broadcast the answer to all other clients
    for(let i=0;i<clients.length;i++){
      clients[i]!=socket.id?socket.broadcast.emit('answer', answer):''
    } 
  });
  // Handle ICE candidate message from client
  socket.on('candidate', (candidate) => {
    console.log('candidate:', candidate);
    // Broadcast the ICE candidate to all other clients
    for(let i=0;i<clients.length;i++){
      clients[i]!=socket.id?socket.broadcast.emit('candidate', candidate):''
    }
  });
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});