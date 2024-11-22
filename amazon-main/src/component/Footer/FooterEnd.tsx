'use client'
import "../styles/main.css"
import { Row } from 'antd'
import React from 'react'
import { handelListKey } from './Roots'
import Link from 'next/link'

export default function FooterEnd() {
  return (
    <div className=' text-color-999 bg-slate-900 pt-10'>
      <div className='container mx-auto'>
      <Row className='justify-center' gutter={[10,40]}>
        {handelListKey()}
      </Row>
      </div>
      <div className='text-color-DDD text-sm pt-10 pb-5'>
        <p className='flex justify-center gap-3'>
            <Link href={"/"}>Conditions of Use</Link>
            <Link href={"/"}>Privacy Notice</Link>
            <Link href={"/"}>Consumer Health Data Privacy Disclosure</Link>
            <Link href={"/"}>Your Ads Privacy Choices</Link>
        </p>
        
        <p className='flex justify-center'><span>© 1996-2024, Amazon.com, Inc. or its affiliates</span></p>
      </div>
    </div>
  )
}
