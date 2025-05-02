
let cartItems = 0; 
let cartTotal = 0; 

// Função para adicionar ao carrinho
function addToCart(price) {
  cartItems++; 
  cartTotal += price; 
  updateCartDisplay(); 
}

// Função para remover do carrinho
function removeFromCart(price) {
  if (cartItems > 0) {
    cartItems--; 
    cartTotal -= price; 
    if (cartTotal < 0) cartTotal = 0; 
    updateCartDisplay(); //
  }
}

// Função para finalizar a compra
function finalizePurchase() {
  if (cartItems === 0) {
    alert("Seu carrinho está vazio!");
  } else {
    alert(`Compra finalizada! Total: R$ ${cartTotal.toFixed(2)}`);
    cartItems = 0; 
    cartTotal = 0; 
    updateCartDisplay(); 
  }
}

// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
  document.getElementById("cart-items").textContent = `Itens no Carrinho: ${cartItems}`;
  document.getElementById("cart-total").textContent = `Valor Total: R$ ${cartTotal.toFixed(2)}`;
}
