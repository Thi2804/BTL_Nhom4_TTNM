import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import '@ant-design/v5-patch-for-react-19';
import { message } from "antd";
const images = [
  "/assets/product3.png",
  "/assets/product5.png",
  "/assets/product6.png",
  "/assets/product7.png",
  "/assets/product8.png",
];

const Detail = () => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  
  const handleAddToCart = () => {
    message.success("Sản phẩm đã được thêm thành công");
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto p-4 text-sm text-[#333]">
        {/* Thông tin sản phẩm */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Ảnh sản phẩm */}
          <div className="flex-1">
            <img
              src={mainImage}
              alt="Main product"
              className="w-full max-w-sm mx-auto"
            />
            <div className="flex justify-center mt-4 gap-3">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className={"w-12 h-12 cursor-pointer "}
                  alt={`thumbnail-${idx}`}
                />
              ))}
            </div>
          </div>

          {/* Thông tin chi tiết */}
          <div className="flex-1 space-y-4 text-sm">
            <h2 className="font-semibold text-lg">
              Vợt cầu lông Li Ning Fengying BLADEX 900 (4U)
              <br /> AYPU047-4
            </h2>
            <p className="text-xl font-bold text-[#F41919]">5,154,545₫</p>

            <div className="text-gray-800 space-y-1">
              <div className="flex">
                <span className="inline-block w-48">Mã sản phẩm :</span>
                <strong>AYPU047-4</strong>
              </div>
              <div className="flex">
                <span className="inline-block w-48">
                  Tình trạng (còn /hết ) :
                </span>
                <strong>Còn hàng</strong>
              </div>
              <div className="flex">
                <span className="inline-block w-48">Thương hiệu :</span>
                <strong>Li-Ning</strong>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-48">Số lượng :</span>
                <div className="flex items-center border border-gray-400 rounded">
                  <button 
                    className="w-8 h-8 flex items-center justify-center text-lg"
                    onClick={decreaseQuantity}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-12 text-center border-x border-gray-300 h-8"
                  />
                  <button 
                    className="w-8 h-8 flex items-center justify-center text-lg"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Nút hành động */}
            <div className="flex gap-4 mt-14">
              <button 
                className="bg-[#F41919] text-white border border-[#000000] w-44 py-2 rounded shadow hover:brightness-110"
                onClick={handleAddToCart}
              >
                Thêm vào giỏ hàng
              </button>
              <Link to="/checkout">
                <button className="bg-[#F41919] text-white border border-[#000000] w-44 py-2 rounded shadow hover:brightness-110">
                  MUA NGAY
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mô tả sản phẩm */}
        <div className="mt-8 border  pt-6 text-[14px] leading-relaxed">
          <div className="border-b p-4 mb-4">
            <h3 className="font-bold text-[#FB1414] inline-block pb-1">
              MÔ TẢ
            </h3>
          </div>
          <div className="p-4 space-y-6">
            <div>
              <p>
                <strong>Vợt Cầu Lông Li-Ning Fengying Bladex 900</strong> thiết
                kế với họa tiết các đường vân nổi bật, màu sắc cuốn hút toát lên
                vẻ sang trọng và mạnh mẽ.
              </p>
              <p>
                Đường kính đũa vợt mỏng 6.6mm kết hợp thân vợt với vật liệu
                Fiber M46 + ULTRA High Elastic Carbon Fiber siêu đàn hồi, cung
                cấp cho bạn độ chính xác và ổn định, tăng tốc độ vung vợt cũng
                như sự linh hoạt trong lối đánh, giúp người chơi đỡ tiêu tốn quá
                nhiều thể lực cho cú đánh và tạo ra những pha tấn công siêu mạnh
                mẽ.
              </p>
              <p>
                Khung vợt được thiết kế dạng SHARP WIND nhằm hạn chế lực cản của
                không khí từ đó gia tăng hiệu suất tốc độ vung vợt chuẩn xác
                trong các pha xử lý cầu nhanh trên lưới.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Thông số kỹ thuật</h4>
              <ul className="list-none list-inside space-y-1">
                <li>Khung vợt: CARBON FIBER</li>
                <li>Thân vợt: M46 + ULTRA CARBON</li>
                <li>Trọng lượng đầu vợt: 39.6g</li>
                <li>Trọng lượng: 4U (80g-84g)</li>
                <li>Điểm cân bằng: 290mm +/-2mm</li>
                <li>Swing weight: 87Kg/cm²</li>
                <li>Độ đàn hồi: Trung bình</li>
                <li>Tay cầm: S2 (G5)</li>
                <li>Mức căng dây tối ưu: 31LBS (14,1kg)</li>
                <li>Xuất xứ: Trung Quốc</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                Công nghệ vợt Li-Ning Bladex 900
              </h4>
              <ul className="list-none list-inside space-y-1">
                <li>
                  Công nghệ HDF Sock Absorption System : Hệ thống hấp thụ chấn
                  mật độ cao giúp cải thiện tối đa hiệu suất tăng  cường tốc độ
                  linh hoạt cho tấn công
                </li>
                <li>
                  TB NANO + M46 + SUPERB CARBON: Carbon Thế Hệ Mới kết hợp với
                  vật liệu Nano Siêu Dẫn nâng cao tính linh hoạt của vợt giúp
                  chịu nhiệt và tăng cấp độ cho khung vợt bền chắc.
                </li>
                <li>
                  Công nghệ  Ultra Carbon: Công nghệ trục vợt cầu lông hiện đại
                  được cấp bằng sáng chế, giúp cải thiện tính linh hoạt và nâng
                  cao khả năng kiểm soát và cảm nhận tổng thể của vợt.
                </li>
                <li>
                  SW Head Light : Công nghệ giúp đầu vợt nhẹ tăng kiểm soát tối
                  ưu
                </li>
                <li>
                  SHARP WIND: Thiết kế vát nhằm hạn chế lực cản của gió, từ đó
                  gia tăng tốc độ vung vợt mạnh mẽ và chuẩn xác.
                </li>
                <li>
                  6.8MM HARD-FLEXIBLE SHAFT: Cấu hình mỏng 6.8mm giúp khoảng
                  điểm uốn dài hơn để tăng cường những cú đập chuẩn xác đồng
                  thời trục hướng lực tác dụng về phía trước một cách hiệu quả
                  mà không xoay để tăng cường tác động của mỗi cú đánh.
                </li>
                <li>
                  Công nghệ Accele Tech: Lining sử dụng công nghệ mới Accele
                  Tech trên vật liệu Carbon Fiber để nâng cao hiệu suất ổn định
                  khung vợt để tăng cường độ chính xác hơn cho từng cú đánh
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">
                Hướng dẫn bảo quản
              </h4>
              <ul className="list-none list-inside space-y-1">
                <li>
                  Không để vợt tiếp xúc với nhiệt độ cao hoặc ánh nắng trực tiếp
                </li>
                <li>Hạn chế để vợt ở môi trường ẩm ướt</li>
                <li>Sử dụng bao đựng vợt khi không sử dụng</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;