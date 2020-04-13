import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="cardy center">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <img src={props.image}/>
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
