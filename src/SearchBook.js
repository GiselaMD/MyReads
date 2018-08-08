import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks';

function SearchBooks(props){   
    const {showingBooks, updateShelf, updateQuery, query} = props
    
    return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input 
            type="text" 
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
      <ListBooks books={showingBooks} updateShelf={updateShelf}/>
      </div>
    </div>
    )
}
export default SearchBooks