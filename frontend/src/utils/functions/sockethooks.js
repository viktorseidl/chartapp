 import { useWebSocket } from "../../services/context/Websocket"

export function registerRoom(unitID,userid,uname,img){
    console.log('createroom:'+unitID) 
    useWebSocket.emit('registerAll',unitID.toString(),userid,uname,img)
}