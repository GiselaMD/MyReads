import React, {Component} from 'react'
import Book from './Book'

class ListBooks extends Component{
    render(){
        return(
            <ol className="books-grid">
                {/* Verifica se pode mapear */}
                  {(this.props.books.length > 0) ? this.props.books.map(book => 
                    <Book key={book.id} book={book} updateShelf={this.props.updateShelf}/>
                  ): ""}
            </ol>
        )
    }
}
export default ListBooks