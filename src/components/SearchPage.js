import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf.js'

class SearchPage extends Component {

	render() {

		return (
			<div className="search-books">
              <div className="search-books-bar">
                <Link to='/' className='close-search'>Close</Link>
                <div className="search-books-input-wrapper">
                  <input 
                  	type="text" 
                  	placeholder="Search by title or author"
					value={this.props.query}
					onChange = {(evt) => this.props.updateSearch(evt.target.value)}
                  />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                	{this.props.foundBooks.map((book) => (
						<li key={book.id}>
	                		<div className="book">
	                  			<div className="book-top">
	                    			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1)` }}></div>
	                    			<Shelf book = {book} changeShelf={this.props.changeShelf} books={this.props.books}/>
	                  			</div>
	                  			<div className="book-title">{book.title}</div>
	                  			<div className="book-authors">{book.authors}</div>
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