<h1 align="center">
  <img src="assets/nearly_logo.png" alt="logo nrealyerika" width="500">
</h1>

# Atividade Para Casa: Resumo Aula S12 - DB

## Pontos Compreendidos

### Tipos de DBs

#### SQL - *Structured Query Language*
São os sistemas tradicionais para pesquisa e gereciamento de *databases*. São sistemas de modelagem e controle de dados que os separam em **tabelas** numeráveis, e os organizam através de **cálculos de relação**. Gerando assim DBs *relacionais*. Originalmente derivados da álgebra relacional.

Exemplos Clássicos de SQL são: mySQL, Oracle, PostgreSQL.

#### noSQL - *Not Only Structured Query Language*
São sistemas mais modernos de gerenciamento de DBs. São soluções alternativas que implementam modelos como documentos chave-valor, colunas ou mesmo grafos. São adequados para cenários de alta escalabilidade e distribuição de dados. 

Exemplos Clássicos de noSQL são: MongoDB, Apache Cassandra, Redis.
### mongoDB
O MongoDB é um **ecosistema** de soluções para gerenciamento de DBs. Possui tanto soluções para o desenvolvimento de DBs locais, com **mongosh** (CLI) ou **Compass** (GUI), quanto remotamente, pela serviço cloud **Atlas**. Possui integração com o Node.js pelo módulo `mongoose`. 

É uma DB **não-relacional**. Armazena os dados em *documentos*, i.e., como arquivos **não-tabelados** identificados indidualmente. Usa **BSON**, um formato de arquivo similar ao JSON.

Mongoose é módulo disponível via NPM que facilita o desenvolvimento de DBs mongo via node. Permite grande facilidade para operações **CRUD** com métodos estáticos como:

- `save`
- `findById`
- `findByIdAndUpdate`
- `findByIdAndDelete`
	
## Expectativas para Próxima Semana

- Revisar o uso do `.env`
- Ver situações diversificadas em que outras configurações de *enviroment variables* sejam usadas
- Ver os básicos do uso e gerenciamento de DBs Mongo **locais** com Compass e mongosh
- Expandir os conhecimentos sobre o uso de *middlewares* nos *controllers*
