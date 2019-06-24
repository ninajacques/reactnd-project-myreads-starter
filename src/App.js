import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Main from './Main.js'
import './App.css'
import SearchPage from './components/SearchPage.js'

class BooksApp extends React.Component {
  state = {
    books: [],
    foundBooks: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  

  updateSearch = (query) => {
      this.setState({ query: query })
      BooksAPI.search(query)
          .then(resp => {
            if(query && resp.length > 0)  {
              this.setState({ foundBooks: resp })
            } else{         
              this.setState({ foundBooks: [] })
            }
          })
    } 
 
  changeShelf = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf)
        .then(resp => {
            console.log(resp)
            updatedBook.shelf = shelf;
            this.setState(prevState => ({
                books: prevState.books.filter(book => updatedBook.id !== book.id).concat([updatedBook])
            }))
        })
  }
 
  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <Main books={this.state.books} changeShelf={this.changeShelf} />
          )}/>
          <Route path='/search' render={({ history }) => (
            <SearchPage
              changeShelf = {this.changeShelf}
              query={this.state.query}
              foundBooks = {this.state.foundBooks}
              updateSearch = {this.updateSearch}
              books={this.state.books}
            />
          )} />
      </div>
    )
  }
}

export default BooksApp
