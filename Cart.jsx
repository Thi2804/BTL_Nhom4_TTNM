import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '@ant-design/v5-patch-for-react-19';
import { message } from "antd";
const Cart = () => {
  const navigate = useNavigate();
    const handleAddToCart = () => {
    message.success("Sản phẩm đã được xóa thành công");
  };
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Vợt cầu lông Li Ning Fengying BLADEX 900 U) AYPU047-4",
      image: "/assets/product2.png",
      price: 5154545,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 md:px-16 lg:px-60 mt-10 mb-36">
        <h1 className="text-2xl font-bold mb-6">Giỏ hàng</h1>

        {cartItems.length > 0 ? (
          <>
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
              <table className="min-w-full table-auto text-sm text-center">
                <thead className="bg-[#FAFAFA]">
                  <tr className="text-gray-600 font-medium">
                    <th className="p-4 whitespace-nowrap">Ảnh sản phẩm</th>
                    <th className="p-4">Thông tin</th>
                    <th className="p-4">Đơn giá</th>
                    <th className="p-4">Số lượng</th>
                    <th className="p-4">Thành tiền</th>
                    <th className="p-4">Xoá</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-t border-gray-200 text-center align-middle"
                    >
                      <td className="p-4 w-[120px]">
                        <div className="flex justify-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-20 object-contain"
                          />
                        </div>
                      </td>
                      <td className="p-4 align-middle">{item.name}</td>
                      <td className="p-4 text-[#FF0004] font-semibold align-middle">
                        {item.price.toLocaleString()}đ
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex justify-center items-center border border-gray-300 rounded overflow-hidden w-fit mx-auto">
                          <button
                            className="px-2"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            -
                          </button>
                          <span className="px-3 py-1 min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="px-2"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-4 text-[#FF0004] font-semibold align-middle">
                        {(item.price * item.quantity).toLocaleString()}đ
                      </td>
                      <td className="p-4 text-center align-middle">
                        <button onClick={() => removeItem(item.id)}>
                          <img
                            src="/assets/delete.png"
                            alt="delete"
                            className="w-5 h-5 mx-auto" onClick={handleAddToCart}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total and Actions */}
            <div className="mt-4 px-4 py-4 flex justify-end">
              <div className="flex flex-col items-center gap-3">
                <p className="text-sm font-semibold text-center">
                  Tổng tiền:{" "}
                  <span className="text-[#FF0004] font-bold">
                    {getTotal().toLocaleString()}đ
                  </span>
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => navigate("/")}
                    className="px-4 py-2 bg-[#938D8D] text-white rounded hover:bg-gray-500"
                  >
                    Tiếp tục mua hàng
                  </button>
                  <button
                    onClick={() => navigate("/checkout")}
                    className="px-4 py-2 bg-[#EB6060] text-white rounded hover:bg-[#E42E2E]"
                  >
                    Tiến hành đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg py-10 px-6">
            <p className="text-gray-700 text-sm">
              Không có sản phẩm nào trong giỏ hàng. Quay lại cửa hàng để tiếp
              tục mua sắm.
            </p>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => navigate("/")}
                className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500"
              >
                Quay lại
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
