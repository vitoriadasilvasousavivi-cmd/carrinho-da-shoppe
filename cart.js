// quias ações meu carrinho pode fazer 

//caso de uso
//adicionar itens no carrinho
adicionar item no carrinho
async function addItem(userCart) {
    userCart.push(item);
}

calcular total
async function calculateTotal(userCart){
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

deletar item do carrinho
async function deletarItem(userCart, name){
    
}

remover item - diminui um item
async function removeItem(userCart, index){
    
}

export {
    addItem, calcularTotal, deletarItem, removeItem
}


