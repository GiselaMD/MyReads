import React, {Component} from 'react'

const Book = ({book, updateShelf}) => {
    return(
        <li key={book.id}>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : null})` }}></div>
                <div className="book-shelf-changer">
                    <select defaultValue={book.shelf === undefined ? "none": book.shelf} onChange={(event) => updateShelf(book, event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title ? book.title : null}</div>
                <div className="book-authors">{book.authors ? book.authors : null}</div>
            </div>
        </li>
    )
}
export default Book


