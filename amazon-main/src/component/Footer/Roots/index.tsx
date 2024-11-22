'use client'

import { Col } from "antd";
import Link from "next/link";

type ContactItems = {
    key:number;
    desc:string;
    href:string;
    span?:string
}
type Contact ={
   key:number;
   name:string;
   detail:ContactItems[];
}
type KeySearchItems = {
    key:number;

    desr:string;
}
type KeySearch = {
    key:number;
    name:string;
    href:string;
    details:KeySearchItems[]
    
}

const listContact:Contact[] = [
    {key:1,name:"Get to Know Us",detail:[
        {key:2,desc:"Careers",href:"/"},
        {key:3,desc:"Blog",href:"/"},
        {key:4,desc:"About Amazon",href:"/"},
        {key:5,desc:"Investor Relations",href:"/"},
        {key:6,desc:"Amazon Devices",href:"/"},
        {key:7,desc:"Amazon Science",href:"/"},
    ]},
    {key:8,name:"Make Money with Us",detail:[
        {key:9,desc:"Sell products on Amazon",href:"/"},
        {key:10,desc:"Sell on Amazon Business",href:"/"},
        {key:11,desc:"Sell apps on Amazon",href:"/"},
        {key:12,desc:"Become an Affiliate",href:"/"},
        {key:13,desc:"Advertise Your Products",href:"/"},
        {key:14,desc:"Self-Publish with Us",href:"/"},
        {key:15,desc:"Host an Amazon Hub",href:"/"},
        {key:16,desc:"See More Make Money with Us",href:"/",span:">"},
    ]},
    {key:17,name:"Amazon Payment Products",detail:[
        {key:18,desc:"Amazon Currency Converter",href:"/"},
        {key:19,desc:"Amazon Business Card",href:"/"},
        {key:20,desc:"Shop with Points",href:"/"},
        {key:21,desc:"Reload Your Balance",href:"/"},
    ]},
    {key:22,name:"Let Us Help You",detail:[
        {key:23,desc:"Amazon and COVID-19",href:"/"},
        {key:24,desc:"Your Account",href:"/"},
        {key:25,desc:"Your Orders",href:"/"},
        {key:26,desc:"Shipping Rates & Policies",href:"/"},
        {key:27,desc:"Returns & Replacements",href:"/"},
        {key:28,desc:"Manage Your Content and Devices",href:"/"},
        {key:29,desc:"Help",href:"/"},
    ]},
]

