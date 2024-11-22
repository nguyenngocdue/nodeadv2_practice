'use client'

import { Button, Row } from 'antd'
import React from 'react'
import { handelContact } from './Roots'
import Link from 'next/link'
import Language from '../Header/language'
import { GlobalOutlined } from '@ant-design/icons'

export default function Contact() {
  return (
    <div className='bg-slate-800'>
        <div className='container mx-auto'>
        <Row className='justify-between items-start py-7 '>
        {handelContact()}
    </Row>
         <div className='flex justify-center items-center gap-3 pt-3 pb-10'>
            <Link className='mr-10' href={"/"}>
            <span className='logo-global'></span>
            </Link>
            <Language/>
            <Button>USD - U.S. Dollar</Button>
            <Button><GlobalOutlined /> <span>English</span></Button>
         </div>
         
        </div>
    </div>
  )
}
