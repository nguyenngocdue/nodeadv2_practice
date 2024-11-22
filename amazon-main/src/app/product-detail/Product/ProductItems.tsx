'use client';

import React from 'react'
import {  ProductItem, productPersonStore } from '../Root'
import { Col } from 'antd'
import "./style.css"


export default function ProductItems() {
     const list =   productPersonStore((state)=>state.listproduct) 
    const getProduct = productPersonStore((state)=>state.getProduct)
    const productDetail = productPersonStore((state)=>state.productDetail)
     const handleProduct = ()=>{
        return list.map((items:ProductItem)=>{
          return <Col key={items.key} span={8} >
              <button className={items.image===productDetail.image?'border-[1px] rounded-[10px] pl-3 py-2  w-full flex items-center active-product':'border-[1px] rounded-[10px] pl-3 py-2  w-full flex items-center'} onClick={()=>{
                const product :ProductItem = {
                    color:items.color,
                    image:items.image,
                    price:items.price,
                    name:items.name,
                    key:items.key
                }
                getProduct(product)}}>
              <img width={40} src={items.image} alt={`${items.image}`} />
              <span className='pl-2'>$ {items.price}</span>
              </button>
          </Col>
        })
  }
  return (
    <>
      {handleProduct()}
    </>
  )
}
