import { threadId } from 'worker_threads'

export class IndividualCustomer
  implements IndividualCustomerProtocol, EnterpriseCustomerProtocol
{
  name: string
  cpf: number
  cnpj: string
  enterprisename: string
  constructor(
    name: string,
    cpf: number,
    enterprisename: string,
    cnpj: string
  ) {
    this.name = name
    this.cpf = cpf
    this.enterprisename = enterprisename
    this.cnpj = cnpj
  }
  getName() {
    return this.name
  }
}
export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol
{
  enterprisename: string
  cnpj: string
  constructor(enterpriseName: string, cnpj: string) {
    this.cnpj = cnpj
    this.enterprisename = enterpriseName
  }
  getName() {
    return this.enterprisename
  }
}

interface IndividualCustomerProtocol {
  name: string
  cpf: number
}

interface EnterpriseCustomerProtocol {
  enterprisename: string
  cnpj: string
}
