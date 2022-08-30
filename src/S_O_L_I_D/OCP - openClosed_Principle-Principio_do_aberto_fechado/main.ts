/**
 * Open/closed principle
 * Entidades devem estar abertas para extensoes
 * mas fechadas para modificações
 * formas:
 * usar parametros
 * herança
 * composição
 * stract da GoW
 */

import { ShoppingCart } from './classes/shopping-cart'
import { Order } from './classes/order'
import { Messaging } from './services/messagin'
import { Persistency } from './services/persistency'
import { Product } from './classes/product'
import {
  FifityPercentDiscount,
  NoDiscont,
  TenPercentDiscount,
} from './classes/discount'

const fifityPercentDiscount = new FifityPercentDiscount()
const tenPercentDiscount = new TenPercentDiscount()
const noDiscont = new NoDiscont()

const shoppingCart = new ShoppingCart(fifityPercentDiscount)
const messagin = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, messagin, persistency)

shoppingCart.addItem(new Product('maconha', 50.5))
shoppingCart.addItem(new Product('brinquedinho', 70.5))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscont())
order.checkout()
