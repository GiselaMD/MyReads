import React from 'react'
import { Link } from 'react-router-dom' 
import ListBooks from './ListBooks'

const shelfs = [
  { shelf: "currentlyReading", title: "Currently Reading" },
  { shelf: "wantToRead", title: "Want to Read" },
  { shelf: "read", title: "Read" }
]

function MyReads ({books, updateShelf}){

        const renderShelfs = () => {
          return (
              shelfs.map(({ shelf, title }, key) => {
                  return (
                      <div className="bookshelf" key={key}>
                          <h2 className="bookshelf-title">
                              {title}
                          </h2>
                          <div className="bookshelf-books">
                              <ListBooks
                                  books={books.filter(book => book.shelf === shelf)}
                                  updateShelf={updateShelf} />
                          </div>
                      </div>
                  )
              })
          )
      }

      return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {renderShelfs()}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}
export default MyReads