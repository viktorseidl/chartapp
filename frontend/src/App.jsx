import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import {MdClose, MdMenu, MdPerson} from 'react-icons/md'

const socket = io('http://localhost:4000/'); // Replace with your server URL

function App() { 
   const [showusers,setshowusers]=useState(false)
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
        <section className=' animate-growleft w-full h-full col-span-3 flex flex-col items-start justify-center'>
          <div className='w-full  text-left text-white font-[Arial] font-bold uppercase px-8'>Member</div>
          <div className='w-full h-full  my-4 px-4 flex flex-col items-start justify-start'>
            <div className='w-full  max-h-[600px]  overflow-auto scrollbar scrollbar-thin  scrollbar-thumb-blue-500  scrollbar-track-blue-400  bg-[#8f8df5] rounded-xl shadow-inner min-h-full p-4 flex flex-col items-center justify-start divide-y divide-[rgba(255,255,255,0.1)] gap-2'>
              
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-red-600'></div>
                </div>
              </div>
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-red-600'></div>
                </div>
              </div>
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-blue-700'></div>
                </div>
              </div>
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-lime-400'></div>
                </div>
              </div>
               
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-blue-700'></div>
                </div>
              </div>
               
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-lime-400'></div>
                </div>
              </div>
               
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-lime-400'></div>
                </div>
              </div>
               
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-blue-700'></div>
                </div>
              </div>
               
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-lime-400'></div>
                </div>
              </div>
               
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-lime-400'></div>
                </div>
              </div>
               
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-red-600'></div>
                </div>
              </div>
               
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-red-600'></div>
                </div>
              </div>
               
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-red-600'></div>
                </div>
              </div>
               
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-lime-400'></div>
                </div>
              </div>
               
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-lime-400'></div>
                </div>
              </div>
               
               
              <div className='w-5/6 grid grid-cols-12 items-start justify-start pt-2'>
                <div className='w-full col-span-2 flex flex-col items-center justify-center p-1'>
                  <div className='w-full bg-gray-300 rounded-full shadow-inner flex flex-col items-center justify-center aspect-square'><MdPerson className='inline text-blue-400 text-2xl' /></div>
                </div>
                <div className='h-full w-full text-black col-span-8 flex flex-col items-start justify-center pl-2'>
                  Username
                </div>
                <div className='h-full w-full flex flex-col items-center justify-center col-span-2'>
                  <div className='w-2 aspect-square rounded-full bg-lime-400'></div>
                </div>
              </div>
               
            </div>
          </div>
        </section>
        :<></>
        }
        <section className={showusers?'w-full h-full col-span-9':'w-full h-full col-span-12'}>
          <div className='w-full grid grid-cols-4 items-start justify-items-start gap-5'>
            <div className='w-full col-start-2 uppercase col-span-1 py-10 bg-[#33326d] hover:bg-[#2f2e5a] cursor-pointer rounded-xl text-white flex flex-col items-center justify-center font-[Arial] font-bold ring-1 hover:ring-2'>New Meeting</div>
            <div className='w-full col-span-1 uppercase py-10 bg-[#33326d] hover:bg-[#2f2e5a] cursor-pointer rounded-xl text-white flex flex-col items-center justify-center font-[Arial] font-bold ring-1 hover:ring-2'>New Chat</div>
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
        </div>
    </div>
  );
}

export default App;