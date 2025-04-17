// Mobile menu toggle
const mobileMenuToggle = () => {
  const menuButton = document.querySelector('.header__menu-button');
  const nav = document.querySelector('.header__nav');
  
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      nav.classList.toggle('header__nav--active');
    });
  }
};

// Initialize cart count
const updateCartCount = () => {
  const cartCount = document.querySelector('.cart-count-bubble');
  if (cartCount) {
    // This would be updated via Shopify's cart API in a real implementation
    console.log('Cart count would be updated here');
  }
};

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
  mobileMenuToggle();
  updateCartCount();
}); 