import React from 'react';
import mainImage from '../../assets/mainPizza.jpg'
import './css/Main.css'
const Main = () => {
  return (
    <div className="main">
      <img className="main-image" src={mainImage} alt="mainImage" />
    </div>
  );
}

export default Main;
