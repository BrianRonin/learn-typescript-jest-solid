/**
 * Principio da inversão seria por exemplo o incorreto uma classe depender
 * de uma outra classe concreta sem ser uma abstração
 *
 * classes de baixo nivel são classes que exucutam tarefas (os detalhes)
 * Classes de alto nivel são classes que gerenciam as classes de baixo nivel
 *
 * classe abstrata, interface, types = abstrações
 * classe = concreto
 */

///  ERRADO ///

class Caneta {
  escrever() {
    console.log('caneta esta escrevendo')
  }
}
class Escrever {
  caneta: Caneta
  escrever() {
    this.caneta.escrever()
  }
}

/// CERTO ///

interface FerramentaProtocol {
  escrever(): void
}

class Caneta2 implements FerramentaProtocol {
  escrever() {
    console.log('caneta esta escrevendo')
  }
}

class Escrever2 {
  ferramenta: FerramentaProtocol
  escrever() {
    this.ferramenta.escrever()
  }
}
