import React, { useEffect, useState } from 'react'
import MsgAudio from './../../../images/message.wav'
import { useParams } from 'react-router-dom'
import { stringToUuid } from '../../../utils/functions/functionhooks'
const Notify = (props) => {
    const [notifyer,setnotifyer]=useState([])
    const {userID}=useParams()
    const myid=stringToUuid(userID.toString())
    const PMusic=new Audio(MsgAudio)
    const play=async()=>{
        await PMusic.play()
    }
    useEffect(()=>{ 
        props.IS.split('_')[0]=="true"?play():''
    },[props.IS])
  return (
    myid==props.Uid?
    <></>
    :
    props.IS.split('_')[0]=="true"&&(props.IS.split('_')[1]=props.Uid)?
    <div className='absolute inset-0 top-[-28px] h-[22px] left-3 w-[40px] bg-red-600 rounded-lg rounded-bl-none flex flex-col items-center justify-center shadow-sm shadow-[rgba(0,0,0,0.5)] text-white'>!</div>
    :
    ''
  )
}

export default Notify