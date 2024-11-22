import "../styles/main.css"
import { Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function AmazonProduct() {
  return (
    <div className='container mx-auto'>
      <Row gutter={28}>
        <Col  span={6} >
        <div className='bg-white px-2 py-4'>
            <h3 className='font-bold mb-5 '>Gaming accessories</h3>
        <Row  gutter={[10,20]} >
            <Col span={12} >
            <Link href={"/product-detail"}>
            <img src="./img/anh11.jpg" alt="anh1" />
            <span>Headsets</span>
            </Link>
            </Col>
            <Col  span={12}>
            <Link href={"/product-detail"}>
            <img src="./img/anh12.jpg" alt="anh2" />
            <span>Keyboards</span>
            </Link>
            </Col>
            <Col  span={12}>
            <Link href={"/product-detail"}>
            <img src="./img/anh13.jpg" alt="anh3" />
            <span>Computer mice</span>
            </Link>
            </Col>
            <Col  span={12}>
            <Link href={"/product-detail"}>
            <img src="./img/anh10.jpg" alt="anh4" />
            <span>Chairs</span>
            </Link>
            </Col>
        </Row>
         <div className='mt-5'><Link  href={"/"}>See more</Link></div>
        </div>
        </Col>
        <Col  span={6} >
        <div className='bg-white px-2 py-4'>
            <h3 className='font-bold mb-5'>Shop deals in Fashion</h3>
        <Row  gutter={[10,20]} >
            <Col  span={12} >
            <Link href={"/product-detail"}>
            <img src="./img/anh6.jpg" alt="anh1" />
            <span>Jeans under $50</span>
            </Link>
            </Col>
            <Col  span={12}>
            <Link href={"/product-detail"}>
            <img src="./img/anh9.jpg" alt="anh2" />
            <span>Tops under $25</span>
            </Link>
            </Col>
            <Col  span={12}>
            <Link href={"/product-detail"}>
            <img src="./img/anh7.jpg" alt="anh3" />
            <span>Dresses under $30</span>
            </Link>
            </Col>
            <Col  span={12}>
            <Link href={"/product-detail"}>
            <img src="./img/anh8.jpg" alt="anh4" />
            <span>Shoes under $50</span>
            </Link>
            </Col>
        </Row>
         <div className='mt-5'><Link  href={"/"}>See all deals</Link></div>
        </div>
        </Col>
        <Col  span={6} >
        <div className='bg-white px-2 py-4'>
            <h3 className='font-bold mb-5 '>Refresh your space</h3>
        <Row  gutter={[10,20]} >
            <Col  span={12} >
            <Link href={"/product-detail"}>
            <img src="./img/anh5.jpg" alt="anh1" />
            <span>Dining</span>
            </Link>
            </Col>
            <Col  span={12}>
            <Link href={"/product-detail"}>
            <img src="./img/anh4.jpg" alt="anh2" />
            <span>Home</span>
            </Link>
            </Col>
            <Col  span={12}>
            <Link href={"/product-detail"}>
            <img src="./img/anh2.jpg" alt="anh3" />
            <span>Kitchen</span>
            </Link>
            </Col>
            <Col  span={12}>
            <Link href={"/product-detail"}>
            <img src="./img/anh3.jpg" alt="anh4" />
            <span>Health and Beauty</span>
            </Link>
            </Col>
        </Row>
         <div className='mt-5'><Link  href={"/"}>See more</Link></div>
        </div>
        </Col>
        <Col  span={6} >
        <div className='bg-white px-2 py-4'>
            <h3 className='font-bold mb-5 '>Deals in PCs</h3>
         <Link href={"/product-detail"}><img src="./img/anh1.jpg" alt="anh1" /></Link>
         <div className='mt-6'><Link  href={"/"}>See more</Link></div>
        </div>
        </Col>
      </Row>
    </div>
  )
}
