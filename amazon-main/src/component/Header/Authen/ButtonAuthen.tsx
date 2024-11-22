import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'
type Props={
    description:string,
    href?:string;
    width?:string
}
export default function ButtonAuthen(props:Props) {
  return (
    <Button className={props.width?`button-authen rounded-2xl ${props.width}`:'button-authen rounded-2xl'}><Link href={props.href?props.href:"/"}>{props.description}</Link></Button>
  )
}
