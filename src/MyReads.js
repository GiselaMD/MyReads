import React, {Component} from 'react'
import { Link } from 'react-router-dom' 
import ListBooks from './ListBooks'

class MyReads extends Component{
    render(){
        const {books, updateShelf} = this.props
       
        let currentlyReadingBooks =  books.filter(book => {
          if(book.shelf === "currentlyReading")
          return book
        })
        let wantToReadBooks =  books.filter(book => {
          if(book.shelf === "wantToRead")
          return book
        })
        let readBooks =  books.filter(book => {
          if(book.shelf === "read")
          return book
        })
        
        return(
            <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ListBooks books={currentlyReadingBooks} updateShelf={updateShelf}/>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  <ListBooks books={wantToReadBooks} updateShelf={updateShelf}/>
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  <ListBooks books={readBooks} updateShelf={updateShelf}/>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
        )
    }
}

export default MyReads