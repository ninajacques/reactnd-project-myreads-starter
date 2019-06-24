import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf.js'


class ListBooks extends Component {
	static propTypes = {
		changeShelf: PropTypes.func.isRequired,
		booksOnTheShelf: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired
	}

	render() {
		const { booksOnTheShelf, changeShelf, title } = this.props

		return (
	      <div>
	        <div className="bookshelf">
	          <h2 className="bookshelf-title">{title}</h2>
	          <div className="bookshelf-books">
	            <ol className="books-grid">
					{booksOnTheShelf.map((book) => (
						<li key={book.id}>
	                		<div className="book">
	                  			<div className="book-top">
	                    			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1)` }}></div>
	                    			<Shelf book = {book} changeShelf={changeShelf} shelf={book.shelf}/>
	                  			</div>
	                  			<div className="book-title">{book.title}</div>
	                  			<div className="book-authors">{book.authors && book.authors.join(', ')}</div>
	                		</div>
	              		</li>
					))}
	            </ol>
	          </div>
	       </div>
	      </div>
		)
	}
}

export default ListBooks