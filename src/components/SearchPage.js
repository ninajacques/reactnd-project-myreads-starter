import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf.js'

class SearchPage extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    updateSearch: PropTypes.func.isRequired,
    foundBooks: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {

    const { query, updateSearch, foundBooks, changeShelf, books } = this.props

    return (
    	<div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                  <input 
                  	type="text" 
                  	placeholder="Search by title or author"
      			        value={query}
      			        onChange = {(evt) => updateSearch(evt.target.value)}
                  />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              	{foundBooks.map((book) => (
    				        <li key={book.id}>
                  		<div className="book">
                    			<div className="book-top">
                      			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1)` }}></div>
                      			<Shelf book = {books.find(b => b.id === book.id) || book} changeShelf={changeShelf} shelf={book.shelf}/>
                    			</div>
                    			<div className="book-title">{book.title}</div>
                    			<div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                  		</div>
                		</li>
    			      ))}
              </ol>
            </div>
          </div>
    )
  }
}

export default SearchPage