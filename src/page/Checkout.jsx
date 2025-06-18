import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "Thi Nguyễn",
    phone: "012343555",
    address: "Ngõ 745",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [voucherApplied, setVoucherApplied] = useState(false);
  const [voucherText, setVoucherText] = useState("");

  const validateName = (name) => {
    const regex = /^[a-zA-Z0-9]{1,15}$/;
    if (!regex.test(name)) {
      return "Họ và tên khách hàng không hợp lệ (độ dài từ 1 - 15 ký tự, không chứa ký tự đặc biệt và khoảng trắng)";
    }
    return "";
  };

  const validatePhone = (phone) => {
    const regex = /^[a-zA-Z0-9]{8,15}$/;
    if (!regex.test(phone)) {
      return "Số điện thoại không hợp lệ (độ dài từ 8 - 15 ký tự, không chứa ký tự đặc biệt và khoảng trắng)";
    }
    return "";
  };

  const validateAddress = (address) => {
    const regex = /^[a-zA-Z0-9]{1,36}$/;
    if (!regex.test(address)) {
      return "Địa chỉ người nhận không hợp lệ (độ dài từ 1 - 36 ký tự, không chứa ký tự đặc biệt và khoảng trắng)";
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate on change
    let errorMessage = "";
    if (name === "name") {
      errorMessage = validateName(value);
    } else if (name === "phone") {
      errorMessage = validatePhone(value);
    } else if (name === "address") {
      errorMessage = validateAddress(value);
    }

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const applyVoucher = (text) => {
    setVoucherApplied(true);
    setVoucherText(text);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 bg-white shadow-md rounded-lg">
        {/* Left: Shipping Info */}
        <div className="lg:col-span-2 relative p-6">
          <h2 className="text-xl font-semibold mb-2">
            ĐỊA ĐIỂM KINH DOANH - CÔNG TY TNHH QUỐC TẾ TIẾN DŨNG
          </h2>
          <nav className="text-sm text-gray-500 mb-4">
            <span className="text-[#2EA5BF]">Giỏ hàng</span> {">"} Thông tin
            giao hàng
          </nav>

          {/* User Info */}
          <div className="p-4 rounded-md mb-4 flex items-center">
            <img
              src="/assets/avt.png"
              alt="user"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-medium">Thi Nguyễn (anhthi@gmail.com)</p>
              <button className="text-[#2EA5BF] text-sm">Đăng xuất</button>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="space-y-4">
            {/* Thêm địa chỉ (combo box) */}
            <div className="relative">
              <select className="w-full pt-6 pl-2 border rounded bg-[#EEEEEE] text-black hover:bg-[#ADABAB]">
                <option>Chọn địa chỉ</option>
                <option>Ngõ 745</option>
                <option>Ngõ 29 Láng Hạ</option>
                <option>29 Phạm Hùng</option>
              </select>
              <label className="absolute left-2 top-1 text-gray-500 text-sm pointer-events-none">
                Thêm địa chỉ mới...
              </label>
            </div>

            {/* Họ và tên */}
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pt-6 pl-2 border rounded placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <label className="absolute left-2 top-1 text-gray-500 text-sm pointer-events-none">
                Họ và tên
              </label>
              {errors.name && (
                <p className="text-[#EF1414] text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* SĐT */}
            <div className="relative">
              <input
                type="text"
                name="phone"
                placeholder=" "
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pt-6 pl-2 border rounded placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <label className="absolute left-2 top-1 text-gray-500 text-sm pointer-events-none">
                Số điện thoại
              </label>
              {errors.phone && (
                <p className="text-[#EF1414] text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Địa chỉ nhập tay (tuỳ chọn) */}
            <div className="relative">
              <input
                type="text"
                name="address"
                placeholder=" "
                value={formData.address}
                onChange={handleInputChange}
                className="w-full pt-6 pl-2 border rounded placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <label className="absolute left-2 top-1 text-gray-500 text-sm pointer-events-none">
                Địa chỉ
              </label>
              {errors.address && (
                <p className="text-[#EF1414] text-xs mt-1">{errors.address}</p>
              )}
            </div>

            {/* Tỉnh và Quận */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <select className="w-full pt-6 pl-2 border rounded bg-[#EEEEEE] text-black hover:bg-[#ADABAB]">
                  <option>Hà Nội</option>
                  <option>Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                </select>
                <label className="absolute left-2 top-1 text-gray-500 text-sm pointer-events-none">
                  Tỉnh / thành
                </label>
              </div>
              <div className="relative">
                <select className="w-full pt-6 pl-2 border rounded bg-[#EEEEEE] text-black hover:bg-[#ADABAB]">
                  <option>Đống Đa</option>
                  <option>Ba Đình</option>
                  <option>Nam Từ Liêm</option>
                </select>
                <label className="absolute left-2 top-1 text-gray-500 text-sm pointer-events-none">
                  Quận / huyện
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-2">
              <Link
                to="/cart"
                className="px-4 py-2 bg-[#69A7D4] text-white rounded"
              >
                Giỏ hàng
              </Link>
              <Link
                to="/transport"
                className="px-4 py-2 bg-[#4796CE] text-white rounded"
              >
                Tiếp tục đến phương thức thanh toán
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-[#EFEEEE] px-6">
          <div className="flex items-center space-x-4 my-4">
            <img
              src="/assets/product4.png"
              alt="product"
              className="w-10 h-10 object-cover rounded"
            />
            <div className="flex-1">
              <p className="text-sm font-medium leading-snug line-clamp-2">
                [NEW] Vợt Cầu Lông Li-Ning Axforce 70 (5U) AYPJ277-5
              </p>
            </div>
            <p className="text-sm text-nowrap text-right min-w-fit">
              2,955,273₫
            </p>
          </div>

          {/* Mã giảm giá */}
          <div className="flex items-center gap-2 mb-4 border-t pt-4 border-[#cccccc]">
            <div className="flex items-center border border-[#cccccc] rounded-lg px-2 flex-1 relative">
              <img
                src="/assets/voucher_icon.png"
                alt="voucher"
                className="w-5 h-5 mr-2"
              />
              <input
                type="text"
                placeholder="Mã giảm giá"
                className="flex-1 p-2 outline-none bg-transparent"
              />
              {voucherApplied && (
                <span className="absolute right-2 text-[#FFE419] bg-[#EE6767] rounded-lg font-semibold">
                  {" "}
                  Khuyến mãi {voucherText}
                </span>
              )}
            </div>
            <Link
              to="/wishlist"
              className="px-3 py-2 bg-[#4B95CA] text-white rounded-md text-md"
            >
              Tìm kiếm
            </Link>
          </div>

          {/* Tổng kết */}
          <div className="text-sm space-y-1 mb-4 border-t pt-4 border-[#cccccc]">
            <div className="flex justify-between">
              <span>Tạm tính</span>
              <span>2,955,273₫</span>
            </div>
            <div className="flex justify-between">
              <span>Phí vận chuyển</span>
              <span>—</span>
            </div>
            {voucherApplied && (
              <div className="flex justify-between text-red-500">
                <span>Giảm giá ({voucherText})</span>
                <span>
                  -
                  {voucherText === "50%"
                    ? "1,477,636"
                    : voucherText === "20%"
                    ? "591,054"
                    : voucherText === "15%"
                    ? "443,291"
                    : "0"}
                  ₫
                </span>
              </div>
            )}
          </div>

          <div className="flex justify-between text-lg font-bold border-t pt-4 border-[#cccccc]">
            <span>Tổng cộng</span>
            <span>
              {voucherApplied && voucherText === "50%"
                ? "1,477,637"
                : voucherApplied && voucherText === "20%"
                ? "2,364,219"
                : voucherApplied && voucherText === "15%"
                ? "2,511,982"
                : "2,955,273"}
              ₫
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
