import React from 'react';
import './css/DrinksElement.css'
const DrinksElement = (props) => {
  return (
    <div className="drinksElement">
      <h4>{props.name}</h4>
      <div className="drinksElement__sub">
        <p>{props.ingredients}</p>
        <p className="drinksElement__sub-dotted-line" />
        <p>{props.price} $</p>
      </div>
    </div>
  );
}

export default DrinksElement;
