'use client'

import { Button, Checkbox, Col, Empty, InputNumber, Rate, Row } from "antd";
import React from "react";

import Link from "next/link";

import { ProductGetLocal } from "../product-detail/Root";

import { useLocalStorage } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import ButtonAuthen from "@/component/Header/Authen/ButtonAuthen";
import AuthenEnd from "@/component/Footer/AuthenEnd";

export default function HomeCarts() {
  const router = useRouter();
  const [listProduct,setListProduct] = useLocalStorage("product",null)
  const newList:any = listProduct?[...listProduct]:[];
  
  const handelProduct=()=>{
      if(newList.length===0){
        return <Empty />
      }else{
        
        
        return newList.map((items:ProductGetLocal,index:number)=>{
         
          return(
          <div key={items.key} className="mt-7 flex">
           <img src={items.image} alt={`hang${items.key}`} width={180} height={180}/>
           <div className="pl-3">
            <p className="custom-text text-xl font-[500]">{items.name}</p>
            <span className="text-[#007600] py-2">In Stock</span>
            <p>Gift options not available.Gift options not available. <Link href={"/"}>Learn more</Link></p>
            <p className="py-2"><span className="font-bold">Style:</span> 
            Stick</p>
            <div className="text-xs flex gap-2">
                <div>
                <span>Qty:</span>
                <InputNumber min={1}  defaultValue={items.qty} onChange={(e)=>{
                  if(e){
                    items.qty=e;
                    setListProduct(newList)
                  }
                }}  />
                </div>
                <button onClick={()=>{
                    newList.splice(index,1)
                    setListProduct(newList)
                  
                  
                  }}><span className="border-l-[1px] border-[#888888] pl-2 text-[#187185]">Delete</span></button>
                <button ><span className="border-l-[1px] border-[#888888] pl-2 text-[#187185]">Save for later</span></button>
                <button ><span className="border-l-[1px] border-[#888888] pl-2 text-[#187185]">Compare with similar items</span></button>
                <button ><span className="border-l-[1px] border-[#888888] pl-2 text-[#b82704]">Share</span></button>
            </div>
           </div>
           <div>
            <span className="font-bold whitespace-nowrap">$ {(items.qty*items.price).toFixed(2)}</span>
           </div>
          </div>
        )
        })
      }
  }
  const avgProduct = (found:number)=>{
    let sum=0;
    let result = 0;
    newList.forEach((items:ProductGetLocal) => {
         sum += items.price * items.qty;
         result += items.qty
    });
    if(found===1){
      return sum
    }else if(found === 2){
      return result
    }
  }
  return (
    <>
    <div className="container  mx-auto py-10">
      <Row className=" justify-between " gutter={50}>
        <Col span={18} className="pr-7 bg-white py-3 rounded-md h-auto" >
          <h2 className="font-bold text-2xl">Shopping Cart</h2>
          <button className="text-sm">Deselect all items</button>
          <p className="text-end border-b-[1px] border-[#888888]">Price</p>
          {handelProduct()}
        </Col>
        <Col span={6}>
          <div className="bg-white  pl-8 py-3 rounded-md">
            <p>
              <span>Subtotal ({avgProduct(2)} items): </span>
              <span className="font-bold">${avgProduct(1)?.toFixed(2)}</span>
            </p>
            <Checkbox className="py-2">This order contains a gift</Checkbox>
            <Button onClick={()=>router.push("/user-detail")} className="button-authen rounded-[15px]">Check out Amazon Cart</Button>
            
          </div>
          <div className="flex items-start pl-8 py-3 mt-7 bg-white rounded-md">
            <img className="mt-1" src="https://m.media-amazon.com/images/G/01/marketing/prime/logos/established/2021/prime-logo-rgb-prime-blue._CB601899009_.svg" alt="prime" width={50} height={31}/>
            <div className="pl-3 ">
                <p>Free fast delivery. No order minimum. Exclusive savings. Start your 30-day free trial of Prime.</p>
                <Button className="mt-3 rounded-2xl">Join Prime</Button>
            </div>
          </div>
          <div className="rounded-md pl-8 py-3 mt-7 bg-white">
              <h3 className="font-bold text-md">Pair with your cart</h3>
              <div className="flex mb-5">
                <img src="https://images-na.ssl-images-amazon.com/images/I/61EBlj11AbL._AC_UL300_SR300,300_.jpg" width={80} style={{maxHeight:"100px"}} alt="hang1" />
                <div className="pl-3">
                    <p className="custom-text text-[#007185]">Full Motion TV Monitor Wall Mount Bracket Articulating Arms Swivel Tilt Extension Rotation for Most 13-42 Inch LED LCD Flat Curved Screen TVs & Monitors, Max VESA 200x200mm up to 44lbs by Pipishell</p>
                    <div className="text-[#007185] py-2"><Rate style={{fontSize:"14px",color:"#de7921"}} allowHalf disabled defaultValue={4.5} /><span>123622</span></div>
                    <span className="text-[#b12704]">$ 19,99</span>
                    <p className="custom-text-1 custom-text py-2">Only 9 left in stock - order soon.</p>
                    <ButtonAuthen description="Add to cart"/>
                </div>
              </div>
              <div className="flex mb-5">
                <img src="https://images-na.ssl-images-amazon.com/images/I/61hqPKLHI-L._AC_UL300_SR300,300_.jpg" width={80} style={{maxHeight:"100px"}} alt="hang1" />
                <div className="pl-3">
                    <p className="custom-text text-[#007185]">Roku Voice Remote | TV Remote Control with Voice Control, TV Controls, Simple Setup, & Pre-Set App Shortcuts - Replacement Remote Compatible with Roku TV, Roku Players, & Roku Audio</p>
                    <div className="text-[#007185] py-2"><Rate style={{fontSize:"14px",color:"#de7921"}} allowHalf disabled defaultValue={4.5} /><span>9800</span></div>
                    <span className="text-[#b12704]">$ 19,99</span>
                    <p className="custom-text-1 custom-text py-2">Only 9 left in stock - order soon.</p>
                    <ButtonAuthen description="Add to cart"/>
                </div>
              </div>
              <div className="flex ">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71WMttbXIoL._AC_UL300_SR300,300_.jpg" width={80} style={{maxHeight:"100px"}} alt="hang1" />
                <div className="pl-3">
                    <p className="custom-text text-[#007185]">iBirdie Outdoor Waterproof and Weatherproof TV Cover for 55 inch Outside Flat Screen TV - Cover Size 52''W x 31''H x 5.5''D Compatible with 52-55 inch LCD LED TV</p>
                    <div className="text-[#007185] py-2"><Rate style={{fontSize:"14px",color:"#de7921"}} allowHalf disabled defaultValue={4.5} /><span>20520</span></div>
                    <span className="text-[#b12704]">$ 19,99</span>
                    <p className="custom-text-1 custom-text py-2">Only 9 left in stock - order soon.</p>
                    <ButtonAuthen description="Add to cart"/>
                </div>
              </div>
          </div>
        </Col>
      </Row>
      
    </div>
    <AuthenEnd/>
    </>
  );
}
