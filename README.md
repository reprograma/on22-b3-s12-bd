<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Introdução a Banco de Dados

Turma Online 22 - Todas em Tech  | Back-end | Semana 12 | 2022 | Gaia Maria

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)


##   Apresentação

 Olá, meu nome é Gaia Maria. Sou uma travesti graduada em História Licenciatura (UNESP) e graduanda em Análise e Desenvolvimento de Sistemas (Faculdade Descomplica). Sou uma Bruxa devota a Hecate, ocultista e pagã. Tambem sou uma pessoa neurodiversa, gamer, viciada em RPG e desenvolvedora.

###  👩🏽‍🏫 recadinhos 
    - Bebam água meninas
    - Qualquer pergunta é válida, principalmente aquela que a gente pensa que não faz sentido.
    - Deixe a camera ligada
    
### 📑 Conteúdo da Aula

    - Banco de Dados
    - Introdução a MongoDB
    - MongoCompass, Shell e Robo3T
    - Projeto com mongo

## 📑 Arquitetura do Projeto (ao fim)
```
exercicios  
├── r-library          
│    ├─ src                       
│    │  ├─ controllers            
│    │  │  └─ booksController.js  
│    │  ├─ database               
│    │  │  └─ moogoseConnect.js      
│    │  ├─ models                 
│    │  │  └─ booksModel.js      
│    │  ├─ routes                 
│    │  │  └─ booksRoute.js      
│    │  └─ app.js                 
│    ├─ package-lock.json         
│    ├─ package.json  
│    ├─ .gitignore            
│    └─ server.js
│
└─README.md
```

## ⚙️ Dependencias do Projeto
    - Mongoose
    - Cors
    - Express
    - Nodemom

### 💻 Dependências de ambiente
- **Node** -> *npm i -D nodemon* 
- **express/cors** -> *npm i express cors --save*
- **mongoDB** -> *npm i mongoose*
- **dotenv** -> npm i dotenv

## 🏦 História do banco de dados

A motivação de criar um sistema para armazenagem de dados surgiu devido ao alto custo de leitura/escrita de arquivos no HD. Os primeiros fundamentos de banco de dados relacionais surgiram entre as décadas de 1960 a 1970 pela IBM. Na  década de 80, a Oracle, com a permissão da IBM, foi a primeira empresa a desenvolver o banco utilizando o padrão SQL para consulta/escrita como é conhecido hoje. Após a explosão da web, também conhecida como web 2.0, foi necessário uma alternativa ao SQL(relacional), assim, a partir de 1998, foi criado o conceito de banco nosql( não relacional )

###  As diferenças De SQL(relacional) vs NOSQL(não relacional)

#### Banco de dados Relacionais

SQL é uma linguagem de programação usada por quase todos os bancos de dados relacionais para consultar, manipular e definir dados e fornecer controle de acesso. O SQL foi desenvolvido pela primeira vez na IBM nos anos 1970, com a Oracle como principal contribuinte, o que levou à implementação do padrão SQL ANSI; o SQL estimulou muitas extensões de empresas como IBM, Oracle e Microsoft. Embora o SQL ainda seja amplamente usado hoje em dia, novas linguagens de programação estão começando a aparecer.

Exemplo de consulta em SQL com MySQL:

```sql
    $ SELECT from books
    WHERE writers = "J. R. R. Tolkien"
```

 - Os mais conhecidos são o MySQL, PostgreSQL e o Oracle.

### Banco de dados Não Relacionais

O termo 'NoSQL' se refere a tipos não relacionais de bancos de dados, e esses bancos de dados armazenam dados em um formato diferente das tabelas relacionais. No entanto, os bancos de dados NoSQL podem ser consultados usando APIs de linguagem idiomática, linguagens de consulta estruturadas declarativas e linguagens de consulta por exemplo, razão pela qual também são chamados de bancos de dados "não apenas SQL".

