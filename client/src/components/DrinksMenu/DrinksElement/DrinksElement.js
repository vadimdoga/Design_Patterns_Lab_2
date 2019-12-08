import React from 'react';
import {connect} from 'react-redux'
import { addToCart } from '../../../redux/actions/cartActions'

import './css/DrinksElement.css'

const DrinksElement = (props) => {
  const handleClick = () => {
    const element = {name: props.name, price: props.price}
    props.addToCart(element)
  }
  return (
    <div className="drinksElement">
      <h4>{props.name}</h4>
      <div className="drinksElement__sub">
        <p>{props.ingredients}</p>
        <p className="drinksElement__sub-dotted-line" />
        <p>{props.price} $</p>
      </div>
      <div className="drinksElement__buttons">
        <button onClick={handleClick} className="drinksElement__buttons__1">+</button>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (element)=>{dispatch(addToCart(element, 'ADD_TO_CART'))}
  }
}

export default connect(null,mapDispatchToProps)(DrinksElement);
