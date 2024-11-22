import "../styles/main.css"

import { Carousel } from "antd";

export default function AmazonCarousel() {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "600px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundPosition:"center",
    backgroundSize:"cover",
    width: "100%",
  };
  return (
    <div className="AmazonCarousel h-full">
      <Carousel arrows={false} autoplay dots={false} infinite={true} fade={true}>
        <div className="h-screen">
          <div className="AmazonCarousel__item1" style={contentStyle}></div>
        </div>
        <div className="h-screen">
          <div className="AmazonCarousel__item2" style={contentStyle}></div>
        </div>
        <div className="h-screen">
          <div className="AmazonCarousel__item3" style={contentStyle}></div>
        </div>
        <div className="h-screen">
          <div className="AmazonCarousel__item4" style={contentStyle}></div>
        </div>
        <div className="h-screen">
          <div className="AmazonCarousel__item5" style={contentStyle}></div>
        </div>
      </Carousel>
    </div>
  );
}