Os bancos de dados NoSQL são amplamente usados em aplicativos da web em tempo real e big data, porque suas principais vantagens são alta escalabilidade e alta disponibilidade.
Os bancos de dados NoSQL também são a escolha preferida dos desenvolvedores, pois eles naturalmente aceitam um paradigma de desenvolvimento ágil, adaptando-se rapidamente aos requisitos em constante mudança. Os bancos de dados NoSQL permitem que os dados sejam armazenados de maneiras mais intuitivas e fáceis de entender, ou mais próximas da maneira como os dados são usados pelos aplicativos - com menos transformações necessárias ao armazenar ou recuperar usando APIs no estilo NoSQL. Além disso, os bancos de dados NoSQL podem aproveitar ao máximo a nuvem para oferecer tempo de inatividade zero.


Exemplo de consulta em NOSQL com Mongo

```javascript
    $ db.books.find({ writers: "J. R. R. Tolkien"})
```

- Os mais conhecidos são o MongoDB, Redis e o Firebase.

## 🏦 Introdução ao Mongo
O MongoDB é um banco de dados orientado a documentos que possui código aberto (open source) e foi projetado para armazenar uma grande escala de dados, além de permitir que se trabalhe de forma eficiente com grandes volumes. Ele é categorizado no banco de dados NoSQL (not only SQL) pois o armazenamento e a recuperação de dados no MongoDB não são feitas no formato de tabelas.

###  Database
Um banco de dados é uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS). 
Juntos, os dados e o DBMS, juntamente com os aplicativos associados a eles, são chamados de sistema de banco de dados, geralmente abreviados para apenas banco de dados

### Collection e Document
Nossa `collection` é uma coleção(lista) de `document`, similar a  array, onde armazenamos, por exemplo, as nossos livros. Nesse exemplo, uma biblioteca seria a `collection`, enquanto cada livro seria um `document`, contendo as informações dele.

exmplo:

```json
[
    {
        "id": 1,
        "title": "O Hobbit",
        "launchYear": "1937",
        "available": true,
        "gender": "adventure",
        "writer": "J. R. R. Tolkien",
        "pages": "335"
    },
    {
        "id": 2,
        "title": "Blade Runner",
        "launchYear": "1968",
        "available": false,
        "gender": "sci-fi",
        "writer": "Philip K. Dick",
        "pages": "316"
    },
    {
        "id": 3,
        "title": "Frankenstein",
        "launchYear": "1818",
        "available": true,
        "gender": "sci-fi",
        "writer": "Mary Shelley",
        "pages": "250"
        
    }
]
```

### `{}` Schema

O mongoose utiliza a `Schema` para pôr ordem na na collection, é necessario por Ordem no Barraco.  Para isso precisamos de um schema( espelho ) de como será salvo nosso `document`.


exemplo de schema:

```javascript
const mongoose = require('mongoose');
const BooksSchema = monogoose.Schema({
      title: string,
      launchYear: number,
      available: boolean,
      publisher: string,
      gender: [string],
      writer: string,
      pages: number
});
```

### `[]` Model
A `Model` ( modelo ) é a nossa representação da Collection ( coleção ), nele assim como no Array, possuímos `métodos` ( funções ) que nos permite realizar as operações do CRUD: 

| OPERAÇÃO| DESCRIÇÃO | HTTP |
| --- | --- | --- |
| C | criar/gerar | POST |
| R | ler/obter |  GET | 
| U | atualizar/substiuir | PUT/PATCH |
| D | remover/deletar | DELETE |


Exemplo de como criar uma model

```javascript
const BookModel = mongoose.model('book', BookSchema);
```
Obs: Não é necessário salvar como books, pois o ORM cria no plural.

### ObjectId( )
O ObjectID é um identificador único para cada documento, ele é gerado automaticamente, podemos pensar nele como um CPF, único por dado, é por ele que consegue identificar um `Document` realizar as operações do CRUD.

```javascript
    const bookId = new moogose.Types.ObjectId();
```

