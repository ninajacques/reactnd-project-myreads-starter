import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input'
import PropTypes from 'prop-types'
import Book from './Book.js'

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
                  <DebounceInput 
                  	type="text" 
                  	placeholder="Search by title or author"
      			        value={query}
      			        onChange = {(evt) => updateSearch(evt.target.value)}
                  />
              </div>
            </div>
            <div className="search-books-results">
              <Book books={foundBooks} listBooks={books} changeShelf={changeShelf} />
            </div>
          </div>
    )
  }
}

export default SearchPage