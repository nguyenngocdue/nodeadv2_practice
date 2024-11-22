import { searchProductAPI } from "@/apis/apiService"
import { DownOutlined, UpOutlined } from "@ant-design/icons"
import { Col, Radio, RadioChangeEvent, Rate, Space } from "antd"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export type RadioItem = {
    key: number,
    ders: string,
    value: number,
    defaultValue?: number
}
export type ListRadio = {
    key: number,
    name: string,
    detail: RadioItem[]
}

type ProductDetail = {
    key: number,
    image: string,
    name: string,
}
export const department: ListRadio = {
    key: 0,
    name: "Department",
    detail: [
        { key: 1, ders: "All", value: 1 },
        { key: 2, ders: "Amazon Devices & Accessories", value: 2 },
        { key: 3, ders: "Appliances", value: 3 },
        { key: 4, ders: "Arts, Crafts & Sewing", value: 4 },
        { key: 5, ders: "Automotive", value: 5 },
        { key: 6, ders: "Baby Products", value: 6 },
        { key: 7, ders: "Beauty & Personal Care", value: 7 },
        { key: 8, ders: "Books", value: 8 },
        { key: 9, ders: "CDs & Vinyl", value: 9 },
        { key: 10, ders: "Cell Phones & Accessories", value: 10 },
        { key: 11, ders: "Clothing, Shoes & Jewelry", value: 11 },
        { key: 12, ders: "Electronics", value: 12 },
        { key: 13, ders: "Grocery & Gourmet Food", value: 13 },
        { key: 14, ders: "Health & Household", value: 14 },
        { key: 15, ders: "Home & Kitchen", value: 15 },
        { key: 16, ders: "Industrial & Scientific", value: 16 },
        { key: 17, ders: "Movies & TV", value: 17 },
        { key: 18, ders: "Musical Instruments", value: 18 },
        { key: 19, ders: "Office Products", value: 19 },
        { key: 20, ders: "Patio, Lawn & Garden", value: 20 },
        { key: 21, ders: "Pet Supplies", value: 21 },
        { key: 22, ders: "Sports & Outdoors", value: 22 },
        { key: 23, ders: "Tools & Home Improvement", value: 23 },
        { key: 24, ders: "Toys & Games", value: 24 },
        { key: 25, ders: "Video Games", value: 25 },
    ]
}

export const customerReviews: ListRadio = {
    key: 26,
    name: "Customer Reviews",
    detail: [
        {
            key: 27,
            ders: "All",
            value: 1,

        },
        {
            key: 28,
            ders: "& up",
            value: 2,
            defaultValue: 4
        },
        {
            key: 29,
            ders: "& up",
            value: 3,
            defaultValue: 3
        },
        {
            key: 30,
            ders: "& up",
            value: 4,
            defaultValue: 2
        },
        {
            key: 31,
            ders: "& up",
            value: 5,
            defaultValue: 1
        },
    ]
}

export const price: ListRadio = {
    key: 32,
    name: "Price",
    detail: [
        { key: 33, ders: "All", value: 1 },
        { key: 34, ders: "Under $25", value: 2 },
        { key: 35, ders: "$25 to $50", value: 3 },
        { key: 36, ders: "$50 to $100", value: 4 },
        { key: 37, ders: "$200 & Above", value: 5 },
    ]
}

export const discount: ListRadio = {
    key: 38,
    name: "Discount",
    detail: [
        { key: 39, ders: "All", value: 1 },
        { key: 40, ders: "10% off or more", value: 2 },
        { key: 41, ders: "25% off or more", value: 3 },
        { key: 42, ders: "50% off or more", value: 4 },
        { key: 43, ders: "70% off or more", value: 5 },

    ]
}

