import { OrderStatus } from './interface/order-status'
import { Messaging } from '../services/messagin'
import { Persistency } from '../services/persistency'
import { ShoppingCart } from './shopping-cart'

export class Order {
  private _orderStatus: OrderStatus = 'open'
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('carrinho vazio')
      return
    }

    this._orderStatus = 'closed'
    this.messaging.sendMessage(
      `seu pedido com ${this.cart.total()} foi processado`
    )
    this.persistency.saveOrder()
    this.cart.clear()
  }
}
