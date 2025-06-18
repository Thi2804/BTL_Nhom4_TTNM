import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Transport = () => {
  const [paymentMethod, setPaymentMethod] = useState('qr');
  const navigate = useNavigate();

  const handleCompleteOrder = () => {
    if (paymentMethod === 'cod') {
      navigate('/paysucces');
    } else {
      navigate('/checkout-online');
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">
            ĐỊA ĐIỂM KINH DOANH - CÔNG TY TNHH QUỐC TẾ TIẾN DŨNG
          </h1>
          <nav className="text-sm text-gray-500 mt-2">
            <span className="text-[#2EA5BF]">Giỏ hàng</span> &gt; Thông tin giao hàng
          </nav>
        </div>

        {/* Phương thức vận chuyển */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Phương thức vận chuyển</h2>
          <label className="flex justify-between items-center border rounded px-4 py-3 cursor-pointer hover:border-blue-500 transition">
            <div className="flex items-center gap-3">
              <input type="radio" checked readOnly className="accent-blue-500" />
              <span className='text-[#878787]'>MIỄN PHÍ VẬN CHUYỂN TRÊN 700K</span>
            </div>
            <span className="text-sm">0₫</span>
          </label>
        </div>

        {/* Phương thức thanh toán */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Phương thức thanh toán</h2>

          {/* COD */}
          <label className={`flex items-center gap-3 border rounded px-4 py-3 cursor-pointer mb-3 ${paymentMethod === 'cod' ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-400'}`}>
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === 'cod'}
              onChange={() => setPaymentMethod('cod')}
              className="accent-blue-500"
            />
            <img src="/assets/cod.png" alt="COD" className="w-6 h-6" />
            <span className='text-[#878787]'>Thanh toán khi giao hàng (COD)</span>
          </label>

          {/* QR Pay */}
          <label className={`flex items-center gap-3 border rounded px-4 py-3 cursor-pointer ${paymentMethod === 'qr' ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-400'}`}>
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === 'qr'}
              onChange={() => setPaymentMethod('qr')}
              className="accent-blue-500"
            />
            <img src="/assets/qrpay.png" alt="QR Pay" className="w-6 h-6" />
            <span className='text-[#878787]'>Chuyển khoản ngân hàng (QR Pay)</span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-between pt-6">
          <Link to="/cart" className="px-6 py-2 bg-[#6899D0] text-white rounded-md hover:bg-blue-600">
            Giỏ hàng
          </Link>
          <button 
            onClick={handleCompleteOrder}
            className="px-6 py-2 bg-[#4796CE] text-white rounded-md hover:bg-blue-600">
            Hoàn tất đơn hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transport;