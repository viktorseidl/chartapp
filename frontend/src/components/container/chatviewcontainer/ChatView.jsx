import React, { useEffect, useRef, useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import { useParams } from 'react-router-dom';
import { stringToUuid } from '../../../utils/functions/functionhooks';
import { useWebSocket } from '../../../services/context/Websocket';
const ChatView = (props) => {
  const {WS}=useWebSocket()
  const { userID } = useParams(); 
  const UsersID=stringToUuid(userID.toString())
 const [msges,setmsges]=useState([])
  const _text=useRef('') 
  const partnerID=props?.UserSel?.userid
  const Uname=userID==1?'Norbert Belisanto':userID==2?'Fernando Viktor':'Thomas Breuer'
  const sendMessage=()=>{
    if(_text.current.value.length>1){
      WS.emit('toUser_chat',partnerID,_text.current.value,UsersID,Uname)
      appendData({chatroom:partnerID,message:_text.current.value,sender:UsersID,sendername:Uname})
      _text.current.value=''
    }
  } 
  const appendData=(data)=>{
    let aldarr=msges
    aldarr.push(data)
    setmsges(aldarr) 
  }
  useEffect(()=>{
    WS.on('toUser_chat', data =>appendData(data)) 
    return ()=>WS.off('toUser_chat')
  },[props])
  return (
    <section className={props.CSS?'w-full h-full col-span-9':'w-full h-full col-span-12'}> 
        <div className='mt-10 w-full text-left px-10 font-[Arial] font-bold text-3xl text-white  pb-2 border-b border-[rgba(255,255,255,0.1)]'>{partnerID} <span onClick={()=>props.CHANGER(0)} className='font-normal text-lg flex flex-row items-center justify-center float-right border border-[ rgba(255,255,255,0.06)] p-1 px-2 rounded cursor-pointer hover:bg-[rgba(255,255,255,0.07)]'><MdArrowBack className='inline mr-2' /> Back</span></div> 
        <div className='w-full mt-6 flex flex-col items-center justify-center'>
          <div className='w-5/6 bg-[#8f8df5] rounded-xl p-4 h-[450px] overflow-auto scrollbar scrollbar-thin  scrollbar-thumb-blue-500  scrollbar-track-blue-400'>
            {
              msges.length>0?
              <>
              {
                msges.map((item,index)=>(
                  <div key={"msgin"+index}>{index} new message</div>
                ))
              }
              </>
              :
              <><div className='mt-[200px] w-full text-center text-gray-600'>Konversation beginnen</div></>
            }
          </div>
          <div  className='w-5/6 flex flex-col items-center justify-center mt-4'>
            <div className='w-full grid grid-cols-6 gap-3'>
              <div className='w-full col-span-5 flex flex-col items-start justify-start'>
                <textarea ref={_text}  className='w-full rounded-xl p-2 bg-[#f0ebeb] h-[100px] resize-none scrollbar scrollbar-thin  scrollbar-thumb-gray-500  scrollbar-track-gray-400 shadow-inner shadow-[rgba(0,0,0,0.1)] ring-0 outline-none' placeholder='Geben Sie hier Ihre Nachricht ein...'></textarea>
              </div>
              <div><button onClick={()=>sendMessage()} className='w-full h-full rounded-xl outline-none focus:ring-1 ring-blue-400 bg-[#6598db] '>Senden</button></div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ChatView