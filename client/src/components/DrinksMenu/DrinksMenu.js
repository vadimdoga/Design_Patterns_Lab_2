import React from 'react';
import DrinksElement from './DrinksElement/DrinksElement'
import './css/DrinksMenu.css'
const DrinksMenu = () => {
  return (
    <div>
      <div className="drinksMenu">
        <h2>Drinks Menu</h2>
        <div className="drinksMenu__element">
          <DrinksElement 
            name="Whiskey Sour"
            ingredients="with bourbon,lemon"
            price="35.00"
          />
          <DrinksElement 
            name="Hot Not Toddy"
            ingredients="with brewed tea, lemon juice"
            price="15.00"
          />
          <DrinksElement 
            name="Mojito"
            ingredients="with mint, lime, cub soda"
            price="25.00"
          />
          <DrinksElement 
            name="Smoothie"
            ingredients="choose your favorite flavor"
            price="10.00"
          />
          <DrinksElement 
            name="Margarita"
            ingredients="with lime juice, silver tequila"
            price="35.00"
          />
          <DrinksElement 
            name="Cappuccino"
            ingredients="with milk and coffee"
            price="5.00"
          />
          <DrinksElement 
            name="Brandy Cocktail"
            ingredients="with curacao and bitters"
            price="35.00"
          />
          <DrinksElement 
            name="Americano"
            ingredients="with coffee"
            price="8.00"
          />
          <DrinksElement 
            name="Manhattan"
            ingredients="with sweet vermouth"
            price="25.00"
          />
          <DrinksElement 
            name="Milkshake"
            ingredients="choose your favorite flavor"
            price="10.00"
          />
          <DrinksElement 
            name="Dry Martini"
            ingredients="with gin and dry vermouth"
            price="35.00"
          />
        </div>
      </div>
    </div>
    
  );
}

export default DrinksMenu;
