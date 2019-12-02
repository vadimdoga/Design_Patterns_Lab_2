import React from 'react';
import ServiceElement from './ServiceElement/ServiceElement'
import './css/Services.css'
//assets
import chef from '../../assets/services/chef.jpg'
import fast from '../../assets/services/fast.jpg'
import heal from '../../assets/services/heal.jpg'
import rec from '../../assets/services/rec.jpg'

const Services = () => {
  return (
			<div className="services">
        <div className="services__header">
          <h2>Our Services</h2>
          <p>We can cook your desired pizza. We welcome your appetite. We welcome your satisfaction.</p>
        </div>
        <div className="services__elements">
          <ServiceElement 
            img={chef} 
            name="Best Chef" 
            description="Our cheves cook with passion for you, making your desire something real."
            />
          <ServiceElement 
            img={fast} 
            name="Fast Delivery" 
            description="Faster than you can imagine, get food delivery at your door."
            />
          <ServiceElement 
            img={rec} 
            name="Original Recipes" 
            description="Here we come with a variety of recipes which can change your aspects about this. Also, you can create your own pizza choosing only ingredients you like"
            />
          <ServiceElement 
            img={heal} 
            name="Healthy & Fresh Ingrediends" 
            description="We use only healthy and delicious ingrediends to cook your meal tasty"
            />
          </div>
      </div>
  );
}

export default Services;
