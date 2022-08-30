export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) { }
}

export class Stack<T>{
  private contador = 0
  private elementos: { [key: number]: T } = {}
  //private elementos = {}

  push(elemento: T): void{
    this.elementos[this.contador] = elemento
    this.contador++
  }

  pop(): T | void{
    if (this.isEmpty()) return undefined

    this.contador--
    const elemento = this.elementos[this.contador]
    delete this.elementos[this.contador]
    return elemento
  }

  isEmpty(): boolean{
    return this.contador === 0
  }

  tamanho(): number {
    return this.contador
  }

  showStack(): void{
    for (const key in this.elementos) {
      console.log(this.elementos[key])
    }
  }
}

const stack = new Stack<string>()
stack.push('fiajwfiopwaj')
stack.push('fifiopwaj')
stack.push('fiopwaj')
const elemento1 = stack.pop()
stack.showStack()

while (!stack.isEmpty()) {
  console.log(stack.pop())
}
