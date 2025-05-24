let cartCount = 0;
const cartDisplay = document.getElementById('cart-count');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const isAdded = button.classList.toggle('in-cart');

    if (isAdded) {
      cartCount++;
      button.textContent = 'Remove from Cart';
    } else {
      cartCount--;
      button.textContent = 'Add to Cart';
    }

    cartDisplay.textContent = cartCount;
  });
});