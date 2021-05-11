import React from 'react';

function Book(props) {
  let authors = props.authors;
  // let image = props.image['thumbnail'];
  // if (image === undefined) {
  //   image = "https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png";
  // }

  // if(authors === undefined) {
  //   authors = ['Hirad', 'Abbasi'];
  // }
  // console.log(authors);


  return ( <
    li >
    <
    div className = "book" >
    <
    div className = "book-top" >
    <
    div className = "book-cover"
    // backgroundImage: `url(${image})`
    style = {
      { width: "128px", height: "193px", } } >
    <
    /div> <
    div className = "book-shelf-changer" >
    <
    select value = { props.currentState } >
    <
    option value = "move"
    disabled = "" > Move to... < /option> <
    option value = "currentlyReading" > Currently Reading < /option> <
    option value = "wantToRead" > Want to Read < /option> <
    option value = "read" > Read < /option> <
    option value = "none" > None < /option> <
    /select> <
    /div> <
    /div> <
    div className = "book-title" > { props.title } < /div> <
    div className = "book-authors" > { authors } < /div> <
    /div> <
    /li>
  );
}

export default Book;