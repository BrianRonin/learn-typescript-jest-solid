//Generics padrão do proprio ts

 //Record - faz tudo ser opcional no obj
//   define o type da chave / define o type do valor
const objeto1: Record<string, string | number> = {
  nome: 'Brian',
  sobrenome: 'Matias',
}

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required - faz as chave (obrigatório)
//                                \/
type PessoaRequired = Required<PessoaProtocol>

const objeto2: PessoaRequired = {
  nome: 'Brian',
  sobrenome: 'Matias',
  idade: 20,
}

// Partial - faz as chave (não ser obrigatório)
//                                \/
type PessoaPartial = Partial<PessoaProtocol>

const objeto3: PessoaPartial = {
  nome: 'Brian',
  sobrenome: 'Matias',
}

// Readonly - faz ser (readonly)
//                                \/
type PessoaReadonly = Readonly<PessoaProtocol>

const objeto4: PessoaReadonly = {
  nome: 'Brian',
  sobrenome: 'Matias',
  idade: 20,
}

  // Extract e Exclude
 //Serve pra comparar e retornar chaves
//iguais ou não iguais Entre 2 types
type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'
// exclua as chave aqui \/   \/ <== que tenha aqui
type tExclude = Exclude<ABC, CDE> // tExclude = "A" | "B"
//extraia apenas as chaves que tem
//                 aqui \/ & \/ aqui
type tExtract = Extract<ABC, CDE> // tExtract = "C"

  // Pick - Permite (selecionar) apenas as chaves desejada
 // Podendo usar Extract e Exclude junto
//                                \/
type PessoaPick = Pick<PessoaProtocol, 'nome' | 'sobrenome'>

const objeto5: PessoaPick = {
  nome: 'Brian',
  sobrenome: 'Matias',
}
  // Após usar os uttlity types eu quiser acrescentar
 // mais alguma coisa eu posso com '& {}' no final
//Exemplo:
type PessoaRequiredEPeso = Required<PessoaProtocol> & { peso: number }
const objeto6: PessoaRequiredEPeso = {
  nome: 'Brian',
  sobrenome: 'Matias',
  idade: 20,
  peso: 90,
}

//////////// exemplo de uso ///////////////////

type AccountApi2 =
  Pick<AccountMongo, //Pick: Seleciona de AccountMongo                              \/    \/
    Exclude<keyof AccountMongo, '_id' //Exclude: retorna tudo menos a chave '_id': nome, idade
    >> & {
  id: string //Adiciona id: string
}

const objeto7:AccountApi2 = {
  id: 'dowahdwa',
  idade: 20,
  nome: 'Brian'
}

///// Um exemplo que daria pra usar um pouco de tudo /////
/**
 * Eu recebo do banco de dados mongodb um obj
 * com o _id assim, eu quero passar o _id pra id
 * tanto a tipagem quanto o objeto mas sem alterar
 * o original eu posso criar uma função que retorna
 * um novo objeto do jeito que eu quero como o exemplo
 * abaixo.
 *
 * Porem eu teria que criar uma tipagem novamente igual
 * a primeira com as alterações que eu quisesse,
 * pra usar de retorno na função alem de ter que
 * atualizar ela se eu atualizar a primeira
 * ai entra a oportunidade de usar tudo de antes
 */

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = {
  id: string;
  nome: string;
  idade: number
}

const accountMongo: AccountMongo = {
  _id: 'aowfhwaofhawofhaw',
  nome: 'Brian',
  idade: 20
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...account } = accountMongo
  return { ...account, id: _id}
}

const accountApi = mapAccount(accountMongo);
console.log(accountMongo)
console.log(accountApi)

