import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import io from 'socket.io-client' 
const ChatLayout = () => {
    const { roomID,userID } = useParams();
    const[LocalStream,setLocalStream]=useState()
    const _myVideo=useRef(null)
    const startMyVideo=()=>{
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                setLocalStream(stream);
                _myVideo.current.srcObject = stream;
            })
            .catch(error => console.error('getUserMedia error:', error));
        
    }
    useEffect(()=>{
        const socket =io('http://localhost:4000')   
          const peer = new Peer({
              host: 'localhost',
              port: 4000,
              path: '/peerjs',
              config: { 'iceServers': [
              { url: 'stun:stun01.sipphone.com' },
              { url: 'stun:stun.ekiga.net' },
          { url: 'stun:stunserver.org' },
          { url: 'stun:stun.softjoys.com' },
          { url: 'stun:stun.voiparound.com' },
          { url: 'stun:stun.voipbuster.com' },
          { url: 'stun:stun.voipstunt.com' },
          { url: 'stun:stun.voxgratia.org' },
          { url: 'stun:stun.xten.com' },
          {
              url: 'turn:192.158.29.39:3478?transport=udp',
              credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
              username: '28224511:1379330808'
          },
          {
              url: 'turn:192.158.29.39:3478?transport=tcp',
              credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
              username: '28224511:1379330808'
              }
            ]
             },
          
          debug: 3
          });
          console.log(peer) 
          peer.on('open', id=>{
              console.log(id)
              
              socket.emit('joinRoom',roomID,id)
          })
          
          startMyVideo()
      },[])
  return (
    <div className='w-full flex flex-col items-start justify-start'>
        <div className='w-full text-3xl font-[Arial]'>Room-ID: {roomID=="0"?'Keine Room-ID':roomID}</div>
        <div className='w-full grid grid-cols-4 items-start justify-start'>
            <div className='w-full aspect-square'>
                <video ref={_myVideo} autoPlay muted className='rounded-xl' ></video>
            </div>
        </div>
    </div>
  )
}

export default ChatLayout