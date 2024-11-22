'use client'
import '@nlux/themes/nova.css';
import React, { useState } from 'react'
import {AiChat} from '@nlux/react';
import {useChatAdapter} from '@nlux/langchain-react';

import {  Popover } from 'antd';
export default function ChatBox() {
    
    const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
    const gptAdapter = useChatAdapter({
        url: 'https://pynlux.api.nlkit.com/pirate-speak'
    });
    
    const handelModal = ()=>{
        return (
            <div className='w-[300px] h-[400px]'>
            <AiChat
                  adapter={gptAdapter}
                  composerOptions={{
                      placeholder: 'How can I help you today?'
                  }}
                  conversationOptions={{
                      historyPayloadSize: 'max'
                  }}
              />
             
            </div>
        )
    }
  return (
    <div>
      
  <Popover
      
      title={handelModal}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      {/* <button className='w-[50px] h-[50px]  bg-[#DDD] flex justify-center items-center rounded-[50%] bottom-5 right-16 z-10' style={{position:"fixed"}}>
      <img width={30} src="./img/boxchat.png" alt="boxchat" />
      </button> */}
    </Popover>
      
    </div>
  )
}
