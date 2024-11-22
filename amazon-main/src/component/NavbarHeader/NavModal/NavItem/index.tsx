'use client'
import React, { useState } from 'react'
import {  KeyItems, ListDetail, listDetail, ListKey, listKeyNav,        PageItems } from '../Root'
import { ArrowLeftOutlined, DownOutlined, GlobalOutlined, RightOutlined, UpOutlined } from '@ant-design/icons'
import Link from 'next/link';

export default function NavItems() {
    const [keyNav,setKeyNav] = useState(0);
    const [closeModal,setClose] = useState(true);
    const [dropdown,setDropdowm] = useState(true);
    const handelListNav = ()=>{
        return listKeyNav.map((items:ListKey)=>{
            const found = dropdown ? 4: items.details.length;
            let position = 0;
            return(
                <div key={items.key}>
                    <h4 className='mb-3 font-bold'>{items.title}</h4>
                    <ul className='mb-3 border-b-2 border-inherit pb-3'>
                        {
                            items.details.map((ele:KeyItems)=>{
                                position++;
                                if(position<=found){
                                    return (
                                        <li key={ele.key}>
                                            <button onClick={()=>{setKeyNav(ele.id);setClose(!closeModal)}} className='border-0 flex justify-between w-full items-center'>
                                                <span>{ele.value}</span>
                                                <RightOutlined />
                                            </button>
                                        </li>
                                    )
                                }
                                
                            })
                        }
                        {found<=items.details.length && items.details.length>4 && (
                            <button className='font-bold' onClick={()=>{
                                setDropdowm(!dropdown)
                            }}>See all {dropdown?<DownOutlined/>:<UpOutlined /> }</button>
                        )}
                    </ul>
                </div>
            )
        })
    }
     const handelNavItems = (id:number)=>{
        let newListDetai:PageItems[] = [];
        
        listDetail.forEach((item:ListDetail)=>{
            if(item.idKey===id){
                newListDetai = [...item.details];
            }
        })
        return (
            <div>
                <button onClick={()=>{setClose(!closeModal)}} className='flex items-center '><ArrowLeftOutlined /><span className='font-bold ml-4'>Main menu</span></button>
                <div>
                    {
                         newListDetai.map((element:PageItems)=>{
                            return (
                                <div key={element.key}>
                                    <h4 className='font-bold my-3'>{element.desc}</h4>
                                    <ul>
                                        {
                                            element.detail.map((ele:any)=>{
                                                return (
                                                    <li key={ele.key}>
                                                        <Link href={"/"}>{ele.value}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                          })
                    }
                </div>
            </div>
        )
        
    }
  return (
    <>
      {closeModal?handelListNav():handelNavItems(keyNav)}
      <div>
        <h4 className='font-bold'>Help & Settings</h4>
        <ul>
            <li><Link href={"/"}>Your Account</Link></li>
            <li><Link href={"/"}><GlobalOutlined /> <span className='ml-2'>English</span></Link></li>
            <li><Link className='flex items-center' href={"/"}>
            <img src="./img/quocki.png" width={25} alt="quocki" />
            <span className='ml-2'>  VietNam</span>
            </Link></li>
            <li><Link href={"/"}>Customer Service</Link></li>
            <li><Link href={"/"}>Sign in</Link></li>
        </ul>
     </div>
    </>
  )
}
