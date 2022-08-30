import { OrderStatus } from './interface/order-status'
import { ShoppingCartProtocol } from './interface/shoppingCartProtocol'
import { MessagingProtocol } from './interface/messaging-protocol'
import { PersistencyProtocol } from './interface/persistency-protocol'

export class Order {
  private _orderStatus: OrderStatus = 'open'
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol
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
