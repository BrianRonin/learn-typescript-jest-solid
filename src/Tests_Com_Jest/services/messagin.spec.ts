import { Messaging } from './messagin'

const createSut = () => {
  return new Messaging()
}

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()) //limpa o intervalo entre os mocks

  it('should return undefined', () => {
    const sut = createSut()
    expect(sut.sendMessage('teste')).toBeUndefined()
  })

  it('should call console.log once', () => {
    const sut = createSut()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.sendMessage('teste')
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('should call console.log once whit "pedido salvo..."', () => {
    const sut = createSut()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.sendMessage('teste')
    expect(consoleSpy).toHaveBeenCalledWith('mensagem enviada:', 'teste')
  })
})
