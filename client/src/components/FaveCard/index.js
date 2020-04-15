import React from "react";
import "./style.css";

function FriendCard(props) {
  const imageStyle = {
    "width": "100%"
  }

  return (
    <div className="cardys center">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <img src={require('.' + props.image)} style={imageStyle}/>
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <a href={props.url}><button className="btn-info">Link ====></button></a> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
