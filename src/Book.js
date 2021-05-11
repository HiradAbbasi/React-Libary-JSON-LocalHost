import React from 'react';

function Book (props) {
  let authors = props.authors;
  // let image = props.image['thumbnail'];
  // if (image === undefined) {
  //   image = "https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png";
  // }
  
  // if(authors === undefined) {
  //   authors = ['Hirad', 'Abbasi'];
  // }
  // console.log(authors);

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            // backgroundImage: `url(${image})`
            style={{width: "128px", height: "193px",  }}
          ></div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled="">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
}

export default Book;


{/* <li className="restaurant">
  <img src={props.image} alt="" />
  <div className="restaurant-info">
  <div className="restaurant-name">{props.name}</div>
  <div className="stars restaurant-rating" style={{ "--rating": props.rating }}></div>
  <div className="cost">
      {props.cost.split("").map(char => (
      <span className="dollar-sign material-icons">attach_money</span>
      ))}
  </div>
  <div className="cuisines">{props.cuisines.map(cuisine => cuisine[0].toUpperCase() + cuisine.slice(1).toLowerCase()).join(", ")}</div>
  <div className="description">{props.description}</div>
  </div>
</li> */}