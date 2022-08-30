import {
  FifityPercentDiscount,
  NoDiscont,
  TenPercentDiscount,
  Discount,
} from './discount'

const createSut = (className: new () => Discount): Discount => {
  return new className()
}

describe('should have no discount', () => {
  afterEach(() => jest.clearAllMocks()) //limpa o intervalo entre os mocks

  it('should return undefined', () => {
    const sut = createSut(NoDiscont)

    expect(sut.calculate(10.99)).toBeCloseTo(10.99)
  })

  it('should apply 50% discount on price', () => {
    const sut = createSut(FifityPercentDiscount)
    expect(sut.calculate(150.5)).toBeCloseTo(75.25)
  })

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount)
    expect(sut.calculate(10)).toBeCloseTo(9)
  })
})
