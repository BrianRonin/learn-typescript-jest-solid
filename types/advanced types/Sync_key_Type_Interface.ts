type Veiculo = {
  marca: string
  ano: number
}

type Car = {
  brand: Veiculo['marca'] // <==
  year: Veiculo['ano']   // é possivel sincronizar a chave
  name: string          // tanto do tipo como interface
}                      // desta maneira

const carro: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'Pjo'
}
