'use client'

import Link from "next/link"

type YourDesc = {
    key:number,
    lable: string,
    href:string
}

export const YourAccount:YourDesc[]=[
    {key:0,lable:"Account",href:"/"},
    {key:1,lable:"Orders",href:"/"},
    {key:2,lable:"Recommendations",href:"/"},
    {key:3,lable:"Browsing History",href:"/"},
    {key:4,lable:"Watchlist",href:"/"},
    {key:5,lable:"Video Purchases & Rentals",href:"/"},
    {key:6,lable:"Kindle Unlimited",href:"/"},
    {key:7,lable:"Content & Devices",href:"/"},
    {key:8,lable:"Subscribe & Save Items",href:"/"},
    {key:9,lable:"Memberships & Subscriptions",href:"/"},
    {key:10,lable:"Music Library",href:"/"},
 ]

export const YourList :YourDesc[]=[
    {key:11,lable:"Create a List",href:"/"},
    {key:12,lable:"Find a List or Registry",href:"/"},
 ]

const handelListYour = (array:YourDesc[])=>{
    return array.map((item:YourDesc)=>{
        return <li key={item.key}><Link href={item.href}>{item.lable}</Link></li>
    })
}
export default handelListYour;