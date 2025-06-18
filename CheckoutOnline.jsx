import React from "react";
import { Link } from "react-router-dom";
const CheckoutOnline = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">
            ĐỊA ĐIỂM KINH DOANH - CÔNG TY TNHH QUỐC TẾ TIẾN DŨNG
          </h1>
          <nav className="text-sm text-gray-500 mt-2">
            <span className="text-[#2EA5BF]">Giỏ hàng</span> &gt; Thông tin giao
            hàng &gt; Thông tin giao hàng
          </nav>
        </div>

        <h2 className="text-lg font-semibold">Chi tiết giao dịch</h2>

        {/* Transaction Table */}
        <div className="border border-[#A9A9A9] w-full bg-[#D9D9D9]">
          <div className="flex items-center border-b border-[#A9A9A9] text-sm">
            <div className="font-medium p-2 min-w-[180px]">
              Sản phẩm được chọn:
            </div>
            <div className="flex items-center gap-4 p-2 flex-wrap">
              <img
                src="/assets/product4.png"
                alt="Product"
                className="w-10 h-10 object-cover rounded"
              />
              <p>Vợt Cầu Lông Li-Ning Axforce 70 (5U) AYPT277-5</p>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-[#A9A9A9] text-sm">
            <div className="col-span-1 p-2 font-medium">Giá:</div>
            <div className="col-span-2 p-2 text-right">2,955,273₫</div>
          </div>

          <div className="grid grid-cols-3 border-b border-[#A9A9A9] text-sm items-center">
            <div className="col-span-1 p-2 font-medium">Mã giảm giá:</div>
            <div className="col-span-2 p-2 flex items-center">
              <Link to = "/wishlist2" className="bg-[#809FEE] text-black px-7 py-1 rounded-lg text-sm ml-auto border-b border-[#A9A9A9]">
                Tìm kiếm
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 text-sm items-center">
            <div className="col-span-1 p-2 font-medium">
              Phương thức thanh toán:
            </div>
            <div className="col-span-2 p-2 flex">
              <p className="bg-white ml-auto text-sm px-6"> QR Pay</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-4">
          <Link to="/cart" className="bg-[#5999E2] hover:bg-blue-600 text-white px-6 py-2 rounded">
            Giỏ hàng
          </Link>
          <Link to="/qrpay" className="bg-[#5999E2] hover:bg-blue-600 text-white px-6 py-2 rounded">
            Xác nhận thanh toán
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOnline;
