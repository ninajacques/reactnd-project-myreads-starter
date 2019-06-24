import React, { Component } from 'react'
import Shelf from './Shelf.js'

class Book extends Component {


	render() {

		const { books, listBooks, changeShelf } = this.props

		return(
		<ol className="books-grid">
            {books.map((book) => (
    			<li key={book.id}>
                  	<div className="book">
                    	<div className="book-top">
                      		<div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks && book.imageLinks.thumbnail?`${book.imageLinks.thumbnail}`:`http://via.placeholder.com/128x193?text=No%20Cover`})` }}></div>
                      		<Shelf book = {listBooks.find(b => b.id === book.id) || book} changeShelf={changeShelf} shelf={book.shelf}/>
                    	</div>
                    	<div className="book-title">{book.title}</div>
                    	<div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                  	</div>
                </li>
    		))}
        </ol>
		)
	}

}

export default Book