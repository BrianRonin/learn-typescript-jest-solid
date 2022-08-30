import { Messaging } from './services/messagin'
import { Order } from './entities/order'
import { Persistency } from './services/persistency'
import { Product } from './entities/product'
import { ShoppingCart } from './entities/shopping-cart'

const shoppingCart = new ShoppingCart()
const messagin = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, messagin, persistency)

shoppingCart.addItem(new Product('maconha', 50.5))
shoppingCart.addItem(new Product('brinquedinho', 70.5))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
order.checkout()
