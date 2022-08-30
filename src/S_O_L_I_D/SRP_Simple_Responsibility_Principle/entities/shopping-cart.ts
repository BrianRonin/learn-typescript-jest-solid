import { CartItem } from './interface/cart-item'

export class ShoppingCart {
  private readonly _items: CartItem[] = []

  addItem(item: CartItem): void {
    this._items.push(item)
  }

  removeItem(index: number): void {
    this._items.splice(index, 1)
  }

  get items(): Readonly<CartItem[]> {
    return this._items
  }

  total(): number {
    return +this._items.reduce((ac, next) => ac + next.price, 0).toFixed(2)
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  clear(): void {
    this._items.length = 0
    console.log('carrinho de compras limpo..')
  }
}
