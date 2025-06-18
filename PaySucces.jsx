import React from "react";
import { Link } from "react-router-dom";
const PaySucces = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">
            ĐỊA ĐIỂM KINH DOANH - CÔNG TY TNHH QUỐC TẾ TIẾN DŨNG
          </h1>
        </div>

        {/* Success Message */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mt-4">
            Đặt hàng thành công
          </h2>
          <p className="text-sm text-gray-600">Mã đơn hàng #000000</p>
          <p className="text-sm text-gray-600 mt-1">Cảm ơn bạn đã mua hàng!</p>
        </div>

        {/* Order Info */}
        <div className="border border-[#BCBCBC] rounded p-4 text-sm space-y-2">
          <h3 className="font-semibold">Thông tin đơn hàng</h3>

          <div>
            <p className="font-medium">Thông tin giao hàng</p>
            <p>Thi Nguyễn</p>
            <p>0911507596</p>
            <p>đại diện</p>
            <p>Thành phố Thanh Hoá</p>
            <p>Thanh Hoá</p>
            <p>Vietnam</p>
          </div>

          <div>
            <p className="font-medium mt-2">Phương thức thanh toán</p>
            <p>Chuyển khoản qua ngân hàng</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4">
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <img src="/assets/sp.png" alt="?" className="w-4 h-4" />
            Cần hỗ trợ?{" "}
            <a href="#" className="text-[#1F8AA8] underline ml-1">
              Liên hệ chúng tôi
            </a>
          </p>

          <Link to="/" className="px-6 py-2 bg-[#4796CE] text-white rounded hover:bg-blue-600">
            Tiếp tục mua hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaySucces;
