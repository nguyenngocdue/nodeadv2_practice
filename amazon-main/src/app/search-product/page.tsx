'use client'

import { useLocalStorage } from '@uidotdev/usehooks'
import { Button, Card, Col, Row } from 'antd'
import React from 'react'
import { ProductGetLocal } from '../product-detail/Root';
import Link from 'next/link';
import { customerReviews, department, discount, handelProduct, handelRadio, price } from './Root';


export default function PaymentPages() {
   
  return (
    <div className='bg-white py-10'>
      <div className='container mx-auto'>
        <Row>
          <Col span={4}>
          {handelRadio(department)}
          {handelRadio(customerReviews)}
          {handelRadio(price)}
          {handelRadio(discount)}
          </Col>
          <Col span={20}>
          <Row gutter={[30,30]}>
            {handelProduct()}
          </Row>
          
          </Col>
        </Row>
      </div>
    </div>
  )
}
