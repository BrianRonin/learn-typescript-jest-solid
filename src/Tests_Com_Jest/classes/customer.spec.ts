import { IndividualCustomer, EnterpriseCustomer } from './customer'

const createIndividualCustomer = (
  name: string,
  cpf: number,
  cnpj: string,
  enterprisename: string
): IndividualCustomer => {
  return new IndividualCustomer(name, cpf, cnpj, enterprisename)
}

const createEnterpriseCustomer = (
  enterprisename: string,
  cnpj: string
): EnterpriseCustomer => {
  return new EnterpriseCustomer(enterprisename, cnpj)
}
afterEach(() => jest.clearAllMocks()) //limpa o intervalo entre os mocks
describe('Individual customer', () => {
  it('should have name and cpf', () => {
    const sut = createIndividualCustomer(
      'brian',
      11111111111,
      '111412351',
      'fabricaBoa'
    )

    expect(sut).toHaveProperty('name', 'brian')
  })

  it('should have name and cpf', () => {
    const sut = createIndividualCustomer(
      'brian',
      11111111111,
      '111412351',
      'fabricaBoa'
    )

    expect(sut.getName()).toBe('brian')
  })
})
describe('Individual customer', () => {
  it('should have name and cpj', () => {
    const sut = createEnterpriseCustomer('Empresa', '11111111111')

    expect(sut).toHaveProperty('enterprisename', 'Empresa')
  })

  it('should have method getName', () => {
    const sut = createIndividualCustomer(
      'brian',
      11111111111,
      '111412351',
      'fabricaBoa'
    )

    expect(sut.getName()).toBe('brian')
  })
})
