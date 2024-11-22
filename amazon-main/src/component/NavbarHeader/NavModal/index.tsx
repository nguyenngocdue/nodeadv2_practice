'use client'


import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react'
import Modal from './Modal';

export default function NavModal() {
    const [open, setOpen] = useState(false);


    const showDrawer = () => {
      setOpen(true);
    };
  
    const closeModal = (found:boolean)=>{
         setOpen(found)
    }
  return (
    <>
    <Button className='clear-button-taiwind ' type="primary" onClick={showDrawer}>
    <MenuOutlined /> <span>All</span>
        </Button>
        <Modal found={open} closeModal={closeModal}/>
    </>
  )
}
