'use client'




export type NavItems ={
    key:number;
    value:string;
    href:string;
}
export type PageItems = {
    key:number;
    detail:NavItems[];
    desc:string;
    
}
export type KeyItems={
    id:number,
    key:number,
    value:string;
}
export type ListKey = {
    key:number;
    title:string;
    details:KeyItems[]
}
export type ListDetail = {
    idKey:number,
    details:PageItems[],
}



export const listDetail:ListDetail[]  = [
    {
        idKey:1,
        details:[
            {
                key:0,
        desc:"Stream Music",
        detail:[
            {key:1,value:"Amazon Music Unlimited",href:"/"},
            {key:2,value:"Free Streaming Music",href:"/"},
            {key:3,value:"Podcasts",href:"/"},
            {key:4,value:"Open Web Player",href:"/"},
            {key:5,value:"Download the app",href:"/"},
        ]
            }
        ]
    },
    {
        idKey:2,
        details:[
            {
                key:6,
                desc:"Kindle E-readers",
                
                detail:[
                    {key:7,value:"Kindle Kids",href:"/"},
                    {key:8,value:"Kindle",href:"/"},
                    {key:9,value:"Kindle Paperwhite Kids",href:"/"},
                    {key:10,value:"Kindle Paperwhite",href:"/"},
                    {key:11,value:"Kindle Scribe",href:"/"},
                    {key:12,value:"Accessories",href:"/"},
                    {key:13,value:"See all Kindle E-Readers",href:"/"},
                ]
            },
            {
                key:14,
                desc:"Kindle Store",
                detail:[
                    {key:15,value:"Kindle Books",href:"/"},
                    {key:16,value:"Kindle Unlimited",href:"/"},
                    {key:17,value:"Prime Reading",href:"/"},
                    {key:18,value:"Kindle Vella",href:"/"},
                ]
            },
            {
                key:19,
                desc:"Apps & Resources",
                detail:[
                    {key:20,value:"Free Kindle Reading Apps",href:"/"},
                    {key:21,value:"Kindle for Web",href:"/"},
                    {key:22,value:"Manage Your Content and Devices",href:"/"},
                    {key:23,value:"Trade-In",href:"/"},
                ]
            }
        ]
    },
    {
       idKey:3,
       details:[
        {
            key:24,
            desc:"Amazon Appstore",
            
            detail:[
                {key:25,value:"All Apps and Games ",href:"/"},
                {key:26,value:"Games",href:"/"},
                {key:27,value:"Amazon Coins",href:"/"},
                {key:28,value:"Download Amazon Appstore",href:"/"},
                {key:29,value:"Amazon Apps",href:"/"},
                {key:30,value:"Your Apps and Subscriptions",href:"/"},
            ]
        }
       ]
    },
    {
        idKey:4,
        details:[
            {
                key:31,
                desc:"Electronics",
               
                detail:[
                    {key:31,value:"Accessories & Supplies",href:"/"},
                    {key:32,value:"Camera & Photo",href:"/"},
                    {key:33,value:"Car & Vehicle Electronics",href:"/"},
                    {key:34,value:"Cell Phones & Accessories",href:"/"},
                    {key:35,value:"Computers & Accessories",href:"/"},
                    {key:36,value:"GPS & Navigation",href:"/"},
                    {key:37,value:"Headphones",href:"/"},
                    {key:38,value:"Home Audio",href:"/"},
                    {key:39,value:"Office Electronics",href:"/"},
                    {key:40,value:"Portable Audio & Video",href:"/"},
                    {key:41,value:"Security & Surveillance",href:"/"},
                    {key:42,value:"Service Plans",href:"/"},
                    {key:43,value:"Television & Video",href:"/"},
                    {key:44,value:"Video Game Consoles & Accessories",href:"/"},
                    {key:45,value:"Video Projectors",href:"/"},
                    {key:46,value:"Wearable Technology",href:"/"},
                    {key:47,value:"eBook Readers & Accessories",href:"/"},
                ]
            }
        ]
    },
    {
        idKey:5,
        details:[
            {
                key:48,
                desc:"Computers",
                
                detail:[
                    {key:49,value:"Computer Accessories & Peripherals",href:"/"},
                    {key:50,value:"Computer Components",href:"/"},
                    {key:51,value:"Computers & Tablets",href:"/"},
                    {key:52,value:"Data Storage",href:"/"},
                    {key:53,value:"External Components",href:"/"},
                    {key:54,value:"Laptop Accessories",href:"/"},
                    {key:55,value:"Monitors",href:"/"},
                    {key:56,value:"Networking Products",href:"/"},
                    {key:57,value:"Power Strips & Surge Protectors",href:"/"},
                    {key:58,value:"Printers",href:"/"},
                    {key:58,value:"Scanners",href:"/"},
                    {key:60,value:"Servers",href:"/"},
                    {key:61,value:"Tablet Accessories",href:"/"},
                    {key:62,value:"Tablet Replacement Parts",href:"/"},
                    {key:63,value:"Warranties & Services",href:"/"},
                ]
            }
        ]
    },
    {
        idKey:6,
        details:[
            {
                key:64,
                desc:"Smart Home",
                
                detail:[
                    {key:65,value:"Amazon Smart Home",href:"/"},
                    {key:66,value:"Works with Alexa Devices",href:"/"},
                    {key:67,value:"Smart Home Lighting",href:"/"},
                    {key:68,value:"Smart Locks and Entry",href:"/"},
                    {key:69,value:"Security Cameras and Systems",href:"/"},
                    {key:70,value:"Plugs and Outlets",href:"/"},
                    {key:71,value:"New Smart Devices",href:"/"},
                    {key:72,value:"Heating and Cooling",href:"/"},
                    {key:73,value:"Detectors and Sensors",href:"/"},
                    {key:74,value:"Home Entertainment",href:"/"},
                    {key:75,value:"Pet",href:"/"},
                    {key:76,value:"Voice Assistants and Hubs",href:"/"},
                    {key:77,value:"Kitchen",href:"/"},
                    {key:78,value:"Vacuums and Mops",href:"/"},
                    {key:79,value:"Lawn and Garden",href:"/"},
                    {key:80,value:"WIFI and Networking",href:"/"},
                    {key:81,value:"Other Solutions",href:"/"},
                ]
            }
        ]
    }

]




