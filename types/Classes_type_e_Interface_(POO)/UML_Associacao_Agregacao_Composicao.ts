//UML é tipo uma planta, não é uma linguagem

/* Nivel 1            Associação                      carro - retrovisor
A associação entre dois objetos ocorre quando eles são completamente independentes
entre si mas eventualmente estão relacionados. Ela pode ser considerada uma relação
de muitos para muitos. Não há propriedade (ownership) nem dependência entre eles.
A relação é eventual.
*/

export class Escritor {
  constructor(private _nome: string) {}
      //Associação aqui por tipo classe
  private _ferramenta: Ferramenta | null = null

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta
  }

  get nome(): string {
    return this._nome
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Voce não esta usando uma ferramenta')
      return
    }
    return this.ferramenta.escrever()
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) { }
  abstract escrever(): void

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta escrevendo...`)
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta digitando...`)
  }
}


const escritor = new Escritor('Brian')
const caneta = new Caneta('Bic')
const maquinaDeEscrever = new MaquinaEscrever('maquina Antiga')
console.log("### Associação ###")
escritor.ferramenta = caneta
escritor.escrever()
escritor.ferramenta = null
escritor.escrever()


/*  Nivel 2           Agregação                carro - roda
A agregação não deixa de ser uma associação mas existe uma exclusividade
e determinados objetos só podem se relacionar a um objeto específico.
É uma relação de um para muitos. Um objeto é proprietário de outros mas
não há dependência, então ambos podem existir mesmo que a relação não se
estabeleça. Na verdade há controvérsias sobre a exata definição e o que
é mais importante, a relação de um para muitos ou a propriedade.
*/

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = []

  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto)
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
   return this.produtos.reduce((soma, produto) => soma + produto.preco, 0)
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const camisa = new Produto('camisa', 49.9)
const caneca = new Produto('caneca', 5)
const palito = new Produto('palito', 99.9)


const carrinhoDeCompras = new CarrinhoDeCompras()
carrinhoDeCompras.inserirProduto(camisa, caneca, palito)
console.log('### Agregação ###')
console.log(carrinhoDeCompras.quantidadeProdutos())
console.log(carrinhoDeCompras.valorTotal())
console.log(carrinhoDeCompras)



/*  Nivel 3       Composição              humano - coração
A composição é uma agregação que possui dependência entre os objetos,
ou seja, se o objeto principal for destruído, os objetos que o compõe
não podem existir mais. Há a chamada relação de morte.
*/

export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar()
  }
  acelerar(): void {
  this.motor.acelerar()
  }
  parar(): void {
  this.motor.parar()
  }
  desligar(): void {
  this.motor.desligar()
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor esta ligado...')
  }
  acelerar(): void {
  console.log('Motor esta acelerando...')
  }
  parar(): void {
  console.log('Motor esta parado...')
  }
  desligar() {
  return console.log('Motor esta desligado...')
  }
}

console.log('### Composição ###')
const carro = new Carro()
carro.ligar()
carro.acelerar()
carro.desligar()
carro.parar()
