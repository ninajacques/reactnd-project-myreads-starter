import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'


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
	          	<Book books={booksOnTheShelf} listBooks={booksOnTheShelf} changeShelf={changeShelf} />
	          </div>
	       </div>
	      </div>
		)
	}
}

export default ListBooks