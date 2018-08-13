import React from 'react'
import Book from './Book'

const ListBooks = (props) => {
        return(
            <ol className="books-grid">
                {/* Verifica se pode mapear */}
                  {(props.books.length !== null) ? props.books.map(book => 
                    <Book key={book.id} book={book} updateShelf={props.updateShelf}/>
                  ): ""}
            </ol>
        )
}
export default ListBooks