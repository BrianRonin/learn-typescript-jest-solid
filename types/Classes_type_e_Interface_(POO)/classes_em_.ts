/*
Public - Por padrão, os membros (propriedades e métodos) da classe TypeScript são públicos
portanto, você não precisa prefixar os membros com a palavra-chave public. Os membros
públicos são acessíveis em qualquer lugar sem restrições, mesmo nas subclasses de
vários níveis, e fora da classe.

Private - Um membro privado não pode ser acessado fora de sua classe que o contém.
Membros privados podem ser acessados ​​apenas dentro da classe e até mesmo suas subclasses
não terão permissão para usar suas propriedades e atributos privados, perfeito pra encapsulamento,
assim voce pode criar um metodo publico pra tratar dos dados privados como filtro

Protected - Um membro protegido não pode ser acessado fora de sua classe que o contém.
Membros protegidos podem ser acessados ​​apenas dentro da classe e pela instância
de sua classe sub/filho.

Readonly - Somente leitura igual const voce podera apenas push etc
 */

export class Empresa {
  public readonly nome: string = 'Brian';
  // Poderia definir a class[] como readolny tambem ai não poderia usar nem push, valor seria imutavel
  private readonly criadoPor: readonly Colaborador[] = [{ nome: 'brian', sobrenome: 'ronin' }]; //
  //Colaborador[] é a mesma coisa que dizer objeto_class[], tipo string[]
  protected readonly colaboradores: Colaborador[] = [];
  //Eu posso utilizar classes como tipo e definir o primeiro valor como vazio
  //E a unica forma de adicionar elemento em 'colaboradores' privado e readonly
  //seria criar um metodo public na propria class pra tar tratando do 'colaboradores'
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    //eu posso declarar o valor aqui mesmo sendo readonly e vai sobrescrever se declarado la encima
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void { // public
    this.colaboradores.push(colaborador)
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) { // public
      console.log(colaborador)
    }
  }

  public getNome(): string {
    return this.nome
  }
}


export class Colaborador {
 //uma forma mais rapida de fazer a mesma coisa que o de cima ja definindo no construtor
//porem aqui se torna obrigatorio definir public se for usar public ou qualquer outro
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {
    // nome: nome
    // sobrenome: sobrenome   //Por eu ja definir o tipo no construtor não precisa
    // this.nome: nome       //definir this = element por exemplo por isso é mais rapido
    // this.sobrenome: sobrenome //por outro lado pra mecher no constructor em uma subclasse fica mais lento
   }
}
export class ronin extends Empresa {
  constructor(nome: string, cnpj: string) {
    super(nome, cnpj) //por eu estar chamando o constructor em uma subclasse tem que utilizar o super e inferir
  }                  //os elemento da classe mãe mais os que eu quero sem precisar definir os valores o tipo pois
                    //ja esta definido se torna diferente a forma de fazer se utilizado a forma "mais rapida"
  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop()
    if (colaborador) return colaborador
    else return null
  }
}


       //Criando empresa
const empresa1 = new ronin('Ronin', '11.111.111/0001-11');
//empresa1.nome = 'udemy'//Não é possível atribuir a 'nome' porque é uma propriedade de somente leitura.

     //Criando Colaboradores
const Colaborador1 = new Colaborador('Brian', 'Cristiano de Matias')
const Colaborador2 = new Colaborador('Nira', 'Lemos')
const Colaborador3 = new Colaborador('João', 'Antonio')
    //Adicionando Colaboradores
empresa1.adicionaColaborador(Colaborador1)
empresa1.adicionaColaborador(Colaborador2)
empresa1.adicionaColaborador(Colaborador3)

    // Criando/Adicionando colaboradores
empresa1.adicionaColaborador({nome: 'Laura', sobrenome: 'Cristina'})
empresa1.adicionaColaborador({nome: 'Vitor', sobrenome: 'Henrique'})
empresa1.adicionaColaborador({ nome: 'Wesley', sobrenome: 'Martins' })

const colaboradorRemovido = empresa1.popColaborador() //variavel com o ultimo colaborador !OBS: Ele apaga automaticamente mesmo só declarando
//empresa1.popColaborador() // Apagando o ultimo colaborador
// Exibindo colaboradores
empresa1.mostrarColaboradores()
console.log('###colaboradorRemovido###')
console.log(colaboradorRemovido)
