import React, { useEffect } from 'react'
import io from 'socket.io-client' 
const StartView = (props) => {
useEffect(()=>{
  const socket =io('http://localhost:4000')  
  socket.connect(true)
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
        
        socket.emit('join-application',id,10)
    })
},[])
    return (
    <section className={props.CSS?'w-full h-full col-span-9':'w-full h-full col-span-12'}>
          <div className='w-full grid grid-cols-4 items-start justify-items-start gap-5'>
            <div onClick={()=>props.CHANGER(1)} className='w-full col-start-2 uppercase col-span-1 py-10 bg-[#33326d] hover:bg-[#2f2e5a] cursor-pointer rounded-xl text-white flex flex-col items-center justify-center font-[Arial] font-bold ring-1 hover:ring-2'>New Meeting</div>
            <div onClick={()=>props.CHANGER(2)} className='w-full col-span-1 uppercase py-10 bg-[#33326d] hover:bg-[#2f2e5a] cursor-pointer rounded-xl text-white flex flex-col items-center justify-center font-[Arial] font-bold ring-1 hover:ring-2'>New Chat</div>
          </div>
          <div className='mt-10 w-full text-left pl-10 font-[Arial] font-bold text-3xl text-white  pb-1 border-b border-[rgba(255,255,255,0.1)]'>Willkommen zur Chat-App</div>
          <div className='mt-10 w-full text-left px-10 font-[Arial] font-bold text-xl text-white  '>Hier können Sie problemlos mit anderen Benutzern kommunizieren, sei es in privaten Chats oder in Gruppen-Meetings. Lassen Sie uns einen Überblick über die verschiedenen Funktionen geben:</div>

          <div className='mt-10 w-full text-left font-[Arial] text-white  flex flex-col items-center justify-center gap-2'>

            <div className='w-5/6 px-4 pt-2 flex flex-col items-start justify-start'>
              <div className='w-full font-bold'>Neue Unterhaltung beginnen</div>
              <div className='w-full '>
                <ul className=' list-disc'>
                  <li>Klicken Sie auf den Button "New Chat", um eine neue Unterhaltung zu starten.</li>
                  <li>Dies öffnet ein neues Chat-Fenster, in dem Sie Nachrichten mit anderen Benutzern austauschen können.</li>
                  <li>Private Unterhaltungen können auch gestartet werden, indem Sie direkt auf den Namen eines Benutzers in der Benutzerliste klicken.</li> 
                </ul>
              </div>
            </div>
            <div className='w-5/6 px-4 pt-2 flex flex-col items-start justify-start'>
              <div className='w-full font-bold'>Neues Meeting starten</div>
              <div className='w-full '>
                <ul className=' list-disc'>
                  <li>Wenn Sie an einem Gruppen-Meeting teilnehmen möchten, klicken Sie auf den Button "New Meeting".</li>
                  <li>Meetings ermöglichen es Ihnen, mit bis zu 8 Personen gleichzeitig zu kommunizieren, sowohl mit Video als auch mit Audio.</li>
                  <li>Sie erhalten einen Link zum Meeting, den Sie mit anderen Benutzern teilen können, damit sie dem Meeting beitreten können.</li> 
                </ul>
              </div>
            </div>
            <div className='w-5/6 px-4 pt-2 flex flex-col items-start justify-start'>
              <div className='w-full font-bold'>Neue Unterhaltung beginnen</div>
              <div className='w-full '>
                <ul className=' list-disc'>
                  <li>Wenn Sie zu einem Meeting eingeladen werden, erhalten Sie einen Link zum Beitritt.</li>
                  <li>Klicken Sie auf den Link, um dem Meeting beizutreten.</li>
                  <li>Stellen Sie sicher, dass Ihre Kamera und Ihr Mikrofon einsatzbereit sind, um an der Konversation teilzunehmen.</li> 
                </ul>
              </div>
            </div> 


          </div>
        </section>
  )
}

export default StartView