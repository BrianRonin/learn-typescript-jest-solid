import { Persistency } from './persistency'
describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()) //limpa o intervalo entre os mocks

  it('should return undefined', () => {
    //sut = system under test || cut = class under test || obt.. etc
    const sut = new Persistency()
    expect(sut.saveOrder()).toBeUndefined()
    // deve retornar undefined o metodo save order da instancia da classe
  })

  it('should call console.log once', () => {
    const sut = new Persistency()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.saveOrder()
    expect(consoleSpy).toHaveBeenCalledTimes(1) //deve ser chamado uma vez
  })

  it('should call console.log once whit "pedido salvo..."', () => {
    const sut = new Persistency()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.saveOrder()
    expect(consoleSpy).toHaveBeenCalledWith('pedido salvo...') //deve ser chamado uma vez
  })
})
