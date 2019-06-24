# MyReads

O MyReads é uma estante virtual para organização de livros. Você pode classifica-los em três categorias: Currently Reading, Want to Read e Read. Quando quiser, você pode
alterar a categoria em que o livro se encontra.
O aplicativo também tem uma área de busca, onde você pode buscar outros títulos e adicioná-los a sua estante, dentro das categorias disponíveis.

Para iniciar o projeto, você deve:

* instalar todas as dependencias do projeto com `npm install`
* iniciar o servidor de desenvolvimento com `npm start` ou `yarn start`, caso utilize este app

Os arquivos do projeto são:
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # Uma pequena coleção de termos de pesquisa disponíveis para você usar com seu aplicativo.
├── package.json # npm Arquivo gerenciador de pacotes. Não necessita ser modificado.
├── public
│   ├── favicon.ico # Icone do React, pode ser alterado.
│   └── index.html # NÃO MODIFICAR
├── src
│   └── components
│       ├── ListBooks.js # Componente que lista os livros por categoria na pagina principal
│       ├── SearchPage.js # Componente que renderiza a pagina de pesquisa
│       └── Shelf.js # Componente que renderiza o select das categorias e faz a troca de categoria dos livros
│   ├── App.css # Pagina de estilos para o aplicativo. Pode ser personalizada.
│   ├── App.js # Esta é o root do aplicativo. Contém a renderização do app e o router.
│   ├── App.test.js # Usado para testes. Fornecido com o Create React App. O teste não é obrigatório.
│   ├── BooksAPI.js #Uma API JavaScript para o backend fornecido pelo Udacity. Instruções para os métodos estão abaixo.
│   ├── icons # Imagens úteis para o aplicativo.
│   │   ├── add.svg
│   │   ├── arrow-back.svg
│   │   └── arrow-drop-down.svg
│   ├── index.css # Estilos globais do app.
│   └── index.js # Arquivo usado para renderizar o DOM.
│   └── Main.js # Componente que renderiza a pagina principal
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
