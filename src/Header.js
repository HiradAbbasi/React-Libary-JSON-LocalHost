import React, { useState } from 'react';

const Header = (props) => {
  const [filterInput, setFilterInput] = useState("");

  const updateFilterInput = (e) => {
    setFilterInput(e.target.value);
    props.searchForThisMovie(filterInput);
  }

  return ( <
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
    /div>
  )
}

export default Header;