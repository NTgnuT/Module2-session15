import React from "react";
import { Carousel } from "antd";

export default function Slide() {
  const contentStyle = {
    height: "calc(100vh - 134px)",
    color: "#fff",
    lineHeight: "100px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <img
              src="https://img3.thuthuatphanmem.vn/uploads/2019/09/16/anh-banner-quang-cao-my-pham-dep_083546254.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src="https://i.imgur.com/WiYsn5a.png" alt="" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src="https://insieutoc.vn/wp-content/uploads/2021/02/mau-banner-quang-cao-khuyen-mai.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src="https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-quang-ba-du-lich_113659269.png"
              alt=""
            />
          </div>
        </div>
      </Carousel>
    </>
  );
}
