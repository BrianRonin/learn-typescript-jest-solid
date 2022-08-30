//Classes abstratas possibilita a criação de classes feitas
//exclusivamente para serem estentidas de outras classes
//não possibilitando a criação de instancias da classe abstrata
//apenas subclasses
export abstract class Personagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) { }
  protected abstract emoji: string

  atacar(personagem: Personagem): void {
    this.bordao()
    console.log(`${this.nome} esta atacando ${personagem.nome}`)
    personagem.perderVida(this.ataque)
  }

  perderVida(forcaAtaque: number): void {
    console.log(`${this.nome} perdeu ${forcaAtaque} de hp`)
    console.log(`${this.nome}HP: ${this.vida}`)
    this.vida -= forcaAtaque
  }

  //Então tudo que a subclasse for necessario ter em um diferencial
  //basta colocar abstract antes
  abstract bordao(): void
}

export class Guerreira extends Personagem {
  protected emoji = `\u{1F9DD}`
    bordao(): void {
    console.log(this.emoji + 'Voce não escapara de mim')
  }
}
export class Monstro extends Personagem {
  protected emoji = `\u{1F9DF}`
      bordao(): void {
    console.log(this.emoji + 'YANG YANG voce vai ser meu jantar hoje')
  }
}

const guerreira = new Guerreira('guerreira', 100, 1000);
const monstro = new Monstro('monstro', 87, 1000)

guerreira.atacar(monstro)
monstro.atacar(guerreira)
guerreira.atacar(monstro)
monstro.atacar(guerreira)
guerreira.atacar(monstro)
monstro.atacar(guerreira)
