'use client';

import { Col, Image, Rate, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import {   productPersonStore } from '../Root'
import ProductItems from './ProductItems'
import { FileTextOutlined } from '@ant-design/icons';

export default function Product() {
    
   const product = productPersonStore((state)=>state.productDetail)
  return (
    <Row gutter={16} className='my-16'>
        <Col span={10}>
        <Image className='w-full h-[400px]' src={product.image}></Image>
        </Col>
        <Col span={14}>
        <h2 className='font-bold text-2xl mb-2'>
        {product.name}
        </h2>
        <Link href={"/"}>Visit the Fachixy Store</Link>
        <div className='flex gap-5 '>
            <div>4.4 <Rate style={{fontSize:"14px",color:"#de7921"}} allowHalf disabled={true} defaultValue={4.5} /></div>
            <Link href={"/"} >1,536 ratings </Link>
            <Link href={"/"}> <span className='pl-3 border-l-[1px] border-[#0f1111]'>Search this page</span></Link>
        </div>
         <p className='font-[500] text-xl my-5'>$ {product.price}</p>
        <div>
            <h3 className='mb-3'><b>Color: </b><span>{product.color}</span></h3>
            <Row gutter={[16,16]} className='w-[80%]'>
                <ProductItems />
            </Row>
            <p className='mt-3'>Size : <b>One Size</b></p>
            <p>Style : <b>Wired</b></p>
            <Row className='w-[60%]'>
                <Col span={12}>
                <p><b>
                Brand</b></p>
                <b>Color</b>
                <p><b>Ear Placement</b></p>
                <p><b>Form Factor</b></p>
                <p><b>Headphones </b></p>
                
                </Col>
                <Col span={12}>
                <p><span>	Fachixy</span></p>
                <p><span>{product.color}</span></p>
                <p><span>Over Ear</span></p>
                <p><span>Over Ear</span></p>
                <p><span>3.5 mm Jack</span></p>
               
                </Col>
            </Row>
            <p ><b>Jack</b></p>
            <div >
                <h3 className='my-5'><b>About this item</b></h3>
                <ul style={{listStyle:"disc",paddingLeft:"20px"}}>
                    <li><p>🎁Professional and comfortable design, cool shape and RGB lights. The Fachixy Gaming Headset is a great gift idea for 🎄Christmas and birthdays, boys and girls, family and friends🎁</p></li>
                    <li>
                        <p>🎶[Stereo Surround Sound Quality] The Fachixy Gaming Headset is equipped with 50mm high-density dual neodymium audio drivers, which can provide you with stereo clear sound. With responsive audio drivers, you can enjoy an immersive gaming experience with incredibly realistic sound. Great headphones with microphone for football games, shooters, racing games, switch games and more.</p>
                    </li>
                    <li>
                        <p>🎧[Adjustable Noise Canceling Microphone] Fachixy PS5/PS4 Headset integrated omnidirectional microphone transmits high-quality communication with its excellent noise control function, it can pick up sound very sensitively and cancel noise, allowing you to transmit or receive messages clearly in the game . The long and flexible microphone design can adjust the angle of the microphone by 120°rotation.</p>
                    </li>
                    <li>
                        <p>🎧[One-button volume control] Fachixy Xbox Gaming Headset not only has a high-strength, anti-tangle 89-inch braided anti-twist data cable, but also has a rotary volume control and a one-button microphone mute function. The scroll wheel volume button controller on the PC headset and the microphone with the icon quickly mute, it makes you can switch at will when adjusting chat or game audio.</p>
                    </li>
                    <li>
                        <p>✨[Soft RGB Lighting] The Fachixy Gaming Headphones is equipped with a cool RGB light strip design. After plugging into the USB port, the LED lighting effect can change dynamically with the game. Bring out your LED RGB fantasies with vibrant, eye-catching lights in a dim halo. Soft RGB lighting, stylish and attractive, is a cool addition in video recording and live broadcasting scenarios.</p>
                    </li>
                </ul>
                <div className='flex items-center mt-4'>
                <FileTextOutlined />
                <Link className='pl-2 text-[#007185]' href={"/"}>Report an issue with this product or seller
                </Link>
                </div>
                <p><b>Note: </b>Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.</p>
            </div>
        </div>
        </Col>
    </Row>
  )
}
