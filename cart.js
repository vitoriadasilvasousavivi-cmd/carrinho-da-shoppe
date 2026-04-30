// quias ações meu carrinho pode fazer 

//caso de uso
//adicionar itens no carrinho
adicionar item no carrinho
async function addItem(userCart) {
    userCart.push(item);
}

Calcular total
async function calculeTotal(userCart){
    console.log("nShopee Cart TOTAL 15:");

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: $(result)`);
}

deletar item do carrinho
async function deletarItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index1)
}

remover item - diminui um item
async function removeItem(userCart, index){
    
}

export {
    addItem, calcularTotal, deletarItem, removeItem
}


