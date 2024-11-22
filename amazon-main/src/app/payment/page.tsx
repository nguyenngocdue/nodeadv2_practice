'use client'

import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Button, Card, Col, Empty, Form, Input, InputNumber, Radio, Row, Select, Space } from "antd";


import { useRouter } from "next/navigation";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ProductGetLocal } from "../product-detail/Root";
import Link from "next/link";


const { Option } = Select;

export default function UserDetailPages() {
  const [form] = Form.useForm();

  const router = useRouter();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    if (value) {
      router.push('/payment')

    }
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+84</Option>
        <Option value="87">+85</Option>
      </Select>
    </Form.Item>
  );
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const [listProduct, saveProduct] = useLocalStorage("product", null)
  const newList: any = listProduct ? [...listProduct] : [];

  const handelProduct = () => {
    if (newList.length === 0) {
      return <Empty />
    } else {


      return newList.map((items: ProductGetLocal, index: number) => {

        return (
          <div key={items.key} className="mt-7 flex">
            <img src={items.image} alt={`hang${items.key}`} width={200} height={200} />
            <div className="pl-3">
              <p className="custom-text text-lg font-[500]">{items.name}</p>
              <span className="text-[#007600] py-2">In Stock</span>
              <p>Gift options not available.Gift options not available. <Link href={"/"}>Learn more</Link></p>
              <p className="py-2"><span className="font-bold">Style:</span>
                Stick</p>
              <div className="text-xs flex gap-2">
                <div>
                  <span className="mr-2">Qty:</span>
                  <InputNumber min={1} defaultValue={items.qty} disabled={true} />
                </div>

              </div>
            </div>
            <div>
              <span className="font-bold whitespace-nowrap">$ {(items.qty * items.price).toFixed(2)}</span>
            </div>
          </div>
        )
      })
    }
  }
  const avgProduct = () => {
    let sum = 0;
    newList.forEach((item: ProductGetLocal) => {
      sum += item.price * item.qty
    })
    return sum;
  }
  return (
    <div className="flex justify-between">
      {/* Address and Payment Section */}
      <div className="w-2/3 bg-white p-6 border border-gray-300 rounded-md mr-4">
        <div id="shipping-address" className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Shipping address</h3>
          <p>John Doe</p>
          <p>123 Main St, Apt 101</p>
          <p>Toronto, ON M1A 2B3</p>
          <p>Canada</p>
          <a href="#" className="text-blue-500">Change</a>
          <p><a href="#" className="text-blue-500">Add delivery instructions</a></p>
          <p><a href="#" className="text-blue-500">Or choose an Amazon Pickup Location</a></p>
          <p>20 locations near this address. <a href="#" className="text-blue-500">Choose</a></p>
        </div>
        <div id="payment-method" className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Payment method</h3>
          <div className="flex ">
            <img src="./img/paypalcard.jpg" width={50} alt="paypal" />
            <span className="font-[600] text-xl pl-3">Paypal</span>
          </div>
          <p className="mb-5">
            Pay via PayPal; you can pay with your credit card if you
            don’t have a PayPal account.
          </p>
        </div>

        <div id="gift-cards">
          <h3 className="text-lg font-semibold mb-2">Gift cards &amp; promotional codes</h3>
          <div className="flex">
            <input type="text" placeholder="Enter Code" className="border border-gray-300 p-2 rounded-md flex-grow mr-2" />
            <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md">Apply</button>
          </div>
        </div>
      </div>
      {/* Order Summary Section */}
      <div className="w-1/3 bg-white p-6 border border-gray-300 rounded-md">
        <div id="order-summary">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Items:</span>
            <span>CDN$ 62.99</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping &amp; Handling:</span>
            <span>CDN$ 0.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Total before tax:</span>
            <span>CDN$ 62.99</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Estimated GST/HST:</span>
            <span>CDN$ 8.19</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Estimated PST/RST/QST:</span>
            <span>CDN$ 0.00</span>
          </div>
          <div className="flex justify-between font-semibold text-red-600 text-lg">
            <span>Order Total:</span>
            <span>CDN$ 71.18</span>
          </div>
          <p className="text-sm text-gray-600 mt-4"><a href="#" className="text-blue-500">How are shipping costs calculated?</a></p>
          <p className="text-sm text-gray-600">Prime Shipping has been applied to the eligible items in your order.</p>
        </div>
        <button id="place-order-btn" className="w-full bg-yellow-500 text-gray-900 py-2 mt-6 rounded-md">Place your order</button>
        
      </div>
      
    </div>

  );
}
