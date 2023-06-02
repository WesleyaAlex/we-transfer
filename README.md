<h1 align="center">
  <img alt="My Video Time" title="MyVideoTime" src="https://user-images.githubusercontent.com/49955909/197836298-d1307158-d4af-43ee-a92b-0ce7f8ae7313.png" width="220px" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=GPL&color=49AA26&labelColor=000000">
</p>

<br>

<div align="center">
  <img alt="Preview Desktop" src="https://user-images.githubusercontent.com/49955909/201435475-5e0f06bb-7151-4061-bb45-35ab9a613d5d.png">
</div>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- NodeJS

## 💻 Projeto

Em construção... 🔨

Para rodar a API fake rode o comando:
npx json-server --watch db.json

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://xd.adobe.com/view/3dc2368e-ad87-4ec0-afd8-029528cc34d2-6891/screen/f14548d8-8096-4a1a-aa69-730d4f561663/).

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


jest -> é uma ferramenta que fornece recursos para escrever e executar os testes, ele contempla várias bibliotecas em uma só
testing-library/react -> é uma ferramenta que auxilia na comunicação com a DOM

Então resumindo, a gente não precisaria do testing-library para testar, o testing-library vem mais para auxiliar na interação com a DOM (seja com renderizações ou ações de usuários)

Para testar nós precisamos criar um arquivo com a extensão .epec ou .test, porque assim o jest consegue identificar quais de fato são arquivos de teste para ele executar

describe -> é uma função do jest, é o cara que emgloba todos os testes cases relacionado a funcionalidade de algo (nesse caso <componente que será testado>)

it -> também uma função do jest, que é relacionado a um teste case, um cenário de teste específico

render -> é uma função do testing-library que vai renderizar o componente assim como o react renderiza

screen -> é um utilitário que guarda a DOM virtual, ele pega o que o componente renderizou e injeta no screen, ele permite que a gente busque elementos nessa dom VIRTUAL

fireEvent -> é uma função da testing-library que dispara um evento

- get -> verifica se um elemento está no html
	- getBy -> um elemento/o primeiro elemento que satisfaça aquela query
	- getAll -> todos os elementos que satisfaçam aquela query
- query -> não falha quando não acha o elemento
- find -> quase a mesma coisa que o get, porém ele espera o elemento aparecer em tela

expect -> é uma função do jest que verifica se o cenário do teste deu certo, a verificação fica após a chamada do expect() (.tobeinthedocument() por exemplo)

jest.fn -> retorna uma função que não faz nada, uma função vazia

beforeEach -> geralmente é usado quando é necessário executar algo antes dos testes (também tem o afterEach que é pra ser executado após os testes)
