import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './components/ListBooks.js'


class Main extends Component {
	render() {
		const { books, changeShelf } = this.props

		return (
			<div className="list-books">
	            <div className="list-books-title">
	            	<h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	            	<ListBooks title='Currently Reading' booksOnTheShelf={books.filter(book => book.shelf === "currentlyReading")} changeShelf={changeShelf} />
            		<ListBooks title='Want to Read' booksOnTheShelf={books.filter(book => book.shelf === "wantToRead")} changeShelf={changeShelf} />
            		<ListBooks title='Read' booksOnTheShelf={books.filter(book => book.shelf === "read")} changeShelf={changeShelf} />
            	</div> 
				<div className="open-search">
	  				<Link to='/search' className='btn-add-book'>Add a book</Link>
				</div>
			</div>
		)
	}

}

export default Main