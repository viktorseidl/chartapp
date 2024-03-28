import React from 'react'
import { MdArrowBack } from 'react-icons/md'

const ChatView = (props) => {
  return (
    <section className={props.CSS?'w-full h-full col-span-9':'w-full h-full col-span-12'}> 
        <div className='mt-10 w-full text-left px-10 font-[Arial] font-bold text-3xl text-white  pb-2 border-b border-[rgba(255,255,255,0.1)]'>Chat <span onClick={()=>props.CHANGER(0)} className='font-normal text-lg flex flex-row items-center justify-center float-right border border-[ rgba(255,255,255,0.06)] p-1 px-2 rounded cursor-pointer hover:bg-[rgba(255,255,255,0.07)]'><MdArrowBack className='inline mr-2' /> Back</span></div> 
    </section>
  )
}

export default ChatView