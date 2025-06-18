import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import productImage from "/assets/product.png";
import { Link, useNavigate } from "react-router-dom";

const products = [
  {
    name: "Vợt cầu lông Li Ning Fengying BLADEX 900 (4U) AYPD047-4",
    price: "5,154,545₫",
  },
  {
    name: "Vợt cầu lông Lining Axforce 90 New - Loh Kean Yew 2024 AYPV001-4",
    price: "5,007,273₫",
  },
  {
    name: "Vợt cầu lông Li Ning Zhanji Halbertec 4000 -4U AYPV009-4",
    price: "2,032,364₫",
  },
  {
    name: "Set vợt cầu lông Li-Ning Bladex 900 Master AYPV019-88",
    price: "7,069,091₫",
  },
];

const events = [
  {
    title: "Tiệc Sinh Nhật Tháng 6",
    img: "/assets/event1.png",
    imgSale: "/assets/sale1.png",
  },
  {
    title: "Giải Vô địch Cầu lông trẻ Quốc gia 2025 – Cúp Donex",
    img: "/assets/event2.png",
    imgSale: "/assets/sale1.png",
  },
];
const Home = () => {
  return (
    <div>
      <Header />

      {/* Product Section */}
      <div className="py-10 bg-white text-center">
        <Link to="/detail" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
          {products.map((product, index) => (
            <div key={index} className="text-sm">
              <img
                src={productImage}
                alt={product.name}
                className="w-full h-auto mx-auto mb-3"
              />
              <p className="mb-1">{product.name}</p>
              <p className="text-[#E42E2E] font-semibold">{product.price}</p>
            </div>
          ))}
        </Link>
      </div>

      {/* Sự kiện tháng */}
      <div className="bg-[#D5C729] py-10 px-24">
        {/* Header */}
        <h2 className="text-center text-lg font-medium mb-6 relative">
          <span className="px-24 bg-[#D5C729] relative z-10">
            Sự Kiện Tháng
          </span>
          <div className="absolute top-1/2 left-0 w-full border-t border-black z-0"></div>
        </h2>

        {/* Event List */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-200 flex items-center justify-between rounded shadow relative"
            >
              {/* Image */}
              <img
                src={event.img}
                alt={event.title}
                className="w-44 h-44 object-contain"
              />

              {/* Title */}
              <p className="flex-1 mx-4 text-left font-medium text-base">
                {event.title}
              </p>

              {/* Button */}
              <Link to = "/voucher"
                className="bg-[#3FD6D3] text-black mr-26 px-4 py-2 rounded shadow-md hover:bg-[#1CAAAE]"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                Xem Ngay
              </Link>

              {/* Sale Badge */}
              <img
                src={event.imgSale}
                alt="Sale Badge"
                className="w-16 h-16 absolute top-0 right-0 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
