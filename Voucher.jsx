import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Voucher = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen mx-auto mt-10 text-center">
        <h2 className="uppercase text-lg font-bold text-black mb-4 whitespace-nowrap">
          Siêu khuyến mãi chào mừng sinh nhật Badmintonking
        </h2>

        <img
          src="/assets/voucher.png"
          alt="Voucher khuyến mãi"
          className="mx-auto mt-6 rounded-lg w-full max-w-md"
        />

        <div className="mt-6 text-left text-sm leading-relaxed text-black">
          <p className="font-semibold uppercase">
            Ưu đãi 30 - 50% hàng ngàn sản phẩm vợt
          </p>
          <p>
            Shop gửi tặng người yêu cầu lông ưu đãi hấp dẫn, tiếp lửa cho không
            khí sôi động chào mừng ngày sinh nhật Badmintonking.
          </p>
          <ul className="list-none list-inside mt-2">
            <li>
              - Giảm 30% khi mua khung vợt cầu lông trị giá từ 2.000.000đ trở lên
            </li>
          </ul>
          <p className="mt-2 font-medium">
            Chốt đơn ngay và sẵn sàng cùng Badmintonking chào đón tháng 6 tuyệt
            vời này!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Voucher;
