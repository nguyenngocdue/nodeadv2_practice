'use client'

import "../styles/main.css"
import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import Search from "./search";
import Language from "./language";

import Authentication from "./Authen";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useLocalStorage } from "@uidotdev/usehooks";


export default function Header() {
  const [listProduct] = useLocalStorage("product",null);
  const handleQuantity = ()=>{
      const newList = listProduct?[...listProduct]:[]
      let num = 0
      if(newList.length>0){
        newList.forEach((items:any)=>{
             num+=Number(items.qty)
        })
      }
     
      return num
  }
  return (
     <div className="bg-slate-900 text-color-DDD py-4 ">
      <div className="container mx-auto">
       <Row className="items-center justify-between" >
      <Col>
      <Link href={"/"}>
            <div className='logo-global'></div>
            </Link>
      </Col>
      <Col >
        <Link href={"/"} className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "16px" }}
          viewBox="0 0 384 512"
        >
          <g fill="#DDD">
          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </g>
        </svg>
        <div className="pl-2">
          <p className="mb-0 text-sm">Deliver to</p>
          <p className="text-sm">Vietnam</p>
        </div>
        </Link>
      </Col>
      <Col span={13}>
        <Search />
      </Col>
      <Col>
        <Language />
      </Col>
      <Col>
        <Authentication />
      </Col>
      <Col>
       <Link href={"/"}><p className="mb-0 text-sm">Returns</p>
       <p className="text-sm">& Order</p></Link>
      </Col>
      <Col>
       <Link href={"/carts"}>
       <ShoppingCartOutlined style={{fontSize:"25px"}} /> <span>{handleQuantity()}</span>
       </Link>
      </Col>
    </Row>
     </div>
     </div>
  );
}
