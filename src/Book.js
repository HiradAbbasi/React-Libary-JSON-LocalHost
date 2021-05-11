import React from 'react';

const Book = (props) => {
  const hirad = (e) => {
    props.changeState(e.target.value, props.id);
  }

  return ( <
    li >
    <
    div className = "book" >
    <
    div className = "book-top" >
    <
    div className = "book-cover"
    style = {
      { width: "128px", height: "193px", backgroundImage: `url(${props.image.thumbnail})` } } >
    <
    /div> <
    div className = "book-shelf-changer" >
    <
    select defaultValue = { "none" }
    value = { props.currentState }
    onChange = { hirad } >
    <
    option value = "move"
    disabled > Move to... < /option> <
    option value = "currentlyReading" > Currently Reading < /option> <
    option value = "wantToRead" > Want to Read < /option> <
    option value = "read" > Read < /option> <
    option value = "none" > None < /option> <
    /select> <
    /div> <
    /div> <
    div className = "book-title" > { props.title } < /div> <
    div className = "book-authors" > { props.authors.join(', ') } < /div> <
    /div> <
    /li>
  );
}

export default Book;