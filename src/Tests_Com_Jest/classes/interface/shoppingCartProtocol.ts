import { CartItem } from './cart-item'

export interface ShoppingCartProtocol {
  get items(): Readonly<CartItem[]>
  addItem(item: CartItem): void
  removeItem(index: number): void
  total(): number
  totalWithDiscont(): number
  isEmpty(): boolean
  clear(): void
}
