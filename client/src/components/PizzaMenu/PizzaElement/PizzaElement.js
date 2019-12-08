import React from 'react';
import {connect} from 'react-redux'
import { addToCart } from '../../../redux/actions/cartActions'
import './css/PizzaElement.css'

const PizzaElement = (props) => {
  const handleClick = () => {
    const element = {name: props.name, price: props.price}
    props.addToCart(element)
  }
  return (
    <div className="pizzaElement">
      <h4>{props.name}</h4>
      <div className="pizzaElement__sub">
        <p>{props.ingredients}</p>
        <p className="pizzaElement__sub-dotted-line" />
        <p>{props.price} $</p>
      </div>
      <div className="pizzaElement__buttons">
        <button onClick={handleClick} className="pizzaElement__buttons__1">+</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (element)=>{dispatch(addToCart(element, 'ADD_TO_CART'))}
  }
}

export default connect(null,mapDispatchToProps)(PizzaElement);
