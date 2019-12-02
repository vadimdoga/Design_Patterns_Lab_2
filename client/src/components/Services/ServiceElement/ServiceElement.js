import React from 'react';
import './css/ServiceElement.css'
const ServiceElement = (props) => {
  return (
    <div className="serviceElement">
      <img src={props.img} alt={props.name} />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default ServiceElement;
