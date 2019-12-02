import React from 'react';
import './css/FlavorElement.css'
const FlavorElement = (props) => {
  return (
    <div className="flavorElement">
      <h4>{props.name}</h4>
      <div className="flavorElement__sub">
        <p className="flavorElement__sub-dotted-line" />
        <p>{props.price} $</p>
      </div>
    </div>
  );
}

export default FlavorElement;
