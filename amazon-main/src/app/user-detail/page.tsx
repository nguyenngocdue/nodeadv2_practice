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
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <Row>
          <Col span={12}>
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                residence: ["zhejiang", "hangzhou", "xihu"],
                prefix: "86",
              }}
              style={{ width: "100%" }}
              scrollToFirstError
            >
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="firstname"
                label="First name"
                tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your First name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="lastname"
                label="Last name"
                tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your Last name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                name="Address"
                label="Street Address"
                rules={[
                  {
                    required: true,
                    message: "Please input your Street Address!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="city"
                label="City"
                rules={[
                  {
                    required: true,
                    message: "Please input your city!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>


              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: "Please select gender!" }]}
              >
                <Select placeholder="select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1}>
                    <div className="flex ">
                      <img src="./img/bankcard.png" width={50} alt="paypal" />
                      <span className="font-[600] text-xl pl-3">Direct bank transfer</span>
                    </div>

                    <p className="mb-5">
                      Make your payment directly into our bank account. Please
                      use your Order ID. Your order will shipped after funds
                      have cleared in our account.
                    </p>
                  </Radio>

                  <Radio value={2}>
                    <div className="flex ">
                      <img src="./img/paymentcard.jpg" width={70} alt="paypal" />
                      <span className="font-[600] text-xl pl-3">Check payments</span>
                    </div>

                    <p className="mb-5">
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </Radio>
                  <Radio value={3}>
                    <div className="flex ">
                      <img src="./img/paypalcard.jpg" width={50} alt="paypal" />
                      <span className="font-[600] text-xl pl-3">Paypal</span>
                    </div>
                    <h3 >Paypal</h3>
                    <p className="mb-5">
                      Pay via PayPal; you can pay with your credit card if you
                      don’t have a PayPal account.
                    </p>
                  </Radio>
                </Space>
              </Radio.Group>
              <Form.Item>
                <div className="flex justify-center items-center">
                  <Button type="primary" htmlType="submit" className="mt-3">
                    Continue
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>
          <Col span={12} className="pl-7 bg-white py-3 rounded-md h-auto" >
            <h2 className="font-bold text-2xl">Product detail</h2>
            <button className="text-sm">Deselect all items</button>
            <p className="text-end border-b-[1px] border-[#888888]">Price</p>
            {handelProduct()}
          </Col>

        </Row>
   
      </div>
    </div>
  );
}
