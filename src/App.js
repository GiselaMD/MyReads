import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { debounce } from 'throttle-debounce';
import MyReads from './MyReads'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    showingBooks: [],
    query: ''
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {(
      this.setState({ books: books })
    )})
  }

  updateShelf = (book, event) => {
    BooksAPI.update(book, event).then(() => {
      const updatedBook = {...book};
      updatedBook.shelf = event; //atualizo a shelf do livro
      this.setState({
        books: this.state.books
                .filter(myBook => myBook.id !== updatedBook.id)
                .concat([updatedBook])
      });
    })
  }
  
  updateQuery = (query) => {
    this.setState({ query: query })
    //Tratando se existem livros ou não
    query ? (
      BooksAPI.search(query).then((search) => {
        console.log(query)
        // Verifica se tem livros para mapear
        if(search.length > 0){
          this.state.books.forEach(book => {
            search.forEach(sBook => {
              if(sBook.id === book.id)
                sBook.shelf = book.shelf
            })
          })}
        this.setState({
          showingBooks: search,
          books: this.state.books
        })
      })
    ) : null

    this.setState({ 
      showingBooks: [], 
      query 
    })
  }

  render() {
    const {query, books, showingBooks} = this.state

    return (
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <SearchBook 
            showingBooks={showingBooks}
            updateShelf={(book, event) => {
              this.updateShelf(book, event)
            }}
            updateQuery={this.updateQuery}
            query={query}
          />
          
        )}/>
        <Route exact path="/" render={() => (
          <MyReads books={books} 
            updateShelf={this.updateShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
