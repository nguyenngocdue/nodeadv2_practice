"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export default function CarouselSlick() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handelSliderItems = ()=>{
     const listNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
     return listNumber.map((item:number)=>{
        return (
            <Link href={"/product-detail"} key={item} className="ml-3">
          <img height={100} src={`./img/slick${item}.jpg`} alt={`slick${item}`} />
        </Link>
        )
     })
  }
  return (
    <div className="container mx-auto">
      <div className="slider-container mt-7 CarouselSlick bg-white pt-3">
      <h3 className="font-bold">Best Sellers in Toys & Games</h3>
      <Slider {...settings}>
      {handelSliderItems()}
      </Slider>
    </div>
    </div>
  );
}
