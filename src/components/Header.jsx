import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/filter?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div>
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white">
        {/* Search */}
        <form onSubmit={handleSearch} className="flex items-center border border-gray-300 bg-gray-300 rounded overflow-hidden w-[250px]">
          <input
            type="text"
            placeholder="Tìm Kiếm ..."
            className="px-3 py-2 w-full bg-gray-300 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="bg-white px-3 py-2 flex items-center justify-center">
            <img src="/assets/search.png" alt="search icon" className="w-5 h-5" />
          </button>
        </form>

        {/* Logo */}
        <Link to="/" className="flex items-center justify-center">
          <img src="/assets/logo.png" alt="logo" className="h-10" />
        </Link>

        {/* Hotline & Cart */}
        <div className="flex items-center gap-24">
          {/* Hotline */}
          <div className="flex items-center gap-2">
            <span className="text-black font-medium">Hotline:</span>
            <span className="text-[#26E7E4] font-semibold">0373727222</span>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img src="/assets/cart.png" alt="cart icon" className="w-12 h-8" />
            <span className="absolute -top-0 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              5
            </span>
          </Link>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="bg-[#E42E2E] text-white font-medium">
        <ul className="flex justify-around py-3 text-sm">
          <li className="hover:underline cursor-pointer">Danh Mục Sản Phẩm</li>
          <li className="hover:underline cursor-pointer">Nam</li>
          <li className="hover:underline cursor-pointer">Nữ</li>
          <li className="hover:underline cursor-pointer">Hệ Thống Cửa Hàng</li>
          <Link to="/voucher" className="hover:underline cursor-pointer">Khuyến Mãi</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;