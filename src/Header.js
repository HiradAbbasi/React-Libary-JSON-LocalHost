import React, { useState } from 'react';

const Header = (props) => {
  const [filterInput, setFilterInput] = useState("");

  const updateFilterInput = (e) => {
    setFilterInput(e.target.value);
    console.log(filterInput)
    props.searchForThisMovie(filterInput);
  }

  const onCreateRestaurant = async(formData) => {
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