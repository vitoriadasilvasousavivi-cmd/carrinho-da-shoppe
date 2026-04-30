// Casos de uso dos iens

// criar item com subtotal certo
async function createItem(name, price, quantity ) {
    return {
        name,
        price,
        qualitity,
        subtotal: () => prince * quantity, 
    };
}

export default createItem;

