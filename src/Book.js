import React from 'react';

function Book (props) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style="
              width: 128px;
              height: 193px;
              background-image: url('');"
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
        <div className="book-title">Android Fully Loaded</div>
        <div className="book-authors">Rob Huddleston</div>
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