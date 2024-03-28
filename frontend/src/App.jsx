import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client'; 
import StartLayout from './components/layouts/StartLayout';
import ChatLayout from './components/layouts/ChatLayout';



function App() {  
  function NoMatch() {
    return (
      <div style={{ padding: 20 }}>
        <h2 className='font-bold text-5xl'>404: Page Not Found</h2> 
      </div>
    );
  }
  return (
    <>
    <Router basename='/' >
      <Routes>
        <Route path="/" element={ <StartLayout  />} />
        <Route path="/:userID/:roomID" element={ <ChatLayout   />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;