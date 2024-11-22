"use client";

import { Button, Card, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import React from "react";

export default function AuthenSignup() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <img src="./img/logo.png" alt="logo" width={150} />
      <Card style={{ width: "400px" }}>
        <h2 className="font-[500] text-2xl mb-3">Create account</h2>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
             <span className='font-[500]'>Fullname</span>
          <Form.Item
            name="nickname"
            className='mb-3'
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <span className='font-[500]'>Email</span>
          <Form.Item
            name="email"
              className='mb-3'
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
          <span className='font-[500]'>Password</span>
          <Form.Item
            name="password"
            className='mb-3'
            rules={[
              { 
                required: true,
                min:6,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
            <span>
            Passwords must be at least 6 characters.</span>
          </Form.Item>
          <span className='font-[500]'>Confirm Password</span>
          <Form.Item
            name="confirm"
             className='mb-3'
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agreement"
            className="mb-3"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item>
          <Button className='w-full bg-[#ffd814]'  htmlType="submit">
          Sign up
        </Button>
          </Form.Item>
        </Form>
        <p>By continuing, you agree to Amazon's <Link className='font-[500]' href={"/"}>Conditions of Use</Link> and <Link className='font-[500]' href={"/"}>Privacy Notice</Link>.</p>
        <h3 className='font-bold text-md mt-5'>Buying for work?</h3>
    <Link  href={"/"}>Create a free business account</Link>
        
        <p className="mt-5">Already have an account? <Link href={"/signin"} className="font-[500]">Sign in</Link></p>
      </Card>
    </div>
  );
}
