import React, { Component } from 'react'


class Shelf extends Component {
	render() {
		return (
			<div className="book-shelf-changer">
	            <select onChange={evt => {this.props.changeShelf(this.props.book, evt.target.value)}} value={this.props.book.shelf || 'none'}>
	                <option value="move" disabled>Move to...</option>
	                <option value="currentlyReading">Currently Reading</option>
	                <option value="wantToRead">Want to Read</option>
	                <option value="read">Read</option>
	                <option value="none">None</option>
	            </select>
	        </div>
		)
	}
}

export default Shelf