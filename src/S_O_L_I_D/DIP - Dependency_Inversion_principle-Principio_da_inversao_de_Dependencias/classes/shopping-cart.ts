import { Discount } from './discount'
import { CartItem } from './interface/cart-item'
import { ShoppingCartProtocol } from './interface/shoppingCartProtocol'

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = []
  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item)
  }

  removeItem(index: number): void {
    this._items.splice(index, 1)
  }

  items(): Readonly<CartItem[]> {
    return this._items
  }

  total(): number {
    return +this._items.reduce((ac, next) => ac + next.price, 0).toFixed(2)
  }

  totalWithDiscont(): number {
    return this.discount.calculate(this.total())
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  clear(): void {
    this._items.length = 0
    console.log('carrinho de compras limpo..')
  }
}
