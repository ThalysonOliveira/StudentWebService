<p align="center">
  <a href="#tecnologia">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pre-requisitos">Pre-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#rotas">Rotas</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<a id="tecnologia"></a>
## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Mongo](https://www.mongodb.com/1)
- [Docker](https://www.docker.com/)
- [Prettier](https://prettier.io/)
- [Mongoose](https://mongoosejs.com/)
- [Eslint](https://eslint.org/)
- [EditorConfig](https://editorconfig.org/ )

<a id="pre-requisitos"></a>
## :fire: **Pré-requisitos**

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)


<a id="como-usar"></a>
## :zap: Como usar

- Faça um clone desse repositório: `https://github.com/ThalysonOliveira/StudentWebService.git`
- Estando detro da pasta principal, acesse: 
  - `cd Gateway`, `npm i`
  - `cd Student`, `npm i`
  - `cd Students Average`, `npm i`
- Altere o nome dos arquivos `.env.example` para `.env`
- Valores das variaveis de ambiente ao seu gosto
- Inicie a aplicação:
  - Na pasta principal do projeto, rode o seguinte comando: `docker-compose up`
- Acesse: `http://localhost:3000/`

<a id="funcionalidades"></a>
## 🛠️ Funcionalidades

WebService desenvolvido para por em pratica os conceitos aprendidos sobre microservices, dokcer e docker-compose
  - Criação de alunos
  - Listar alunos
 
### ↪︎ Rotas
<a id="rotas"></a>
- `POST`/students: `Cadastrar aluno`
- `GET`/students: `Listar todos os alunos`
- `GET`/students/status: `Lista todos os alunos por o status de Aprovado/Reprovado, basta passar a seguinte query: ?status={Aprovado/Reprovado}`
- `GET`/students/age: `Lista todos os aluno por idade, trazer alunos com a idade menor ou maior query: ?age={idade}&type={maior/menor}, caso não seja passado o type, retornara todos os alunos com idade especifica passada na query ?age`
- `GET`/students/notes: `Lista os alunos com intervalos de notas, query: ?startNote={nota}&endNote={nota}` 
 
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Web_service_student&uri=https%3A%2F%2Fraw.githubusercontent.com%2FThalysonOliveira%2FStudent_Web_Service%2Fmain%2Fstudent_web_service.json)
