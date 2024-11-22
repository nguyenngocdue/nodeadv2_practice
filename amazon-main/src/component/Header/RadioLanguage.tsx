'use client'

import {  Radio, RadioChangeEvent, Space } from "antd"
import { useState } from "react";

type RadioCheck = {
    lable:string;
    value:number;
    name:string;
}
type Props = {
    getName:(name:string) => void;
}
export default function RadioLanguage(props:Props) {
    const [value, setValue] = useState(1);
    const listRadioCheck : RadioCheck[] = [
        {lable:"Vietnam - VN",value:1,name:"VN"},
        {lable:"English - EN",value:2,name:"EN"},
        {lable:"español - ES",value:3,name:"ES"},
        {lable:"العربية - AR" ,value:4,name:"AR"},
        {lable:"Deutsch - DE",value:5,name:"DE"},
        {lable:"עברית - HE",value:6,name:"HE"},
        {lable:"한국어 - KO",value:7,name:"KO"},
        {lable:"português - PT",value:8,name:"PT"},
        {lable:"中文 (简体) - ZH",value:9,name:"ZH"},
        {lable:"中文 (繁體) - ZH",value:10,name:"ZH"},
        

        
    ]
    const onChange = (e: RadioChangeEvent) => {
      
      const valueRadio = listRadioCheck.filter((item:RadioCheck)=>{
        return item.value === e.target.value;
      })
      props.getName(valueRadio[0].name);
      setValue(e.target.value);
    };

    const handelRadio = ()=>{
        const newListRadioCheck = listRadioCheck.filter((item:RadioCheck)=>{
            return item.value != value;
        })
        return newListRadioCheck.map((element:RadioCheck)=>{
            return <Radio key={element.value} value={element.value}>{element.lable}</Radio>
        })
    }
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        {handelRadio()}
      </Space>
    </Radio.Group>
  )
}
