//Type guard ou 'guarda do tipo' é basicamente fazer o retorno correto dependendo da situação
//exemplos abaixo

export function add(a: unknown, b: unknown): number | string {
 return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`
}
console.log('### Exemplo 1 com string ou number ###')
console.log(add(1, 5))
console.log(add('a', 'b'))

type Pessoa = {
 valor: 'pessoa',
 nome: string,
}
type Animal = {
  valor: 'animal',
  cor: string,
}
type PessoaOrAnimal = Pessoa | Animal

export class Aluno implements Pessoa {
  valor: 'pessoa' = 'pessoa'
  constructor(public nome: string) {}
}

export class Baleia implements Animal {
  valor: 'animal' = 'animal'
  constructor(public cor: string) {}
}

function mostrarNome(obj: PessoaOrAnimal) {
 // checando se há 'nome' no arg/obj
//if ('nome' in obj) console.log(obj.nome)

 // checando se o arg/obj é uma instancia de Aluno
//if (obj instanceof Aluno) console.log(obj.nome)

  switch (obj.valor) { //tambem é possivel checar com um
    case 'pessoa':    //valor determinado do arg/obj
      console.log(obj.nome)
      return;
    case 'animal':
      console.log(obj.cor)
      return
  }
}
console.log('### exemplo 2 com tipo ###')
mostrarNome(new Aluno('BrianAluno'))
mostrarNome({valor: 'animal', cor: 'azul'})
