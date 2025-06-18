import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        {/* Chính Sách */}
        <div>
          <h3 className="font-semibold mb-2">CHÍNH SÁCH ĐIỀU KHOẢN</h3>
          <p className="leading-relaxed">Chính sách đổi/trả hàng</p>
          <p className="leading-relaxed">Cam kết sản phẩm chính hãng 100%</p>
        </div>

        {/* Quy Định */}
        <div className='flex flex-col iteam-center'>
          <h3 className="font-semibold mb-2">QUY ĐỊNH</h3>
          <p className="leading-relaxed">
            Không sử dụng thông tin sai lệch để đặt hàng hoặc đánh giá sản phẩm.
          </p>
        </div>

        {/* Theo Dõi */}
            <div className="flex flex-col items-end text-center">
                <h3 className="font-semibold mb-2 ">THEO DÕI TRÊN</h3>
                <div className="flex space-x-4">
                    <img src="/assets/fb.png" alt="Facebook" className="w-10 h-10 rounded" />
                    <img src="/assets/tiktok.png" alt="TikTok" className="w-10 h-10 rounded" />
                </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
