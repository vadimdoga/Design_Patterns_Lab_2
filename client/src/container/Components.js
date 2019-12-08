import React from 'react';
import { Element } from 'react-scroll'
import Main from '../components/Main/Main'
import Services from '../components/Services/Services'
import PizzaMenu from '../components/PizzaMenu/PizzaMenu'
import FlavorMenu from '../components/FlavorMenu/FlavorMenu'
import DrinksMenu from '../components/DrinksMenu/DrinksMenu'
import AboutUs from '../components/AboutUs/AboutUs'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'
const Components = () => {
  return (
    <div>
      <Cart />
      <Element name="main">
        <Main />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="pizzaMenu">
        <PizzaMenu />
      </Element>
      <Element name="flavorMenu">
        <FlavorMenu />
      </Element>
      <Element name="drinksMenu">
        <DrinksMenu />
      </Element>
      <Element name="aboutUs">
        <AboutUs />
      </Element>
      <Element name="contacts">
        <Footer />
      </Element>
    </div>
  );
}

export default Components;
