// a tipagem this é basicamente o mesmo this do javaScript
export class Calculadora {
  constructor(public numero: number) { }
//Se eu tirar o this aqui vai inferir tipo this automaticamente
  add(n: number) {
    this.numero += n;
    return this
  }

  sub(n: number): this {
    this.numero -= n;
    return this
  }

  div(n: number): this {
    this.numero /= n;
    return this
  }

  mul(n: number): this {
    this.numero *= n;
    return this
  }
}

export class subCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this
  }
}

const calculadora = new subCalculadora(10)

calculadora //por retornar this é possivel fazer
  .add(5)  //cadeia de metodos
  .mul(10)
  .pow(2)
  .div(2)
  .mul(18)

console.log(calculadora)

// Builder - Gof // um outro exemplo bem bobo
export class RequestBuilder {
  private method: 'get' | 'post'
  private url: string

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(method: string): this {
    this.url = method;
    return this;
  }

  send(): void{
    console.log(`Enviado dados via ${this.method} para ${this.url}`)
  }
}

const request = new RequestBuilder()
request
  .setUrl('https:/www.google.com')
request
  .setMethod('post')
  .send()
