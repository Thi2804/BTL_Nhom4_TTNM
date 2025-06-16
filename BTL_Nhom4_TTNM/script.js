document.addEventListener('DOMContentLoaded', function() {
    // Chạy script tương ứng với từng trang
    if (document.querySelector('.product-detail-section')) {
        initializeProductDetailPage();
    }
    if (document.querySelector('.cart-page-section')) {
        initializeCartPage();
    }
    if (document.querySelector('form[action="checkout-payment.html"]')) {
        initializeShippingPage();
    }
    if (document.querySelector('.payment-options')) {
        initializePaymentPage();
    }
    if (document.querySelector('.review-page-container')) {
        initializeReviewPage();
    }
    if (document.querySelector('.detailed-success-box')) {
        initializeSuccessPage();
    }
});

/**
 * Khởi tạo các tương tác cho Trang Chi Tiết Sản Phẩm
 */
function initializeProductDetailPage() {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    if (!mainImage || !thumbnails.length) return;

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const quantityContainer = document.getElementById('quantityContainer');
    if (!quantityContainer) return;
    const quantityInput = quantityContainer.querySelector('#quantity');
    const decreaseBtn = quantityContainer.querySelector('[data-action="decrease"]');
    const increaseBtn = quantityContainer.querySelector('[data-action="increase"]');
    
    decreaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) quantityInput.value = currentValue - 1;
    });
    increaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
}

/**
 * Khởi tạo các tương tác cho Trang Giỏ Hàng
 */
function initializeCartPage() {
    const cartItemsList = document.querySelector('.cart-items-list');
    if (!cartItemsList) return;

    function updateCartTotal() {
        const allItems = cartItemsList.querySelectorAll('.cart-item');
        let total = 0;
        
        allItems.forEach(item => {
            const priceText = item.querySelector('.cart-item-price').textContent || '0';
            const price = parseFloat(priceText.replace(/[^0-9]/g, ''));
            const quantity = parseInt(item.querySelector('.quantity-value').value);
            total += price * quantity;
        });

        const subtotalEl = document.getElementById('cart-subtotal');
        const totalEl = document.getElementById('cart-total');
        if (subtotalEl) subtotalEl.textContent = total.toLocaleString('vi-VN') + '₫';
        if (totalEl) totalEl.textContent = total.toLocaleString('vi-VN') + '₫';
        
        const cartCount = document.querySelector('.cart-count');
        if(cartCount) cartCount.textContent = allItems.length;

        if(allItems.length === 0) {
            cartItemsList.innerHTML = '<p style="text-align: center; padding: 20px 0;">Giỏ hàng của bạn đang trống.</p>';
            const cartSummary = document.querySelector('.cart-summary');
            if (cartSummary) cartSummary.style.display = 'none';
        }
    }

    function updateCartItemSubtotal(cartItem) {
        const priceText = cartItem.querySelector('.cart-item-price').textContent || '0';
        const price = parseFloat(priceText.replace(/[^0-9]/g, ''));
        const quantity = parseInt(cartItem.querySelector('.quantity-value').value);
        const subtotalElement = cartItem.querySelector('.subtotal-price');
        
        subtotalElement.textContent = (price * quantity).toLocaleString('vi-VN') + '₫';
        updateCartTotal();
    }
    
    cartItemsList.addEventListener('click', function(event) {
        const target = event.target;
        const cartItem = target.closest('.cart-item');
        if (!cartItem) return;
        
        if (target.matches('[data-action="increase"], [data-action="decrease"]')) {
            const quantityInput = cartItem.querySelector('.quantity-value');
            let currentValue = parseInt(quantityInput.value);

            if (target.dataset.action === 'increase') {
                quantityInput.value = currentValue + 1;
            } else if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
            updateCartItemSubtotal(cartItem);
        }

        if (target.matches('.remove-item-btn')) {
            cartItem.remove();
            updateCartTotal();
        }
    });

    updateCartTotal(); // Cập nhật tổng tiền khi tải trang
}
/**
 * Khởi tạo Trang Shipping: Lưu thông tin vào localStorage và xử lý chọn địa chỉ
 */
