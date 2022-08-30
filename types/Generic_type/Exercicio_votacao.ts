type tVotacao = {
  option: string;
  votes: number;
};

export class Votation {
  private _votationOptions: tVotacao[] = []

  constructor(public details: string) { };

  addVotationOption(Votacao: tVotacao): void {
    this._votationOptions.push(Votacao)
  }

  vote(Index: number): void {
    if (!this._votationOptions[Index]) return
    this._votationOptions[Index].votes += 1
  }

  get votationOptions(): tVotacao[] {
    return this._votationOptions
  }
 }

export class VotationApp {
  private votacao: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votacao.push(votation)
  }

  showVotation(): void {
    console.log(this.votacao)
    for (const votacao of this.votacao) {
      console.log(votacao.details)
      for (const votos of votacao.votationOptions) {
        console.log(votos.option, votos.votes)
      }
      console.log('###')
    }
  }
}

const melhorLinguagem = new Votation('Qual sua linguagem favorita?')
melhorLinguagem.addVotationOption({ option: 'phyton', votes: 0 })
melhorLinguagem.addVotationOption({ option: 'javaScript', votes: 0 })
melhorLinguagem.addVotationOption({ option: 'typeScript', votes: 0 })
const corFavorita = new Votation('Qual sua cor favorita?')
corFavorita.addVotationOption({ option: 'preto', votes: 0 })
corFavorita.addVotationOption({ option: 'vermelho', votes: 0 })
corFavorita.addVotationOption({ option: 'sinza', votes: 0 })
corFavorita.vote(1)
const votationApp = new VotationApp()
votationApp.addVotation(melhorLinguagem)
votationApp.addVotation(corFavorita)
votationApp.showVotation()
