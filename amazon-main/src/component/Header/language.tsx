'use client'

import React, { useState } from 'react'
import RadioLanguage from './RadioLanguage'
import { Button, Dropdown, MenuProps } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons';


export default function Language() {
  const [name , setName] = useState("");
  const getNameByChilden = (name:string)=>{
         setName(name);
  }
  const items: MenuProps['items'] = [
      {
        key:'1',
        label : (
          <RadioLanguage getName = {getNameByChilden}/>
        )
      }
  ]
  return (
    <Dropdown menu={{ items }} placement="bottomLeft">
    <Button>
      <img src="./img/quocki.png" width={20} alt="quocki" />
      <span>- {name ? name : "VN"}</span>
      <CaretDownOutlined />
    </Button>
  </Dropdown>
  )
}
