import React, { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom';
import { stringToUuid } from '../../../utils/functions/functionhooks';
import { useWebSocket } from '../../../services/context/Websocket';
import Notify from './Notify';

const UserMenu = (props) => { 
  
  const { lh,userID } = useParams();
  const {WS}=useWebSocket()
  const linkHashRoom=stringToUuid(lh.toString())
  const UsersID=stringToUuid(userID.toString())
  const[Arr,setArr]=useState([])
   
   
 const startNotify= ()=>{
  
  return "!"
 }
  useEffect(()=>{
    WS.on('room_users',data=>{setArr(data);console.log(data)})
  },[ Arr])
  return (
    <section className=' animate-growleft w-full h-full col-span-3 flex flex-col items-start justify-center'>
          <div className='w-full  text-left text-white font-[Arial] font-bold uppercase px-8'>Member</div>
          <div className='w-full h-full  my-4 px-4 flex flex-col items-start justify-start'>
            <div className='w-full  max-h-[600px]  overflow-auto scrollbar scrollbar-thin  scrollbar-thumb-blue-500  scrollbar-track-blue-400  bg-[#8f8df5] rounded-xl shadow-inner min-h-full p-4 flex flex-col items-center justify-start divide-y divide-[rgba(255,255,255,0.1)] gap-2'>
           {
            Arr?.length>0?
            <>
            {
              Arr?.map((item,index)=>(
                <div onClick={()=>{props.UserSel(item);props.CHANGER(2)}} key={'users'+index} className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                  <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                    <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><img src={item.uimg} className='rounded-full' /></div>
                  </div>
                  <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                    {item.uname}
                  </div>
                  <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                    <div className='w-2 relative aspect-square rounded-full bg-lime-400'>
                      {
                        item.Messages!="false"?
                        <Notify IS={item.Messages} Uid={item.userid} />
                        :
                        <></>
                      }
                      </div>
                  </div>
                </div>
  
              ))
            }
            </>
            :
            <></>
           }   
               
               
               
            </div>
          </div>
        </section>
  )
}

export default UserMenu