export const listKeyNav : ListKey[]=[
    {key:82,
        title:"Digital Content & Devices",
        details:[
            {key:83,value:"Amazon Music",id:1},
            {key:84,value:"Kindle E-readers & Books",id:2},
            {key:85,value:"Amazon Appstore",id:3}

        ]
    },
    {
        key:86,
        title:"Shop by Department",
        details:[
            {key:87,value:"Electronics",id:4},
            {key:88,value:"Computers",id:5},
            {key:89,value:"Smart Home",id:6},
            {key:90,value:"Arts & Crafts",id:7},
            {key:91,value:"Automotive",id:8},
            {key:92,value:"Baby",id:9},
            {key:93,value:"Beauty and Personal Care",id:10},
            {key:94,value:"Women's Fashion",id:11},
            {key:95,value:"Men's Fashion",id:12},
            {key:96,value:"Girls' Fashion",id:13},
            {key:97,value:"Boys' Fashion",id:14},
            {key:98,value:"Health and Household",id:15},
            {key:99,value:"Home and Kitchen",id:16},
            {key:100,value:"Industrial and Scientific",id:17},
            {key:101,value:"Luggage",id:18},
            {key:102,value:"Movies & Television",id:19},
            {key:103,value:"Pet supplies",id:20},
            {key:104,value:"Software",id:21},
            {key:105,value:"Sports and Outdoors",id:22},
            {key:106,value:"Tools & Home Improvement",id:23},
            {key:107,value:"Toys and Games",id:24},
        ]
    }
]

