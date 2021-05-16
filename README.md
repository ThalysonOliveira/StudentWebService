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

<a id="funcionalidades"></a>
## 🛠️ Funcionalidades

WebService desenvolvido para por em pratica os conceitos aprendidos sobre microservices, dokcer e docker-compose
  - Criação de alunos
  - Listar alunos

<a id="rotas"></a>
- `POST`/students: `Cadastrar aluno`
- `GET`/students: `Listar todos os alunos`
- `GET`/students/status: `Lista todos os alunos por o status de Aprovado/Reprovado, basta passar a seguinte query: ?status={Aprovado/Reprovado}`
- `GET`/students/age: `Lista todos os aluno por idade, trazer alunos com a idade menor ou maior query: ?age={idade}&type={maior/menor}, caso não seja passado o type, retornara todos os alunos com idade especifica passada na query ?age`
- `GET`/students/notes: `Lista os alunos com intervalos de notas, query: ?startNote={nota}&endNote={nota}` 

### ↪︎ Rotas
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=NodeJWT&uri=%7B%22_type%22%3A%22export%22%2C%22__export_format%22%3A4%2C%22__export_date%22%3A%222021-01-06T19%3A56%3A30.772Z%22%2C%22__export_source%22%3A%22insomnia.desktop.app%3Av2020.4.0%22%2C%22resources%22%3A%5B%7B%22_id%22%3A%22req_029f94abdced466297e6ef42b7585bb4%22%2C%22parentId%22%3A%22fld_d5ddda12530045aa9400cc5037c60c8a%22%2C%22modified%22%3A1609962243960%2C%22created%22%3A1609962193390%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3333%2Fusers%22%2C%22name%22%3A%22ListUsers%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22GET%22%2C%22body%22%3A%7B%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%5D%2C%22authentication%22%3A%7B%22type%22%3A%22bearer%22%2C%22token%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0N2Q2MmMwLWM2MjYtNGY1OS04Mzc4LWNiMmFjZDE1NzA0YyIsImlhdCI6MTYwOTk2MjIyNCwiZXhwIjoxNjEwMDQ4NjI0fQ.PSKKVOvvpA4jszAbUShBK5EJV9P_ha1RVFZkvnnPOws%22%7D%2C%22metaSortKey%22%3A-1609962193390%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22fld_d5ddda12530045aa9400cc5037c60c8a%22%2C%22parentId%22%3A%22wrk_4f74f8762992462ca7475322ba3816bf%22%2C%22modified%22%3A1609956273210%2C%22created%22%3A1609956273210%2C%22name%22%3A%22NodeJWT%22%2C%22description%22%3A%22%22%2C%22environment%22%3A%7B%7D%2C%22environmentPropertyOrder%22%3Anull%2C%22metaSortKey%22%3A-1609956273210%2C%22_type%22%3A%22request_group%22%7D%2C%7B%22_id%22%3A%22wrk_4f74f8762992462ca7475322ba3816bf%22%2C%22parentId%22%3Anull%2C%22modified%22%3A1600458951062%2C%22created%22%3A1600458951062%2C%22name%22%3A%22Insomnia%22%2C%22description%22%3A%22%22%2C%22scope%22%3Anull%2C%22_type%22%3A%22workspace%22%7D%2C%7B%22_id%22%3A%22req_e01abfec32b34b19ba2618c6e009c470%22%2C%22parentId%22%3A%22fld_d5ddda12530045aa9400cc5037c60c8a%22%2C%22modified%22%3A1609960679111%2C%22created%22%3A1609960296144%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3333%2Fauth%22%2C%22name%22%3A%22Auth%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22POST%22%2C%22body%22%3A%7B%22mimeType%22%3A%22application%2Fjson%22%2C%22text%22%3A%22%7B%5Cn%5Ct%5C%22email%5C%22%3A%20%5C%22mateus%40gmail.com%5C%22%2C%5Cn%5Ct%5C%22password%5C%22%3A%20%5C%22123%5C%22%5Cn%7D%22%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22application%2Fjson%22%2C%22id%22%3A%22pair_cc9090b67b5d4cd4b570aaa1e352c75d%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1609960296144%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22req_d0ad31e9cc4042128e39efcb78e74241%22%2C%22parentId%22%3A%22fld_d5ddda12530045aa9400cc5037c60c8a%22%2C%22modified%22%3A1609960284453%2C%22created%22%3A1609960257275%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3333%2Fuser%22%2C%22name%22%3A%22CreateUser%22%2C%22description%22%3A%22%22%2C%22method%22%3A%22POST%22%2C%22body%22%3A%7B%22mimeType%22%3A%22application%2Fjson%22%2C%22text%22%3A%22%7B%5Cn%5Ct%5C%22email%5C%22%3A%20%5C%22%5C%22%2C%5Cn%5Ct%5C%22password%5C%22%3A%20%5C%22%5C%22%5Cn%7D%22%7D%2C%22parameters%22%3A%5B%5D%2C%22headers%22%3A%5B%7B%22name%22%3A%22Content-Type%22%2C%22value%22%3A%22application%2Fjson%22%2C%22id%22%3A%22pair_e63ee7e1deb8485c9ecb8d46ca79e477%22%7D%5D%2C%22authentication%22%3A%7B%7D%2C%22metaSortKey%22%3A-1609960257331%2C%22isPrivate%22%3Afalse%2C%22settingStoreCookies%22%3Atrue%2C%22settingSendCookies%22%3Atrue%2C%22settingDisableRenderRequestBody%22%3Afalse%2C%22settingEncodeUrl%22%3Atrue%2C%22settingRebuildPath%22%3Atrue%2C%22settingFollowRedirects%22%3A%22global%22%2C%22_type%22%3A%22request%22%7D%2C%7B%22_id%22%3A%22env_156552dd7647507ff33f4f8eefe3b4a13ccdb7f9%22%2C%22parentId%22%3A%22wrk_4f74f8762992462ca7475322ba3816bf%22%2C%22modified%22%3A1603160410240%2C%22created%22%3A1600458951107%2C%22name%22%3A%22Base%20Environment%22%2C%22data%22%3A%7B%22base_url%22%3A%22http%3A%2F%2Flocalhost%3A3333%22%7D%2C%22dataPropertyOrder%22%3A%7B%22%26%22%3A%5B%22base_url%22%5D%7D%2C%22color%22%3Anull%2C%22isPrivate%22%3Afalse%2C%22metaSortKey%22%3A1600458951107%2C%22_type%22%3A%22environment%22%7D%2C%7B%22_id%22%3A%22jar_156552dd7647507ff33f4f8eefe3b4a13ccdb7f9%22%2C%22parentId%22%3A%22wrk_4f74f8762992462ca7475322ba3816bf%22%2C%22modified%22%3A1600458951109%2C%22created%22%3A1600458951109%2C%22name%22%3A%22Default%20Jar%22%2C%22cookies%22%3A%5B%5D%2C%22_type%22%3A%22cookie_jar%22%7D%2C%7B%22_id%22%3A%22spc_e34a9ae4052c470790536969b0ab1e9b%22%2C%22parentId%22%3A%22wrk_4f74f8762992462ca7475322ba3816bf%22%2C%22modified%22%3A1600458951064%2C%22created%22%3A1600458951064%2C%22fileName%22%3A%22Insomnia%22%2C%22contents%22%3A%22%22%2C%22contentType%22%3A%22yaml%22%2C%22_type%22%3A%22api_spec%22%7D%5D%7D)
