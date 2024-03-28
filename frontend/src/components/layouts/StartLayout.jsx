import React, { useState } from 'react'
import {MdClose, MdMenu, MdPerson} from 'react-icons/md'
import UserMenu from '../container/userviewcontainer/UserMenu'
import StartView from '../container/chatviewcontainer/StartView'
import MeetingView from '../container/chatviewcontainer/MeetingView'
import ChatView from '../container/chatviewcontainer/ChatView'
const StartLayout = () => {
    const [showusers,setshowusers]=useState(false)
   const [chatViewChanger,setchatViewChanger]=useState(0)
  return (
    <div className='relative w-full flex flex-col items-start justify-start bg-[#504ead] h-screen'>
    <div onClick={()=>setshowusers(!showusers)} className='absolute inset left-2 top-2 hover:bg-[rgba(200,248,255,0.04)] cursor-pointer border border-[rgba(200,248,255,0.4)] p-1 rounded'>
      {
        showusers?
        <MdClose className='text-white inline text-3xl' />
        :
        <MdMenu className='text-white inline text-3xl' />
      }
    </div>
      <div className='w-full h-full py-20 grid grid-cols-12 divide-x divide-[rgba(255,255,255,0.1)] items-start justify-items-start gap-5'>
      {
        showusers?
        <UserMenu />
      :<></>
      }
      {
        chatViewChanger==0?
        <StartView  CSS={showusers} CHANGER={setchatViewChanger} />
        :
        chatViewChanger==1?
        <MeetingView  CSS={showusers} CHANGER={setchatViewChanger} />
        :
        chatViewChanger==2?
        <ChatView  CSS={showusers} CHANGER={setchatViewChanger} />
        :
        <StartView  CSS={showusers} CHANGER={setchatViewChanger} />
      }
      </div>
  </div>
  )
}

export default StartLayout