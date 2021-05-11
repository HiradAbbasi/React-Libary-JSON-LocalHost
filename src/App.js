import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Book from './Book'
import Header from './Header'
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch(`http://localhost:5000/books`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const books = await response.json();
      setBooks(books);
    }

    fetchData();
  }, []);

  const updateFilterInput = (e) => {
    setFilterInput(e.target.value);
    console.log(books.filter(el => el.title.toLowerCase().includes(filterInput.toLowerCase())));
    //|| el.authors.join().includes(filterInput))
  }

  return ( <
    > { /* <Header /> */ } <
    main >
    <
    Switch >
    <
    Route exact path = "/" >
    <
    div className = "app" >
    <
    div className = "list-books" >
    <
    div className = "list-books-title" > < h1 > MITTReads < /h1></div >
    <
    div className = "list-books-content" >
    <
    div >
    <
    div className = "bookshelf" >
    <
    h2 className = "bookshelf-title" > Currently Reading < /h2> <
    div className = "bookshelf-books" >
    <
    ol className = "books-grid" > {
      /* {books.map((book, index) => (
                                  console.log(book)
                                  // <Book
                                  //   title={book.title}
                                  //   authors={book.authors}
                                  //   image={book.imageLinks}
                                  //   key={index}
                                  // />
                                ))} */
    } <
    /ol> <
    /div> <
    /div> <
    div className = "bookshelf" >
    <
    h2 className = "bookshelf-title" > Want To Read < /h2> <
    div className = "bookshelf-books" >
    <
    ol className = "books-grid" > { /* {} */ } <
    /ol> <
    /div> <
    /div> <
    div className = "bookshelf" >
    <
    h2 className = "bookshelf-title" > Read < /h2> <
    div className = "bookshelf-books" >
    <
    ol className = "books-grid" > { /* {} */ } <
    /ol> <
    /div> <
    /div> <
    /div> <
    /div> <
    div className = "open-search" > < a href = "search.html" > Add a book < /a></div >
    <
    /div> <
    /div> <
    /Route> <
    Route exact path = "/search" >
    <
    div className = "app" >
    <
    div className = "search-books" >
    <
    div className = "search-books-bar" >
    <
    a className = "close-search"
    href = "index.html" > Close < /a> <
    div className = "search-books-input-wrapper" >
    <
    input className = 'search-contacts'
    type = 'text'
    placeholder = "Search by title or author"
    value = { filterInput }
    onChange = { updateFilterInput }
    /> <
    /div> <
    /div> <
    div className = "search-books-results" > { /* <div className="results-quantity">Your search returned 10 results.</div> */ } <
    ol className = "books-grid" > {
      books.filter(el => el.title.toLowerCase().includes(filterInput.toLowerCase())).map((book, index) => ( <
        Book title = { book.title }
        authors = { book.authors }
        image = { book.imageLinks }
        currentState = { "none" }
        key = { index }
        />
      ))
    } {
      /* {search.map((book, index) => (
                            <Book
                              title={book.title}
                              authors={book.authors}
                              image={book.imageLinks}
                              key={index}
                            />
                          ))} */
    } <
    /ol> <
    /div> <
    /div> <
    /div> <
    /Route> <
    /Switch> <
    /main> <
    />
  );

}

export default App;

{
  /* <Route path="/restaurants/new" render={({history}) => (
              <CreateRestaurant
                onCreateRestaurant={(restaurant) => {
                  onCreateRestaurant(restaurant);
                  history.push("/");
                }}
              />
            )} /> */
}