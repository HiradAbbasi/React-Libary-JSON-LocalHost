import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Book from './Book'
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {   
    const response = await fetch(` http://localhost:5000/books`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const books = await response.json();
    console.log(books);
    setBooks(books);
  }    
    
  fetchData(); 
  }, []);
  
  const onCreateRestaurant = async (formData) => {
    // formData.cuisines = formData.cuisines.split(",");    
    // const response = await fetch(`https://6099743599011f0017140f05.mockapi.io/v1/restaurants`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });
    // const restaurant = await response.json();
    // console.log(restaurant)
    
    // setRestaurants(currentRestaurants => {
    //   return [...currentRestaurants, restaurant]
    // });
  }
  
  return (
    <>
      {/* <Header /> */}
      <main>
        <Switch>
          <Route exact path="/">
            <div className="app">
              <div className="list-books">
                <div className="list-books-title"><h1>MITTReads</h1></div>
                <div className="list-books-content">
                  <div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Currently Reading</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {books.map((book, index) => (
                            <Book
                              title={book.title}
                              authors={book.authors}
                              image={book.imageLinks}
                              key={index}
                            />
                          ))}
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Want To Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {/* {} */}
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {/* {} */}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="open-search"><a href="search.html">Add a book</a></div>
              </div>
            </div>
          </Route>
          {/* <Route path="/restaurants/new" render={({history}) => (
            <CreateRestaurant
              onCreateRestaurant={(restaurant) => {
                onCreateRestaurant(restaurant);
                history.push("/");
              }}
            />
          )} /> */}
        </Switch>
      </main>
    </>
  );
  
}

export default App;

