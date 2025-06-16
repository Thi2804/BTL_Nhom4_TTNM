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
        const allSubtotals = document.querySelectorAll('.subtotal-price');
        let total = 0;
        allSubtotals.forEach(el => {
            const priceText = el.textContent || '0';
            total += parseFloat(priceText.replace(/[^0-9]/g, ''));
        });

        const subtotalEl = document.getElementById('cart-subtotal');
        const totalEl = document.getElementById('cart-total');
        if (subtotalEl) subtotalEl.textContent = total.toLocaleString('vi-VN') + '₫';
        if (totalEl) totalEl.textContent = total.toLocaleString('vi-VN') + '₫';
        
        const cartCount = document.querySelector('.cart-count');
        if(cartCount) cartCount.textContent = allSubtotals.length;

        if(allSubtotals.length === 0) {
            cartItemsList.innerHTML = '<p style="text-align: center; padding: 20px 0;">Giỏ hàng của bạn đang trống.</p>';
            const cartSummary = document.querySelector('.cart-summary');
            if (cartSummary) cartSummary.style.display = 'none';
        }
    }

    function updateCartItemSubtotal(quantityInputContainer) {
        const price = parseFloat(quantityInputContainer.dataset.price);
        const quantity = parseInt(quantityInputContainer.querySelector('.quantity-value').value);
        const subtotalElement = quantityInputContainer.closest('.cart-item').querySelector('.subtotal-price');
        
        subtotalElement.textContent = (price * quantity).toLocaleString('vi-VN') + '₫';
        updateCartTotal();
    }
    
    cartItemsList.addEventListener('click', function(event) {
        const target = event.target;
        
        if (target.matches('[data-action="increase"], [data-action="decrease"]')) {
            const quantityInputContainer = target.closest('.quantity-input');
            const quantityInput = quantityInputContainer.querySelector('.quantity-value');
            let currentValue = parseInt(quantityInput.value);

            if (target.dataset.action === 'increase') {
                quantityInput.value = currentValue + 1;
            } else if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
            updateCartItemSubtotal(quantityInputContainer);
        }

        if (target.matches('.remove-item-btn')) {
            const cartItem = target.closest('.cart-item');
            cartItem.remove();
            updateCartTotal();
        }
    });

    updateCartTotal();
}

/**
 * Khởi tạo Trang Shipping: Lưu thông tin vào localStorage
 */
function initializeShippingPage() {
    const form = document.querySelector('form[action="checkout-payment.html"]');
    if (!form) return;

    const savedInfo = JSON.parse(localStorage.getItem('shippingInfo'));
    if (savedInfo) {
        form.querySelector('input[name="fullname"]').value = savedInfo.name || '';
        form.querySelector('input[name="email"]').value = savedInfo.email || '';
        form.querySelector('input[name="phone"]').value = savedInfo.phone || '';
        form.querySelector('input[name="address"]').value = savedInfo.address || '';
    }

    form.addEventListener('submit', function(e) {
        const shippingInfo = {
            name: form.querySelector('input[name="fullname"]').value,
            email: form.querySelector('input[name="email"]').value,
            phone: form.querySelector('input[name="phone"]').value,
            address: form.querySelector('input[name="address"]').value,
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