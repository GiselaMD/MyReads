import React, { Component } from 'react'
import { Route } from 'react-router-dom'
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
    this.setState(state => {
      return state.books.map(newBook => {
        if(book.id === newBook.id){
          newBook.shelf = event;
        }
        return newBook;
      })
    });
    this.setState({
      showingBooks: this.state.showingBooks.map(sBook => {
        if (sBook.id === book.id) sBook.shelf = event;
        return sBook;
      })
    });
    BooksAPI.update(book, event)
  }

  updateQuery = (query) => {
    this.setState({query: query})
      //Tratando se existem livros ou não
      if(query){
        BooksAPI.search(query).then((search) => {   
          // Verifica se tem livros para mapear
          if(search.length > 0){
           this.state.books.map(book => {
              search.map(sBook => {
                if(sBook.id === book.id){
                  sBook.shelf = book.shelf
                }
              })
            })}
          this.setState({
            showingBooks: search,
            books: this.state.books
          })
        })
      }else{
        this.setState({
          showingBooks: []
        })
      }
    }

  render() {
    const {query, books, showingBooks} = this.state

    return (
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <SearchBook 
            books={books}
            showingBooks={showingBooks}
            updateShelf={(book, event) => {
              this.updateShelf(book, event)
              history.push('/')
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
