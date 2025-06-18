import React from "react";
import { Link } from "react-router-dom";  
const Notification = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-left">
          <h1 className="text-2xl font-semibold leading-tight">
            ĐỊA ĐIỂM KINH DOANH - CÔNG TY TNHH QUỐC TẾ TIẾN DŨNG
          </h1>
          <nav className="text-sm text-gray-500 mt-2">
            <span className="text-[#2EA5BF]">Giỏ hàng</span>
            &nbsp;&gt;&nbsp;
            <span>Thông tin giao hàng</span>
            &nbsp;&gt;&nbsp;
            <span className="text-gray-400">Thông tin giao hàng</span>
          </nav>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold">Chi tiết giao dịch</h2>

        {/* Notification Box */}
        <div className="flex justify-center items-center bg-[#E3E3E3] border p-20">
          <div className="bg-white p-16 flex items-center space-x-3 shadow-md rounded">
            <img
              src="/assets/tick.png"
              alt="Success"
              className="w-6 h-6"
            />
            <span className="text-sm text-gray-700 font-medium">
              Bạn đã thanh toán đơn hàng thành công.
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <Link to="/paysucces" className="mt-4 px-6 py-2 bg-[#79A7E4] text-white rounded hover:bg-blue-600">
            Hoàn tất đơn hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notification;
