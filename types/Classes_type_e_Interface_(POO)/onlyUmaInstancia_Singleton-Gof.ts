// Padrao de projeto Singleton - Gof
// Este padrão visa a classe ter apenas uma instancia usando outro padrão
// da Gof que é factory methods
export class Database {
  //deixando privado a criação de instancias possibilitando a criação
  //apenas dentro da classe
  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) { }

  private static databese: Database // instancia da propria class armazenada na class

  connect(): void{
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`)
  }

  static getDatabase(
    host: string, user: string, password: string
  ): Database {
    if (Database.databese) {
      console.log('instancia ja criada')
      return Database.databese
    }
    Database.databese = new Database(host, user, password)
    return Database.databese
  }
}

const db1 = Database.getDatabase('localhost', 'root', '124355') // Sera sempre o primeiro a conexão
db1.connect()

const db2 = Database.getDatabase('dawpjdwa', 'rootttt', '12348234355') //Ignorado
db2.connect()
