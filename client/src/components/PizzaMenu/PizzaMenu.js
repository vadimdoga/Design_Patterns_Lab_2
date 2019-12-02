import React from 'react';
import PizzaElement from './PizzaElement/PizzaElement'
import './css/PizzaMenu.css'
const PizzaMenu = () => {
  return (
    <div className="pizzaMenu">
      <h2>Pizza Menu</h2>
      <div className="pizzaMenu__element">
        <PizzaElement 
          name="4 Cheeses"
          price="15.00"
          ingredients="with soldiers"
        />
        <PizzaElement 
          name="Funghi"
          price="15.00"
          ingredients="with soldiers"
        />  
        <PizzaElement 
          name="Capriciosa"
          price="18.00"
          ingredients="with toasted wallnuts"
        />
        <PizzaElement 
          name="Rancho"
          price="15.00"
          ingredients="with toasted wallnuts"
        />  
        <PizzaElement 
          name="Mario"
          price="15.00"
          ingredients="with wild mushroon and asparagus"
        />  
        <PizzaElement 
          name="Barbeque"
          price="19.00"
          ingredients="with wild mushroon and asparagus"
        />  
        <PizzaElement 
          name="Diablo"
          price="20.00"
          ingredients="with homefries"
        />  
        <PizzaElement 
          name="Margherita"
          price="10.00"
          ingredients="with homefries"
        />  
        <PizzaElement 
          name="Pepperoni"
          price="15.00"
          ingredients="poached eggs with smoked salmon"
        />  
        <PizzaElement 
          name="Neapolitana"
          price="15.00"
          ingredients="poached eggs with smoked salmon"
        />  
      </div>
    </div>
  );
}

export default PizzaMenu;
