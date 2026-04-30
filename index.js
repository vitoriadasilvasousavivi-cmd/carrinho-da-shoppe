import * as cartService from ./services/cart.js*
import createItem from "./service/item.js";

const cart = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Colar", 10.00,1);
const item2 = await createItem("Pulsera", 12.00,2);

await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.display(myCart);
// deleei 2 itens do carrinho
// await cartService.addItem(myCart, item2.name);
// await cartService.addItem(myCart, item2.name);
await cartSevice.calculeTotal(myCart);


