import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Book from './Book';

const App = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch(`http://localhost:5000/books`);
        const books = await response.json();
        //Filtering out the books with missing images and authors
        setBooks(books.filter(book => book.imageLinks !== undefined && book.authors !== undefined));
      }

      fetchData();
    }, []);

    const updateBooks = async(value, id) => {
      setBooks(prevState => {
        return prevState.map(book => book.id === id ? {...book, currentState: value } : book);
      });

      await fetch(`http://localhost:5000/books/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...books.find(book => book.id === id), currentState: value })
      });
    }

    const updateSearch = (e) => {
      setSearch(e.target.value);
    }

    return ( <
      div className = "app" >
      <
      Switch >
      <
      Route exact path = "/" >
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
        books.filter(book => book.currentState === "currentlyReading").map((book, index) => ( <
          Book title = { book.title }
          authors = { book.authors }
          image = { book.imageLinks }
          id = { book.id }
          key = { index }
          currentState = { book.currentState }
          updateBooks = { updateBooks }
          />
        ))
      } <
      /ol> <
      /div> <
      /div> <
      div className = "bookshelf" >
      <
      h2 className = "bookshelf-title" > Want To Read < /h2> <
      div className = "bookshelf-books" >
      <
      ol className = "books-grid" > {
        books.filter(book => book.currentState === "wantToRead").map((book, index) => ( <
          Book title = { book.title }
          authors = { book.authors }
          image = { book.imageLinks }
          id = { book.id }
          key = { index }
          currentState = { book.currentState }
          updateBooks = { updateBooks }
          />
        ))
      } <
      /ol> <
      /div> <
      /div> <
      div className = "bookshelf" >
      <
      h2 className = "bookshelf-title" > Read < /h2> <
      div className = "bookshelf-books" >
      <
      ol className = "books-grid" > {
        books.filter(book => book.currentState === "read").map((book, index) => ( <
          Book title = { book.title }
          authors = { book.authors }
          image = { book.imageLinks }
          id = { book.id }
          key = { index }
          currentState = { book.currentState }
          updateBooks = { updateBooks }
          />
        ))
      } <
      /ol> <
      /div> <
      /div> <
      /div> <
      /div> <
      div className = "open-search" > < Link to = "/search"
      className = 'close-search' > Add a book < /Link></div >
      <
      /div> <
      /Route> <
      Route exact path = "/search" >
      <
      div className = "search-books" >
      <
      div className = "search-books-bar" >
      <
      Link to = "/"
      className = 'close-search' > Close < /Link> <
      div className = "search-books-input-wrapper" >
      <
      input className = 'search-contacts'
      type = 'text'
      placeholder = "Search by title or author"
      value = { search }
      onChange = { updateSearch }
      /> <
      /div> <
      /div> <
      div className = "search-books-results" > {
        search && < div className = "results-quantity" > Your search returned { `${books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()) || book.authors.join().toLowerCase().includes(search.toLowerCase())).length} ` }
        results. < /div>} <
        ol className = "books-grid" > {
          search && books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()) || book.authors.join().toLowerCase().includes(search.toLowerCase())).map((book, index) => ( <
            Book title = { book.title }
            authors = { book.authors }
            image = { book.imageLinks }
            id = { book.id }
            key = { index }
            currentState = { book.currentState }
            updateBooks = { updateBooks }
            />
          ))
        } <
        /ol> <
        /div> <
        /div> <
        /Route> <
        /Switch> <
        /div>
      );
    }

    export default App;