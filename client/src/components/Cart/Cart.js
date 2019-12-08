import React, {useState} from 'react';
import icon from './cart.png'
import close from './close_cart.png'
import { connect } from 'react-redux'
import './css/Cart.css'
import { removeFromCart } from '../../redux/actions/removeAction'

const Cart = (props) => {
  const handleClick = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }

  const [show, setShow] = useState(false)
  return (
    <div>
      <img alt="cart icon" onClick={handleClick} className="cart_icon" src={icon} />
      <div
        className="Modal"
        style={
          show ? { display: "block" } : { display: "none" }   
        }
      >
        <div className="Modal__box">
          <img alt="close icon" src={close} onClick={handleClose} className="Modal__box_close" />
          <h2>Your Order:</h2>
          {props.items.map(item => {
            
            return (
              <div key={item.name} className="Modal__box_orders">
                <p>{item.name}</p>
                <p className="Modal__box_orders-line" />
                <p>{item.price}</p>
                <button onClick={() => props.removeFromCart(item)} className="Modal__box_button">-</button>
              </div>
            )
          })}
        </div>
          
        </div>
    </div>
  );
}
const mapStateToProps = (state)=>{
  return{
      items: state.addedItems
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (element)=>{dispatch(removeFromCart(element, 'REMOVE_FROM_CART'))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