const listProduct: ProductDetail[] = [
    {
        key: 0,
        name: "SAMSUNG Galaxy Tab A9+ Tablet 11” 64GB Android Table…",
        image: "https://m.media-amazon.com/images/I/61d46oYQgdL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte",
    },
    {
        key: 1,
        name: "LEVOIT Air Purifier for Home Allergies Pets Hair in Bedroom,…",
        image: "https://m.media-amazon.com/images/I/71t-9BTIg9L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte",
    },
    {
        key: 2,
        name: "Beats Studio Pro x Kim Kardashian - Bluetooth Noise…",
        image: "https://m.media-amazon.com/images/I/51h30sLEfmL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte",
    },
    {
        key: 3,
        name: "SAMSUNG 990 EVO SSD 1TB, PCIe Gen 4x4, Gen 5x2 M.2 22…",
        image: "https://m.media-amazon.com/images/I/71FHPYQ2JbL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte",
    },
    {
        key: 4,
        name: "Fitbit Inspire 3 Health &-Fitness-Tracker with Stress Manageme…",
        image: "https://m.media-amazon.com/images/I/61gFrSlmofL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte",
    },
    {
        key: 5,
        name: "JBL Tune Flex - True Wireless Noise Cancelling Earbuds (Blac…",
        image: "https://m.media-amazon.com/images/I/61joErBxERL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte",
    },
    {
        key: 6,
        name: "LEVOIT Air Purifiers for Home Large Room Up to 1800 Ft² in…",
        image: "https://m.media-amazon.com/images/I/71sXWcY+hbL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte",
    },
    {
        key: 7,
        name: "LEVOIT Air Purifiers for Home Large Room Bedroom Up to 1…",
        image: "https://m.media-amazon.com/images/I/71DTJ31s80L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte",
    },
    {
        key: 8,
        name: "Samsung Galaxy Tab S9 FE+ Plus 12.4” 128GB Android Tablet, L…",
        image: "https://m.media-amazon.com/images/I/41GcCeBaq5L._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte"
    },
    {
        key: 9,
        name: "Keurig K-Mini Single Serve Coffee Maker, Black",
        image: "https://m.media-amazon.com/images/I/61UTFJux1pL._AC_FMavif_SF452,452_QL58_.jpg?aicid=discounts-widgets-horizonte"
    }
]
export const handelRadio = (listRadio: ListRadio) => {
    const [value, setValue] = useState(1);
    const [found, setFound] = useState(true);
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const pillar = found ? 5 : listRadio.detail.length;
    let positon = 0;
    return (
        <div className="flex flex-col items-start">
            <h3 className="font-[500] mb-3">{listRadio.name}</h3>
            <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                    {listRadio.detail.map((item: RadioItem) => {
                        positon++;
                        if (positon <= pillar) {
                            return (
                                <Radio key={item.key} value={item.value}>{item.defaultValue && (<Rate style={{ color: "#de7921", fontSize: "15px" }} disabled={true} allowHalf defaultValue={item.defaultValue} />)} {item.ders}</Radio>
                            )
                        }

                    })}


                </Space>
            </Radio.Group>
            {pillar <= listRadio.detail.length && listRadio.detail.length > 5 && (
                <button className='font-[500] my-3' onClick={() => {
                    setFound(!found)
                }}>See all {found ? <DownOutlined /> : <UpOutlined />}</button>
            )}
        </div>
    )
}

export const handelProduct = (props: any) => {
    const [products, setProducts] = useState([])
    let userSearch = useSearchParams()
    let keyword = userSearch.get("name") || ''

    useEffect(() => {
        searchProductAPI(keyword).then(result => {

            setProducts(result)
        })
    }, [keyword])

    return products.map((item: any) => {
        return (
            <Col key={item.product_id} lg={{ flex: "20%" }}>
                <Link href={"/product-detail"} >
                    <img src={item.color_image} style={{ width: "95% ", height: "150px" }} alt="..." />
                    <div className="flex items-center my-3">
                        <span className="whitespace-normal  px-1 mr-1 text-white bg-[red]">20% off</span>
                        <span className="whitespace-normal text-[red]">Limited time deal</span>
                    </div>
                    <p>{item.product_name}</p>
                </Link>
            </Col>
        )
    })
}