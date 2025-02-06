// Carrinho Original
const cart = [
  { id: 1, name: "Item 1", quantity: 1 },
  { id: 2, name: "Item 2", quantity: 2 }
];

// Função para adicionar um novo item ao carrinho
const addItem = (cart, newItem) => [ ...cart, { ...newItem, quantity: 1 }];

// Função para remover um item do carrinho
const removeItem = (cart, itemId) => cart.filter(item => item.id !== itemId); // Remoção desse item

// Função Atualizar a quantidade de um item 
const updateQuantity = (cart, itemId, quantity) => {
  return cart.map(item => item.id === itemId ? { ...item, quantity } : item); // quantity: quantity (valor do argumento)
}

// Adicionar um novo item
const updateCartAdd = addItem(cart, { id: 3, name: "Item 3" });

// Removendo o item de ID 1
const updateCartRemove = removeItem(updateCartAdd, 1);

// Atualizar a quantidade do item de ID 2 para 3 e 1
const updateCartQuantity = updateQuantity(updateCartRemove, 2, 1); // 3

// Adicionar novo item
const update2 = addItem(updateCartQuantity, { id: 1, name: "Item 1" });

console.log("Carrinho após adição:", updateCartAdd);
console.log("Carrinho após remoção:", updateCartRemove);
console.log("Carrinho atualizado quantidade:", updateCartQuantity);
console.log("Comprar item 1:", update2);
console.log("Original:", cart);