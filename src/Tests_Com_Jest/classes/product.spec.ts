import { Product } from './product'

const createSut = (name: string, price: number) => {
  return new Product(name, price)
}

describe('Product', () => {
  afterEach(() => jest.clearAllMocks()) //limpa o intervalo entre os mocks
  it('should return undefined', () => {
    const sut = createSut('camisinha', 70)
    expect(sut).toHaveProperty('name', 'camisinha')
    expect(sut).toHaveProperty('price', 70)
  })
})
