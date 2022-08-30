interface pessoa {
  nome: string
  sobrenome: string
  cpf: string
  cnpj: string
}
class pessoaComum implements pessoa {
  nome = 'bria'
  sobrenome = 'matias'
  cpf = '481.111.111.1'
  cnpj = '' //<== ISP se consiste em não fazer isso
} //criar uma interface/type/class que obriga a 'pessoa'
//colocar algo que não tem pra isso deve criar uma nova
//interface para aquela 'pessoa'

interface OnlyPerson {
  nome: string
  sobrenome: string
}

interface Empresa {
  cnpj: string
  nome_da_empresa: string
}
// Uma opçao pra contornar isso se necessario
// seria implementar mais de um tipo na classe
class PessoaEmpresaria implements OnlyPerson, Empresa {
  nome = 'brian'
  sobrenome = 'matias'
  cnpj = '4198419481'
  nome_da_empresa = 'sei la'
}
