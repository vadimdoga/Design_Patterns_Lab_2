import React from 'react';
import {connect} from 'react-redux'
import { addToCart } from '../../../redux/actions/cartActions'
import './css/FlavorElement.css'

const FlavorElement = (props) => {
  const handleClick = () => {
    const element = {name: props.name, price: props.price}
    props.addToCart(element)
  }
  return (
    <div className="flavorElement">
      <h4>{props.name}</h4>
      <div className="flavorElement__sub">
        <p className="flavorElement__sub-dotted-line" />
        <p>{props.price} $</p>
      </div>
      <div className="flavorElement__buttons">
        <button onClick={handleClick} className="flavorElement__buttons__1">+</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (element)=>{dispatch(addToCart(element, 'ADD_TO_CART'))}
  }
}

export default connect(null,mapDispatchToProps)(FlavorElement);
