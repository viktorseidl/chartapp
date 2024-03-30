const express = require('express');
const http=require('http'); 
const {v4:uuidV4}=require('uuid');
const socklib = require('./modules/SocketRegisterModules');
const { disconnect } = require('process');
const app = express();
//const ExpressPeerServer = require('peer').ExpressPeerServer;
const server = http.createServer(app); 
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
}); 
const connectedClients = []  
  
io.on('connection',socket =>{    


  //REGISTER ALL USER FIRST ON THEIR RESPECTIVE UNIT
  socket.on('registerAll', (room,userid,uname,img) => {  
    if(connectedClients.findIndex(entry => entry[0] === socket.id)>=0){
      let index=connectedClients.findIndex(entry => entry[0] === socket.id)
      connectedClients[index]=[socket.id, [room,userid,uname,img,"false"]]
      updateRoomUsers(room)
    }else{
    connectedClients.push([socket.id, [room,userid,uname,img,"false"]]);
    }
    socket.join(room) 
    socket.join(userid)  
  }); 

    // Handle joining a room
    socket.on('toUser_chat', (receiverid,text,senderID,sendername) => {
      io.to(receiverid).emit('toUser_chat', {chatroom:receiverid,message:text,sender:senderID,sendername:sendername}); 
      updateNotifyOnUsers("AA",receiverid,senderID)
  });
    socket.on('join_room', (roomName) => {
      console.log(`Socket ${socket.id} joining room ${roomName}`);
      socket.join(roomName);
      updateRoomUsers(roomName)
  });
    // Handle leaving a room
    socket.on('leave_room', (roomName) => {
      console.log(`Socket ${socket.id} leaving room ${roomName}`);
      socket.leave(roomName);
      updateRoomUsers(roomName)
    });
    socket.on('get_users_connected', (roomName) => { 
      updateRoomUsers(roomName)
    });

    //HANDLE DISCONNECTION OF USERS ON THEIR RESPECTIV ROOMS
   socket.on('disconnect', () => { 
    console.log('disconnected')
    const index = connectedClients.findIndex(entry => entry[0] === socket.id);
    const mydata=connectedClients.filter(entry => entry[0] === socket.id)
    let roomIDName=''
    if(mydata.length>0){
      if(mydata[0].length>0){ 
        if(mydata[0][1].length>0){ 
          roomIDName=mydata[0][1][0]
        }
      }
    }
    if (index !== -1) {
        connectedClients.splice(index, 1);
    }
    updateRoomUsers(roomIDName)
    // Get the rooms the socket is joined to
    const rooms = Object.keys(socket.rooms); 
    console.log(rooms)
    // Iterate over each room and remove the socket from it
    rooms.forEach(room => {
        if (room !== socket.id) { // Exclude the socket's own room
          socket.leave(room);
          console.log(`Socket ${socket.id} left room ${room}`);
        }
        
    });

  });
  //HANDLE CONNECTED USERS ON UNIT ROOMS
  function updateNotifyOnUsers(roomName,receiverid,sender) {
    let rroom=roomName
     for(let i=0;i<connectedClients.length;i++){
       if((connectedClients[i][1][1]==sender)){
        roomName=="AA"?rroom=connectedClients[i][1][0]:''
        connectedClients[i][1][4]="true_"+receiverid+'_'+sender
        break;
       }
     }
     updateRoomUsers(rroom)
  }
  function updateRoomUsers(roomName) {
    const usersInRoom = connectedClients
        .filter(entry => roomName ? entry[1][0] === roomName : true) // Filter by room if specified
        .map(entry => ({ socketid: entry[0], roomData: entry[1][0],userid: entry[1][1],uname: entry[1][2],uimg: entry[1][3], Messages: entry[1][4].toString() })); 
    io.to(roomName).emit('room_users', usersInRoom);
  }

}) 

const port = process.env.PORT || 4000;
server.listen(port, 'localhost',() => {
  console.log(`Server is running on port ${port}`);
});