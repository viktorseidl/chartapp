import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import StartLayout from './components/layouts/StartLayout';
import ChatLayout from './components/layouts/ChatLayout'; 
import { WebSocketProvider } from './services/context/Websocket';

function App() {  
  function NoMatch() {
    return (
      <div style={{ padding: 20 }}>
        <h2 className='font-bold text-5xl'>404: Page Not Found</h2> 
      </div>
    );
  }
  return (
    <WebSocketProvider>
    <Router basename='/' >
      <Routes>
        <Route path="/:lh/:userID" element={ <StartLayout  />} />
        <Route path="/:userID/:roomID" element={ <ChatLayout   />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
    </WebSocketProvider>
  );
}

export default App;