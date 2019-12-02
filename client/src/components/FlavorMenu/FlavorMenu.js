import React from 'react';
import FlavorElement from './FlavorElement/FlavorElement'
import './css/FlavorMenu.css'

const FlavorMenu = () => {
  return (
    <div className="flavorMenu">
      <h2>Flavor Menu</h2>
      <div className="flavorMenu__element">
        <FlavorElement 
          name="Spinach"
          price="0.50"
        />
        <FlavorElement 
          name="Pineapple"
          price="1.00"
        />
        <FlavorElement 
          name="Green Pepper"
          price="1.00"
        />
        <FlavorElement 
          name="Black Olives"
          price="0.50"
        />
        <FlavorElement 
          name="Bacon"
          price="1.50"
        />
        <FlavorElement 
          name="Sausage"
          price="1.00"
        />
        <FlavorElement 
          name="Mushrooms"
          price="0.50"
        />
        <FlavorElement 
          name="Onion"
          price="0.50"
        />
        <FlavorElement 
          name="Pepperoni"
          price="0.50"
        />
        <FlavorElement 
          name="Beef"
          price="1.50"
        />
        </div>
    </div>
  );
}

export default FlavorMenu;
