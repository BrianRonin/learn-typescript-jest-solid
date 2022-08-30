type CartItem = { name: string; price: number }
type OrderStatus = 'open' | 'closed'

export class ShoppingCartLegacy {
  private readonly _items: { name: string; price: number }[] = []
  private _orderStatus: OrderStatus = 'open'

  addItem(item: CartItem): void {
    this._items.push(item)
  }

  removeItem(index: number): void {
    this._items.splice(index, 1)
  }

  get items(): Readonly<CartItem[]> {
    return this._items
  }
  get orderStatus(): OrderStatus {
    return this._orderStatus
  }

  total(): number {
    return +this._items.reduce((ac, next) => ac + next.price, 0).toFixed(2)
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('carrinho vazio')
      return
    }

    this._orderStatus = 'closed'
    this.sendMessage(`seu pedido com ${this.total()} foi processado`)
    this.saveOrder()
    this.clear()
  }
  isEmpty(): boolean {
    return this._items.length === 0
  }

  sendMessage(msg: string): void {
    console.log('mensagem enviada:', msg)
  }

  saveOrder(): void {
    console.log('pedido salvo...')
  }

  clear(): void {
    this._items.length = 0
    console.log('carrinho de compras limpo..')
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy()
shoppingCartLegacy.addItem({ name: 'maconha', price: 50.5 })
shoppingCartLegacy.addItem({ name: 'brinquedinho', price: 70.5 })

console.log(shoppingCartLegacy.items)
console.log(shoppingCartLegacy.total())
shoppingCartLegacy.checkout()
console.log(shoppingCartLegacy.orderStatus)
