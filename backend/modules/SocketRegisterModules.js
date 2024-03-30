
function connectClientToUnit(Rooms,roomID,userid,socketid){
    if(!Rooms[roomID]){
        Rooms[roomID]=[]
    }
    if(!Rooms[roomID][userid]){
        Rooms[roomID][userid]={
            id:userid,
            sockid:socketid,
            state:true
        }
    }
    return Rooms
}
module.exports={connectClientToUnit}