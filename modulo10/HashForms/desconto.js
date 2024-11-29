/* Toggle significa alternar entre dois estados possíveis. 
  É frequentemente usado em interfaces de usuário e programação para representar algo que pode ser "ligado/desligado" ou "ativo/inativo".
*/

function toggleDiscount() {
  const discountBody = document.getElementById('apply-discount-body');
  const icon = document.getElementById('toggle-icon');

  if (
    discountBody.style.display === 'none' || 
    discountBody.style.display === ''
  ) {
    discountBody.style.display = 'block';
    icon.classList.add('bx-chevron-up');
    icon.classList.remove('bx-chevron-down');
  } else {
    discountBody.style.display = 'none';
    icon.classList.add('bx-chevron-down');
    icon.classList.remove('bx-chevron-up');
  }
}

const discountCupons = {
  DESCONTO10: 0.1,
  DESCONTO20: 0.2,
  DESCONTO50: 0.5,
}

function applyDiscount() {
  const discountCode = document.getElementById('discount-code').value.trim().toUpperCase();
  const discountMessageElement = document.getElementById('discount-message');
  const totalPriceElement = document.getElementById('total-price');

  if (discountCupons[discountCode]) {
    const discount = discountCupons[discountCode];
    console.log(discount);
    const originalPrice = 1200;
    const discountedPrice = originalPrice * (1 - discount);

    totalPriceElement.innerText = `Preço Total: R$ ${discountedPrice.toFixed(2)}`;
    localStorage.setItem('applyDiscount', discountCode);

    discountMessageElement.style.color = 'green';
    discountMessageElement.innerText = `Desconto de ${discountCode} foi aplicado!`;

    document.getElementById('discount-code').value = '';
  } else {
    discountMessageElement.innerText = 'Cupom inválido';
    discountMessageElement.style.color = 'red';
  }
}

function checkStorageDiscount() {
  const storedDiscount = localStorage.getItem('discount');
  const discountMessageElement = document.getElementById('discount-message');

  if (storedDiscount) {
    localStorage.removeItem('discount');
  }

  discountMessageElement.innerText = '';
}

window.onload = checkStorageDiscount();