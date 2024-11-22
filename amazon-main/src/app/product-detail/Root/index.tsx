import { create } from "zustand";


export type ProductItem = {
    key:number;
    color:string;
    image:string;
    price:number;
    name:string
}
const nameProduct = "Fachixy「2024 New」FC200 Gaming Headset for PS4/PS5/PC/Xbox One, Noise Canceling Gaming Headset, Headset with Stereo Microphone Sound with 3.5mm Jack with RGB Light"
export const listProduct:ProductItem[] =[
    {
        key:0,
        color:"BLACK",
        image:"./img/sanpham2.jpg",
        price:22.69,
        name:nameProduct
    },
    {
        key:1,
        color:"BLUE",
        image:"./img/sanpham1.jpg",
        price:22.94,
        name:nameProduct
    },
    {
        key:2,
        color:"GREEN",
        image:"./img/sanpham3.jpg",
        price:26.99,
        name:nameProduct
    },
    {
        key:3,
        color:"RED",
        image:"./img/sanpham4.jpg",
        price:26.99,
        name:nameProduct
    },
    {
        key:4,
        color:"WHITE",
        image:"./img/sanpham5.jpg",
        price:26.99,
        name:nameProduct
    },
    {
        key:5,
        color:"WHITE-BLUE",
        image:"./img/sanpham6.jpg",
        price:26.99,
        name:nameProduct
    },
] 
export type ProductGetLocal ={
    name:string;
    price:number;
    image:string;
    qty:number;
    key:number
  }
type State ={
    listproduct : ProductItem[],
    productDetail:ProductItem,
    listProductToCart:ProductGetLocal|null
    
}
type Action= {
    getProduct:(productDetail:State["productDetail"])=>void
    updateListCart:(listProduct:State["listProductToCart"])=>void
}

export const productPersonStore = create<State &Action>((set)=>({
    listproduct:listProduct,
    productDetail:{
        color:"BLACK",
        image:"./img/sanpham2.jpg",
        price:22.69,
        name:nameProduct,
        key:1
    },
    listProductToCart:null,
    getProduct:(product)=>set(()=>({productDetail:product})),
    updateListCart:(listProductCart)=>set(()=>({listProductToCart:listProductCart}))
}))

