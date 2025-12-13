
document.addEventListener('DOMContentLoaded', function() {
    const cartSection = document.getElementById('cart-section');
    const checkoutSection = document.getElementById('checkout-section');
    const confirmationSection = document.getElementById('confirmation-section'); 
    const btnGoToCheckout = document.getElementById('btn-goto-checkout');
    const btnGoToCart = document.getElementById('btn-goto-cart');
    const checkoutForm = document.getElementById('checkout-form'); 
    const pageTitle = document.getElementById('pageTitle');

    if (btnGoToCheckout) {
        btnGoToCheckout.addEventListener('click', function() {
            cartSection.classList.add('d-none');
            checkoutSection.classList.remove('d-none');
            confirmationSection.classList.add('d-none');
            pageTitle.textContent = '💳 Información de Pago';
        });
    }

    if (btnGoToCart) {
        btnGoToCart.addEventListener('click', function() {
            checkoutSection.classList.add('d-none');
            cartSection.classList.remove('d-none');
            pageTitle.textContent = '🛍️ Carrito de Compras';
        });
    }

    if (checkoutForm && confirmationSection) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();

            checkoutSection.classList.add('d-none');
            cartSection.classList.add('d-none');
            confirmationSection.classList.remove('d-none');
            pageTitle.textContent = 'Pedido Confirmado';
        });
    }
});