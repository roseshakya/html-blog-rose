const showButtons = document.querySelectorAll('.show-button');

showButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.getAttribute('data-product');
    window.open(`product${productId}.html`, '_blank');
  });
});