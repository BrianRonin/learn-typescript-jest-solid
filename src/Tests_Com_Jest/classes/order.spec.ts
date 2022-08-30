import { ShoppingCartProtocol } from './interface/shoppingCartProtocol'
import { CartItem } from './interface/cart-item'
import { MessagingProtocol } from './interface/messaging-protocol'
import { PersistencyProtocol } from './interface/persistency-protocol'
import { Order } from './order'

class CartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItem[]> {
    return []
  }
  addItem(item: CartItem): void {}
  removeItem(index: number): void {}
  total(): number {
    return 1
  }
  totalWithDiscont(): number {
    return 1
  }
  isEmpty(): boolean {
    return true
  }
  clear(): void {}
}
class MessagingMock implements MessagingProtocol {
  sendMessage() {}
}
class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void {}
}
const createSUT = () => {
  const messagingMock = new MessagingMock()
  const cartMock = new CartMock()
  const persistencyMock = new PersistencyMock()
  const sut = new Order(cartMock, messagingMock, persistencyMock)
  return { sut, messagingMock, cartMock, persistencyMock }
}

describe('Order', () => {
  it('order status should return open', () => {
    const { sut, cartMock } = createSUT()
    const cartMockSpy = jest
      .spyOn(cartMock, 'isEmpty')
      .mockReturnValueOnce(true)
    sut.checkout()
    expect(cartMockSpy).toHaveBeenCalledTimes(1)
    expect(sut.orderStatus).toBe('open')
  })
  it('order status should return closed', () => {
    const { sut, cartMock } = createSUT()
    const cartMockSpy = jest
      .spyOn(cartMock, 'isEmpty')
      .mockReturnValueOnce(false)
    sut.checkout()
    expect(cartMockSpy).toHaveBeenCalledTimes(1)
    expect(sut.orderStatus).toBe('closed')
  })
  it('order must call messaging', () => {
    const { sut, messagingMock, cartMock } = createSUT()
    jest.spyOn(cartMock, 'isEmpty').mockReturnValueOnce(false)
    const messagingSpy = jest.spyOn(messagingMock, 'sendMessage')
    sut.checkout()
    expect(messagingSpy).toHaveBeenCalledTimes(1)
  })
  it('order must call persistency', () => {
    const { sut, persistencyMock, cartMock } = createSUT()
    jest.spyOn(cartMock, 'isEmpty').mockReturnValueOnce(false)
    const persistencySpy = jest.spyOn(persistencyMock, 'saveOrder')
    sut.checkout()
    expect(persistencySpy).toHaveBeenCalledTimes(1)
  })
  it('order must call clear', () => {
    const { sut, cartMock } = createSUT()
    jest.spyOn(cartMock, 'isEmpty').mockReturnValueOnce(false)
    const persistencySpy = jest.spyOn(cartMock, 'clear')
    sut.checkout()
    expect(persistencySpy).toHaveBeenCalledTimes(1)
  })
})
