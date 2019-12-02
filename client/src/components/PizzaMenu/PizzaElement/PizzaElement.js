import React from 'react';
import './css/PizzaElement.css'
const PizzaElement = (props) => {
  return (
    <div className="pizzaElement">
      <h4>{props.name}</h4>
      <div className="pizzaElement__sub">
        <p>{props.ingredients}</p>
        <p className="pizzaElement__sub-dotted-line" />
        <p>{props.price} $</p>
      </div>
    </div>
  );
}

export default PizzaElement;
