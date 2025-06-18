import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const productData = [
  {
    name: 'Vợt cầu lông Li Ning Fengying BLADEX 900 (4U)',
    code: 'AYPU047-4',
    price: '5,154,545₫',
    img: '/assets/product_filter.png',
  },
  {
    name: 'Vợt cầu lông Lining Axforce 90 New – Loh Kean Yew 2024',
    code: 'AYPV001-4',
    price: '5,007,273₫',
    img: '/assets/product_filter.png',
  },
  {
    name: 'Vợt cầu lông Li Ning Zhanji Halbertec 4000 -4U',
    code: 'AYPV009-4',
    price: '5,032,364₫',
    img: '/assets/product_filter.png',
  },
  {
    name: 'Set vợt cầu lông Li-Ning Bladex 900 Master',
    code: 'AYPV019-88',
    price: '7,069,091₫',
    img: '/assets/product_filter.png',
  },
];

const Filter = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productData);

  useEffect(() => {
    // Extract search term from URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const searchParam = queryParams.get('search') || '';
    setSearchTerm(searchParam);

    // Filter products based on search term
    if (searchParam) {
      const filtered = productData.filter(product => 
        product.name.toLowerCase().includes(searchParam.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productData);
    }
  }, [location.search]);

  return (
    <>
    <Header />
    <div className="flex gap-4 p-4">
      {/* Sidebar */}
      <div className="w-64 space-y-6 text-sm">
        {/* Giá thành */}
        <div>
          <h2 className="bg-[#D9D9D9] text-center font-semibold border-t mt-4 pb-1 mb-2">GIÁ THÀNH</h2>
          <div className="space-y-1">
            {[
              'Giá dưới 1.000.000đ',
              '1.000.000đ - 2.000.000đ',
              '2.000.000đ - 3.000.000đ',
              '3.000.000đ - 5.000.000đ',
              '5.000.000đ - 10.000.000đ',
              'Giá trên 10.000.000đ'
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <input type="checkbox" className="accent-red-600" defaultChecked={label === '5.000.000đ - 10.000.000đ'} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Thương hiệu */}
        <div>
          <h2 className="bg-[#D9D9D9] text-center font-semibold border-t pb-1 mb-2">THƯƠNG HIỆU</h2>
          <div className="space-y-1">
            {['Lining', 'Yonex', 'Victor', 'Mizuno'].map((brand, i) => (
              <div key={i} className="flex items-center gap-2">
                <input type="checkbox" />
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Màu sắc */}
        <div>
          <h2 className="bg-[#D9D9D9] text-center font-semibold border-t pb-1 mb-2">MÀU SẮC</h2>
          <div className="space-y-1">
            {['Đen', 'Trắng', 'Xanh', 'Hồng', 'Vàng', 'Đỏ', 'Tím', 'Cam'].map((color, i) => (
              <div key={i} className="flex items-center gap-2">
                <input type="checkbox" />
                <span>{color}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product listing */}
      <div className="flex-1">
        {/* Sort dropdown */}
        <div className="flex justify-end items-center mb-4 bg-[#D9D9D9] p-2">
          <span className="text-sm font-semibold mr-4">Sắp xếp</span>
          <select className="bg-[#ffffff] px-2 py-1 text-sm">
            <option>Mặc định</option>
            <option>Giá tăng dần</option>
            <option>Giá giảm dần</option>
          </select>
        </div>

        {/* Search results message */}
        {searchTerm && (
          <div className="mb-4">
            <p className="text-sm">
              {filteredProducts.length > 0 
                ? `Kết quả tìm kiếm cho: "${searchTerm}"`
                : null}
            </p>
          </div>
        )}

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <Link to="/detail" className="grid grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <div key={i} className="text-center text-sm">
                <img src={product.img} alt={product.name} className="mx-auto mb-2" />
                <p>{product.name}</p>
                <p className="text-red-600 font-semibold">{product.price}</p>
              </div>
            ))}
          </Link>
        ) : (
          <div className="flex items-center justify-center h-64 bg-[#CAC6C6]">
            <p className="text-xl font-semibold text-black">
              KHÔNG TÌM THẤY KẾT QUẢ NÀO VỚI TỪ KHÓA "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Filter;