import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Book from './Book'
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
      setBooks(books.filter(el => el.imageLinks !== undefined && el.authors !== undefined));
    }

    fetchData();
  }, []);

  const changeState = async(value, id) => {
    setBooks(currentState => {
      return currentState.map(
        book => book.id === id ? {...book, currentState: value } : book
      )
    });

    await fetch(`http://localhost:5000/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...books.find(el => el.id === id), "currentState": value })
    });
  }

  const updateFilterInput = (e) => {
    setFilterInput(e.target.value);
  }

  // return (
  //   <div className="app">
  //     <Switch>
  //       <Route exact path="/">
  //         <div className="list-books">
  //           <div className="list-books-title"><h1>MITTReads</h1></div>
  //           <div className="list-books-content">
  //             <div>
  //               <div className="bookshelf">
  //                 <h2 className="bookshelf-title">Currently Reading</h2>
  //                 <div className="bookshelf-books">
  //                   <ol className="books-grid">
  //                     {books.filter(el => el.currentState === "currentlyReading").map((book, index) => (
  //                       <Book
  //                         currentState={book.currentState}
  //                         title={book.title}
  //                         authors={book.authors}
  //                         image={book.imageLinks}
  //                         id={book.id}
  //                         key={index}
  //                         changeState={changeState}
  //                       />
  //                     ))}
  //                   </ol>
  //                 </div>
  //               </div>
  //               <div className="bookshelf">
  //                 <h2 className="bookshelf-title">Want To Read</h2>
  //                 <div className="bookshelf-books">
  //                   <ol className="books-grid">
  //                     {books.filter(el => el.currentState === "wantToRead").map((book, index) => (
  //                       <Book
  //                         currentState={book.currentState}
  //                         title={book.title}
  //                         authors={book.authors}
  //                         image={book.imageLinks}
  //                         id={book.id}
  //                         key={index}
  //                         changeState={changeState}
  //                       />
  //                     ))}
  //                   </ol>
  //                 </div>
  //               </div>
  //               <div className="bookshelf">
  //                 <h2 className="bookshelf-title">Read</h2>
  //                 <div className="bookshelf-books">
  //                   <ol className="books-grid">
  //                     {books.filter(el => el.currentState === "read").map((book, index) => (
  //                       <Book
  //                         currentState={book.currentState}
  //                         title={book.title}
  //                         authors={book.authors}
  //                         image={book.imageLinks}
  //                         id={book.id}
  //                         key={index}
  //                         changeState={changeState}
  //                       />
  //                     ))}
  //                   </ol>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="open-search"><Link to="/search" className='close-search'>Add a book</Link></div>
  //         </div>
  //       </Route>
  //       <Route exact path="/search">
  //         <div className="search-books">
  //           <div className="search-books-bar">
  //             <Link to="/" className='close-search'>Close</Link>
  //             <div className="search-books-input-wrapper">
  //               <input
  //                 className='search-contacts'
  //                 type='text'
  //                 placeholder="Search by title or author" 
  //                 value={filterInput}
  //                 onChange={updateFilterInput}
  //               />
  //             </div>
  //           </div>
  //           <div className="search-books-results">
  //             {filterInput && <div className="results-quantity">Your search returned{`${books.filter(el => el.title.toLowerCase().includes(filterInput.toLowerCase()) || el.authors.join().toLowerCase().includes(filterInput.toLowerCase())).length} `}results.</div>}
  //             <ol className="books-grid">
  //               {filterInput && books.filter(el => el.title.toLowerCase().includes(filterInput.toLowerCase()) || el.authors.join().toLowerCase().includes(filterInput.toLowerCase())).map((book, index) => (
  //                 <Book
  //                   currentState={book.currentState}
  //                   title={book.title}
  //                   authors={book.authors}
  //                   image={book.imageLinks}
  //                   id={book.id}
  //                   key={index}
  //                   changeState={changeState}
  //                 />
  //               ))}
  //             </ol>
  //           </div>
  //         </div>
  //       </Route>
  //     </Switch>
  //   </div>
  // );
}

export default App;