function initializeShippingPage() {
    // KIỂM TRA BƯỚC 1: HÀM CÓ CHẠY KHÔNG?
    console.log("B1: Hàm initializeShippingPage ĐÃ BẮT ĐẦU.");

    const form = document.querySelector('form[action="checkout-payment.html"]');
    if (!form) {
        console.error("LỖI: Không tìm thấy form chính. Hãy kiểm tra lại action của form trong file HTML.");
        return;
    }

    // --- DỮ LIỆU VÀ CÁC BIẾN ---
    const savedAddresses = [
        { name: 'Nguyễn Văn A', email: 'vana@example.com', phone: '012343555', address: 'Số 123, ngõ 475', province: 'Hà Nội', district: 'Thanh Xuân' },
        { name: 'Trần Thị B', email: 'thib@example.com', phone: '012365765', address: 'Số 45, ngõ 5', province: 'Thanh Hoá', district: 'Đại Điền' },
        { name: 'Lê Văn C', email: 'vanc@example.com', phone: '099343445', address: 'Số 67, ngõ 75', province: 'Hà Nội', district: 'Tây Hồ' }
    ];

    const addressSelector = document.getElementById('savedAddressSelector');
    const nameInput = form.querySelector('input[name="fullname"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const addressInput = form.querySelector('input[name="address"]');
    const provinceSelect = form.querySelector('select[name="province"]');
    const districtSelect = form.querySelector('select[name="district"]');

    // KIỂM TRA: Đảm bảo tất cả các element đã được tìm thấy
    if (!addressSelector || !nameInput || !emailInput || !phoneInput || !addressInput || !provinceSelect || !districtSelect) {
        console.error("LỖI: Một hoặc nhiều element của form không được tìm thấy. Hãy kiểm tra lại ID và NAME trong file HTML.");
        return;
    } else {
        console.log("B2: Đã tìm thấy tất cả các element của form thành công.");
    }
    
    // --- CÁC HÀM XỬ LÝ ---
    function selectOptionByText(selectElement, text) {
        for (let i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].text === text) {
                selectElement.selectedIndex = i;
                return;
            }
        }
    }

    function fillForm(data) {
        nameInput.value = data.name;
        emailInput.value = data.email;
        phoneInput.value = data.phone;
        addressInput.value = data.address;
        selectOptionByText(provinceSelect, data.province);
        selectOptionByText(districtSelect, data.district);
        console.log("B4: Đã điền dữ liệu vào form:", data);
    }
    
    // --- GẮN SỰ KIỆN ---
    addressSelector.addEventListener('change', function() {
        // KIỂM TRA BƯỚC 3: SỰ KIỆN 'CHANGE' CÓ HOẠT ĐỘNG KHÔNG?
        console.log("B3: Đã nhận sự kiện 'change' từ dropdown địa chỉ.");
        
        const selectedIndex = parseInt(this.value);
        if (selectedIndex === -1) {
            form.reset();
        } else {
            fillForm(savedAddresses[selectedIndex]);
        }
    });
    
    form.addEventListener('submit', function(e) {
        const shippingInfo = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            address: addressInput.value,
        };
        localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));
    });
}

/**
 * Khởi tạo Trang Payment: Lưu phương thức và điều hướng
 */
function initializePaymentPage() {
    const modal = document.getElementById('voucherModal');
    const openBtn = document.getElementById('openVoucherModalBtn');
    const closeBtn = document.getElementById('closeVoucherModalBtn');
    const applyBtn = document.getElementById('applyVoucherBtn');

    if(modal && openBtn && closeBtn && applyBtn) {
        openBtn.onclick = () => modal.classList.add('active');
        closeBtn.onclick = () => modal.classList.remove('active');
        applyBtn.onclick = () => {
            const selectedVoucher = document.querySelector('input[name="voucher"]:checked');
            if (selectedVoucher) {
                document.getElementById('selectedVoucherText').textContent = selectedVoucher.dataset.text;
            }
            modal.classList.remove('active');
        };
        window.onclick = (event) => { if (event.target == modal) modal.classList.remove('active'); };
    }

    const completeOrderBtn = document.getElementById('completeOrderBtn');
    if (!completeOrderBtn) return;

    completeOrderBtn.addEventListener('click', function() {
        const selectedPaymentMethod = document.querySelector('input[name="payment_method"]:checked');
        const paymentValue = selectedPaymentMethod.parentElement.querySelector('span').textContent;

        localStorage.setItem('paymentMethod', paymentValue);

        if (selectedPaymentMethod.value === 'qr') {
            window.location.href = 'checkout-qr-confirm.html';
        } else {
            window.location.href = 'order-success.html';
        }
    });
}

/**
 * Khởi tạo Trang Đặt Hàng Thành Công: Đọc và hiển thị dữ liệu
 */
function initializeSuccessPage() {
    const savedInfo = JSON.parse(localStorage.getItem('shippingInfo'));
    const savedPayment = localStorage.getItem('paymentMethod');

    if (savedInfo) {
        document.getElementById('customer-name').textContent = savedInfo.name;
        document.getElementById('customer-phone').textContent = savedInfo.phone;
        document.getElementById('customer-address').textContent = savedInfo.address;
    }
    if (savedPayment) {
        document.getElementById('payment-method').textContent = savedPayment;
    }

    // Xóa thông tin sau khi đã hiển thị để tránh bị lộ ở lần mua hàng sau
    localStorage.removeItem('shippingInfo');
    localStorage.removeItem('paymentMethod');
}

/**
 * Khởi tạo các tương tác cho Trang Review
 */
function initializeReviewPage() {
    const stars = document.querySelectorAll('.star-rating span');
    if(!stars.length) return;

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('active');
                stars[i].innerHTML = '★';
            }
            for (let i = index + 1; i < stars.length; i++) {
                stars[i].classList.remove('active');
                stars[i].innerHTML = '☆';
            }
        });
    });
}