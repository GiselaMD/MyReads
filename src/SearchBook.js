import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks';
import {DebounceInput} from 'react-debounce-input';

function SearchBooks(props){   
    const {showingBooks, updateShelf, updateQuery, query} = props
    
    return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <DebounceInput 
            type="text" 
            placeholder="Search by title or author"
            minLength={0}
            debounceTimeout={200}
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