##  Classes | OOP (orientação a objetos) Conceitos básicos
Uma breve introdução sobre classes e objetos, para que possamos entender melhor o  nosso ORM.

###  uso da palavra reservada `new`
Quando possuímos uma classe, podemos utilizar a palavra reservada `new`  para instanciar um objeto, ou seja, construir um novo documento a partir da classe( nossa `Schema` ),  afinal, não queremos que a música da Anitta tenha altere as informações da música da Ludmila né? 🤔

```javascript
const book = new BookModel({
      title: string,
      launchYear: number,
      available: boolean,
      publisher: string,
      gender: [string],
      writer: string,
      pages: number
});
```


### Métodos
Assim como o objeto, as classes possuiem métodos, que são funções que nos auxiliam a realizar **ações** como por exemplo: salvar um livro, ou mudar de pagina, no nosso dia-a-dia usamos o console`.log`, *.log("hello word")* é um método que nos permite imprimir no terminal uma mensagem de texto.


### Constructor
Nosso `constructor` é responsável por inicializar a nossa classe, ele recebe os parametros para criar construir a instancia da classe, como por exemplo, o livro, é assim que nossa Schema gera o livro no formato que o banco espera, no caso do mongo, um BJSON.

### Tipagem - Tipos primários
Na programação, existem tipos primários, que são responsáveis por definir o tipo de informação ( dado ) que estamos trabalhando, por exemplo um número de celular `Number`, ou um email que é texto `String`, ou até mesmo se é verdadeiro(true) ou falso(false) que é um `Boolean`, além disso, temos o `Date` que representa uma data. 

 - String -> representa *texto* -> `""`
 - Number -> representa *número*  `0`
 - Boolean -> representa `true` ou `false`
 - Date -> representa uma data, por exemplo, 1970-01-13 -> `Date`

```typescript
    class Book {
      title: string,
      launchYear: number,
      available: boolean,
      publisher: string,
      gender: [string],
      writer: string,
      pages: number
    };
```

## 📖 Referências
- https://www.gartner.com/en/information-technology/glossary/object-data-model
- https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/mongoose
- https://docs.mongodb.com/
- https://docs.mongodb.com/manual/crud/
- https://docs.atlas.mongodb.com/tutorial/create-new-cluster/
- https://studio3t.com/academy/topic/mongodb-vs-sql-concepts/
- https://mongoosejs.com/docs/index.html

### 🎥 Videos de apoio

- [Resumo Mongodb - Codigo Fonte TV](https://www.youtube.com/watch?v=4dTI1mVLX3I)
- [nodeJs Express Mongo - Api rest full Turitorial](https://www.youtube.com/watch?v=K5QaTfE5ylk)
- [O que é banco de dados? - Curso em Video](https://www.youtube.com/watch?v=Ofktsne-utM)

##  🎓 Para Casa
  
Oie bonitas, como sabem a tarefa mudou, então vamos lá:
- Entre no arquivo do README, dentro da pasta principal (on19-tet-s12-bd) 
- E responda COM SUAS PALAVRAS o que você entendeu da aula de sabado:
  * pode usar girias, pajuba, aleatorias, trazer imagens... você escolhe
  * pode ser sintese, textão, mapa conceitual... 
  * me explique principalmente o que vocêentendeu de Banco de Dados, SQL, NoSQL e de Mongo
  * caso queira pode me falar tambem onde teve mais duvidas e qual parte gostariam que eu revesse na semana 13    
  
  obs: se quiser adicione um campo de observação sobre tematicas das ultimas semanas (de outras aulas) que voce
  teve mais dificuldade. Vamos revisa-las.

  * Na sexta faremos uma atividade oral onde irei fazer perguntas para turma, nem todas precisam participar, mas 
  eu adoraria se vocês participassem. POR FAVOR
##  Minhas redes sociais
 - [LINKEDIN](https://www.linkedin.com/in/gaia-maria/)
 - [GITHUB](https://github.com/Gaia-Maria)
