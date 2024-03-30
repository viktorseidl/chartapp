import React, { createContext, useContext } from 'react';
import { io } from 'socket.io-client'; 
const WebSocketContext = createContext();

export const useWebSocket = () => useContext(WebSocketContext);

export const WebSocketProvider = ({ children }) => { 
  
  const ws=io('http://localhost:4000')
  ws.on('connection',
     ''
    ) 
  return (
    <WebSocketContext.Provider value={({'WS':ws})}>
      {children}
    </WebSocketContext.Provider>
  );
};