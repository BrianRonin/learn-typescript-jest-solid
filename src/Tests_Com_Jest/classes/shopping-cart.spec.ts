import { Discount } from './discount'
import { CartItem } from './interface/cart-item'
import { ShoppingCart } from './shopping-cart'

const createSut = (discount: number = 0) => {
  const discountMock = createDiscountMock()
  const sut = new ShoppingCart(discountMock)
  return { sut, discountMock }
}

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock()
}

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price)
}

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut()
  const cartItem1 = createCartItem('camisinha', 70)
  const cartItem2 = createCartItem('chapeu', 40)
  sut.addItem(cartItem1)
  sut.addItem(cartItem2)
  return { sut, discountMock }
}

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut()
    expect(sut.isEmpty()).toBe(true)
  })
  it('should have 2 cart items and whith discont', () => {
    const { sut, discountMock } = createSutWithProducts()
    expect(sut.total()).toBe(110)
  })
  it('should add products and clear cart', () => {
    const { sut, discountMock } = createSutWithProducts()
    expect(sut.total()).toBe(110)
    sut.clear()
    expect(sut.items.length).toBe(0)
    expect(sut.isEmpty()).toBe(true)
  })
  it('should remove produts', () => {
    const { sut, discountMock } = createSutWithProducts()
    expect(sut.total()).toBe(110)
    sut.removeItem(1)
    expect(sut.items.length).toBe(1)
    expect(sut.isEmpty()).toBe(false)
  })
  it('should call discount.calculate once when totalWhitDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts()
    const discountMockSpy = jest.spyOn(discountMock, 'calculate')
    //sut.totalWithDiscont
    discountMock.calculate(40)
    expect(discountMockSpy).toHaveBeenCalledTimes(1)
  })
  it('should call discount.calculate(price) and the discount should be applied', () => {
    const { sut, discountMock } = createSutWithProducts()
    const discountMockSpy = jest.spyOn(discountMock, 'calculate')
    //sut.totalWithDiscont
    expect(discountMock.calculate(40)).toBe(40)
  })
})
