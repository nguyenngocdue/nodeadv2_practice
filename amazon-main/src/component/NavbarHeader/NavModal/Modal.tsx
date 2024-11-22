'use client'


import { Drawer } from 'antd'
import React, { useEffect, useState } from 'react'
import NavItems from './NavItem';
type Props={
    found:boolean;
    closeModal:(found:boolean)=>void;
}
export default function Modal(props:Props) {
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        props.found? setOpen(true):setOpen(false);
    },[props.found])
   
    
      const onClose = () => {
        setOpen(false);
        props.closeModal(false)
      };
  return (
    <Drawer
        
    placement={'left'}
    closable={false}
    onClose={onClose}
    open={open}
    
  >
    <NavItems/>
  </Drawer>
  )
}
