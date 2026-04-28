import * as cartService

import createItem from "./service/item.js";

const cart = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Colar", 10.00,1);
const item2 = await createItem("Pulsera", 12.00,2);

console.log(item2.subtotal());


