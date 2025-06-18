import React from "react";
import { Link } from "react-router-dom";
const QRPayment = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-left">
          <h1 className="text-2xl font-semibold">
            ĐỊA ĐIỂM KINH DOANH - CÔNG TY TNHH QUỐC TẾ TIẾN DŨNG
          </h1>
          <nav className="text-sm text-gray-500 mt-2">
            <span className="text-[#2EA5BF]">Giỏ hàng</span> &gt; Thông tin giao
            hàng
          </nav>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold">Chi tiết giao dịch</h2>
        <div className="text-center">
          <p className="text-sm text-gray-700">
            Quét mã QR dưới đây bằng ứng dụng Internet Banking để thanh toán
          </p>

          {/* QR Image */}
          <div className="flex justify-center">
            <img
              src="/assets/qr.png"
              alt="QR Code"
              className="w-64 h-64 object-contain "
            />
          </div>

          {/* Note */}
          <div className="text-xs text-gray-600">
            <p>Lưu ý: Mã QR này sẽ hết hạn sau 24 giờ kể từ lúc tạo</p>
            <p>Số hoá đơn: 16747638732397261399</p>
            <p>Sau khi thanh toán, nhấp vào nút bên dưới</p>
          </div>

          {/* Confirmation Button */}
          <Link to="/notification">
          <button className="mt-4 px-6 py-2 bg-[#79A7E4] text-white rounded hover:bg-blue-600">
            Tôi đã hoàn tất thanh toán trên App
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QRPayment;