const listKeySearch : KeySearch[]=[
    {key:1,href:"/",name:"Amazon Music",details:[
        {key:2,desr:"Stream millions"},
        {key:3,desr:"of songs"}
    ]},
    {key:4,href:"/",name:"Amazon Ads",details:[
        {key:5,desr:"Reach customers"},
        {key:6,desr:"wherever they"},
        {key:7,desr:"spend their time"},
    ]},
    {key:8,href:"/",name:"6pm",details:[
        {key:9,desr:"Score deals"},
        {key:10,desr:"on fashion brands"}
    ]},
    {key:11,href:"/",name:"AbeBooks",details:[
        {key:12,desr:"Books, art"},
        {key:13,desr:"& collectibles"}
    ]},
    {key:14,href:"/",name:"ACX ",details:[
        {key:15,desr:"Audiobook Publishing"},
        {key:16,desr:"Made Easy"}
    ]},
    {key:17,href:"/",name:"Sell on Amazon",details:[
        {key:18,desr:"Start a Selling "},
        {key:19,desr:"Account"}
    ]},
    {key:20,href:"/",name:"Amazon Business",details:[
        {key:21,desr:"Everything For"},
        {key:22,desr:"Your Business"}
    ]},
    {key:23,href:"/",name:"AmazonGlobal",details:[
        {key:24,desr:"Ship Orders"},
        {key:25,desr:"Internationally"}
    ]},
    {key:26,href:"/",name:"Home Services",details:[
        {key:27,desr:"Experienced Pros"},
        {key:28,desr:"Happiness "},
        {key:29,desr:"Guarantee"}
    ]},
    {key:30,href:"/",name:"Amazon Web Services",details:[
        {key:31,desr:"Scalable Cloud"},
        {key:32,desr:"Computing Services"}
    ]},
    {key:33,href:"/",name:"Audible",details:[
        {key:34,desr:"Listen to Books & Original"},
        {key:35,desr:"Audio Performances"},
    ]},
    {key:36,href:"/",name:"Box Office Mojo",details:[
        {key:37,desr:"Find Movie"},
        {key:38,desr:"Box Office Data"},
    ]},
    {key:39,href:"/",name:"Goodreads",details:[
        {key:40,desr:"Book reviews"},
        {key:41,desr:"& recommendations"},
    ]},
    {key:42,href:"/",name:"IMDb",details:[
        {key:43,desr:"Movies, TV"},
        {key:44,desr:"& Celebrities"},
    ]},
    {key:45,href:"/",name:"IMDbPro",details:[
        {key:46,desr:"Get Info Entertainment"},
        {key:47,desr:"Professionals Need"},
    ]},
    {key:48,href:"/",name:"Kindle Direct Publishing",details:[
        {key:49,desr:"Indie Digital & Print Publishing"},
        {key:50,desr:"Made Easy"},
    ]},
    {key:51,href:"/",name:"Prime Video Direct",details:[
        {key:52,desr:"Video Distribution"},
        {key:53,desr:"Made Easy"},
    ]},
    {key:54,href:"/",name:"Shopbop",details:[
        {key:55,desr:"Designer"},
        {key:56,desr:"Fashion Brands"},
    ]},
    {key:57,href:"/",name:"Woot!",details:[
        {key:58,desr:"Deals and "},
        {key:59,desr:"Shenanigans"},
    ]},
    {key:60,href:"/",name:"Zappos",details:[
        {key:61,desr:"Shoes &"},
        {key:62,desr:"Clothing"},
    ]},
    {key:63,href:"/",name:"Ring",details:[
        {key:64,desr:"Smart Home"},
        {key:65,desr:"Security Systems"},
    ]},
    {key:66,href:"/",name:"eero WiFi",details:[
        {key:67,desr:"Stream 4K Video"},
        {key:68,desr:"in Every Room"},
    ]},
    {key:69,href:"/",name:"Blink",details:[
        {key:70,desr:"Smart Security"},
        {key:71,desr:"for Every Home"},
    ]},
    {key:72,href:"/",name:"Neighbors App ",details:[
        {key:73,desr:" Real-Time Crime"},
        {key:74,desr:"& Safety Alerts"},
    ]},
    {key:75,href:"/",name:"Amazon Subscription Boxes",details:[
        {key:76,desr:"Top subscription boxes – right to your door"},
        
    ]},
    {key:77,href:"/",name:"PillPack",details:[
        {key:78,desr:"Pharmacy Simplified"},
        
    ]},
]

export const handelContact = ()=>{
    return listContact.map((items:Contact)=>{
        return (
            <Col key={items.key} className="text-white">
            <h3 className="font-bold mb-2">{items.name}</h3>
            <ul>
            {items.detail.map((element:ContactItems)=>{
                return (
                    <li key={element.key}>
                        {element.span && (
                            <span >{element.span}</span>
                        )}
                        <Link href={element.href}>
                        
                        {element.desc}
                        </Link>
                    </li>
                )
            })}
            </ul>
            </Col>
        )
    })
}

export const handelListKey = ()=>{
   return listKeySearch.map((items:KeySearch)=>{
         return (
            <Col key={items.key} lg={{flex:"14.28%"}}>
                <Link href={items.href}>
                 <h5  className="font-bold text-color-DDD">{items.name}</h5>
                 {items.details.map((element:KeySearchItems)=>{
                        return (
                            <div key={element.key}>
                            <span >{element.desr}</span>
                            <br />
                            </div>
                        )
                 })}
                </Link>
            </Col>
         )
    })
}