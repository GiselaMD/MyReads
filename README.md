# MyReads Project: A Book Lending App - Udacity

This is a book lending app where you can add new books to your shelves, which are: Want to read, Currently reading and Read.

This is the final assessment project for Udacity's React Fundamentals course. This project started with a template that provided a static example of the CSS and HTML markup, wich you can find in this link: https://github.com/udacity/reactnd-project-myreads-starter.

## Instructions

To see this project right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What is inside this project
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html
└── src
    ├── App.css # Styles.
    ├── App.js # The app root.
    ├── MyReads.js # The component that renders the main page.
    ├── SearchBooks.js # The component that renders the search page.
    ├── ListBooks.js # The component that renders a list of books.
    ├── Book.js # The component that renders the book.
    ├── App.test.js # Used for testing.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # Helpful images.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # DOM rendering.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## React Code Developed By:
Gisela Miranda Difini