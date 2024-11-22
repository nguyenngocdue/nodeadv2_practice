'use client'

import React, { useState } from 'react'
import {  ProductGetLocal, productPersonStore } from '../Root'
import dayjs from 'dayjs'
import { Button, InputNumber } from 'antd'

import { useLocalStorage } from '@uidotdev/usehooks'
import Link from 'next/link'




export default function CartProduct() {
  
    const productDetail = productPersonStore((state)=>state.productDetail)
    const date = dayjs().day(6).format("DD/MM/YYYY");
    const [quantity,setQuan] = useState(1)
    const [listProduct,saveProduct] = useLocalStorage("product",null);
    const newList:any = listProduct ? [...listProduct]:[]
    
    const handleProduct = ()=>{
      let found = false
      const productLocal:ProductGetLocal = {
        name:productDetail.name,
        price:productDetail.price,
        image:productDetail.image,
        qty:quantity,
        key:productDetail.key
      }
      newList.forEach((items:ProductGetLocal)=>{
        if(items.key===productLocal.key){
          items.qty = items.qty+ productLocal.qty;
          found = true
        }
      })
      if(!found){
        newList.push(productLocal)
      }
      
      saveProduct(newList)
     
    }
    
  return (
    <div className='border-[1px] rounded-[5px] p-3 my-16'>
      <h4 className='font-[500] mb-3'>$ {productDetail.price}</h4>
      <p>$55.80 Shipping & Import Charges to Vietnam</p>
      <p>Delivery <b>{date}</b></p>
      <div className='flex my-4'>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "16px" }}
          viewBox="0 0 384 512"
        >
          
          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          
        </svg>
        <span className='pl-3'>Viet nam</span>
        
      </div>
      <div className='flex items-center '>
      <span className='pr-3'>Quantity : </span>
      <InputNumber  onChange={(e)=>{if(e) setQuan(e)}}  min={1}  defaultValue={1}  />
      </div>
      <div className='my-3'>
      <Button onClick={handleProduct} className='w-full button-authen rounded-2xl '> Add to cart </Button>
      </div>
      <Link className='w-full rounded-[15px] bg-[#ffa41c] custom-buttom inline-block text-center py-[5px]' href={"/user-detail"}>Buy Now </Link>
    </div>
  )
}
